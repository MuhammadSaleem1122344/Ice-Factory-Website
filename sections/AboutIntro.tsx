"use client";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/SmartImage";
import { site } from "@/lib/site";

export default function AboutIntro() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="Who We Are" title={`About ${site.name}`} />
            <Reveal>
              <div className="space-y-4 leading-relaxed text-slate-600">
                <p>
                  {site.name} is an ice manufacturing company based in Digri, Sindh. We produce clean, dense ice
                  blocks for fish and meat traders, hotels, restaurants, caterers and wholesale buyers.
                </p>
                <p>
                  Our factory is organised around hygiene and consistency: filtered water, controlled freezing,
                  careful handling and insulated storage, so the ice you receive is ready to protect your products.
                </p>
                <p>
                  We believe in simple, honest business: clear quotations, reliable delivery and long-term
                  relationships with the businesses we serve.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <SmartImage src="/images/ice_block_1.png" alt="Our ice factory overview" className="h-[480px] w-full rounded-3xl shadow-2xl" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
