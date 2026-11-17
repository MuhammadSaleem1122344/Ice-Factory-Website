import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/sections/Gallery";
import Process from "@/sections/Process";
import CTABanner from "@/sections/CTABanner";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { factoryAreas } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Factory",
  description: "Tour our ice factory: production facilities, cold storage, quality control and the ice-making process.",
};

export default function FactoryPage() {
  return (
    <>
      <PageHero eyebrow="Our Factory" title="Where Every Block Is Made" description="Production, storage and quality control working together under one roof." />
      <section className="py-24">
        <Container>
          <div className="grid gap-7 md:grid-cols-3">
            {factoryAreas.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-ice-200 bg-white p-8 shadow-lg shadow-navy-900/5">
                  <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-navy-800">
                    <a.icon className="h-7 w-7 text-white" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-navy-900">{a.title}</h3>
                  <p className="mt-3 text-slate-600">{a.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <Gallery />
      <Process />
      <CTABanner />
    </>
  );
}
