"use client";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/data/content";

export default function Stats() {
  return (
    <section className="relative z-10 -mt-14">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/30 bg-white/60 shadow-2xl shadow-navy-900/10 backdrop-blur-xl lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-white/80 p-6 text-center sm:p-8">
              <p className="font-display text-3xl font-bold text-navy-800 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-slate-600">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
