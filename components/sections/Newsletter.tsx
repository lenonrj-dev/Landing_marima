import { Container } from "../layout/Container";
import { PrimaryButton } from "../ui/PrimaryButton";

export function Newsletter() {
  return (
    <section className="bg-white py-16">
      <Container className="flex flex-col items-center gap-8 text-center">
        <span className="text-[11px] uppercase tracking-[0.25em] text-muted">Newsletter</span>
        <h3 className="font-serif text-4xl leading-tight text-[#111111]">
          Inscreva-se para receber as novidades
        </h3>
        <form className="flex w-full max-w-4xl flex-wrap items-center justify-center gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="h-12 w-full max-w-[260px] border border-[#d9d9d5] bg-white px-4 text-sm tracking-wide focus:border-primary focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="h-12 flex-1 min-w-[200px] border border-[#d9d9d5] bg-white px-4 text-sm tracking-wide focus:border-primary focus:outline-none"
          />
          <PrimaryButton className="w-[170px]">Inscrever</PrimaryButton>
        </form>
      </Container>
    </section>
  );
}
