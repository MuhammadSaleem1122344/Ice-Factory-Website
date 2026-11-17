import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Premium Ice Blocks in Digri, Sindh`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: ["Mashallah Ice and Cold Store Digri", "ice factory", "cold store", "ice blocks", "Digri", "Sindh", "Pakistan", "wholesale ice", "bulk ice supply", "fish ice", "ice manufacturer"],
  icons: { icon: "/icons/logo.svg" },
  openGraph: {
    title: `${site.name} | Premium Ice Blocks`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_PK",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};

export const viewport: Viewport = { themeColor: "#061633", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body id="top" className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollProgress />
        <WhatsAppButton />
      </body>
    </html>
  );
}
