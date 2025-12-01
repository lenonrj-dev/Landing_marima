import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";

const highlights = [
  { title: "Conjunto athleisure", subtitle: "Destaque da temporada", image: "https://res.cloudinary.com/diwvlsgsw/image/upload/v1758996380/products/ingwa51estpgozpxu0di.png" },
  { title: "Trench alfaiatado", subtitle: "Destaque da temporada", image: "https://res.cloudinary.com/diwvlsgsw/image/upload/v1758995581/products/srojrqjrxh6mylulzsay.png" },
  { title: "Tricô em camadas", subtitle: "Destaque da temporada", image: "https://res.cloudinary.com/diwvlsgsw/image/upload/v1758993367/products/dgije1vbavxzyj7dzprr.png" },
];

export function SeasonHighlights() {
  return (
    <section className="bg-body py-24">
      <Container>
        <div className="mb-12 flex items-center justify-between">
          <SectionTitle
            eyebrow="Destaques"
            title="Explore nossos destaques da temporada"
            className="!mb-0"
          />
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111111] text-[#111111] transition-colors duration-200 hover:bg-[#111111] hover:text-white"
              aria-label="Previous highlight"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111111] text-[#111111] transition-colors duration-200 hover:bg-[#111111] hover:text-white"
              aria-label="Next highlight"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="flex flex-col gap-4">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "3 / 4" }}
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-2xl text-[#111111]">{item.title}</h4>
                <p className="text-sm uppercase tracking-[0.18em] text-muted">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
