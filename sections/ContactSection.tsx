"use client";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { useForm } from "@/hooks/useForm";
import { validateContact, type ContactValues } from "@/lib/validation";
import { site } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const initial: ContactValues = { name: "", phone: "", email: "", message: "" };

const info = [
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Factory Address", value: site.address },
  { icon: Clock, label: "Working Hours", value: site.hours },
];

export default function ContactSection() {
  const { values, errors, submitted, handleChange, handleSubmit, reset } = useForm(initial, validateContact);

  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {info.map((i) => (
              <Reveal key={i.label}>
                <div className="flex gap-4 rounded-2xl border border-ice-200 bg-white p-5 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ice-100 text-cyan-600"><i.icon className="h-5 w-5" /></span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{i.label}</p>
                    {i.href ? <a href={i.href} className="font-medium text-navy-900 hover:text-cyan-600">{i.value}</a> : <p className="font-medium text-navy-900">{i.value}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
            <Button href={buildWhatsAppUrl()} external variant="whatsapp" className="w-full"><FaWhatsapp className="h-5 w-5" /> Chat on WhatsApp</Button>
          </div>

          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-ice-200 bg-white p-8 shadow-xl shadow-navy-900/5">
              <h2 className="font-display text-2xl font-bold text-navy-900">Send Us a Message</h2>
              {submitted ? (
                <div className="mt-6 rounded-2xl bg-ice-50 p-6" role="status">
                  <CheckCircle2 className="h-10 w-10 text-cyan-500" />
                  <p className="mt-3 font-display text-lg font-semibold text-navy-900">Your details look good.</p>
                  <p className="mt-2 text-sm text-slate-600">
                    This website has no server, so your message has <strong>not</strong> been sent. To reach us now,
                    send it directly on WhatsApp or call us.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button
                      href={buildWhatsAppUrl(`Name: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nMessage: ${values.message}`)}
                      external variant="whatsapp"
                    ><FaWhatsapp className="h-4 w-4" /> Send on WhatsApp</Button>
                    <Button variant="light" type="button" onClick={reset}>Edit Message</Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-5 sm:grid-cols-2">
                  <Field required label="Full Name" name="name" value={values.name} onChange={handleChange} error={errors.name} />
                  <Field required label="Phone Number" name="phone" type="tel" value={values.phone} onChange={handleChange} error={errors.phone} placeholder="0300 1234567" />
                  <div className="sm:col-span-2">
                    <Field required label="Email" name="email" type="email" value={values.email} onChange={handleChange} error={errors.email} />
                  </div>
                  <div className="sm:col-span-2">
                    <Field required as="textarea" label="Message" name="message" value={values.message} onChange={handleChange} error={errors.message} />
                  </div>
                  <div className="sm:col-span-2"><Button type="submit" className="w-full">Validate Message</Button></div>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-ice-200 shadow-xl">
            <iframe
              title="Factory location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
              className="h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
