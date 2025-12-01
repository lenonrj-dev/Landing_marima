import { Container } from "../layout/Container";
import { PrimaryButton } from "../ui/PrimaryButton";
import { SectionTitle } from "../ui/SectionTitle";

export function EditorialFeature() {
  return (
    <section className="bg-body py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden">
            <img
              src="/images/editorial-main.jpg"
              alt="Editorial look"
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ aspectRatio: "3 / 4" }}
            />
          </div>
          <div className="absolute -bottom-10 -right-12 w-2/5 min-w-[160px] overflow-hidden border border-white/70 bg-white">
            <img
              src="/images/editorial-overlay.jpg"
              alt="Editorial detail"
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ aspectRatio: "4 / 6" }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 ml-20">
          <SectionTitle
            eyebrow="Moda Athleisure"
            title={
              <>
                Collection <br /> Casual Athletica
              </>
            }
            description="Looks curados que misturam alfaiataria refinada, silhuetas femininas e paletas terrosas para um guarda-roupa com inspiração editorial."
          />
          <PrimaryButton className="w-[180px]">Descubra mais</PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
