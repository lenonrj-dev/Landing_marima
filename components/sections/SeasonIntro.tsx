"use client";

import { motion } from "framer-motion";
import { fadeInUp, scaleIn, slideInRight, staggerContainer, useMotionSafeProps } from "../animations";
import { Container } from "../layout/Container";
import { PrimaryButton } from "../ui/PrimaryButton";

export function SeasonIntro() {
  const motionSafe = useMotionSafeProps({ viewportAmount: 0.35 });

  return (
    <motion.section className="bg-body py-20" variants={staggerContainer(0.15)} {...motionSafe}>
      <Container className="grid items-start gap-12 lg:grid-cols-[0.42fr_0.58fr]">
        <motion.div className="space-y-8 pt-6" variants={staggerContainer(0.08)}>
          <motion.span className="text-[11px] uppercase tracking-[0.25em] text-muted" variants={fadeInUp()}>
            Coleções
          </motion.span>
          <motion.h3 className="font-serif text-4xl leading-[1.15] text-[#111111]" variants={fadeInUp(0.05)}>
            Coleção <br /> Fitness <br /> 2025
          </motion.h3>
          <motion.p className="max-w-md text-base text-muted" variants={fadeInUp(0.1)}>
            Descubra silhuetas que valorizam seu corpo e tons naturais pensados para um visual fitness luxuoso e
            contemporâneo. Vista Marima e sinta a diferença em cada treino — toque no botão abaixo e garanta seu look
            agora.
          </motion.p>
          <motion.div variants={fadeInUp(0.15)}>
            <PrimaryButton className="w-[190px]">Adiquirir Peça!</PrimaryButton>
          </motion.div>
        </motion.div>
        <motion.div className="relative grid grid-cols-[0.9fr_1.1fr] gap-6" variants={staggerContainer(0.12)}>
          <motion.div className="relative self-end z-10" variants={scaleIn()}>
            <img
              src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764606738/Uma_pe%C3%A7a_que_acompanha_todos_os_seus_movimentos_sem_enrolar_sem_apertar_sem_limitar____O_Short_Essential_YOMA_foi_criado_para_valorizar_seu_corpo_com_li_rknvdf.jpg"
              alt="Season detail"
              loading="lazy"
              className="h-full w-full object-cover ml-25 mb-10"
              style={{ aspectRatio: "3 / 4" }}
            />
          </motion.div>
          <motion.div className="relative" variants={slideInRight()}>
            <img
              src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764627200/download_13_hluaen.jpg"
              alt="Season main"
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ aspectRatio: "3 / 4" }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
