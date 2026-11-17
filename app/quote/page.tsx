import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteSection from "@/sections/QuoteSection";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a quotation for ice blocks — choose your product, quantity and delivery location.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero eyebrow="Get a Quote" title="Request Your Ice Quotation" description="Share your requirements and we will prepare a quotation for your business." />
      <Suspense fallback={<div className="py-24 text-center text-slate-500">Loading form…</div>}>
        <QuoteSection />
      </Suspense>
    </>
  );
}
