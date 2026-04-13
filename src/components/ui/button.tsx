import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  className?: string;
  target?: string;
  rel?: string;
};

const base =
  "inline-flex h-12 items-center justify-center rounded-[14px] px-5 text-sm md:text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30";

const variants = {
  primary:
    "bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] shadow-[0_12px_24px_rgba(53,92,75,0.18)]",
  secondary:
    "bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] shadow-[0_12px_24px_rgba(201,110,79,0.18)]",
  outline:
    "border border-[var(--border)] bg-white/80 text-[var(--ink)] hover:bg-[var(--surface)]",
  whatsapp:
    "bg-[var(--success)] text-white hover:bg-[var(--success-dark)] shadow-[0_12px_24px_rgba(37,211,102,0.20)]",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  target,
  rel,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}