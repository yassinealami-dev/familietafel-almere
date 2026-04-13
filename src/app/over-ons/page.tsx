import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        title="Over ons"
        description="Familietafel Almere is er voor gezinnen en huishoudens die behoefte hebben aan gemak rond etenstijd."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6 card-shadow md:p-8">
            <h2 className="font-display text-4xl text-[var(--ink)]">
              Waarom Familietafel Almere bestaat
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Familietafel Almere is ontstaan vanuit een simpel idee: gezinnen en huishoudens helpen met maaltijden die rust geven aan het einde van een drukke dag. Niet iedereen heeft elke dag tijd of energie om te koken, maar iedereen wil wel iets goeds op tafel zetten.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Daarom kiezen wij voor een overzichtelijk aanbod van huiselijke maaltijden die warm, koelvers of diepvries beschikbaar zijn. Zo maken we het makkelijker om zonder stress iets goeds in huis te halen.
            </p>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-2)] p-6 card-shadow md:p-8">
            <h2 className="font-display text-4xl text-[var(--ink)]">
              Wat je van ons mag verwachten
            </h2>

            <div className="mt-5 space-y-5">
              <div>
                <h3 className="font-display text-2xl text-[var(--ink)]">
                  Huiselijke maaltijden
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Vertrouwde smaken en duidelijke porties.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl text-[var(--ink)]">
                  Praktisch gemak
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Makkelijk kiezen, makkelijk bestellen en makkelijk op tafel.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl text-[var(--ink)]">
                  Vriendelijke service
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Direct contact en duidelijke communicatie.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl text-[var(--ink)]">
                  Betrouwbaarheid
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Warm voor vandaag, handig voor later en overzichtelijk geregeld.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6 card-shadow md:p-8">
          <h2 className="font-display text-4xl text-[var(--ink)] md:text-5xl">
            Voor gezinnen, drukke dagen en samen aan tafel
          </h2>

          <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--muted)]">
            Wij geloven dat eten niet ingewikkeld hoeft te zijn. Soms wil je gewoon dat het geregeld is. Een warme maaltijd voor vanavond, een family tray voor het gezin of een paar diepvriesmaaltijden voor later in de week. Onze focus ligt op rust, gemak en maaltijden die passen in het ritme van thuis.
          </p>
        </div>
      </Section>

      <Section>
        <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-2)] p-6 card-shadow md:p-8">
          <h2 className="font-display text-4xl text-[var(--ink)]">
            Lokaal, betrokken en overzichtelijk
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
            Als lokaal merk in Almere kiezen we voor korte lijnen en een eenvoudige bestelervaring via WhatsApp. Zo blijft contact persoonlijk en weet je precies wat je kunt verwachten.
          </p>

          <div className="mt-8">
            <Button href="/menu" variant="secondary">
              Bekijk het menu
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}