import type { LucideIcon } from "lucide-react";

export interface NavItem { label: string; href: string }

export interface Product {
  id: string;
  name: string;
  weight: string;
  category: "standard" | "custom";
  description: string;
  image: string;
}

export interface Service { title: string; description: string; icon: LucideIcon }
export interface Feature { title: string; description: string; icon: LucideIcon }
export interface ProcessStep extends Feature { step: number }
export interface Testimonial { name: string; role: string; quote: string }
export interface FaqItem { question: string; answer: string }
export interface GalleryItem { src: string; caption: string; category: string }
export interface Stat { value: string; label: string }
