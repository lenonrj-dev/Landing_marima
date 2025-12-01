import { Container } from "../layout/Container";

export function HeroIntro() {
  return (
    <section className="bg-body py-16">
      <Container className="flex flex-col items-center gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d9d9d5]">
          <span className="font-serif text-sm uppercase tracking-[0.25em] text-[#111111]">RP</span>
        </div>
        <span className="text-[11px] uppercase tracking-[0.25em] text-muted">
          Primavera / Verão 2020
        </span>
        <h1 className="max-w-4xl font-serif text-[50px] leading-tight text-[#111111]">
          APARÊNCIA LUXUOSA <span className="italic">e</span> CONTEMPORÂNEA PARA CADA MULHER
        </h1>
      </Container>
    </section>
  );
}
