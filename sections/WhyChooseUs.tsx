"use client";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { whyChooseUs } from "@/data/content";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-24">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <Container className="relative">
        <SectionHeading light eyebrow="Why Choose Us" title="A Supplier You Can Depend On" subtitle="Quality, hygiene and reliability in every delivery." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <div className="h-full rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600">
                  <f.icon className="h-6 w-6 text-white" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ice-200/80">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
