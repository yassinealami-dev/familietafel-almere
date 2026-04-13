import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

type PageHeroProps = {
  title: string;
  description: string;
  primaryAction?: { label: string; href: string };
};

export function PageHero({
  title,
  description,
  primaryAction,
}: PageHeroProps) {
  return (
    <Section className="pb-6 pt-12 md:pb-8 md:pt-16">
      <div className="rounded-[28px] border border-[var(--border)] bg-white/70 p-8 card-shadow md:p-12">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
            {description}
          </p>

          {primaryAction ? (
            <div className="mt-8">
              <Button href={primaryAction.href} variant="whatsapp">
                {primaryAction.label}
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}