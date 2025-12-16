"use client";

import type { Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const baseTransition = { duration: 0.55, ease };

export const fadeInUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { ...baseTransition, delay } },
});

export const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ...baseTransition, delay } },
});

export const slideInLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { ...baseTransition, delay } },
});

export const slideInRight = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { ...baseTransition, delay } },
});

export const scaleIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1, transition: { ...baseTransition, delay } },
});

export const textReveal = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { ...baseTransition, delay } },
});

export const imageReveal = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 1.06, clipPath: "inset(12% 12% 12% 12%)" },
  show: { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)", transition: { ...baseTransition, delay } },
});

export const hoverLift = { whileHover: { y: -2, scale: 1.01 }, transition: { duration: 0.18, ease } };
export const pressTap = { whileTap: { scale: 0.98 } };

export const staggerContainer = (stagger = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

export function useMotionSafeProps(opts?: {
  viewportAmount?: number;
  delay?: number;
}): {
  initial?: string;
  whileInView?: string;
  viewport?: { once: boolean; amount: number };
} {
  const reduce = useReducedMotion();
  if (reduce) return {};
  return {
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: opts?.viewportAmount ?? 0.25 },
  };
}
