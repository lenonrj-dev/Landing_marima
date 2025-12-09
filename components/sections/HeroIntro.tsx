"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";

export function HeroIntro() {
  return (
    <motion.section className="bg-body pt-[12%] pb-12 sm:pb-14 sm:pt-[10%]" initial={false}>
      <Container className="flex flex-col items-center gap-4 text-center">
        <motion.div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d9d9d5] bg-white" initial={false}>
          <img
            src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764596497/MLogoCorBrancaSF_csod7c.png"
            alt="Marima"
            loading="lazy"
            className="h-12 w-12 object-contain"
          />
        </motion.div>
        <motion.span className="text-[11px] uppercase tracking-[0.25em] text-muted" initial={false}>
          Fitness / Athleisure 2025
        </motion.span>
        <motion.h1 className="max-w-3xl font-serif text-[32px] sm:text-[40px] leading-tight text-[#111111]" initial={false}>
          Um visual luxuoso e contemporâneo <span className="italic">pensado</span> para cada mulher que veste Marima.
        </motion.h1>
      </Container>
    </motion.section>
  );
}
