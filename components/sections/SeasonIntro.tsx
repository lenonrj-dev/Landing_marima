"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeInUp, imageReveal, scaleIn, slideInRight, staggerContainer, useMotionSafeProps } from "../animations";
import { Container } from "../layout/Container";
import { PrimaryButton } from "../ui/PrimaryButton";
import { interactiveClasses, subtleMotion } from "../ui/interactive";

const productImages = [
  { src: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765655178/02_1_gkj4ic.png", alt: "Short Fitness Estilo Recorte Preto - frente" },
  { src: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765657046/07_oi6gh3.png", alt: "Short Fitness Estilo Recorte Preto - detalhe" },
  { src: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765656922/06_a3x28w.png", alt: "Short Fitness Estilo Recorte Preto - lifestyle" },
  { src: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765657155/08_l9fztx.png", alt: "Short Fitness Estilo Recorte Preto - treino" },
];

const productSizes = [
  { label: "P", href: "https://seguro.usemarima.com.br/pay/COOGXXDCBG" },
  { label: "M", href: "https://seguro.usemarima.com.br/pay/GBOGDZAYW" },
  { label: "G", href: "https://seguro.usemarima.com.br/pay/C0GEGGE7A" },
];

export function SeasonIntro() {
  const motionSafe = useMotionSafeProps({ viewportAmount: 0.35 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const totalImages = productImages.length;
  const safeIndex = totalImages ? currentIndex % totalImages : 0;
  const currentImage = productImages[safeIndex];
  const currentSizeHref = productSizes.find((s) => s.label === selectedSize)?.href;

  useEffect(() => {
    if (totalImages === 0) return;
    const timer = setInterval(() => setCurrentIndex((prev) => (prev + 1) % totalImages), 3800);
    return () => clearInterval(timer);
  }, [totalImages]);

  return (
    <motion.section
      id="colecao"
      className="bg-body py-12 sm:py-16 lg:py-20 scroll-mt-20"
      variants={staggerContainer(0.15)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...motionSafe}
    >
      <Container className="grid items-start gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[0.55fr_0.45fr]">
        <motion.div className="space-y-4 sm:space-y-6 pt-2 min-w-0" variants={staggerContainer(0.08)}>
          <motion.span className="text-xs uppercase tracking-[0.25em] text-muted" variants={fadeInUp()}>
            Colecoes
          </motion.span>
          <motion.h3
            className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-[#111111]"
            variants={fadeInUp(0.05)}
          >
            Colecao <br /> Fitness <br /> 2025
          </motion.h3>
          <motion.p className="max-w-[65ch] text-base md:text-lg leading-relaxed text-muted" variants={fadeInUp(0.1)}>
            Descubra silhuetas que valorizam seu corpo e tons naturais pensados para um visual fitness luxuoso e
            contemporaneo. Vista Marima e sinta a diferenca em cada treino - escolha o tamanho e garanta seu look.
          </motion.p>
          <motion.div variants={fadeInUp(0.18)} className="flex flex-wrap gap-2">
            {productSizes.map((size) => {
              const isSelected = size.label === selectedSize;
              return (
                <motion.button
                  key={`size-${size.label}`}
                  type="button"
                  onClick={() => setSelectedSize(size.label)}
                  className={`${interactiveClasses} h-10 rounded-full border px-4 text-xs uppercase tracking-[0.2em] ${
                    isSelected ? "border-[#111111] bg-[#111111] text-white" : "border-[#111111] bg-white text-[#111111]"
                  }`}
                  aria-pressed={isSelected}
                  {...subtleMotion}
                >
                  {size.label}
                </motion.button>
              );
            })}
          </motion.div>
          <AnimatePresence>
            {currentSizeHref ? (
              <motion.div
                key={currentSizeHref}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full sm:w-auto"
              >
                <PrimaryButton className="w-full sm:w-auto px-6" href={currentSizeHref}>
                  Adquirir peca!
                </PrimaryButton>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
        <motion.div className="relative" variants={staggerContainer(0.12)}>
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            style={{ aspectRatio: "3 / 4" }}
            variants={scaleIn()}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
                variants={imageReveal()}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.25, ease: "easeIn" } }}
              />
            </AnimatePresence>
          </motion.div>
          {totalImages > 0 && (
            <motion.div
              className="mt-4 flex items-center justify-center gap-2"
              variants={slideInRight()}
              aria-hidden="true"
            >
              {productImages.map((_, index) => (
                <motion.span
                  key={index}
                  className="h-1.5 rounded-full"
                  animate={{
                    width: safeIndex === index ? 20 : 8,
                    backgroundColor: safeIndex === index ? "#111111" : "#d4d4d4",
                    opacity: safeIndex === index ? 0.95 : 0.65,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </motion.section>
  );
}
