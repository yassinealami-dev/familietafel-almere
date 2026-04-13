import { siteConfig } from "@/content/site";
import { buildOrderMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/utils";
import type { MenuItem } from "@/types/menu";
import { Button } from "@/components/ui/button";

type MenuItemCardProps = {
  item: MenuItem;
};

function badgeClasses(category: MenuItem["category"]) {
  switch (category) {
    case "warm":
      return "bg-[#F7E0D7] text-[#9B4B33]";
    case "cool":
      return "bg-[#DCEBE5] text-[#355C4B]";
    case "frozen":
      return "bg-[#E4EDF5] text-[#3B5670]";
    case "family":
      return "bg-[#EFE2D4] text-[#7D523B]";
    case "extra":
      return "bg-[#F4EED8] text-[#7B6B2E]";
    default:
      return "bg-white text-[var(--ink)]";
  }
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const whatsappUrl = buildWhatsAppUrl({
    phone: siteConfig.whatsappNumber,
    message: buildOrderMessage(item.name),
  });

  return (
    <div className="rounded-[24px] border border-[var(--border)] bg-white/80 p-6 card-shadow">
      <div className="flex items-start justify-between gap-4">
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeClasses(item.category)}`}>
          {item.badge ?? item.category}
        </span>

        <span className="text-base font-semibold text-[var(--brand)]">
          {formatPrice(item.price)}
        </span>
      </div>

      <h3 className="mt-5 font-display text-3xl leading-tight text-[var(--ink)]">
        {item.name}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
        {item.description}
      </p>

      {item.serves ? (
        <p className="mt-3 text-sm font-medium text-[var(--ink)]">
          Geschikt voor: {item.serves}
        </p>
      ) : null}

      <div className="mt-6">
        <Button href={whatsappUrl} variant="whatsapp" target="_blank" rel="noreferrer">
          Bestel via WhatsApp
        </Button>
      </div>
    </div>
  );
}