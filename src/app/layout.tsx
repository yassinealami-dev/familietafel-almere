import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingWhatsAppButton } from "@/components/layout/floating-whatsapp-button";
import { siteConfig } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  // EINDVERSIE: voeg hier later openGraph, twitter en echte metadata toe
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${lora.variable}`}>
      <body>
        {/* Zichtbaar op elke pagina */}
        <SiteHeader />

        {/* Hier renderen alle pagina’s */}
        <main>{children}</main>

        {/* Zichtbaar op mobiel/desktop als snelle bestel-CTA */}
        <FloatingWhatsAppButton />

        {/* Zichtbaar op elke pagina */}
        <SiteFooter />
      </body>
    </html>
  );
}