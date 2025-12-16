"use client";

import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { interactiveClasses, interactiveIcon, subtleMotion } from "../ui/interactive";

type NavItem = {
  label: string;
  href: string;
};

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeHref?: string;
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

export function MobileNav({ open, onClose, navItems, activeHref }: MobileNavProps) {
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

  const actions = useMemo(
    () => [
      { label: "Favoritos", icon: <Heart className={`h-5 w-5 ${interactiveIcon}`} aria-hidden />, href: "/#catalogo" },
      { label: "Sacola", icon: <ShoppingBag className={`h-5 w-5 ${interactiveIcon}`} aria-hidden />, href: "/#catalogo" },
      { label: "Entrar", icon: <User className={`h-5 w-5 ${interactiveIcon}`} aria-hidden />, href: "/login" },
    ],
    [],
  );

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
            aria-label="Navegacao principal"
            className="absolute inset-y-0 left-0 flex w-[82vw] max-w-sm flex-col bg-white shadow-2xl ring-1 ring-zinc-200"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between px-5 pt-5 pb-4">
              <div className="font-serif text-lg uppercase tracking-[0.32em] text-[#111111]">Marima</div>
              <motion.button
                type="button"
                onClick={onClose}
                className={`${interactiveClasses} h-10 w-10 rounded-full border border-zinc-200 text-sm uppercase tracking-[0.2em] text-[#111111]`}
                aria-label="Fechar menu de navegacao"
                {...subtleMotion}
              >
                Fechar
              </motion.button>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto px-5 pb-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-600" htmlFor="mobile-search">
                  Buscar
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm">
                  <input
                    id="mobile-search"
                    className="w-full bg-transparent text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none"
                    placeholder="Pesquisar produtos..."
                  />
                  <Search className="h-5 w-5 text-zinc-500" aria-hidden />
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium text-zinc-600">Menu</div>
                <div className="flex flex-col gap-2">
                  {navItems.map((item, idx) => {
                    const isActive = activeHref === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        ref={idx === 0 ? firstLinkRef : null}
                        onClick={onClose}
                        className={`${interactiveClasses} w-full rounded-2xl px-5 py-4 text-base font-medium tracking-wide focus-visible:ring-offset-white ${isActive ? "bg-[#0d1a2b] text-white" : "bg-zinc-50 text-zinc-800 hover:bg-zinc-100"}`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium text-zinc-600">Acoes</div>
                <div className="flex flex-col gap-2">
                  {actions.map((action) => (
                    <Link
                      key={action.href}
                      href={action.href}
                      className={`${interactiveClasses} flex-row w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-sm font-medium text-zinc-800 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-offset-white`}
                      onClick={onClose}
                    >
                      {action.icon}
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
