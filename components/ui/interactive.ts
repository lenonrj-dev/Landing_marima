import type { MotionProps } from "framer-motion";

export const interactiveClasses =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap select-none cursor-pointer transition duration-200 ease-out hover:brightness-110 hover:border-white/25 active:scale-[0.98] active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

export const interactiveIcon =
  "shrink-0 transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-95";

export const interactiveRipple =
  "overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:scale-[0.9] before:rounded-full before:bg-white/10 before:opacity-0 before:transition before:duration-200 hover:before:opacity-100 hover:before:scale-100 active:before:opacity-70";

export const primaryMotion: MotionProps = {
  whileHover: { y: -1, scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.18, ease: "easeOut" },
};

export const subtleMotion: MotionProps = {
  whileHover: { scale: 1.01 },
  whileTap: { scale: 0.985 },
  transition: { duration: 0.18, ease: "easeOut" },
};
