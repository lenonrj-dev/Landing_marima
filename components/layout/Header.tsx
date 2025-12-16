"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { interactiveClasses, subtleMotion } from "../ui/interactive";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Catalogo", href: "/catalogo" },
  { label: "Colecoes", href: "/colecoes" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const activeHref = useMemo(() => {
    const match = navItems.find((item) => (item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href)));
    return match?.href;
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <Container className="flex h-14 items-center justify-between py-0">
        <Link
          href="/"
          className={`${interactiveClasses} px-2 py-1 font-serif text-base uppercase tracking-[0.32em] text-[#111111] focus-visible:ring-offset-white`}
        >
          Marima
        </Link>
        <motion.button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`${interactiveClasses} h-10 w-10 rounded-full border border-zinc-200 text-[11px] uppercase tracking-[0.2em] text-[#111111] lg:hidden`}
          aria-label={open ? "Fechar menu de navegacao" : "Abrir menu de navegacao"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          {...subtleMotion}
        >
          {open ? "Fechar" : "Menu"}
        </motion.button>
        <nav className="relative hidden items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#111111] lg:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${interactiveClasses} relative px-3 py-1 rounded-full focus-visible:ring-offset-white`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-cyan-50"
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>
      </Container>
      <MobileNav open={open} onClose={() => setOpen(false)} navItems={navItems} activeHref={activeHref} />
    </header>
  );
}
