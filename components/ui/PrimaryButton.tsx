import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

const base =
  "inline-flex items-center justify-center uppercase tracking-[0.2em] text-[11px] px-7 h-12 bg-primary text-white transition-colors duration-200 hover:bg-[#a77b5d]";

export function PrimaryButton({ children, href, className }: PrimaryButtonProps) {
  if (href) {
    return (
      <a href={href} className={`${base} ${className ?? ""}`}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={`${base} ${className ?? ""}`}>
      {children}
    </button>
  );
}
