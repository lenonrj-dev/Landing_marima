import { Container } from "../layout/Container";

export function LargePortrait() {
  return (
    <section className="bg-body py-28">
      <Container className="flex justify-center">
        <div className="w-full max-w-[720px] overflow-hidden">
          <img
            src="/images/portrait-coat.jpg"
            alt="Statement coat portrait"
            loading="lazy"
            className="h-full w-full object-cover"
            style={{ aspectRatio: "2.6 / 4" }}
          />
        </div>
      </Container>
    </section>
  );
}
