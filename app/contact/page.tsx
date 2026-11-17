import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/sections/ContactSection";
import FAQ from "@/sections/FAQ";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact our ice factory in Digri, Sindh by phone, WhatsApp, email or the contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Let's Talk About Your Ice Supply" description="Call, message us on WhatsApp or send a message using the form." />
      <ContactSection />
      <FAQ />
    </>
  );
}
