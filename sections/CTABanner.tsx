"use client";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function CTABanner() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-900 via-navy-800 to-cyan-700 px-8 py-16 text-center shadow-2xl sm:px-16">
            <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
            <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">Need Ice for Your Business?</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-ice-200">
              Tell us your quantity and delivery location and we will get back to you with a quotation.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/quote">Get a Quote</Button>
              <Button href={buildWhatsAppUrl()} external variant="whatsapp"><FaWhatsapp className="h-4 w-4" /> WhatsApp Us</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
