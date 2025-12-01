import { Container } from "../layout/Container";

const categories = ["Top", "Croped", "Regata", "Macacão", "Short", "Calça"];

export function CategoriesList() {
  return (
    <section className="bg-body py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-3">
          <div className="overflow-hidden">
            <img
              src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764627393/download_15_vqn9bh.jpg"
              alt="Category look left"
              loading="lazy"
              className="h-full w-full object-cover "
              style={{ aspectRatio: "4 / 5" }}
            />
          </div>
          <div className="flex flex-col items-start gap-6 ml-15">
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted">Categorias</span>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="font-serif text-3xl leading-tight text-[#111111]">
                  {category}
                </div>
              ))}
            </div>
            <a href="#" className="text-sm uppercase tracking-[0.2em] text-primary hover:text-[#9f7558]">
              - Ver Tudo Na Loja -
            </a>
          </div>
          <div className="overflow-hidden">
            <img
              src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764627338/download_14_apacp0.jpg"
              alt="Category look right"
              loading="lazy"
              className="h-full w-full object-cover mt-60"
              style={{ aspectRatio: "4 / 5" }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
