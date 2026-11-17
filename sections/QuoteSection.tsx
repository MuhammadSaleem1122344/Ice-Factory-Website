"use client";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ShieldCheck, Truck, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { useForm } from "@/hooks/useForm";
import { validateQuote, type QuoteValues } from "@/lib/validation";
import { products } from "@/data/products";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const options = products.map((p) => ({ value: p.id, label: p.name }));

const perks = [
  { icon: MessageCircle, text: "Fast response on your quotation request" },
  { icon: Truck, text: "Delivery available in Digri and nearby areas" },
  { icon: ShieldCheck, text: "Clean, hygienic, consistent quality" },
];

export default function QuoteSection() {
  const params = useSearchParams();
  const preset = params.get("product") ?? "";
  const initial: QuoteValues = {
    name: "", business: "", phone: "",
    product: options.some((o) => o.value === preset) ? preset : "",
    quantity: params.get("quantity") ?? "", location: "", message: "",
  };
  const { values, errors, submitted, handleChange, handleSubmit, reset } = useForm(initial, validateQuote);

  const productName = options.find((o) => o.value === values.product)?.label ?? values.product;
  const waMessage = [
    "Quotation request",
    `Name: ${values.name}`,
    `Business: ${values.business}`,
    `Phone: ${values.phone}`,
    `Product: ${productName}`,
    `Quantity: ${values.quantity}`,
    `Delivery location: ${values.location}`,
    values.message && `Message: ${values.message}`,
  ].filter(Boolean).join("\n");

  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl font-bold text-navy-900">Tell us what you need</h2>
            <p className="mt-4 text-slate-600">Fill in the form and we will prepare a quotation based on your product, quantity and delivery location.</p>
            <ul className="mt-8 space-y-4">
              {perks.map((p) => (
                <li key={p.text} className="flex items-center gap-4 rounded-2xl border border-ice-200 bg-white p-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ice-100 text-cyan-600"><p.icon className="h-5 w-5" /></span>
                  <span className="text-sm font-medium text-navy-900">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-ice-200 bg-white p-8 shadow-xl shadow-navy-900/5">
              {submitted ? (
                <div role="status">
                  <CheckCircle2 className="h-12 w-12 text-cyan-500" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-navy-900">Your quote details are ready</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Your form passed validation. This website is frontend-only, so your request has <strong>not</strong> been
                    sent to us yet. Please send it by WhatsApp or call us to complete your inquiry.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button href={buildWhatsAppUrl(waMessage)} external variant="whatsapp"><FaWhatsapp className="h-4 w-4" /> Send Quote Request on WhatsApp</Button>
                    <Button type="button" variant="light" onClick={reset}>Edit Details</Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <Field required label="Customer Name" name="name" value={values.name} onChange={handleChange} error={errors.name} />
                  <Field required label="Business Name" name="business" value={values.business} onChange={handleChange} error={errors.business} />
                  <Field required label="Phone Number" name="phone" type="tel" value={values.phone} onChange={handleChange} error={errors.phone} placeholder="0300 1234567" />
                  <Field required as="select" label="Product" name="product" value={values.product} onChange={handleChange} error={errors.product} options={options} />
                  <Field required label="Required Quantity (blocks)" name="quantity" type="number" value={values.quantity} onChange={handleChange} error={errors.quantity} />
                  <Field required label="Delivery Location" name="location" value={values.location} onChange={handleChange} error={errors.location} />
                  <div className="sm:col-span-2">
                    <Field as="textarea" label="Additional Message" name="message" value={values.message} onChange={handleChange} />
                  </div>
                  <div className="sm:col-span-2"><Button type="submit" className="w-full">Request Quotation</Button></div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
