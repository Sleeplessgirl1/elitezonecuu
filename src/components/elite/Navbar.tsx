import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#politicas", label: "Políticas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar({
  mode,
  onToggleMode,
}: {
  mode: "nerf" | "gel";
  onToggleMode: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const accent = mode === "nerf" ? "text-neon-green" : "text-neon-blue";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-neon-green/60 bg-black/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-pixel text-xs sm:text-sm">
          <span className={`${accent} text-glow-green`}>⚔</span>
          <span className="text-white">ELITE</span>
          <span className={accent}>ARENA</span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display text-sm font-semibold uppercase tracking-wider text-white/80 transition hover:text-neon-green hover:text-glow-green"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMode}
            className="hidden items-center gap-2 border border-white/20 px-3 py-1.5 font-pixel text-[9px] uppercase text-white/80 transition hover:border-neon-green hover:text-neon-green md:inline-flex"
            aria-label="Cambiar modo de juego"
          >
            <span className={mode === "nerf" ? "text-neon-green" : "opacity-50"}>NERF</span>
            <span>/</span>
            <span className={mode === "gel" ? "text-neon-blue" : "opacity-50"}>GEL</span>
          </button>

          <a
            href="#contacto"
            className="btn-shoot hidden border-2 border-neon-orange bg-neon-orange/10 px-4 py-2 font-pixel text-[10px] uppercase text-neon-orange text-glow-orange glow-orange md:inline-block"
          >
            ¡RESERVAR!
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-neon-green/50 text-neon-green"
            aria-label="Menú"
          >
            {open ? "✕" : "⊕"}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-40 w-72 border-l border-neon-green/40 bg-black transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-neon-green/30 px-4">
          <span className="font-pixel text-[10px] text-neon-green">MENÚ TÁCTICO</span>
          <button onClick={() => setOpen(false)} className="text-neon-green">✕</button>
        </div>
        <ul className="flex flex-col gap-1 p-4">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-l-2 border-transparent px-3 py-3 font-display text-base font-semibold uppercase tracking-wide text-white transition hover:border-neon-green hover:bg-white/5 hover:text-neon-green"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <button
              onClick={onToggleMode}
              className="w-full border border-white/20 px-3 py-2 font-pixel text-[9px] uppercase text-white/80"
            >
              MODO: {mode === "nerf" ? "NERF CLÁSICO" : "GELFIRE"}
            </button>
          </li>
          <li className="mt-2">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-shoot block border-2 border-neon-orange bg-neon-orange/10 py-3 text-center font-pixel text-[10px] uppercase text-neon-orange text-glow-orange"
            >
              ¡RESERVAR AHORA!
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
