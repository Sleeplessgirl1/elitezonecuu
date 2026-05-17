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
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <ul className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display text-base font-bold uppercase tracking-wider text-white/85 transition hover:text-neon-green hover:text-glow-green"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMode}
            className="hidden items-center gap-2 border-2 border-white/25 px-3 py-2 font-pixel text-sm uppercase text-white/85 transition hover:border-neon-green hover:text-neon-green md:inline-flex tracking-widest"
            aria-label="Cambiar modo de juego"
          >
            <span className={mode === "nerf" ? "text-neon-green" : "opacity-50"}>NERF</span>
            <span>/</span>
            <span className={mode === "gel" ? "text-neon-blue" : "opacity-50"}>GEL</span>
          </button>

          <a
            href="#contacto"
            className="btn-shoot hidden border-2 border-neon-orange bg-neon-orange/15 px-5 py-2.5 font-pixel text-base uppercase text-neon-orange text-glow-orange glow-orange md:inline-block tracking-widest"
          >
            ¡RESERVAR!
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center border-2 border-neon-green/60 text-neon-green text-xl"
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
        <div className="flex h-20 items-center justify-between border-b-2 border-neon-green/40 px-5">
          <span className="font-pixel text-lg text-neon-green text-glow-green tracking-widest">MENÚ TÁCTICO</span>
          <button onClick={() => setOpen(false)} className="text-neon-green text-2xl">✕</button>
        </div>
        <ul className="flex flex-col gap-1 p-5">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-l-2 border-transparent px-4 py-4 font-display text-xl font-bold uppercase tracking-wide text-white transition hover:border-neon-green hover:bg-white/5 hover:text-neon-green"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-3">
            <button
              onClick={onToggleMode}
              className="w-full border-2 border-white/25 px-4 py-3 font-pixel text-sm uppercase text-white/85 tracking-widest"
            >
              MODO: {mode === "nerf" ? "NERF CLÁSICO" : "GELFIRE"}
            </button>
          </li>
          <li className="mt-3">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-shoot block border-2 border-neon-orange bg-neon-orange/15 py-4 text-center font-pixel text-lg uppercase text-neon-orange text-glow-orange tracking-widest"
            >
              ¡RESERVAR AHORA!
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
