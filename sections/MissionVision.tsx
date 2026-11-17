"use client";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { mission, vision, qualityCommitment } from "@/data/content";

export default function MissionVision() {
  return (
    <section className="bg-ice-50 py-24">
      <Container>
        <div className="grid gap-7 md:grid-cols-3">
          {[mission, vision, qualityCommitment].map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-ice-200 bg-white p-8 shadow-lg shadow-navy-900/5">
                <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-navy-800">
                  <m.icon className="h-7 w-7 text-white" />
                </span>
                <h3 className="font-display text-xl font-bold text-navy-900">{m.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
