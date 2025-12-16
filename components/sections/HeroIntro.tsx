"use client";

import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer, textReveal, useMotionSafeProps } from "../animations";
import { Container } from "../layout/Container";

export function HeroIntro() {
  const motionSafe = useMotionSafeProps();

  return (
    <motion.section
      id="top"
      className="bg-body py-12 sm:py-16 lg:py-20"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...motionSafe}
    >
      <Container className="flex flex-col items-center gap-4 text-center">
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d9d9d5] bg-white"
          variants={scaleIn()}
        >
          <img
            src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764596497/MLogoCorBrancaSF_csod7c.png"
            alt="Marima"
            loading="lazy"
            decoding="async"
            className="h-12 w-12 object-contain"
          />
        </motion.div>
        <motion.span className="text-[11px] uppercase tracking-[0.25em] text-muted" variants={textReveal(0.05)}>
          Fitness / Athleisure 2025
        </motion.span>
        <motion.h1
          className="max-w-3xl font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#111111]"
          variants={fadeInUp(0.1)}
        >
          Um visual luxuoso e contemporaneo <span className="italic">pensado</span> para cada mulher que veste Marima.
        </motion.h1>
      </Container>
    </motion.section>
  );
}
