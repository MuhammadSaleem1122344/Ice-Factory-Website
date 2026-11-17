"use client";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/SmartImage";
import { highlights } from "@/data/content";

export default function FactoryHighlights() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <SmartImage src="/images/ice_block_1.png" alt="Inside our ice factory" className="h-[460px] w-full rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-white/40 bg-navy-900/90 p-5 text-white shadow-xl backdrop-blur sm:right-6">
                <p className="font-display text-lg font-bold">Made in Digri</p>
                <p className="text-sm text-ice-200">Fresh ice, produced locally</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading center={false} eyebrow="Factory Highlights" title="Built for Hygiene, Capacity and Consistency" />
            <div className="grid gap-5 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-ice-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
                    <h.icon className="mb-3 h-8 w-8 text-cyan-500" />
                    <h3 className="font-display font-semibold text-navy-900">{h.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600">{h.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
