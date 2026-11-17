"use client";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/data/content";

export default function Process() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow="Manufacturing Process" title="From Clean Water to Solid Ice" subtitle="Five controlled steps that keep every block consistent and hygienic." />
        <div className="relative grid gap-8 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-9 hidden h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent md:block" />
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1} className="relative text-center">
              <div className="relative mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-cyan-400 to-navy-800 shadow-xl shadow-cyan-500/30">
                <s.icon className="h-7 w-7 text-white" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white">{s.step}</span>
              </div>
              <h3 className="font-display font-semibold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
