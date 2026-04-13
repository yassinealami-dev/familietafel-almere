import {
  Clock3,
  Home,
  MessageCircleMore,
  Snowflake,
  Soup,
  Users,
} from "lucide-react";

import { homeContent } from "@/content/home";
import { homePreviewMenu } from "@/content/menu";
import { siteConfig } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { MenuItemCard } from "@/components/menu/menu-item-card";

export default function HomePage() {
  const whatsappUrl = buildWhatsAppUrl({
    phone: siteConfig.whatsappNumber,
    message: siteConfig.whatsappDefaultMessage,
  });

  const trustIcons = [Users, MessageCircleMore, Snowflake];
  const whyIcons = [Soup, Users, MessageCircleMore, Snowflake, Home, Clock3];

  return (
    <>
      <Section className="pb-6 pt-10 md:pb-8 md:pt-14">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              {homeContent.hero.eyebrow}
            </p>

            <h1 className="mt-4 max-w-2xl font-display text-balance text-5xl leading-tight text-[var(--ink)] md:text-7xl">
              {homeContent.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              {homeContent.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/menu" variant="secondary">
                Bekijk het menu
              </Button>

              <Button
                href={whatsappUrl}
                variant="whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                Bestel via WhatsApp
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {homeContent.hero.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-sm text-[var(--ink)]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* EINDVERSIE: vervang deze visual later door echte foodfoto’s */}
          <div className="gradient-warm rounded-[28px] border border-[var(--border)] p-6 card-shadow md:min-h-[430px] md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/70 bg-white/80 p-5">
                <Soup className="text-[var(--accent)]" />
                <h3 className="mt-4 font-display text-2xl text-[var(--ink)]">
                  Dagvers warm
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Voor vandaag bereid en direct klaar om van te genieten.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/70 bg-white/80 p-5">
                <Snowflake className="text-[var(--brand)]" />
                <h3 className="mt-4 font-display text-2xl text-[var(--ink)]">
                  Diepvries
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Voorraad voor drukke dagen waarop je toch iets goeds wilt.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/70 bg-white/80 p-5 sm:col-span-2">
                <Users className="text-[var(--brand)]" />
                <h3 className="mt-4 font-display text-2xl text-[var(--ink)]">
                  Family trays
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Royale gezinsopties voor meerdere personen, handig op drukke avonden of voor bezoek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-2">
        <div className="grid gap-4 rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5 card-shadow md:grid-cols-3">
          {homeContent.hero.chips.map((item, index) => {
            const Icon = trustIcons[index] ?? Home;

            return (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/70 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                  <Icon size={18} />
                </div>
                <span className="text-sm font-medium text-[var(--ink)]">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {homeContent.categories.map((category) => (
            <div
              key={category.title}
              className="rounded-[24px] border border-[var(--border)] bg-white/80 p-6 card-shadow"
            >
              <h2 className="font-display text-3xl text-[var(--ink)]">
                {category.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {category.description}
              </p>

              <div className="mt-6">
                <Button href={category.href} variant="outline">
                  Bekijk opties
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            {homeContent.promise.title}
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
            {homeContent.promise.text}
          </p>

          <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
            {homeContent.promise.extra}
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl rounded-[28px] border border-[var(--border)] bg-white/70 p-6 text-center card-shadow md:p-8">
          <h2 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            {homeContent.familyBlock.title}
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
            {homeContent.familyBlock.text}
          </p>

          <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
            {homeContent.familyBlock.extra}
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 rounded-[28px] border border-[var(--border)] bg-[var(--surface-2)] p-6 card-shadow md:grid-cols-[0.95fr_1.05fr] md:p-8">
          <div className="gradient-warm rounded-[24px] border border-white/70 p-6">
            <div className="grid h-full gap-4">
              <div className="rounded-[20px] bg-white/85 p-5">
                <p className="font-display text-2xl text-[var(--ink)]">
                  Samen eten
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Royale porties met een warme, huiselijke uitstraling.
                </p>
              </div>

              <div className="rounded-[20px] bg-white/85 p-5">
                <p className="font-display text-2xl text-[var(--ink)]">
                  Minder gedoe
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Handig op avonden waarop koken net te veel wordt.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
              {homeContent.trayFeature.title}
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
              {homeContent.trayFeature.text}
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
              {homeContent.trayFeature.extra}
            </p>

            <div className="mt-6 space-y-3">
              {homeContent.trayFeature.points.map((point) => (
                <div key={point} className="text-sm text-[var(--ink)]">
                  • {point}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/menu#family" variant="secondary">
                Bekijk family trays
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[28px] border border-[var(--border)] bg-white/70 p-6 card-shadow md:p-8">
          <h2 className="font-display text-4xl text-[var(--ink)] md:text-5xl">
            Bestellen in 3 simpele stappen
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {homeContent.steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)] text-white">
                  {step.number}
                </div>

                <h3 className="mt-5 font-display text-2xl text-[var(--ink)]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[var(--muted)]">
            {homeContent.orderNote}
          </p>
        </div>
      </Section>

      <Section id="weekmenu">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              Deze week op het menu
            </p>
            <h2 className="mt-3 font-display text-4xl text-[var(--ink)] md:text-5xl">
              Kies wat past bij jouw dag
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/menu" variant="secondary">
              Bekijk volledig menu
            </Button>

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
          {homePreviewMenu.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-[28px] border border-[var(--border)] bg-white/70 p-6 card-shadow md:p-8">
          <h2 className="font-display text-4xl text-[var(--ink)] md:text-5xl">
            Waarom gezinnen voor ons kiezen
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {homeContent.whyChooseUs.map((item, index) => {
              const Icon = whyIcons[index] ?? Home;

              return (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)]">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-[var(--ink)]">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <h2 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
              {homeContent.about.title}
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              {homeContent.about.text}
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
              {homeContent.about.extra}
            </p>

            <div className="mt-8">
              <Button href="/over-ons" variant="outline">
                Lees meer over ons
              </Button>
            </div>
          </div>

          <div className="gradient-warm rounded-[28px] border border-[var(--border)] p-6 card-shadow">
            <div className="grid gap-4">
              <div className="rounded-[22px] bg-white/85 p-5">
                <p className="font-display text-2xl text-[var(--ink)]">
                  Warm vandaag
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Voor avonden waarop je direct wilt genieten.
                </p>
              </div>

              <div className="rounded-[22px] bg-white/85 p-5">
                <p className="font-display text-2xl text-[var(--ink)]">
                  Handig voor later
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Koelvers of diepvries voor rust in huis en minder gedoe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Geen fake reviews tonen.
          EINDVERSIE: voeg pas een reviewblok toe zodra je echte klantreacties hebt. */}

      <Section className="pt-6 md:pt-8">
        <div className="rounded-[28px] bg-[var(--brand)] px-6 py-10 text-white card-shadow md:px-10 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                {homeContent.closingCta.title}
              </h2>
              <p className="mt-3 text-base leading-8 text-white/85 md:text-lg">
                {homeContent.closingCta.text}
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
                href="/menu"
                variant="outline"
                className="border-white/25 bg-white/10 text-white hover:bg-white/15"
              >
                Bekijk het menu
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}