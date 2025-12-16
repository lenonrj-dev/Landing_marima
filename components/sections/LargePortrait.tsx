 "use client";

import { motion } from "framer-motion";
import { imageReveal, slideInRight, staggerContainer, useMotionSafeProps } from "../animations";
import { Container } from "../layout/Container";

export function LargePortrait() {
  const motionSafe = useMotionSafeProps();

  return (
    <motion.section
      className="bg-body py-28"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...motionSafe}
    >
      <Container className="flex justify-center">
        <motion.div className="w-full max-w-[720px] overflow-hidden" variants={slideInRight()}>
          <motion.img
            src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765797922/3_2_obi5sw.png"
            alt="Statement coat portrait"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            style={{ aspectRatio: "2.6 / 4" }}
            variants={imageReveal()}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>
      </Container>
    </motion.section>
  );
}
