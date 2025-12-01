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
              src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764606751/TR538_Women_s_TriDri_Recycled_Scrunch_Leggings_taae60.jpg"
              alt="Editorial look"
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ aspectRatio: "3 / 4" }}
            />
          </div>
          <div className="absolute -bottom-10 -right-12 w-2/5 min-w-[160px] overflow-hidden border border-white/70 bg-white">
            <img
              src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764606737/Quando_a_seguran%C3%A7a_encontra_a_versatilidade_nasce_um_top_feito_para_acompanhar_todos_os_seus_momentos____Apresentamos_o_Top_Tudo_YOMA__seu_novo_essencial_para_treinar_trabalhar_viajar_e_viver_o_u4ueby.jpg"
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
                Collection <br /> Casual Athleisure
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
