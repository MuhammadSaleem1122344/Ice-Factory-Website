import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import OrderPlanner from "@/sections/OrderPlanner";
import ProductGrid from "@/sections/ProductGrid";
import FactoryHighlights from "@/sections/FactoryHighlights";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Process from "@/sections/Process";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import CTABanner from "@/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <OrderPlanner />
      <ProductGrid showViewAll />
      <FactoryHighlights />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
