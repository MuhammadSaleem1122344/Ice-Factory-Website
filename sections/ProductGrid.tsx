"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ProductCard";
import { products, productFilters } from "@/data/products";

interface Props { showFilter?: boolean; showViewAll?: boolean }

export default function ProductGrid({ showFilter = false, showViewAll = false }: Props) {
  const [filter, setFilter] = useState<string>("all");
  const visible = useMemo(
    () => (filter === "all" ? products : products.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section className="bg-ice-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Products"
          title="Ice Blocks Made for Your Business"
          subtitle="Choose from our standard block sizes or request a custom size. Contact us for a quotation."
        />
        {showFilter && (
          <div className="mb-10 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Filter products">
            {productFilters.map((f) => (
              <button
                key={f.value}
                role="tab"
                aria-selected={filter === f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  filter === f.value
                    ? "bg-navy-900 text-white shadow-lg"
                    : "bg-white text-navy-800 hover:bg-ice-100"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}
        <motion.div layout className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => <ProductCard key={p.id} product={p} />)}
          </AnimatePresence>
        </motion.div>
        {showViewAll && (
          <div className="mt-12 text-center"><Button href="/products" variant="light">View All Products</Button></div>
        )}
      </Container>
    </section>
  );
}
