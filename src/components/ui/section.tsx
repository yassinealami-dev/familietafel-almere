import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`px-5 py-10 md:px-8 md:py-14 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}