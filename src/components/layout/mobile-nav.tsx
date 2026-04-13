"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type MobileNavProps = {
  items: { label: string; href: string }[];
  whatsappUrl: string;
};

export function MobileNav({ items, whatsappUrl }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-white text-[var(--ink)] md:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu size={20} />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] bg-black/25 md:hidden">
          <div className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-[var(--surface)] p-5">
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl text-[var(--brand)]">
                Familietafel
              </span>

              <button
                type="button"
                aria-label="Sluit menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-white text-[var(--ink)]"
                onClick={() => setOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-[var(--ink)] hover:bg-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6">
              <Button
                href={whatsappUrl}
                variant="whatsapp"
                className="w-full"
                target="_blank"
                rel="noreferrer"
              >
                Bestel via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}