import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/sections/ProductGrid";
import CTABanner from "@/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Products",
  description: "20 KG, 30 KG, 50 KG and custom ice blocks for wholesale, commercial and industrial use.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Our Products" title="Ice Blocks in Every Size You Need" description="Standard 20, 30 and 50 KG blocks, plus custom sizes made to order." />
      <ProductGrid showFilter />
      <CTABanner />
    </>
  );
}
