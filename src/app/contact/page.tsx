import { Mail, MessageCircleMore, Globe2, Phone } from "lucide-react";

import { siteConfig } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";

export default function ContactPage() {
  // TIJDELIJK:
  // Zet deze op true zodra je echt WhatsApp Business wilt gebruiken.
  const hasWhatsApp = false;

  const whatsappUrl = buildWhatsAppUrl({
    phone: siteConfig.whatsappNumber,
    message: "Hallo, ik heb een vraag of ik wil graag bestellen.",
  });

  return (
    <>
      <PageHero
        title="Contact"
        description="Heb je een vraag of wil je meer weten? Neem eenvoudig contact met ons op."
        primaryAction={{
          label: hasWhatsApp ? "Bestel via WhatsApp" : "Bekijk het menu",
          href: hasWhatsApp ? whatsappUrl : "/menu",
        }}
      />

      <Section className="pt-2">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base leading-8 text-[var(--muted)] md:text-lg">
            Wij helpen je graag verder met vragen over het menu, bezorgen, afhalen
            en de opening van Familietafel Almere.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6 card-shadow md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)]">
              <MessageCircleMore size={22} />
            </div>

            <h2 className="mt-5 font-display text-4xl text-[var(--ink)]">
              WhatsApp
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              {hasWhatsApp
                ? "Voor bestellingen en snelle vragen is WhatsApp de makkelijkste route."
                : "WhatsApp Business koppelen we later zodra je echte nummer en bestelproces vaststaan."}
            </p>

            <div className="mt-8">
              {hasWhatsApp ? (
                <Button
                  href={whatsappUrl}
                  variant="whatsapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  Stuur een WhatsApp-bericht
                </Button>
              ) : (
                <div className="rounded-[20px] border border-dashed border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-7 text-[var(--muted)]">
                  Nog niet actief. Later invullen in <strong>site.ts</strong>.
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-2)] p-6 card-shadow md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)]">
              <Mail size={22} />
            </div>

            <h2 className="mt-5 font-display text-4xl text-[var(--ink)]">
              E-mail
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Voor algemene vragen of samenwerkingen kun je later ook mailen.
            </p>

            <div className="mt-8 rounded-[20px] border border-[var(--border)] bg-white/80 p-4 text-sm leading-7 text-[var(--ink)]">
              {siteConfig.email}
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6 card-shadow md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)]">
              <Globe2 size={22} />
            </div>

            <h2 className="mt-5 font-display text-4xl text-[var(--ink)]">
              Socials
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Instagram en Facebook kun je later toevoegen zodra je accounts live zijn.
            </p>

            <div className="mt-8 space-y-3">
              <div className="rounded-[20px] border border-dashed border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-7 text-[var(--muted)]">
                Instagram later invullen
              </div>
              <div className="rounded-[20px] border border-dashed border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-7 text-[var(--muted)]">
                Facebook later invullen
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6 card-shadow md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)]">
              <Phone size={22} />
            </div>

            <h2 className="mt-5 font-display text-4xl text-[var(--ink)]">
              Praktisch
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              We bezorgen in Almere en afhalen is mogelijk op afspraak.
            </p>

            <div className="mt-8 rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-7 text-[var(--ink)]">
              EINDVERSIE: hier kun je later je echte bezorgdagen, tijdsloten en
              contactmomenten zetten.
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[28px] bg-[var(--brand)] px-6 py-10 text-white card-shadow md:px-10 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                Binnenkort live met echte contactgegevens
              </h2>
              <p className="mt-3 text-base leading-8 text-white/85 md:text-lg">
                Voor nu bouwen we eerst een sterke basis. Daarna voeg je je echte
                WhatsApp, socials, e-mail en bezorginformatie toe.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href="/menu"
                variant="outline"
                className="border-white/25 bg-white/10 text-white hover:bg-white/15"
              >
                Bekijk het menu
              </Button>

              <Button
                href="/bestellen"
                variant="outline"
                className="border-white/25 bg-white/10 text-white hover:bg-white/15"
              >
                Bekijk bestellen
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}