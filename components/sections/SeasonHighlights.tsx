"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { fadeInUp, imageReveal, scaleIn, slideInLeft, slideInRight, staggerContainer, useMotionSafeProps } from "../animations";
import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { interactiveClasses, interactiveIcon, subtleMotion } from "../ui/interactive";

const highlights = [
  {
    title: "Top Fitness Nadador Bege",
    subtitle: "Destaque de 2025/2026",
    image: "https://res.cloudinary.com/dxeooztro/image/upload/v1764856048/products/m6iptsz9chci4w1snmwu.png",
    price: "54,00",
    sizes: [
      { label: "P", href: "https://seguro.usemarima.com.br/pay/H7UP4SKFFW" },
      { label: "M", href: "https://seguro.usemarima.com.br/pay/BQEWFETTEW" },
      { label: "G", href: "https://seguro.usemarima.com.br/pay/NOOIMCHW8A" },
    ],
  },
  {
    title: "Top Fitness Alca Fina Preto",
    subtitle: "Destaque de 2025/2026",
    image: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765797357/2_whlwgl.png",
    price: "54,00",
    sizes: [
      { label: "P", href: "https://seguro.usemarima.com.br/pay/E70HZ9DYRA" },
      { label: "M", href: "https://seguro.usemarima.com.br/pay/F52CFPW0SQ" },
      { label: "G", href: "https://seguro.usemarima.com.br/pay/EJKT1CU2HQ" },
    ],
  },
  {
    title: "Calca Legging Basica Preta",
    subtitle: "Destaque de 2025/2026",
    image: "https://res.cloudinary.com/dxeooztro/image/upload/v1764856106/products/khzextadihajlzgrlv6y.png",
    price: "90,00",
    sizes: [
      { label: "P", href: "https://seguro.usemarima.com.br/pay/RG7XS1ODCA" },
      { label: "M", href: "https://seguro.usemarima.com.br/pay/PFBFGRCYG" },
      { label: "G", href: "https://seguro.usemarima.com.br/pay/RSP84NTV1W" },
    ],
  },
  {
    title: "Calca Legging Basica Bege",
    subtitle: "Destaque de 2025/2026",
    image: "https://res.cloudinary.com/dxeooztro/image/upload/v1764855991/products/csbtyacmeqjuy5j3pmhf.png",
    price: "90,00",
    sizes: [
      { label: "P", href: "https://seguro.usemarima.com.br/pay/DNWAHRIRTW" },
      { label: "M", href: "https://seguro.usemarima.com.br/pay/N78WOLWQJW" },
      { label: "G", href: "https://seguro.usemarima.com.br/pay/QIZNBUBDYQ" },
    ],
  },
];

export function SeasonHighlights() {
  const motionSafe = useMotionSafeProps();
  const [startIndex, setStartIndex] = useState(0);
  const total = highlights.length;
  const visibleCount = Math.min(3, total);
  const canSlide = total > 3;

  const visibleHighlights = useMemo(() => {
    if (total === 0) return [];
    return Array.from({ length: visibleCount }, (_, i) => highlights[(startIndex + i) % total]);
  }, [startIndex, total, visibleCount]);

  const handleNext = () => {
    if (!total) return;
    setStartIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    if (!total) return;
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <motion.section
      id="catalogo"
      className="bg-body py-12 sm:py-16 lg:py-20 scroll-mt-20"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...motionSafe}
    >
      <Container>
        <motion.div className="mb-10 sm:mb-12 flex items-center justify-between gap-4" variants={slideInLeft(0.05)}>
          <SectionTitle
            eyebrow="Destaques"
            title="Explore nossos destaques da temporada"
            className="!mb-0"
          />
          <div className="hidden items-center gap-3 md:flex">
            <motion.button
              type="button"
              className={`${interactiveClasses} h-10 w-10 rounded-full border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white disabled:cursor-not-allowed disabled:opacity-40`}
              aria-label="Anterior destaque"
              onClick={handlePrev}
              disabled={!canSlide}
              {...subtleMotion}
            >
              <ArrowLeft className={`h-4 w-4 ${interactiveIcon}`} strokeWidth={1.5} />
            </motion.button>
            <motion.button
              type="button"
              className={`${interactiveClasses} h-10 w-10 rounded-full border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white disabled:cursor-not-allowed disabled:opacity-40`}
              aria-label="Proximo destaque"
              onClick={handleNext}
              disabled={!canSlide}
              {...subtleMotion}
            >
              <ArrowRight className={`h-4 w-4 ${interactiveIcon}`} strokeWidth={1.5} />
            </motion.button>
          </div>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${startIndex}-${total}`}
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, x: -32, transition: { duration: 0.35, ease: "easeIn" } }}
          >
            {visibleHighlights.map((item, idx) => (
              <motion.div
                key={`${item.title}-${item.image}`}
                className="flex min-w-0 flex-col gap-4 rounded-2xl"
                variants={scaleIn(0.05 * idx)}
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute left-3 top-3 z-10 inline-flex items-center rounded-full bg-[#111111] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm">
                    10% off
                  </div>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                    style={{ aspectRatio: "3 / 4" }}
                    variants={imageReveal()}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                  />
                  <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent px-4 pb-3 pt-8 text-white">
                    <div className="text-[13px] uppercase tracking-[0.18em] text-white/90">Por apenas</div>
                    <div className="text-2xl font-semibold">R$ {item.price}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <motion.h4 className="font-serif text-xl sm:text-2xl text-[#111111]" variants={fadeInUp(0.06)}>
                      {item.title}
                    </motion.h4>
                    <motion.p className="text-sm uppercase tracking-[0.18em] text-muted" variants={fadeInUp(0.08)}>
                      {item.subtitle}
                    </motion.p>
                  </div>
                  <motion.div className="flex flex-wrap gap-2" variants={fadeInUp(0.1)}>
                    {item.sizes?.map((size) => (
                      <motion.a
                        key={`${item.title}-${size.label}`}
                        href={size.href}
                        className={`${interactiveClasses} h-9 rounded-full border border-[#111111] px-3 text-xs uppercase tracking-[0.18em] bg-white text-[#111111]`}
                        {...subtleMotion}
                      >
                        {size.label}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </motion.section>
  );
}
