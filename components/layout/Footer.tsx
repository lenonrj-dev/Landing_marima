import { Container } from "./Container";

const columns = [
  {
    title: "Loja",
    links: ["Tricô", "Jaquetas", "Casacos", "Tops"],
  },
  {
    title: "Empresa",
    links: ["Sobre", "Blog", "Carreiras", "Contato"],
  },
  {
    title: "Ajuda",
    links: ["FAQ", "Envio & Devoluções", "Termos", "Privacidade"],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-footer text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="font-serif text-xl uppercase tracking-[0.35em]">Rino &amp; Pelle</div>
            <p className="text-sm text-white/70">
              Apelo luxuoso e contemporâneo criado para cada mulher com estilo chic e sem esforço.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <div className="text-sm uppercase tracking-[0.18em] text-white/70">{column.title}</div>
              <div className="space-y-2 text-sm">
                {column.links.map((link) => (
                  <a key={link} href="#" className="block hover:text-primary">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div className="flex items-start justify-start lg:justify-end">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/30 text-center text-xs uppercase tracking-[0.2em]">
              Est. 1994
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-[0.18em] text-white/60">
        © 2025 Rino &amp; Pelle
      </div>
    </footer>
  );
}
