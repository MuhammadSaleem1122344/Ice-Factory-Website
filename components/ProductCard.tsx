"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SmartImage from "./SmartImage";
import Button from "./ui/Button";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-3xl border border-ice-200 bg-white shadow-lg shadow-navy-900/5 transition-shadow hover:shadow-2xl hover:shadow-cyan-500/20"
    >
      <div className="relative h-56 overflow-hidden">
        <SmartImage src={product.image} alt={product.name} className="h-full w-full transition duration-700 group-hover:scale-110" />
        <span className="absolute left-4 top-4 rounded-full bg-navy-950/80 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur">
          {product.weight}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-navy-900">{product.name}</h3>
        <p className="mt-2 min-h-[72px] text-sm leading-relaxed text-slate-600">{product.description}</p>
        <Button href={`/quote?product=${product.id}`} variant="light" className="mt-5 w-full">
          Request a Quote <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.article>
  );
}
