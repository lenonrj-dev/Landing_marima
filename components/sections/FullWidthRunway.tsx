export function FullWidthRunway() {
  return (
    <section className="bg-body py-16">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="overflow-hidden">
          <img
            src="/images/runway-wide.svg"
            alt="Runway wide banner"
            loading="lazy"
            className="h-full w-full object-cover"
            style={{ aspectRatio: "16 / 5" }}
          />
        </div>
      </div>
    </section>
  );
}
