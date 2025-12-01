import { Container } from "../layout/Container";
import { PrimaryButton } from "../ui/PrimaryButton";

export function SeasonIntro() {
  return (
    <section className="bg-body py-20">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="space-y-8 pt-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-muted">Coleções</span>
          <h3 className="font-serif text-4xl leading-[1.15] text-[#111111]">
            Coleção <br /> Fitness <br /> 2025
          </h3>
          <p className="max-w-md text-base text-muted">
            Descubra silhuetas que valorizam seu corpo e tons naturais pensados para um visual fitness luxuoso e contemporâneo. Vista Marima e sinta a diferença em cada treino — toque no botão abaixo e garanta seu look agora.
          </p>
          <PrimaryButton className="w-[190px]">Adiquirir Peça!</PrimaryButton>
        </div>
        <div className="relative grid grid-cols-[0.9fr_1.1fr] gap-6">
          <div className="relative self-end z-10">
            <img
              src="/images/season-overlay.jpg"
              alt="Season detail"
              loading="lazy"
              className="h-full w-full object-cover ml-25 mb-10"
              style={{ aspectRatio: "3 / 4" }}
            />
          </div>
          <div className="relative">
            <img
              src="/images/season-main.jpg"
              alt="Season main"
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ aspectRatio: "3 / 4" }}
            />
            
          </div>
        </div>
      </Container>
    </section>
  );
}
