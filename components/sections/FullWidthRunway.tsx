"use client";

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, textReveal, useMotionSafeProps } from "../animations";
import { PrimaryButton } from "../ui/PrimaryButton";
import { interactiveClasses, subtleMotion } from "../ui/interactive";

const slides = [
  {
    title: "Conjunto Fitness Top e Calca Legging Basica Preta",
    description: "Pecas esculturais com acabamentos premium. Prepare-se para o spotlight.",
    price: "a partir de R$ 153,00",
    sizes: [
      { label: "P", href: "https://seguro.usemarima.com.br/pay/COOGXXDCBG" },
      { label: "M", href: "https://seguro.usemarima.com.br/pay/GBOGDZAYW" },
      { label: "G", href: "https://seguro.usemarima.com.br/pay/C0GEGGE7A" },
    ],
  },
  {
    title: "Conjunto Fitness Top Alca Fina e Short Recorte Preto",
    description: "Alfaiataria com performance: conforto extremo e caimento impecavel.",
    price: "por R$ 140,00",
    sizes: [
      { label: "P", href: "https://seguro.usemarima.com.br/pay/SZG4V27PCQ" },
      { label: "M", href: "https://seguro.usemarima.com.br/pay/6WLT8ECCA" },
      { label: "G", href: "https://seguro.usemarima.com.br/pay/RWLVEOKO3W" },
    ],
  },
  {
    title: "Conjunto Fitness Top Nadador e Calca Legging Basica Nude",
    description: "Tons neutros, textura sofisticada e versatilidade total para seu dia.",
    price: "combo R$ 153,00",
    sizes: [
      { label: "P", href: "https://seguro.usemarima.com.br/pay/HMUOWLGIQ" },
      { label: "M", href: "https://seguro.usemarima.com.br/pay/T8TSKYJPMA" },
      { label: "G", href: "https://seguro.usemarima.com.br/pay/A26SSCGHAQ" },
    ],
  },
];

const headlineVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, y: -24, transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] as const } },
};

const bgVariants = {
  hidden: { scale: 1.03 },
  show: { scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export function FullWidthRunway() {
  const motionSafe = useMotionSafeProps();
  const [index, setIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("P");

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setSelectedSize("P");
  }, [index]);

  const active = slides[index];
  const activeHref = active.sizes.find((s) => s.label === selectedSize)?.href;

  return (
    <motion.section
      className="bg-body py-12 sm:py-16 lg:py-20"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...motionSafe}
    >
      <div className="mx-auto w-full max-w-[1600px] px-2 sm:px-4 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl aspect-[4/5] sm:aspect-[16/7]"
          variants={slideInRight()}
        >
          <motion.img
            key={index}
            src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765826009/GAB08496_eltovv.png"
            alt="Runway wide banner"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
            variants={bgVariants}
            initial="hidden"
            animate="show"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-4 px-6 py-10 sm:px-10 lg:px-16 xl:px-20 max-w-3xl text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  className="space-y-3 text-white"
                  variants={headlineVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <motion.p className="text-[11px] uppercase tracking-[0.3em] text-white/80" variants={textReveal(0.04)}>
                    Oferta Exclusiva
                  </motion.p>
                  <motion.h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight" variants={fadeInUp(0.08)}>
                    {active.title}
                  </motion.h3>
                  <motion.p className="text-base text-white/85" variants={fadeInUp(0.1)}>
                    {active.description}
                  </motion.p>
                  <motion.div className="text-lg font-semibold" variants={fadeInUp(0.12)}>
                    Por apenas: <span className="text-white text-2xl font-bold">{active.price}</span>
                  </motion.div>
                  <motion.div className="flex flex-wrap gap-2 pt-2" variants={fadeInUp(0.14)}>
                    {active.sizes.map((size) => {
                      const isActiveSize = size.label === selectedSize;
                      return (
                        <motion.button
                          key={`${active.title}-${size.label}`}
                          type="button"
                          onClick={() => setSelectedSize(size.label)}
                          className={`${interactiveClasses} h-10 rounded-full border px-4 text-xs uppercase tracking-[0.2em] ${
                            isActiveSize ? "bg-white text-[#111111] border-white" : "bg-transparent text-white border-white/70"
                          }`}
                          aria-pressed={isActiveSize}
                          {...subtleMotion}
                        >
                          {size.label}
                        </motion.button>
                      );
                    })}
                  </motion.div>
                  <motion.div className="flex flex-wrap gap-3 pt-3" variants={fadeInUp(0.16)}>
                    {activeHref ? (
                      <PrimaryButton className="px-7" href={activeHref}>
                        Garantir agora
                      </PrimaryButton>
                    ) : null}
                    <motion.button
                      type="button"
                      className="group inline-flex items-center gap-2 rounded-full border border-white/70 px-5 py-2.5 text-sm uppercase tracking-[0.16em] text-white backdrop-blur-md transition hover:bg-white hover:text-[#111111]"
                      onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
                      {...subtleMotion}
                    >
                      Ver proxima oferta
                    </motion.button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 flex items-center gap-3 px-2 sm:px-0">
          {slides.map((_, i) => {
            const isActive = i === index;
            return (
              <motion.button
                key={i}
                type="button"
                className="h-2 rounded-full bg-[#111111]/25"
                animate={{
                  width: isActive ? 32 : 10,
                  backgroundColor: isActive ? "#111111" : "rgba(17,17,17,0.25)",
                  opacity: isActive ? 0.95 : 0.6,
                }}
                transition={{ duration: 0.25 }}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
