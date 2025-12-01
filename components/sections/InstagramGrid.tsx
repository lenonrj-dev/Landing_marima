import { Instagram } from "lucide-react";
import { Container } from "../layout/Container";
import { PrimaryButton } from "../ui/PrimaryButton";

export function InstagramGrid() {
  return (
    <section className="bg-body py-24">
      <Container className="space-y-16">
        <div className="flex justify-center">
          <div className="relative hidden h-[560px] w-full max-w-[1100px] lg:block">
            <div
              className="absolute left-[427px] top-[-30px] h-[120px] w-[120px] overflow-hidden"
              aria-hidden
            >
              <img src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764628714/04_1_zk0y5h.png" alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>

            <div
              className="absolute left-[565px] top-[-100px] h-[190px] w-[180px] overflow-hidden"
              aria-hidden
            >
              <img src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764627982/02_jowplv.png" alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>

            <div
              className="absolute left-[15%] top-[22%] h-[220px] w-[200px] overflow-hidden"
              aria-hidden
            >
              <img src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764628084/03_xlgi1b.png" alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>

            <div className="absolute left-[35%] top-[18%] h-[340px] w-[360px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764627851/01_xg4w2k.png"
                alt="Destaque central do Instagram"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div
              className="absolute left-[70%] top-[221px] h-[220px] w-[220px] overflow-hidden"
              aria-hidden
            >
              <img src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764628165/03_1_p6v3no.png" alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>

            <div className="absolute left-[70%] top-[24%] flex h-14 w-14 items-center justify-center bg-[#111111] text-white">
              <Instagram className="h-6 w-6" strokeWidth={1.6} />
            </div>

            <div
              className="absolute left-[25%] top-[62%] h-[90px] w-[90px] overflow-hidden"
              aria-hidden
            >
              <img src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764628229/04_pjlyvd.png" alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>

            <div
              className="absolute left-[70%] top-[82%] h-[140px] w-[150px] overflow-hidden"
              aria-hidden
            >
              <img src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764628714/04_1_zk0y5h.png" alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div
              className="absolute left-[645px] top-[82%] h-[100px] w-[100px] overflow-hidden"
              aria-hidden
            >
              <img src="https://res.cloudinary.com/dwf2uc6ot/image/upload/v1764628714/04_1_zk0y5h.png" alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 lg:hidden">
            {["insta-1.jpg", "insta-2.jpg", "insta-3.jpg", "insta-4.jpg", "insta-5.jpg", "insta-6.jpg"].map(
              (image) => (
                <div key={image} className="overflow-hidden">
                  <img
                    src={`/images/${image}`}
                    alt="Instagram highlight"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{ aspectRatio: "3 / 4" }}
                  />
                </div>
              ),
            )}
          </div>
        </div>

        <div className="max-w-2xl space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-muted">Instagram</span>
          <h3 className="font-serif text-4xl leading-tight text-[#111111]">
            Siga-nos <span className="italic text-primary">@use.marima.ofc</span>
          </h3>
          <p className="text-base text-muted">Faça parte das nossas histórias! Junte-se à aventura.</p>
          <PrimaryButton className="w-[180px]">Siga-nos</PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
