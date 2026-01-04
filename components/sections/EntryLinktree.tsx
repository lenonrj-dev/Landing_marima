"use client";

import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer, textReveal, useMotionSafeProps } from "../animations";
import { PrimaryButton } from "../ui/PrimaryButton";

type EntryLinktreeProps = {
  whatsappNumber: string;
};

const storeUrl = "https://usemarima.com.br";
const promotionsUrl = "/pagina-de-promocoes";
const logoUrl = "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764596497/MLogoCorBrancaSF_csod7c.png";
const defaultWhatsAppMessage = "Ola! Vim pelo site da Marima e quero saber das promocoes.";

export function EntryLinktree({ whatsappNumber }: EntryLinktreeProps) {
  const motionSafe = useMotionSafeProps({ viewportAmount: 0.6 });
  const getWhatsAppLink = (message: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.section
      className="w-full max-w-sm sm:max-w-md"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      {...motionSafe}
    >
      <motion.div
        className="flex flex-col items-center gap-4 rounded-3xl border border-zinc-200 bg-white px-6 py-8 text-center shadow-sm sm:px-8"
        variants={staggerContainer(0.08)}
      >
        <motion.div
          className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d9d9d5] bg-white shadow-sm"
          variants={scaleIn(0.02)}
        >
          <img
            src={logoUrl}
            alt="Marima"
            loading="lazy"
            decoding="async"
            className="h-12 w-12 object-contain"
          />
        </motion.div>
        <motion.span className="text-[11px] uppercase tracking-[0.25em] text-muted" variants={textReveal(0.04)}>
          Fitness / Athleisure 2026
        </motion.span>
        <motion.h1
          className="font-serif text-2xl sm:text-3xl leading-tight text-[#111111]"
          variants={fadeInUp(0.06)}
        >
          Sua entrada para a Marima Fitness.
        </motion.h1>
        <motion.p className="text-sm sm:text-base text-muted" variants={fadeInUp(0.08)}>
          Acesso rapido a loja, WhatsApp e promocoes exclusivas da colecao atual.
        </motion.p>
        {/* PrimaryButton base uses text-white; force default text to black here to avoid white-on-white. */}
        <motion.div className="mt-4 flex w-full flex-col gap-3" variants={staggerContainer(0.06)}>
          <motion.div variants={fadeInUp(0.1)}>
            <PrimaryButton
              className="min-h-[48px] h-14 w-full text-xs sm:text-sm bg-white !text-[#111111] border border-[#111111]/30 shadow-sm transition-colors duration-200 hover:bg-[#111111] hover:!text-white hover:border-[#111111] hover:shadow-md focus-visible:bg-[#111111] focus-visible:!text-white focus-visible:border-[#111111]"
              href={storeUrl}
              ariaLabel="Acessar loja virtual Marima"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar Loja Virtual
            </PrimaryButton>
          </motion.div>
          <motion.div variants={fadeInUp(0.12)}>
            <PrimaryButton
              className="min-h-[48px] h-14 w-full text-xs sm:text-sm bg-white !text-[#111111] border border-[#111111]/30 shadow-sm transition-colors duration-200 hover:bg-[#111111] hover:!text-white hover:border-[#111111] hover:shadow-md focus-visible:bg-[#111111] focus-visible:!text-white focus-visible:border-[#111111]"
              href={getWhatsAppLink(defaultWhatsAppMessage)}
              ariaLabel="Falar no WhatsApp da Marima"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </PrimaryButton>
          </motion.div>
          <motion.div variants={fadeInUp(0.14)}>
            <PrimaryButton
              className="min-h-[48px] h-14 w-full text-xs sm:text-sm bg-white !text-[#111111] border border-[#111111]/60 shadow-md transition-colors duration-200 hover:bg-[#111111] hover:!text-white hover:border-[#111111] hover:shadow-lg focus-visible:bg-[#111111] focus-visible:!text-white focus-visible:border-[#111111]"
              href={promotionsUrl}
              ariaLabel="Ver promocoes Marima"
            >
              Ver Promocoes
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
