import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

const base = "max-w-[1240px] mx-auto px-8 xl:px-12";

export function Container({ children, className }: ContainerProps) {
  return <div className={`${base} ${className ?? ""}`}>{children}</div>;
}
