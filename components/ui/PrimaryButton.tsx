 "use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { interactiveClasses, interactiveRipple, primaryMotion } from "./interactive";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  ariaLabel?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

const base =
  "uppercase tracking-[0.2em] text-[11px] px-7 h-12 bg-[#111111] text-white rounded-full border border-transparent";

const MotionLink = motion(Link);

export function PrimaryButton({
  children,
  href,
  className,
  type = "button",
  loading = false,
  ariaLabel,
  target,
  rel,
}: PrimaryButtonProps) {
  const reduce = useReducedMotion();
  const hoverProps = reduce ? {} : primaryMotion;
  const content = (
    <>
      <span className={loading ? "invisible" : "flex items-center gap-2"}>{children}</span>
      {loading ? (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden />
          <span className="sr-only">Carregando</span>
        </span>
      ) : null}
    </>
  );

  const combined = `${interactiveClasses} ${interactiveRipple} ${base} ${className ?? ""}`;

  if (href) {
    const isExternal = href.startsWith("http");
    const linkContent = (
      <motion.a
        href={href}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={rel ?? (isExternal ? "noreferrer" : undefined)}
        className={combined}
        {...hoverProps}
        initial={false}
        aria-label={ariaLabel}
        tabIndex={0}
      >
        {content}
      </motion.a>
    );

    if (isExternal) return linkContent;

    return (
      <MotionLink
        href={href}
        className={combined}
        {...hoverProps}
        initial={false}
        aria-label={ariaLabel}
        tabIndex={0}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      className={combined}
      {...hoverProps}
      initial={false}
      aria-label={ariaLabel}
      disabled={loading}
      tabIndex={0}
    >
      {content}
    </motion.button>
  );
}
