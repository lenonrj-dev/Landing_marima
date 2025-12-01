"use client";

import type { Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const baseTransition = { duration: 0.45, ease: "easeOut" as const };

export const fadeInUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ...baseTransition, delay } },
});

export const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ...baseTransition, delay } },
});

export const slideInLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { ...baseTransition, delay } },
});

export const slideInRight = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { ...baseTransition, delay } },
});

export const scaleIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { ...baseTransition, delay } },
});

export const staggerContainer = (stagger = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

export function useMotionSafeProps(opts?: {
  viewportAmount?: number;
  delay?: number;
}): {
  initial?: string | boolean;
  animate?: string;
  whileInView?: string;
  viewport?: { once: boolean; amount: number };
} {
  const reduce = useReducedMotion();
  if (reduce) return {};
  return {
    initial: "visible",
    animate: undefined,
    whileInView: undefined,
    viewport: undefined,
  };
}
