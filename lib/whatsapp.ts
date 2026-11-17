import { site } from "@/lib/site";

export function buildWhatsAppUrl(message = "Assalam o Alaikum, I would like to inquire about ice blocks."): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

}
