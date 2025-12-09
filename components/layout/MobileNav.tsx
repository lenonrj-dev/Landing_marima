"use client";

import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

type NavItem = {
  label: string;
  href: string;
};

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants: Variants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 260, damping: 24 } },
  exit: { x: "-100%", opacity: 0, transition: { duration: 0.2 } },
};

export function MobileNav({ open, onClose, navItems }: MobileNavProps) {
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (open && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-nav-overlay"
          className="fixed inset-0 z-[60] lg:hidden"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            aria-hidden="true"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
          <motion.nav
            aria-label="Navegação principal"
            className="absolute inset-y-0 left-0 w-[82vw] max-w-sm bg-white shadow-2xl ring-1 ring-zinc-200 flex flex-col"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between px-5 pt-5 pb-4">
              <div className="font-serif text-lg uppercase tracking-[0.32em] text-[#111111]">Marima</div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-sm uppercase tracking-[0.2em] text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#111111]"
                aria-label="Fechar menu de navegação"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pb-6 space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-600">Buscar</label>
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm">
                  <input
                    className="w-full bg-transparent text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none"
                    placeholder="Pesquisar produtos..."
                  />
                  <span className="text-lg text-zinc-500" aria-hidden>
                    🔍
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium text-zinc-600">Menu</div>
                <div className="flex flex-col gap-2">
                  {navItems.map((item, idx) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      ref={idx === 0 ? firstLinkRef : null}
                      className={`rounded-2xl px-5 py-4 text-base font-medium tracking-wide transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#111111] ${
                        idx === 0 ? "bg-[#0d1a2b] text-white" : "bg-zinc-50 text-zinc-800 hover:bg-zinc-100 active:scale-[0.98]"
                      }`}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium text-zinc-600">Ações</div>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Favoritos", icon: "♡", href: "/favoritos" },
                    { label: "Sacola", icon: "🛍️", href: "/sacola" },
                    { label: "Entrar", icon: "👤", href: "/entrar" },
                  ].map((action) => (
                    <Link
                      key={action.href}
                      href={action.href}
                      className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-sm font-medium text-zinc-800 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#111111]"
                      onClick={onClose}
                    >
                      <span className="text-lg" aria-hidden>
                        {action.icon}
                      </span>
                      <span>{action.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
