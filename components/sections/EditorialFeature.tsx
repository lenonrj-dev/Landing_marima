 "use client";

import { motion } from "framer-motion";
import { fadeInUp, imageReveal, slideInLeft, slideInRight, staggerContainer, useMotionSafeProps } from "../animations";
import { Container } from "../layout/Container";
import { PrimaryButton } from "../ui/PrimaryButton";
import { SectionTitle } from "../ui/SectionTitle";

export function EditorialFeature() {
  const motionSafe = useMotionSafeProps();

  return (
    <motion.section
      className="bg-body py-12 sm:py-16 lg:py-20"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...motionSafe}
    >
      <Container className="grid items-center gap-10 md:gap-12 lg:grid-cols-2">
        <motion.div className="relative" variants={slideInLeft()}>
          <motion.div className="overflow-hidden" variants={imageReveal()}>
            <img
              src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765658296/DSC09945_elqjsl.png"
              alt="Editorial look"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              style={{ aspectRatio: "3 / 4" }}
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-10 -right-12 w-2/5 min-w-[160px] overflow-hidden border border-white/70 bg-white"
            variants={imageReveal(0.08)}
          >
            <img
              src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765655178/02_1_gkj4ic.png"
              alt="Editorial detail"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              style={{ aspectRatio: "4 / 6" }}
            />
          </motion.div>
        </motion.div>
        <motion.div className="lg:ml-12 xl:ml-20 flex min-w-0 flex-col gap-6" variants={slideInRight(0.05)}>
          <SectionTitle
            eyebrow="Moda Athleisure"
            title={
              <>
                Aproveita essa Oferta! <br /> Top e Short <br /> Por Apenas: R$ 126,00
              </>
            }
            description="Looks curados que misturam alfaiataria refinada, silhuetas femininas e paletas terrosas para um guarda-roupa com inspiracao editorial."
          />
          <motion.div variants={fadeInUp(0.1)}>
            <PrimaryButton className="w-[180px]" href="/apresentacao">
              Descubra mais
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
