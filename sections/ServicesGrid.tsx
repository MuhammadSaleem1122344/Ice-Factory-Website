"use client";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow="Our Services" title="Ice Supply Solutions for Every Industry" />
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-3xl border border-ice-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-500/15">
                <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ice-100 text-cyan-600 transition group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-navy-800 group-hover:text-white">
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-xl font-bold text-navy-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.description}</p>
                <Button href="/quote" variant="light" className="mt-6">Request a Quote</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
