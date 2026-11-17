"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, PackageCheck, Plus, Weight } from "lucide-react";
import Container from "@/components/ui/Container";
import { products } from "@/data/products";

const orderableProducts = products.map((product) => ({
  ...product,
  weightKg: Number.parseInt(product.weight, 10) || null,
}));

export default function OrderPlanner() {
  const [productId, setProductId] = useState(orderableProducts[0].id);
  const [quantity, setQuantity] = useState("20");
  const selectedProduct = useMemo(
    () => orderableProducts.find((product) => product.id === productId) ?? orderableProducts[0],
    [productId]
  );
  const blocks = Number(quantity);
  const validQuantity = Number.isSafeInteger(blocks) && blocks > 0;
  const weightEstimate = validQuantity && selectedProduct.weightKg
    ? blocks * selectedProduct.weightKg
    : null;
  const totalWeight = weightEstimate !== null && Number.isSafeInteger(weightEstimate)
    ? weightEstimate
    : null;
  const quoteHref = `/quote?${new URLSearchParams({
    product: selectedProduct.id,
    ...(validQuantity ? { quantity: String(blocks) } : {}),
  }).toString()}`;

  const adjustQuantity = (amount: number) => {
    const next = (validQuantity ? blocks : 1) + amount;
    setQuantity(String(Math.max(1, next)));
  };

  return (
    <section className="py-20 sm:py-24" aria-labelledby="order-planner-title">
      <Container>
        <div className="grid grid-cols-1 gap-10 rounded-[2rem] border border-ice-200 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-10 lg:grid-cols-5 lg:items-center lg:p-12">
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-800">
              <PackageCheck className="h-4 w-4" aria-hidden="true" />
              Plan your order
            </span>
            <h2 id="order-planner-title" className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              The right ice for your next delivery
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Choose a block size and quantity to estimate your total weight. We’ll confirm price and delivery with you.
            </p>
            <p className="mt-5 text-sm text-slate-500">
              Need a special size or a regular supply? Select Custom and include your details in the quote request.
            </p>
          </div>

          <div className="rounded-3xl bg-ice-50 p-5 sm:p-7 lg:col-span-3">
            <fieldset>
              <legend className="text-sm font-semibold text-navy-900">Select a block size</legend>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {orderableProducts.map((product) => {
                  const selected = product.id === selectedProduct.id;
                  return (
                    <button
                      key={product.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setProductId(product.id)}
                      className={`rounded-2xl border px-3 py-4 text-left transition ${
                        selected
                          ? "border-cyan-500 bg-white shadow-md shadow-cyan-900/10 ring-2 ring-cyan-400/20"
                          : "border-ice-200 bg-white/70 hover:border-cyan-300 hover:bg-white"
                      }`}
                    >
                      <span className="block font-display text-lg font-bold text-navy-900">{product.weight}</span>
                      <span className="mt-1 block text-xs text-slate-600">
                        {product.category === "custom" ? "Made to order" : "Standard block"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:items-end">
              <div>
                <label htmlFor="planner-quantity" className="mb-2 block text-sm font-semibold text-navy-900">
                  Number of blocks
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Remove one block"
                    disabled={validQuantity && blocks <= 1}
                    onClick={() => adjustQuantity(-1)}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-ice-200 bg-white text-navy-800 transition hover:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Minus className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <input
                    id="planner-quantity"
                    type="number"
                    min="1"
                    step="1"
                    inputMode="numeric"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                    className="h-12 min-w-0 flex-1 rounded-xl border border-ice-200 bg-white px-4 text-center text-lg font-semibold text-navy-900 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20"
                  />
                  <button
                    type="button"
                    aria-label="Add one block"
                    onClick={() => adjustQuantity(1)}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-ice-200 bg-white text-navy-800 transition hover:border-cyan-400"
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="flex min-h-12 items-center gap-3 rounded-xl border border-ice-200 bg-white px-4 py-3" aria-live="polite">
                <Weight className="h-5 w-5 shrink-0 text-cyan-700" aria-hidden="true" />
                <div>
                  <p className="text-xs text-slate-500">Estimated total weight</p>
                  <p className="font-semibold text-navy-900">
                    {!validQuantity ? "Enter a whole number above 0" : totalWeight !== null ? `${totalWeight.toLocaleString()} KG` : "We'll confirm the weight"}
                  </p>
                </div>
              </div>
            </div>

            <Link
              href={quoteHref}
              aria-disabled={!validQuantity}
              onClick={(event) => {
                if (!validQuantity) event.preventDefault();
              }}
              className={`mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition sm:w-auto ${
                validQuantity
                  ? "bg-navy-900 text-white hover:-translate-y-0.5 hover:bg-navy-800"
                  : "cursor-not-allowed bg-slate-300 text-slate-600"
              }`}
            >
              Continue to quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mt-3 text-xs text-slate-500">
              Weight is an estimate based on the selected standard block size. No order is placed until we confirm it with you.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
