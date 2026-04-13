import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  const whatsappUrl = buildWhatsAppUrl({
    phone: siteConfig.whatsappNumber,
    message: siteConfig.whatsappDefaultMessage,
  });

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)]/80 bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)] text-white">
            <MessageCircleMore size={20} />
          </div>

          <div>
            <div className="font-display text-xl leading-none text-[var(--brand)] md:text-2xl">
              Familietafel
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Almere
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--ink)] hover:text-[var(--brand)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={whatsappUrl} variant="whatsapp" target="_blank" rel="noreferrer">
            Bestel via WhatsApp
          </Button>
        </div>

        <MobileNav items={navigation} whatsappUrl={whatsappUrl} />
      </div>
    </header>
  );
}