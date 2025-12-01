import { Container } from "./Container";

const navItems = ["Novidades", "Coleções", "Roupas", "Acessórios", "Histórias", "Sobre"];

export function Header() {
  return (
    <header className="bg-body py-6">
      <Container className="flex items-center justify-between">
        <div className="font-serif text-lg uppercase tracking-[0.4em] text-[#111111]">
          Marima
        </div>
        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.25em] text-[#111111] lg:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="hover:text-primary">
              {item}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
