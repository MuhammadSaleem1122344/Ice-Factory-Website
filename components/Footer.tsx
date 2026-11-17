import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { ArrowUp, ArrowUpRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { navItems } from "@/data/content";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { site } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const socials = [
  { icon: FaFacebookF, href: site.social.facebook, label: "Facebook" },
  { icon: FaInstagram, href: site.social.instagram, label: "Instagram" },
  { icon: FaYoutube, href: site.social.youtube, label: "YouTube" },
  { icon: FaWhatsapp, href: buildWhatsAppUrl(), label: "WhatsApp" },
];

const heading = "mb-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300";
const link = "inline-flex text-sm text-ice-200/70 transition-colors duration-200 hover:text-white";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <Container className="relative pt-12 sm:pt-16">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Let’s keep your business cool</span>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">Need ice for your next order?</h2>
            <p className="mt-2 text-sm leading-relaxed text-ice-200/70">
              Tell us your quantity and delivery location. We’ll confirm availability and pricing with you.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button href="/quote">Request a quote <ArrowUpRight className="h-4 w-4" /></Button>
            <Button href={buildWhatsAppUrl()} external variant="whatsapp"><FaWhatsapp className="h-4 w-4" /> WhatsApp</Button>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8 lg:py-14">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ice-200/65">{site.description}</p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-ice-200/75 transition hover:border-cyan-300/50 hover:bg-cyan-300 hover:text-navy-950"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={heading}>Explore</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}><Link href={item.href} className={link}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={heading}>Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.id}><Link href={`/quote?product=${product.id}`} className={link}>{product.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={heading}>Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.title}><Link href="/services" className={link}>{service.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className={heading}>Contact</h3>
            <ul className="space-y-4 text-sm text-ice-200/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-cyan-300" />
                <a className="transition hover:text-white" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-cyan-300" />
                <a className="break-all transition hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-ice-200/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <a
            href="#top"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-ice-200/75 transition hover:border-cyan-300/50 hover:text-cyan-200"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
