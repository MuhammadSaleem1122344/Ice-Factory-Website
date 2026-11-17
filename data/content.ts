import {
  Snowflake, ShieldCheck, Clock, Droplets, Gauge, PackageCheck, Warehouse,
  Factory, Award, Truck, Microscope, Handshake, Target, Eye, Sparkles,
} from "lucide-react";
import type {
  NavItem, Feature, ProcessStep, Testimonial, FaqItem, GalleryItem, Stat,
} from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Factory", href: "/factory" },
  { label: "Contact", href: "/contact" },
];

export const stats: Stat[] = [
  { value: "3+", label: "Standard block sizes" },
  { value: "Daily", label: "Fresh production" },
  { value: "Bulk", label: "Wholesale capacity" },
  { value: "Custom", label: "Sizes on request" },
];

export const highlights: Feature[] = [
  { title: "Modern Freezing Tanks", icon: Snowflake, description: "Controlled brine-tank freezing produces dense, clear and uniform blocks." },
  { title: "Hygienic Production", icon: Droplets, description: "Filtered water and clean handling at every stage of manufacturing." },
  { title: "Large Cold Storage", icon: Warehouse, description: "Insulated storage keeps stock ready for same-day dispatch." },
  { title: "Own Delivery Fleet", icon: Truck, description: "Timely delivery across Digri and nearby districts of Sindh." },
];

export const whyChooseUs: Feature[] = [
  { title: "Consistent Quality", icon: Award, description: "Every block is made to the same standard, order after order." },
  { title: "Clean & Safe", icon: ShieldCheck, description: "Filtered water and hygienic handling you can rely on." },
  { title: "On-Time Delivery", icon: Clock, description: "Dependable schedules so your business never runs short." },
  { title: "Flexible Orders", icon: PackageCheck, description: "From a few blocks to bulk loads and custom sizes." },
  { title: "Fair Business Terms", icon: Handshake, description: "Straightforward quotations and long-term supplier relationships." },
  { title: "Quality Control", icon: Microscope, description: "Inspection before storage and dispatch, every day." },
];

export const processSteps: ProcessStep[] = [
  { step: 1, title: "Water Filtration", icon: Droplets, description: "Water is filtered and treated before it enters the moulds." },
  { step: 2, title: "Freezing", icon: Snowflake, description: "Moulds are frozen in chilled brine tanks for dense, uniform blocks." },
  { step: 3, title: "Extraction", icon: Factory, description: "Frozen blocks are carefully released from the moulds." },
  { step: 4, title: "Quality Check", icon: Gauge, description: "Each batch is inspected for clarity, size and weight." },
  { step: 5, title: "Storage & Dispatch", icon: Truck, description: "Blocks move to cold storage, then onto delivery vehicles." },
];

export const mission = {
  icon: Target,
  title: "Our Mission",
  text: "To supply clean, reliable, high-quality ice that helps local businesses keep their products fresh and their customers satisfied.",
};
export const vision = {
  icon: Eye,
  title: "Our Vision",
  text: "To become the most trusted ice manufacturer in Sindh through quality, consistency and honest service.",
};
export const qualityCommitment = {
  icon: Sparkles,
  title: "Quality Commitment",
  text: "We test, inspect and handle every batch with care, because the quality of our ice protects the quality of your business.",
};

export const testimonials: Testimonial[] = [
  { name: "Customer Name", role: "Fish Market Trader", quote: "Sample testimonial: the ice stays solid for hours and delivery is always on time." },
  { name: "Customer Name", role: "Restaurant Owner", quote: "Sample testimonial: clean ice and a supplier we can depend on every week." },
  { name: "Customer Name", role: "Meat Wholesaler", quote: "Sample testimonial: large orders are handled without any hassle." },
];

export const faqs: FaqItem[] = [
  { question: "What ice block sizes do you offer?", answer: "We produce 20 KG, 30 KG and 50 KG blocks, and can prepare custom sizes on request." },
  { question: "Do you deliver?", answer: "Yes. Delivery is available in Digri and surrounding areas. Share your location in the quote form and we will confirm." },
  { question: "How do I get pricing?", answer: "Prices depend on quantity and delivery location. Submit the quote form or message us on WhatsApp for a quotation." },
  { question: "Can I place a regular or bulk order?", answer: "Absolutely. We support daily, weekly and bulk supply plans for businesses." },
  { question: "Is the ice safe for food use?", answer: "Our blocks are made from filtered water under hygienic conditions. Please tell us your intended use when ordering." },
];

export const gallery: GalleryItem[] = [
  { src: "/images/ice_block_1.png", caption: "Freezing tanks", category: "Production" },
  { src: "/images/ice_block_2.png", caption: "Block extraction line", category: "Production" },
  { src: "/images/tank.png", caption: "Cold storage room", category: "Storage" },
  { src: "/images/ice_block_1.png", caption: "Finished ice blocks", category: "Storage" },
  { src: "/images/ammonia_gas_cylinder.png", caption: "Inspection and weighing", category: "Quality" },
  { src: "/images/tank.png", caption: "Loading for delivery", category: "Dispatch" },
];

export const factoryAreas: Feature[] = [
  { title: "Production Facilities", icon: Factory, description: "Brine tanks, moulds and handling equipment arranged for a smooth, hygienic workflow." },
  { title: "Storage Facilities", icon: Warehouse, description: "Insulated storage that holds blocks at the right temperature until dispatch." },
  { title: "Quality Control", icon: Microscope, description: "Routine checks on water, weight and block condition before every delivery." },
];
