"use client";

import { motion } from "framer-motion";
import { scaleIn, staggerContainer, useMotionSafeProps } from "../animations";
import { Container } from "../layout/Container";

const collage = [
  { src: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764626945/download_9_x4gdep.jpg", width: 260, height: 430, left: -350, top: 24 },
  { src: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764626945/download_10_pcr2vq.jpg", width: 380, height: 550, left: 0, top: -10 },
  { src: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764626945/download_8_y2knts.jpg", width: 265, height: 440, left: 450, top: 32 },
  { src: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764626945/download_11_xkwha4.jpg", width: 340, height: 480, left: 770, top: 70 },
  { src: "https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764626945/download_12_qaftj3.jpg", width: 230, height: 380, left: 1170, top: 40 },
];

export function HeroCollage() {
  const motionSafe = useMotionSafeProps({ viewportAmount: 0.2 });

  return (
    <motion.section className="bg-body pb-20 pt-8 ml-25" variants={staggerContainer(0.1)} {...motionSafe}>
      <Container>
        {/* Desktop absolute collage so each image is isolated but centered as a group */}
        <div className="relative hidden h-[580px] w-[1230px] max-w-full lg:block mx-auto">
          {collage.map((item) => (
            <motion.div
              key={item.src}
              className="absolute overflow-hidden"
              style={{
                left: `${item.left}px`,
                top: `${item.top}px`,
                width: `${item.width}px`,
                height: `${item.height}px`,
              }}
              variants={scaleIn()}
            >
              <img src={item.src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Mobile/tablet fallback grid to keep responsiveness simple */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {collage.map((item) => (
            <motion.div key={item.src} className="overflow-hidden" variants={scaleIn()}>
              <img src={item.src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
