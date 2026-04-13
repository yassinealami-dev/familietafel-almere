import { AlertCircle, Clock3, MessageCircleMore, PackageCheck, Snowflake, Soup } from "lucide-react";

import { siteConfig } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";

export default function FaqAllergenenPage() {
  const whatsappUrl = buildWhatsAppUrl({
    phone: siteConfig.whatsappNumber,
    message: "Hallo, ik heb een vraag over allergenen, bewaren of bestellen.",
  });

  const faqItems = [
    {
      question: "Hoe bestel ik?",
      answer:
        "Bestellen gaat eenvoudig via WhatsApp. Stuur je naam, adres, gerecht, aantal porties, warm/koelvers/diepvries, bezorging of afhalen en gewenste tijd door.",
      icon: MessageCircleMore,
    },
    {
      question: "Bezorgen jullie alleen in Almere?",
      answer:
        "In de eerste fase richten we ons op Almere. Zo houden we bezorging overzichtelijk, lokaal en betrouwbaar.",
      icon: PackageCheck,
    },
    {
      question: "Kan ik ook afhalen?",
      answer:
        "Ja, afhalen is mogelijk op afspraak. Na je bestelling spreken we samen een duidelijk moment af.",
      icon: Clock3,
    },
    {
      question: "Wanneer moet ik bestellen?",
      answer:
        "Warme maaltijden bestel je het liefst op tijd voor dezelfde dag. Family trays en grotere bestellingen plaats je bij voorkeur vooraf.",
      icon: Soup,
    },
    {
      question: "Hoe bewaar ik koelverse maaltijden?",
      answer:
        "Koelverse maaltijden bewaar je altijd gekoeld. In de eindversie vermeld je per product duidelijk de bewaartermijn op verpakking of etiket.",
      icon: Clock3,
    },
    {
      question: "Hoe gebruik ik diepvriesmaaltijden?",
      answer:
        "Diepvriesmaaltijden zijn bedoeld als voorraad voor drukke dagen. In de eindversie voeg je per product duidelijke opwarminstructies en bewaarinformatie toe.",
      icon: Snowflake,
    },
    {
      question: "Hoe zit het met allergenen?",
      answer:
        "Heb je een allergie of twijfel je over ingrediënten? Neem dan altijd vooraf contact met ons op. In de eindversie horen allergenen per product duidelijk te worden bijgehouden en gecommuniceerd.",
      icon: AlertCircle,
    },
  ];

  const infoBlocks = [
    {
      title: "Bewaren",
      text: "Warm is bedoeld voor direct gebruik. Koelvers is handig voor later in de week en diepvries is slim voor voorraad thuis.",
      icon: Clock3,
    },
    {
      title: "Opwarmen",
      text: "Voeg in de eindversie per product duidelijke instructies toe, zodat klanten precies weten wat ze moeten doen.",
      icon: Soup,
    },
    {
      title: "Allergenen",
      text: "Wees hier later heel strak in: per gerecht duidelijk vastleggen wat erin zit en hoe je dit communiceert.",
      icon: AlertCircle,
    },
  ];

  return (
    <>
      <PageHero
        title="FAQ & Allergenen"
        description="Praktische informatie over bestellen, bezorgen, bewaren, opwarmen en allergenen."
        primaryAction={{
          label: "Stel je vraag via WhatsApp",
          href: whatsappUrl,
        }}
      />

      <Section className="pt-2">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base leading-8 text-[var(--muted)] md:text-lg">
            Op deze pagina vind je de belangrijkste praktische informatie. Zo weet
            je snel hoe bestellen werkt en waar je later in de eindversie extra
            duidelijkheid moet geven over bewaren, opwarmen en allergenen.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {infoBlocks.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6 card-shadow md:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)]">
                  <Icon size={20} />
                </div>

                <h2 className="mt-5 font-display text-3xl text-[var(--ink)]">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6 card-shadow md:p-8">
          <h2 className="font-display text-4xl text-[var(--ink)] md:text-5xl">
            Veelgestelde vragen
          </h2>

          <div className="mt-8 grid gap-5">
            {faqItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.question}
                  className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)]">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="font-display text-2xl leading-tight text-[var(--ink)]">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-base leading-8 text-[var(--muted)]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-2)] p-6 card-shadow md:p-8">
            <h2 className="font-display text-4xl text-[var(--ink)] md:text-5xl">
              Belangrijke noot voor de eindversie
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              Zodra je live gaat met echte verkoop, horen bewaarinformatie,
              opwarminstructies en allergeneninformatie per product duidelijk
              geregeld te zijn in je operationele proces en op je verpakking.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
              EINDVERSIE: hier kun je later ook een korte pagina of tabel toevoegen
              met allergenen per gerecht en een vaste bewaarinstructie per categorie.
            </p>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6 card-shadow md:p-8">
            <h2 className="font-display text-4xl text-[var(--ink)]">Nog een vraag?</h2>

            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Twijfel je over ingrediënten, bezorgen, bewaren of bestellen? Stuur
              gewoon een WhatsApp-bericht. Dan kun je snel verder zonder gedoe.
            </p>

            <div className="mt-8">
              <Button href={whatsappUrl} variant="whatsapp" target="_blank" rel="noreferrer">
                Stel je vraag via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}