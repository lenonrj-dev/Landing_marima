 "use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

const base =
  "inline-flex items-center justify-center uppercase tracking-[0.2em] text-[11px] px-7 h-12 bg-[#111111] text-white transition-colors duration-200 hover:bg-[#1f1f1f]";

export function PrimaryButton({ children, href, className }: PrimaryButtonProps) {
  const reduce = useReducedMotion();
  const hoverProps = reduce
    ? {}
    : { whileHover: { y: -2, scale: 1.02 }, whileTap: { scale: 0.98 }, transition: { duration: 0.18 } };

  if (href) {
    return (
      <motion.a href={href} className={`${base} ${className ?? ""}`} {...hoverProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" className={`${base} ${className ?? ""}`} {...hoverProps}>
      {children}
    </motion.button>
  );
}
