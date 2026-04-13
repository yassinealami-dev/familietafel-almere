import Link from "next/link";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  const whatsappUrl = buildWhatsAppUrl({
    phone: siteConfig.whatsappNumber,
    message: siteConfig.whatsappDefaultMessage,
  });

  return (
    <footer className="mt-14 bg-[var(--brand)] text-[var(--background)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4 md:px-8">
        <div>
          <h3 className="font-display text-3xl">Familietafel Almere</h3>
          <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">
            Huiselijke maaltijden voor gezinnen in Almere. Warm, koelvers of
            diepvries. Eenvoudig besteld via WhatsApp.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            Navigatie
          </h4>
          <ul className="mt-4 space-y-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            Extra
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/faq-allergenen" className="hover:text-white">
                FAQ & Allergenen
              </Link>
            </li>
            <li>
              <span className="text-white/80">Bezorging in Almere</span>
            </li>
            <li>
              <span className="text-white/80">Afhalen op afspraak</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Bestel via WhatsApp
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}