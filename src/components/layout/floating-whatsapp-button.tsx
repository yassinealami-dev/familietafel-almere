import { MessageCircleMore } from "lucide-react";
import { siteConfig } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsAppButton() {
  const whatsappUrl = buildWhatsAppUrl({
    phone: siteConfig.whatsappNumber,
    message: siteConfig.whatsappDefaultMessage,
  });

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 left-4 right-4 z-40 inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[var(--success)] px-5 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(37,211,102,0.25)] md:bottom-6 md:left-auto md:right-6 md:w-auto"
    >
      <MessageCircleMore size={20} />
      Bestel via WhatsApp
    </a>
  );
}