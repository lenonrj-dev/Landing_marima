import { Container } from "../layout/Container";

const collage = [
  { src: "hero-1.jpg", width: 260, height: 430, left: -350, top: 24 },
  { src: "hero-2.jpg", width: 380, height: 550, left: 0, top: -10 },
  { src: "hero-3.jpg", width: 265, height: 440, left: 450, top: 32 },
  { src: "hero-4.jpg", width: 340, height: 480, left: 770, top: 70 },
  { src: "hero-5.jpg", width: 230, height: 380, left: 1170, top: 40 },
];

export function HeroCollage() {
  return (
    <section className="bg-body pb-20 pt-8 ml-40">
      <Container>
        {/* Desktop absolute collage so each image is isolated but centered as a group */}
        <div className="relative hidden h-[580px] w-[1230px] max-w-full lg:block mx-auto">
          {collage.map((item) => (
            <div
              key={item.src}
              className="absolute overflow-hidden"
              style={{
                left: `${item.left}px`,
                top: `${item.top}px`,
                width: `${item.width}px`,
                height: `${item.height}px`,
              }}
            >
              <img src={`/images/${item.src}`} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        {/* Mobile/tablet fallback grid to keep responsiveness simple */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {collage.map((item) => (
            <div key={item.src} className="overflow-hidden">
              <img src={`/images/${item.src}`} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
