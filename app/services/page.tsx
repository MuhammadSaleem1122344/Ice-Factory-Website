import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/sections/ServicesGrid";
import Process from "@/sections/Process";
import CTABanner from "@/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Wholesale, bulk, commercial, hotel, restaurant, fish and meat industry ice supply in Sindh.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Supply Solutions Built Around Your Business" description="Whether you need a few blocks or a bulk load, we have a plan for you." />
      <ServicesGrid />
      <Process />
      <CTABanner />
    </>
  );
}
