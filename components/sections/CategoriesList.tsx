 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, imageReveal, slideInLeft, slideInRight, staggerContainer, textReveal, useMotionSafeProps } from "../animations";
import { Container } from "../layout/Container";
import { interactiveClasses } from "../ui/interactive";

const categories = ["Top", "Croped", "Regata", "Macacao", "Short", "Calca"];

export function CategoriesList() {
  const motionSafe = useMotionSafeProps();

  return (
    <motion.section
      className="bg-body py-24"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...motionSafe}
    >
      <Container>
        <motion.div className="grid items-start gap-10 lg:grid-cols-3" variants={staggerContainer(0.08)}>
          <motion.div className="overflow-hidden" variants={slideInLeft()}>
            <motion.img
              src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765798027/CoresFria_b94d8e.png"
              alt="Category look left"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover "
              style={{ aspectRatio: "4 / 5" }}
              variants={imageReveal()}
            />
          </motion.div>
          <motion.div className="ml-15 flex flex-col items-start gap-6" variants={fadeInUp(0.05)}>
            <motion.span className="text-[11px] uppercase tracking-[0.25em] text-muted" variants={textReveal(0.06)}>
              Categorias
            </motion.span>
            <motion.div className="space-y-2" variants={staggerContainer(0.05)}>
              {categories.map((category, idx) => (
                <motion.div key={category} className="font-serif text-3xl leading-tight text-[#111111]" variants={fadeInUp(0.05 * idx)}>
                  {category}
                </motion.div>
              ))}
            </motion.div>
            <Link
              href="/catalogo"
              className={`${interactiveClasses} px-0 text-sm uppercase tracking-[0.2em] text-primary hover:text-[#9f7558] focus-visible:ring-offset-body`}
            >
              - Ver Tudo Na Loja -
            </Link>
          </motion.div>
          <motion.div className="overflow-hidden" variants={slideInRight()}>
            <motion.img
              src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765798030/SeriedeLancamento_zprs9t.png"
              alt="Category look right"
              loading="lazy"
              decoding="async"
              className="mt-60 h-full w-full object-cover"
              style={{ aspectRatio: "4 / 6" }}
              variants={imageReveal(0.08)}
            />
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
