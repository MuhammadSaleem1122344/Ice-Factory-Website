import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutIntro from "@/sections/AboutIntro";
import MissionVision from "@/sections/MissionVision";
import FactoryHighlights from "@/sections/FactoryHighlights";
import CTABanner from "@/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our ice manufacturing factory in Digri, Sindh — our mission, vision and commitment to quality.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Making Clean, Reliable Ice for Sindh's Businesses" description="Our factory combines hygienic production with dependable delivery." />
      <AboutIntro />
      <MissionVision />
      <FactoryHighlights />
      <CTABanner />
    </>
  );
}
