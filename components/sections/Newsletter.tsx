 "use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, staggerContainer, textReveal, useMotionSafeProps } from "../animations";
import { Container } from "../layout/Container";
import { PrimaryButton } from "../ui/PrimaryButton";

export function Newsletter() {
  const motionSafe = useMotionSafeProps();

  return (
    <motion.section
      id="contato"
      className="bg-white py-12 sm:py-16 lg:py-20 scroll-mt-20"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...motionSafe}
    >
      <Container className="flex flex-col items-center gap-6 sm:gap-8 text-center">
        <motion.span className="text-[11px] uppercase tracking-[0.25em] text-muted" variants={textReveal()}>
          Newsletter
        </motion.span>
        <motion.h3 className="font-serif text-3xl sm:text-4xl leading-tight text-[#111111]" variants={fadeInUp(0.06)}>
          Inscreva-se para receber as novidades
        </motion.h3>
        <motion.form
          className="flex w-full max-w-4xl flex-wrap items-center justify-center gap-4"
          variants={slideInLeft(0.08)}
        >
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="h-12 w-full max-w-[260px] border border-[#d9d9d5] bg-white px-4 text-sm tracking-wide focus:border-primary focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="h-12 flex-1 min-w-[200px] border border-[#d9d9d5] bg-white px-4 text-sm tracking-wide focus:border-primary focus:outline-none"
          />
          <PrimaryButton className="w-[170px]" type="submit">
            Inscrever
          </PrimaryButton>
        </motion.form>
      </Container>
    </motion.section>
  );
}
