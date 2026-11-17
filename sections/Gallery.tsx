"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/SmartImage";
import { gallery } from "@/data/content";

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="bg-ice-50 py-24">
      <Container>
        <SectionHeading eyebrow="Factory Gallery" title="Inside Our Factory" subtitle="A look at our production, storage and quality control areas." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setSelected(i)}
              className="group relative h-64 overflow-hidden rounded-3xl text-left shadow-lg"
              aria-label={`Open image: ${g.caption}`}
            >
              <SmartImage src={g.src} alt={g.caption} className="h-full w-full transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent p-5 opacity-0 transition group-hover:opacity-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">{g.category}</span>
                <span className="font-display text-lg font-semibold text-white">{g.caption}</span>
              </div>
              <ZoomIn className="absolute right-4 top-4 h-5 w-5 text-white opacity-0 transition group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur"
            onClick={() => setSelected(null)}
            role="dialog" aria-modal="true" aria-label={gallery[selected].caption}
          >
            <button className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white" aria-label="Close" onClick={() => setSelected(null)}>
              <X />
            </button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <SmartImage src={gallery[selected].src} alt={gallery[selected].caption} className="h-[60vh] w-full rounded-2xl" />
              <p className="mt-4 text-center font-display text-lg text-white">{gallery[selected].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
