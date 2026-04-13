import { Clock3, MessageCircleMore, PackageCheck, Snowflake, Soup } from "lucide-react";

import { siteConfig } from "@/content/site";
import { buildOrderMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";

export default function BestellenPage() {
  const whatsappUrl = buildWhatsAppUrl({
    phone: siteConfig.whatsappNumber,
    message: buildOrderMessage(),
  });

  const steps = [
    {
      number: 1,
      title: "Kies je maaltijd",
      description:
        "Bekijk het actuele menu en kies uit dagvers warm, koelvers, diepvries of een family tray.",
      icon: Soup,
    },
    {
      number: 2,
      title: "Stuur je bestelling via WhatsApp",
      description:
        "Gebruik het vaste bestelformat hieronder. Zo blijft alles duidelijk en snel geregeld.",
      icon: MessageCircleMore,
    },
    {
      number: 3,
      title: "Ontvang je bevestiging",
      description:
        "Wij bevestigen je bestelling en spreken bezorging of afhalen met je af.",
      icon: PackageCheck,
    },
  ];

  const planningOptions = [
    {
      title: "Warm",
      text: "Voor vandaag en direct klaar om van te genieten.",
      icon: Soup,
    },
    {
      title: "Koelvers",
      text: "Handig voor morgen of later in de week.",
      icon: Clock3,
    },
    {
      title: "Diepvries",
      text: "Voor voorraad thuis op drukke dagen.",
      icon: Snowflake,
    },
  ];

  return (
    <>
      <PageHero
        title="Bestellen"
        description="Bestellen bij Familietafel Almere gaat eenvoudig en snel via WhatsApp. Geen ingewikkelde stappen, maar gewoon duidelijk doorgeven wat je wilt hebben."
        primaryAction={{
          label: "Bestel via WhatsApp",
          href: whatsappUrl,
        }}
      />

      <Section className="pt-2">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base leading-8 text-[var(--muted)] md:text-lg">
            Wij houden bestellen bewust simpel. Zo kun je snel kiezen wat bij jouw
            dag past: een warme maaltijd voor vandaag, iets koelvers voor later in
            de week of diepvriesmaaltijden voor thuis op voorraad.
          </p>
        </div>
      </Section>

      <Section>
        <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6 card-shadow md:p-8">
          <h2 className="font-display text-4xl text-[var(--ink)] md:text-5xl">
            Bestellen in 3 simpele stappen
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)] text-white">
                      {step.number}
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)]">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-2xl text-[var(--ink)]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
            Zo staat er zonder gedoe iets goeds op tafel.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6 card-shadow md:p-8">
            <h2 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
              Gebruik dit bericht om te bestellen
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Stuur je bestelling eenvoudig via WhatsApp door. Hoe duidelijker je
              bericht, hoe sneller wij kunnen bevestigen.
            </p>

            <div className="mt-6 rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6">
              <div className="space-y-3 text-base leading-8 text-[var(--ink)]">
                <p>Naam:</p>
                <p>Adres:</p>
                <p>Gerecht:</p>
                <p>Aantal porties:</p>
                <p>Warm / koelvers / diepvries:</p>
                <p>Bezorging of afhalen:</p>
                <p>Gewenste tijd:</p>
                <p>Betaald ja/nee:</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappUrl}
                variant="whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                Open WhatsApp en bestel direct
              </Button>

              <Button href="/menu" variant="outline">
                Bekijk eerst het menu
              </Button>
            </div>

            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              EINDVERSIE: hier kun je later nog een knop toevoegen om het
              bestelformat automatisch te kopiëren.
            </p>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-2)] p-6 card-shadow md:p-8">
            <h2 className="font-display text-4xl text-[var(--ink)]">Goed om te weten</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-[20px] bg-white/85 p-5">
                <h3 className="font-display text-2xl text-[var(--ink)]">
                  Voor dezelfde dag
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Bestel warme maaltijden het liefst op tijd, zodat we goed kunnen
                  plannen.
                </p>
              </div>

              <div className="rounded-[20px] bg-white/85 p-5">
                <h3 className="font-display text-2xl text-[var(--ink)]">
                  Family trays
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Family trays en grotere bestellingen bestel je bij voorkeur vooraf.
                </p>
              </div>

              <div className="rounded-[20px] bg-white/85 p-5">
                <h3 className="font-display text-2xl text-[var(--ink)]">
                  Bezorging en afhalen
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Wij bezorgen in Almere en afhalen is mogelijk op afspraak.
                </p>
              </div>

              <div className="rounded-[20px] bg-white/85 p-5">
                <h3 className="font-display text-2xl text-[var(--ink)]">
                  Betaling
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Na bevestiging ontvang je de betaalinformatie. Wij werken het
                  liefst met betaling vooraf, zodat alles duidelijk en snel geregeld is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6 card-shadow md:p-8">
          <h2 className="font-display text-4xl text-[var(--ink)] md:text-5xl">
            Kies wat past bij jouw planning
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {planningOptions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)]">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 font-display text-2xl text-[var(--ink)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="pt-6 md:pt-8">
        <div className="rounded-[28px] bg-[var(--brand)] px-6 py-10 text-white card-shadow md:px-10 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                Klaar om te bestellen?
              </h2>
              <p className="mt-3 text-base leading-8 text-white/85 md:text-lg">
                Stuur je bestelling via WhatsApp door en wij helpen je zo snel
                mogelijk verder.
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