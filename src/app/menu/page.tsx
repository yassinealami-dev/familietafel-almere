import {
  Clock3,
  Home,
  Snowflake,
  Soup,
  Users,
} from "lucide-react";

import { MenuItemCard } from "@/components/menu/menu-item-card";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { menuCategories, menuItems, menuPageContent } from "@/content/menu";
import { siteConfig } from "@/content/site";
import { buildOrderMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

const categoryIcons = {
  warm: Soup,
  cool: Clock3,
  frozen: Snowflake,
  family: Users,
  extra: Home,
} as const;

export default function MenuPage() {
  const whatsappUrl = buildWhatsAppUrl({
    phone: siteConfig.whatsappNumber,
    message: buildOrderMessage(),
  });

  return (
    <>
      <PageHero
        title="Menu"
        description="Warm voor vandaag, koelvers voor later en diepvries voor drukke dagen. Kies wat past bij jouw planning en bestel eenvoudig via WhatsApp."
        primaryAction={{
          label: "Bestel via WhatsApp",
          href: whatsappUrl,
        }}
      />

      <Section className="pt-2">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="card-shadow rounded-[28px] border border-[var(--border)] bg-white/80 p-6 md:p-8">
            <h2 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
              Overzichtelijk kiezen, zonder gedoe
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              {menuPageContent.intro}
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
              {menuPageContent.introExtra}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {menuCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--ink)] transition hover:bg-white"
                >
                  {category.label}
                </a>
              ))}
            </div>
          </div>

          <div className="card-shadow rounded-[28px] border border-[var(--border)] bg-[var(--surface-2)] p-6 md:p-8">
            <h2 className="font-display text-4xl text-[var(--ink)]">
              Goed om te weten
            </h2>

            <div className="mt-6 space-y-4">
              {menuPageContent.orderingNotes.map((note) => (
                <div key={note} className="rounded-[20px] bg-white/85 p-5">
                  <p className="text-sm leading-7 text-[var(--muted)]">{note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button
                href={whatsappUrl}
                variant="whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                Bestel via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {menuCategories.map((category) => {
        const items = menuItems.filter((item) => item.category === category.id);

        if (items.length === 0) {
          return null;
        }

        const Icon = categoryIcons[category.id];

        return (
          <Section key={category.id} id={category.id} className="pt-6 md:pt-8">
            <div className="card-shadow rounded-[28px] border border-[var(--border)] bg-white/80 p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)]">
                      <Icon size={20} />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                      {category.label}
                    </p>
                  </div>

                  <h2 className="mt-4 font-display text-4xl text-[var(--ink)] md:text-5xl">
                    {category.label}
                  </h2>

                  <p className="mt-3 text-base leading-8 text-[var(--muted)] md:text-lg">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={whatsappUrl}
                    variant="whatsapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bestel via WhatsApp
                  </Button>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      <Section className="pt-6 md:pt-8">
        <div className="card-shadow rounded-[28px] bg-[var(--brand)] px-6 py-10 text-white md:px-10 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                Twijfel je wat het beste past?
              </h2>
              <p className="mt-3 text-base leading-8 text-white/85 md:text-lg">
                Stuur ons eenvoudig een WhatsApp-bericht. Dan helpen we je kiezen
                tussen warm voor vandaag, koelvers voor later of diepvries voor thuis.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappUrl}
                variant="whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                Bestel via WhatsApp
              </Button>

              <Button
                href="/bestellen"
                variant="outline"
                className="border-white/25 bg-white/10 text-white hover:bg-white/15"
              >
                Bekijk hoe bestellen werkt
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}