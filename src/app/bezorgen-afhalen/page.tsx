import { siteConfig } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";

export default function BezorgingAfhalenPage() {
  const whatsappUrl = buildWhatsAppUrl({
    phone: siteConfig.whatsappNumber,
    message: siteConfig.whatsappDefaultMessage,
  });

  return (
    <>
      <PageHero
        title="Bezorging & Afhalen"
        description="Wij bezorgen in Almere en afhalen is mogelijk op afspraak. Zo kies je wat het beste past bij jouw planning."
        primaryAction={{
          label: "Bestel via WhatsApp",
          href: whatsappUrl,
        }}
      />

      <Section>
        <div className="max-w-4xl">
          <p className="text-base leading-8 text-[var(--muted)]">
            Bij Familietafel Almere draait het om gemak en duidelijkheid. Daarom houden we bezorging en afhalen overzichtelijk. Na je bestelling laten we precies weten wanneer je bestelling klaarstaat of bezorgd wordt.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6 card-shadow md:p-8">
            <h2 className="font-display text-4xl text-[var(--ink)]">
              Bezorging in Almere
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Wij bezorgen lokaal in Almere op vaste momenten. Zo blijft het voor jou duidelijk en voor ons goed georganiseerd.
            </p>

            {/* EINDVERSIE: vul hier je echte bezorgdagen, tijdsloten en kosten in */}
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
              <li>Bezorgdagen: nog invullen</li>
              <li>Tijdsloten: nog invullen</li>
              <li>Bezorgkosten: nog invullen</li>
              <li>Minimale bestelwaarde: nog invullen</li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-2)] p-6 card-shadow md:p-8">
            <h2 className="font-display text-4xl text-[var(--ink)]">
              Afhalen op afspraak
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Liever zelf ophalen? Dat kan op afspraak. Wij zorgen dat je bestelling netjes klaarstaat, zodat je snel weer door kunt.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6 card-shadow md:p-8">
          <h2 className="font-display text-4xl text-[var(--ink)] md:text-5xl">
            Kies wat past bij jouw planning
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Warm",
                text: "Voor vandaag en direct klaar om van te genieten.",
              },
              {
                title: "Koelvers",
                text: "Handig voor morgen of later in de week.",
              },
              {
                title: "Diepvries",
                text: "Voor voorraad thuis op drukke dagen.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <h3 className="font-display text-3xl text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-2)] p-6 card-shadow md:p-8">
          <h2 className="font-display text-4xl text-[var(--ink)]">
            Duidelijk en makkelijk geregeld
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
            Na je bestelling laten we weten wanneer je maaltijd bezorgd wordt of klaarstaat om af te halen. Zo weet je precies waar je aan toe bent.
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
        </div>
      </Section>
    </>
  );
}