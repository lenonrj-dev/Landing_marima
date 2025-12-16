import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, textReveal, useMotionSafeProps } from "../animations";
import { Container } from "../layout/Container";
import { interactiveClasses } from "../ui/interactive";

const helpColumns = [
  {
    title: "Atendimento",
    text: "Duvidas sobre tamanhos, pedidos ou estilo? Estamos aqui para ajudar.",
    href: "/contato",
    cta: "Fale conosco",
  },
  {
    title: "Envio & Devolucoes",
    text: "Envio rapido e politicas de devolucao faceis e transparentes.",
    href: "/envios",
    cta: "Ver detalhes",
  },
  {
    title: "Imprensa & Atacado",
    text: "Para press kits, parcerias ou atacado, entre em contato com nosso time.",
    href: "/imprensa",
    cta: "Contatar equipe",
  },
];

export function HelpArea() {
  const motionSafe = useMotionSafeProps();

  return (
    <motion.section
      className="bg-body py-20"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...motionSafe}
    >
      <Container>
        <motion.div className="grid gap-10 lg:grid-cols-[0.4fr_1fr]" variants={staggerContainer(0.08)}>
          <motion.div variants={slideInLeft()}>
            <motion.h3 className="font-serif text-4xl leading-tight text-[#111111]" variants={textReveal()}>
              Precisa <br /> de ajuda?
            </motion.h3>
          </motion.div>
          <motion.div className="grid gap-8 md:grid-cols-3" variants={slideInRight(0.05)}>
            {helpColumns.map((col, idx) => (
              <motion.div key={col.title} className="space-y-3" variants={fadeInUp(0.05 * idx)}>
                <div className="text-sm uppercase tracking-[0.18em] text-muted">{col.title}</div>
                <p className="text-base text-[#111111]">{col.text}</p>
                <Link
                  href={col.href}
                  className={`${interactiveClasses} px-0 text-sm uppercase tracking-[0.18em] text-primary hover:text-[#9f7558] focus-visible:ring-offset-body`}
                >
                  {col.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
