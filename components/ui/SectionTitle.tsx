import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className ?? ""}`}>
      {eyebrow ? (
        <span className="text-[11px] uppercase tracking-[0.25em] text-muted">{eyebrow}</span>
      ) : null}
      <h2 className="font-serif text-4xl leading-tight text-[#111111]">{title}</h2>
      {description ? <p className="max-w-2xl text-base text-muted">{description}</p> : null}
    </div>
  );
}
