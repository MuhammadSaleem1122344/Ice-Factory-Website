"use client";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="bg-ice-50 py-24">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="Trusted by Local Businesses" />
        <div className="grid gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="h-full rounded-3xl border border-ice-200 bg-white p-8 shadow-lg shadow-navy-900/5">
                <Quote className="h-9 w-9 text-cyan-400" />
                <blockquote className="mt-4 text-slate-700">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-ice-100 pt-4">
                  <p className="font-display font-semibold text-navy-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
