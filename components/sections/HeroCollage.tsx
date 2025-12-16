"use client";

import { motion } from "framer-motion";
import { imageReveal, slideInRight, staggerContainer, useMotionSafeProps } from "../animations";
import { Container } from "../layout/Container";

const collage = [
  { src: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765655086/01_1_nkav71.png", width: 260, height: 430, left: -350, top: 24 },
  { src: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765658296/DSC09945_elqjsl.png", width: 380, height: 550, left: 0, top: -10 },
  { src: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765655307/03_2_fnmb3w.png", width: 265, height: 440, left: 450, top: 32 },
  { src: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765797188/1_wmhpvx.png", width: 340, height: 480, left: 770, top: 70 },
  { src: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1765656138/05_rjy8fi.png", width: 230, height: 380, left: 1170, top: 40 },
];

export function HeroCollage() {
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
      <Container>
        {/* Desktop absolute collage so each image is isolated but centered as a group */}
        <div className="relative hidden h-[620px] w-full max-w-[1160px] overflow-hidden lg:block mx-auto">
          {collage.map((item, idx) => (
            <motion.div
              key={item.src}
              className="absolute overflow-hidden"
              style={{
                left: `${item.left}px`,
                top: `${item.top}px`,
                width: `${item.width}px`,
                height: `${item.height}px`,
              }}
              variants={imageReveal(0.04 * idx)}
            >
              <img src={item.src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Mobile/tablet fallback grid to keep responsiveness simple */}
        <motion.div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden" variants={slideInRight(0.08)}>
          {collage.map((item, idx) => (
            <motion.div
              key={item.src}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
              variants={imageReveal(0.05 * idx)}
            >
              <img src={item.src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
