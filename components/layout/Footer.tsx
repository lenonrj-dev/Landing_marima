import Link from "next/link";
import { interactiveClasses } from "../ui/interactive";
import { Container } from "./Container";

const columns = [
  {
    title: "Loja",
    links: [
      { label: "Trico", href: "/catalogo" },
      { label: "Jaquetas", href: "/catalogo" },
      { label: "Casacos", href: "/catalogo" },
      { label: "Tops", href: "/catalogo" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "/sobre" },
      { label: "Blog", href: "/blog" },
      { label: "Carreiras", href: "/carreiras" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Ajuda",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Envio & Devolucoes", href: "/envios" },
      { label: "Termos", href: "/termos" },
      { label: "Privacidade", href: "/privacidade" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-footer text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="font-serif text-xl uppercase tracking-[0.35em]">Marima</div>
            <p className="text-sm text-white/70">
              Apelo luxuoso e contemporaneo criado para cada mulher com estilo chic e sem esforco.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <div className="text-sm uppercase tracking-[0.18em] text-white/70">{column.title}</div>
              <div className="space-y-2 text-sm">
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`${interactiveClasses} px-0 text-left text-white/80 hover:text-white focus-visible:ring-offset-footer`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-[0.18em] text-white/60">
        (C) 2025 Marima - Todos os Direitos Reservados.
      </div>
    </footer>
  );
}
