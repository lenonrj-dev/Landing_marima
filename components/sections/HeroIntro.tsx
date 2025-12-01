"use client";

import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer, useMotionSafeProps } from "../animations";
import { Container } from "../layout/Container";

export function HeroIntro() {
  const motionSafe = useMotionSafeProps({ viewportAmount: 0.4 });

  return (
    <motion.section className="bg-body py-16" variants={staggerContainer(0.18)} {...motionSafe}>
      <Container className="flex flex-col items-center gap-4 text-center">
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d9d9d5] bg-white"
          variants={scaleIn()}
        >
          <img
            src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764596497/MLogoCorBrancaSF_csod7c.png"
            alt="Marima"
            loading="lazy"
            className="h-12 w-12 object-contain"
          />
        </motion.div>
        <motion.span className="text-[11px] uppercase tracking-[0.25em] text-muted" variants={fadeInUp(0.1)}>
          Fitness / Athleisure 2025
        </motion.span>
        <motion.h1
          className="max-w-4xl font-serif text-[50px] leading-tight text-[#111111]"
          variants={fadeInUp(0.2)}
        >
          Um visual luxuoso e contemporâneo <span className="italic">pensado</span> para cada mulher que veste Marima.
        </motion.h1>
      </Container>
    </motion.section>
  );
}
