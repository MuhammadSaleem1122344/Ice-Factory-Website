"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import SmartImage from "@/components/SmartImage";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy-950 pt-20">
      <SmartImage src="/images/ice_block_1.png" alt="Ice manufacturing factory in Digri, Sindh" className="absolute inset-0 -z-20 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/40" />
      <div className="absolute -right-32 top-24 -z-10 h-96 w-96 animate-float rounded-full bg-cyan-400/25 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 -z-10 h-72 w-72 animate-float rounded-full bg-ice-300/15 blur-3xl [animation-delay:2s]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-ice-100 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" /> Ice Manufacturers · Digri, Sindh
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Premium Quality Ice Blocks{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-ice-200 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                for Every Business.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ice-200">
              {site.name} produces clean, dense and slow-melting ice blocks for fish and meat markets, hotels,
              restaurants and wholesale buyers across Sindh, delivered fresh and on time.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/quote">Get a Quote <ArrowRight className="h-4 w-4" /></Button>
              <Button href="/contact" variant="outline"><Phone className="h-4 w-4" /> Contact Us</Button>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:col-span-2 lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Available Block Sizes</p>
              <div className="mt-6 space-y-4">
                {["20 KG", "30 KG", "50 KG", "Custom"].map((s) => (
                  <div key={s} className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4">
                    <span className="font-display text-xl font-bold text-white">{s}</span>
                    <span className="text-xs text-ice-200">Ice Block</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
