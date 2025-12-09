"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Coleções", href: "/colecoes" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <Container className="flex h-14 items-center justify-between py-0">
        <Link href="/" className="font-serif text-base uppercase tracking-[0.32em] text-[#111111]">
          Marima
        </Link>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-[11px] uppercase tracking-[0.2em] text-[#111111] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#111111]"
          aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "×" : "Menu"}
        </button>
        <nav className="hidden items-center gap-6 text-[11px] uppercase tracking-[0.25em] text-[#111111] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#111111]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
      <MobileNav open={open} onClose={() => setOpen(false)} navItems={navItems} />
    </header>
  );
}
