import { useEffect, useState } from "react";
import { Counter, Countdown, Particles, Reveal } from "./Effects";
import heroBattle from "@/assets/real-1.png";
import teamElite from "@/assets/real-4.jpg";
import g1 from "@/assets/real-1.png";
import g2 from "@/assets/real-2.jpg";
import g3 from "@/assets/real-3.jpg";
import g4 from "@/assets/real-4.jpg";
import g5 from "@/assets/real-5.jpg";
import g6 from "@/assets/hero-battle.jpg";
import logo from "@/assets/logo.png";

const NERF_PACKAGES = [
  {
    id: "recluta",
    name: "RECLUTA",
    price: "$2,600",
    accent: "green" as const,
    capacity: "Hasta 10 jugadores",
    duration: "60 min",
    badge: "INICIAL",
    features: [
      "10 blasters Nerf",
      "Munición ilimitada",
      "Bunkers inflables",
      "Gafas de protección",
      "Chaleco táctico por equipo",
      "Árbitro incluido",
      "3 modos de juego",
      "Agua fresca 4 lt a elegir",
    ],
  },
  {
    id: "comandante-nerf",
    name: "COMANDANTE",
    price: "$3,100",
    accent: "orange" as const,
    capacity: "Hasta 14 jugadores",
    duration: "120 min",
    badge: "MÁS POPULAR",
    features: [
      "14 blasters Nerf",
      "Munición ilimitada",
      "Bunkers inflables",
      "Gafas de protección",
      "Chaleco táctico por equipo",
      "Árbitro + asistente",
      "5 modos de juego",
      "Pintura facial militar",
      "Agua fresca 4 lt + 4 lt a elegir",
    ],
  },
];

const GEL_PACKAGES = [
  {
    id: "comandante-gel",
    name: "COMANDANTE",
    price: "$3,000",
    accent: "blue" as const,
    capacity: "Hasta 12 jugadores",
    duration: "60 min",
    badge: "INICIAL",
    features: [
      "12 Gel Blasters Gelfire",
      "15,000 gellets incluidos",
      "Bunkers inflables",
      "Gafas de protección",
      "Chaleco táctico por equipo",
      "Árbitro incluido",
      "3 modos de juego",
    ],
  },
  {
    id: "fuerzas-especiales",
    name: "FUERZAS ESPECIALES",
    price: "$3,800",
    accent: "green" as const,
    capacity: "Hasta 14 jugadores",
    duration: "90 min",
    badge: "MÁS POPULAR",
    features: [
      "14 Gel Blasters Gelfire",
      "20,000 gellets incluidos",
      "Bunkers inflables",
      "Gafas de protección",
      "Chaleco táctico por equipo",
      "Árbitro incluido",
      "5 modos de juego",
      "Pintura facial militar",
      "Fotos del evento",
      "Agua fresca 4 lt + 4 lt a elegir",
    ],
  },
  {
    id: "elite-total",
    name: "ÉLITE TOTAL",
    price: "$4,300",
    accent: "orange" as const,
    capacity: "Hasta 16 jugadores",
    duration: "2 horas",
    badge: "PREMIUM",
    features: [
      "16 Gel Blasters Gelfire",
      "30,000 gellets incluidos",
      "Bunkers inflables",
      "Gafas de protección",
      "Chaleco táctico por equipo",
      "Árbitro incluido",
      "Todos los modos de juego",
      "Pintura facial militar",
      "Fotos del evento",
      "Agua fresca 4 lt + 4 lt a elegir",
    ],
  },
];

const ADDONS = [
  { name: "Jugador extra", price: "+$180 MXN c/u" },
  { name: "30 minutos adicionales", price: "+$600 MXN" },
  { name: "5,000 gellets extra", price: "+$300 MXN" },
  { name: "Upgrade Nerf → Gelfire", price: "+$700 MXN" },
];

const POLICIES = [
  { q: "Anticipo y reserva", a: "Anticipo del 30% no reembolsable para confirmar la fecha del evento. Liquidación el día del montaje." },
  { q: "Cambios de fecha", a: "Cambios de fecha aceptados con un aviso mínimo de 72 horas previas al evento." },
  { q: "Mínimo de jugadores", a: "Mínimo 10 jugadores por evento para garantizar la mejor experiencia de batalla." },
  { q: "Traslado y cobertura", a: "Traslado incluido dentro de Chihuahua ciudad. Zonas foráneas se cotizan por separado." },
  { q: "Espacio del evento", a: "El cliente provee el espacio para el evento (jardín, patio, terraza o salón). Espacio mínimo recomendado: 7 x 10 metros." },
  { q: "Precios", a: "Precios sujetos a ajuste sin previo aviso. Tu cotización confirmada respeta el precio del momento de la reserva." },
];

const accentMap = {
  green: { border: "border-neon-green", text: "text-neon-green", glow: "glow-green", textGlow: "text-glow-green" },
  blue: { border: "border-neon-blue", text: "text-neon-blue", glow: "glow-blue", textGlow: "text-glow-blue" },
  orange: { border: "border-neon-orange", text: "text-neon-orange", glow: "glow-orange", textGlow: "text-glow-orange" },
};

/* ---------------- Hero ---------------- */
export function Hero({ mode }: { mode: "nerf" | "gel" }) {
  const accent = mode === "nerf" ? "text-neon-green" : "text-neon-blue";
  return (
    <section
      id="inicio"
      className="scanlines tactical-grid relative isolate overflow-hidden bg-black pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBattle}
          alt="Batalla Nerf en arena inflable"
          className="h-full w-full object-cover opacity-50"
          width={1920}
          height={1080}
        />
        <div className="img-overlay absolute inset-0" />
      </div>
      <Particles />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-none border border-neon-green/70 bg-black/70 px-4 py-2 font-pixel text-sm text-neon-green pulse-soft">
            📍 SERVICIO EN CHIHUAHUA, CHIH.
          </div>

          <h1
            className="glitch font-pixel mx-auto max-w-4xl leading-[0.95] text-glow-green lg:mx-0"
            data-text="¡LA BATALLA LLEGA A TU FIESTA!"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
          >
            ¡LA BATALLA LLEGA A TU FIESTA!
          </h1>

          <p className="mx-auto mt-8 max-w-2xl font-display text-lg font-semibold uppercase tracking-wide text-white/90 sm:text-2xl lg:mx-0">
            Guerras de Nerf y Gelfire a domicilio en Chihuahua •{" "}
            <span className={accent}>Llevamos toda la arena hasta tu lugar</span>
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#paquetes"
              className="tactical-btn glow-green"
              style={{ ["--bd" as any]: "var(--neon-green)" }}
            >
              <span className="px-10 py-5 font-pixel text-lg sm:text-xl uppercase text-neon-green text-glow-green tracking-widest">
                ▶ VER PAQUETES
              </span>
            </a>
            <a
              href="#como-funciona"
              className="tactical-btn"
              style={{ ["--bd" as any]: "rgba(255,255,255,0.6)" }}
            >
              <span className="px-10 py-5 font-pixel text-lg sm:text-xl uppercase text-white tracking-widest">
                ¿CÓMO FUNCIONA?
              </span>
            </a>
          </div>

          <div className="mt-10 flex justify-center lg:justify-start">
            <Countdown />
          </div>
        </div>

        {/* Right column: framed hero image card */}
        <Reveal className="hidden lg:block">
          <div className="frame-corners relative aspect-[4/5] w-full overflow-hidden border-2 border-neon-green/60 glow-green">
            <img
              src={heroBattle}
              alt="Equipo en plena batalla"
              className="h-full w-full object-cover"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5">
              <p className="font-pixel text-lg text-neon-green text-glow-green tracking-widest">
                ⚔ MODO: {mode === "nerf" ? "NERF CLÁSICO" : "GELFIRE"}
              </p>
              <p className="mt-1 font-display text-sm uppercase text-white/80">
                Arena lista en 30 minutos
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Steps ---------------- */
export function Steps() {
  const steps = [
    { icon: "📞", title: "Elige y reserva", desc: "Selecciona tu paquete y aparta la fecha con anticipo." },
    { icon: "🚚", title: "Llegamos y montamos", desc: "Vamos a tu lugar y montamos toda la arena lista para la guerra." },
    { icon: "🎯", title: "¡A jugar!", desc: "Nuestros moderadores organizan los modos de juego. Tú solo disfruta." },
  ];
  return (
    <section id="como-funciona" className="relative bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-pixel text-base text-neon-blue text-glow-blue tracking-[0.3em]">[ HOW IT WORKS ]</p>
          <h2 className="mt-4 font-pixel text-5xl sm:text-7xl leading-none text-white tracking-wide">
            CÓMO <span className="text-neon-green text-glow-green">FUNCIONA</span>
          </h2>
        </Reveal>

        <div className="relative mt-20 grid gap-12 md:grid-cols-3">
          <div className="connector absolute left-[10%] right-[10%] top-[52px] hidden h-[2px] md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} className="relative text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center border-2 border-neon-green bg-black text-4xl glow-green">
                {s.icon}
              </div>
              <p className="mt-5 font-pixel text-xl text-neon-green text-glow-green tracking-widest">PASO 0{i + 1}</p>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold uppercase text-white">{s.title}</h3>
              <p className="mt-3 font-body text-base text-white/75 max-w-xs mx-auto">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
export function Stats() {
  const stats = [
    { icon: "🎯", value: 200, suffix: "+", label: "Batallas realizadas", color: "text-neon-green", glow: "text-glow-green" },
    { icon: "😄", value: 500, suffix: "+", label: "Niños felices", color: "text-neon-blue", glow: "text-glow-blue" },
    { icon: "⚡", value: 2, suffix: " hrs", label: "De diversión", color: "text-neon-orange", glow: "text-glow-orange" },
    { icon: "🏙️", value: 100, suffix: "%", label: "Cobertura Chihuahua", color: "text-neon-green", glow: "text-glow-green" },
  ];
  return (
    <section className="relative border-y-2 border-neon-green/40 bg-surface py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((s) => (
          <Reveal key={s.label} className="text-center">
            <div className="text-4xl">{s.icon}</div>
            <div className={`mt-3 font-pixel text-5xl sm:text-6xl ${s.color} ${s.glow}`}>
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 font-display text-sm sm:text-base font-bold uppercase tracking-wider text-white/80">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Packages ---------------- */
type Pkg = {
  id: string;
  name: string;
  price: string;
  accent: "green" | "blue" | "orange";
  capacity: string;
  duration: string;
  badge: string;
  features: string[];
};

function PackageCard({ p, onReserve }: { p: Pkg; onReserve: (n: string) => void }) {
  const a = accentMap[p.accent];
  return (
    <Reveal>
      <article className={`flex h-full flex-col border-2 ${a.border} bg-surface p-7 ${a.glow}`}>
        <div className="flex items-start justify-between gap-3">
          <span className={`font-pixel text-sm ${a.text} ${a.textGlow} tracking-widest`}>{p.badge}</span>
          <span className="border border-white/25 px-2.5 py-1 font-pixel text-xs text-white/80 tracking-wider text-right">
            {p.capacity} · {p.duration}
          </span>
        </div>

        <h3 className={`mt-6 font-pixel text-3xl sm:text-4xl ${a.text} ${a.textGlow} tracking-wide`}>{p.name}</h3>

        <p className="mt-5 font-display text-4xl font-bold text-white">
          <span className={a.text}>{p.price}</span>
        </p>
        <p className="mt-1 font-body text-sm uppercase tracking-wider text-white/55">MXN</p>

        <ul className="mt-6 flex-1 space-y-2.5 font-body text-[15px] text-white/90">
          {p.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className={a.text}>✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => onReserve(p.name)}
          className={`btn-shoot mt-6 border-2 ${a.border} bg-black py-4 font-pixel text-lg ${a.text} ${a.textGlow} tracking-widest`}
        >
          ▶ RESERVAR
        </button>
      </article>
    </Reveal>
  );
}

export function Packages({ onReserve }: { onReserve: (name: string) => void }) {
  return (
    <section id="paquetes" className="relative bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-pixel text-base text-neon-orange text-glow-orange tracking-[0.3em]">[ SELECT LOADOUT ]</p>
          <h2 className="mt-4 font-pixel text-5xl sm:text-7xl leading-none text-white tracking-wide">
            ELIGE TU <span className="text-neon-green text-glow-green">PAQUETE</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base sm:text-lg text-white/70">
            Servicio móvil en Chihuahua ciudad. Equipo, árbitro y montaje incluidos.
          </p>
        </Reveal>

        {/* LÍNEA NERF */}
        <div className="mt-20">
          <Reveal>
            <div className="border-l-4 border-neon-green pl-5">
              <p className="font-pixel text-2xl sm:text-3xl text-neon-green text-glow-green tracking-widest">
                🎯 LÍNEA NERF
              </p>
              <p className="mt-2 font-display text-lg font-bold uppercase tracking-wider text-white/85">
                Dardos de espuma
              </p>
              <p className="mt-1 font-body text-sm text-white/65">
                14 blasters disponibles · Recomendado desde 6 años · Munición ilimitada
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:max-w-5xl lg:mx-auto">
            {NERF_PACKAGES.map((p) => (
              <PackageCard key={p.id} p={p} onReserve={onReserve} />
            ))}
          </div>
        </div>

        {/* LÍNEA GELFIRE */}
        <div className="mt-24">
          <Reveal>
            <div className="border-l-4 border-neon-blue pl-5">
              <p className="font-pixel text-2xl sm:text-3xl text-neon-blue text-glow-blue tracking-widest">
                💧 LÍNEA GELFIRE
              </p>
              <p className="mt-2 font-display text-lg font-bold uppercase tracking-wider text-white/85">
                Gel blasters
              </p>
              <p className="mt-1 font-body text-sm text-white/65">
                18 blasters disponibles · Recomendado desde 10 años · Gellets incluidos por paquete
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {GEL_PACKAGES.map((p) => (
              <PackageCard key={p.id} p={p} onReserve={onReserve} />
            ))}
          </div>
        </div>

        {/* ADD-ONS */}
        <div className="mt-24">
          <Reveal>
            <div className="border-l-4 border-neon-orange pl-5">
              <p className="font-pixel text-2xl sm:text-3xl text-neon-orange text-glow-orange tracking-widest">
                ➕ ADD-ONS
              </p>
              <p className="mt-2 font-display text-lg font-bold uppercase tracking-wider text-white/85">
                Personaliza tu experiencia
              </p>
              <p className="mt-1 font-body text-sm text-white/65">
                Disponibles para cualquier paquete.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ADDONS.map((ad) => (
              <Reveal key={ad.name}>
                <div className="flex h-full flex-col justify-between border-2 border-white/15 bg-surface p-6 transition hover:border-neon-orange hover:-translate-y-1">
                  <p className="font-display text-lg font-bold uppercase tracking-wider text-white">{ad.name}</p>
                  <p className="mt-4 font-pixel text-2xl text-neon-orange text-glow-orange tracking-widest">{ad.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export function About() {
  const pillars = [
    { icon: "🛡️", title: "Seguridad", desc: "Equipo certificado, máscaras, lentes y supervisión profesional." },
    { icon: "⚡", title: "Diversión garantizada", desc: "Modos de juego diseñados para mantener la adrenalina al máximo." },
    { icon: "🚚", title: "Sin estrés", desc: "Llegamos, montamos, organizamos y nos llevamos todo. Tú disfrutas." },
  ];
  return (
    <section id="nosotros" className="relative camo py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="font-pixel text-base text-neon-blue text-glow-blue tracking-[0.3em]">[ ABOUT US ]</p>
          <h2 className="mt-4 font-pixel text-5xl sm:text-7xl leading-none text-white tracking-wide">
            SOMOS <span className="text-neon-green text-glow-green">ELITE ARENA</span>
          </h2>
          <p className="mt-7 font-body text-lg text-white/80">
            Nacimos en Chihuahua con una obsesión: convertir cualquier fiesta en una
            <span className="text-neon-green font-semibold"> experiencia épica</span>. Llevamos años montando arenas
            móviles para cumpleaños, graduaciones y eventos empresariales. Nuestro equipo es
            profesional, el setup es serio y la diversión está garantizada.
          </p>
          <p className="mt-4 font-body text-lg text-white/80">
            Tú pones la fiesta, nosotros ponemos la <span className="text-neon-orange font-semibold">guerra</span>.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="border-2 border-white/15 bg-black/60 p-5 transition hover:border-neon-green/70 hover:-translate-y-1">
                <div className="text-3xl">{p.icon}</div>
                <p className="mt-3 font-pixel text-base text-neon-green text-glow-green tracking-widest">{p.title.toUpperCase()}</p>
                <p className="mt-2 font-body text-sm text-white/75">{p.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="frame-corners relative aspect-square w-full max-w-lg mx-auto border-2 border-neon-green/50 bg-black overflow-hidden glow-green">
            <img
              src={teamElite}
              alt="Equipo ELITE ARENA"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-5">
              <p className="font-pixel text-2xl text-neon-green text-glow-green tracking-widest">TEAM ELITE</p>
              <p className="mt-1 font-display text-sm uppercase text-white/85">Moderadores certificados</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
export function Gallery() {
  const tiles = [
    { img: g1, label: "Captura la bandera" },
    { img: g2, label: "Equipo Gelfire" },
    { img: g3, label: "Setup arena" },
    { img: g4, label: "Acción en arena" },
    { img: g5, label: "Arsenal" },
    { img: g6, label: "Francotirador" },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="galeria" className="relative bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-pixel text-base text-neon-green text-glow-green tracking-[0.3em]">[ COMBAT GALLERY ]</p>
          <h2 className="mt-4 font-pixel text-5xl sm:text-7xl leading-none text-white tracking-wide">
            BATALLAS <span className="text-neon-orange text-glow-orange">RECIENTES</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3">
          {tiles.map((t, idx) => (
            <Reveal key={idx}>
              <button
                onClick={() => setOpen(idx)}
                className="group relative block aspect-square w-full overflow-hidden border-2 border-white/15 transition hover:border-neon-green hover:glow-green"
              >
                <img
                  src={t.img}
                  alt={t.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  width={1024}
                  height={1024}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <p className="font-pixel text-lg text-neon-green text-glow-green tracking-widest">{t.label}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-neon-green/0 opacity-0 transition group-hover:bg-neon-green/25 group-hover:opacity-100">
                  <span className="font-pixel text-2xl text-black bg-neon-green px-4 py-2 tracking-widest">VER ▸</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center font-body text-base text-white/65">
          ¿Quieres ver más? Síguenos en Instagram{" "}
          <a href="#" className="text-neon-green text-glow-green underline font-semibold">@EliteArenaMx</a>
        </p>
      </div>

      {open !== null && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 backdrop-blur"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl border-2 border-neon-green bg-black glow-green"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-3 top-3 z-10 border border-neon-green bg-black px-4 py-2 font-pixel text-base text-neon-green tracking-widest"
            >
              ✕ CERRAR
            </button>
            <img src={tiles[open].img} alt={tiles[open].label} className="w-full h-auto object-cover" />
            <div className="border-t-2 border-neon-green/40 p-5">
              <p className="font-pixel text-2xl text-neon-green text-glow-green tracking-widest">{tiles[open].label}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------- Policies ---------------- */
export function Policies() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="politicas" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-pixel text-base text-neon-blue text-glow-blue tracking-[0.3em]">[ RULES OF ENGAGEMENT ]</p>
          <h2 className="mt-4 font-pixel text-5xl sm:text-7xl leading-none text-white tracking-wide">
            POLÍTICAS Y <span className="text-neon-green text-glow-green">REGLAS</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {POLICIES.map((p, i) => {
            const isOpen = openIdx === i;
            return (
              <Reveal key={p.q}>
                <div className={`border-2 ${isOpen ? "border-neon-green glow-green" : "border-white/15"} bg-black transition`}>
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
                      {p.q}
                    </span>
                    <span className={`font-pixel text-2xl ${isOpen ? "text-neon-green" : "text-white/60"}`}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 font-body text-base text-white/80">{p.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Snacks CTA ---------------- */
export function SnacksCTA() {
  return (
    <section className="relative bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden border-2 border-neon-orange bg-surface p-8 sm:p-14 text-center glow-orange">
            <div className="pointer-events-none absolute -top-10 -left-10 text-7xl opacity-10">🍿</div>
            <div className="pointer-events-none absolute -bottom-10 -right-10 text-7xl opacity-10">🥤</div>

            <p className="font-pixel text-base text-neon-blue text-glow-blue tracking-[0.3em]">[ POWER-UP ]</p>
            <h2 className="mt-4 font-pixel text-4xl sm:text-6xl leading-none text-white tracking-wide">
              ¿COMPLEMENTAS TU EVENTO CON <span className="text-neon-orange text-glow-orange">SNACKS</span> Y <span className="text-neon-green text-glow-green">BEBIDAS</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/80">
              Lleva un carrito de snacks completo a tu fiesta con <span className="font-bold text-white">La Botana Rodante</span>. Paquetes de eventos con botanas, dulces y bebidas para todos los jugadores.
            </p>

            <a
              href="https://labotanarodantecuu.lovable.app"
              target="_blank"
              rel="noreferrer"
              className="btn-shoot mt-9 inline-block border-2 border-neon-orange bg-neon-orange/15 px-10 py-5 font-pixel text-xl sm:text-2xl uppercase text-neon-orange text-glow-orange tracking-widest"
            >
              🛒 VER LA BOTANA RODANTE ▸
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
export function Contact({ onSubmit, prefill }: { onSubmit: () => void; prefill?: string }) {
  const [pkg, setPkg] = useState(prefill ?? "");
  useEffect(() => { if (prefill) setPkg(prefill); }, [prefill]);

  return (
    <section id="contacto" className="relative bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-3">
            <span className="font-pixel text-4xl text-neon-green crosshair-pulse">⊕</span>
            <h2 className="font-pixel text-4xl sm:text-6xl text-white tracking-wide">
              ¿LISTO PARA LA <span className="text-neon-orange text-glow-orange">BATALLA</span>?
            </h2>
            <span className="font-pixel text-4xl text-neon-green crosshair-pulse">⊕</span>
          </div>
          <p className="mx-auto mt-5 max-w-xl font-body text-base sm:text-lg text-white/70">
            Cuéntanos de tu evento. Respondemos en menos de 2 horas.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
              className="border-2 border-neon-green/60 bg-surface p-7 sm:p-9 glow-green"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" name="name" required />
                <Field label="WhatsApp" name="phone" type="tel" required />
                <Field label="Fecha del evento" name="date" type="date" required />
                <SelectField
                  label="Paquete de interés"
                  value={pkg}
                  onChange={setPkg}
                  options={["", "SOLDADO", "ÉLITE", "COMANDO TOTAL", "No estoy seguro"]}
                />
                <Field label="Número de jugadores" name="players" type="number" />
                <Field label="Lugar (colonia)" name="place" />
              </div>
              <div className="mt-5">
                <label className="font-pixel text-base uppercase text-neon-green text-glow-green tracking-widest">Mensaje</label>
                <textarea
                  name="msg"
                  rows={4}
                  className="mt-2 w-full border-2 border-white/20 bg-black p-4 font-body text-base text-white outline-none focus:border-neon-green"
                />
              </div>
              <button
                type="submit"
                className="btn-shoot mt-7 w-full border-2 border-neon-orange bg-neon-orange/15 py-5 font-pixel text-2xl uppercase text-neon-orange text-glow-orange glow-orange tracking-widest"
              >
                ▶ DISPARAR MENSAJE
              </button>
            </form>
          </Reveal>

          <Reveal className="space-y-4">
            <ContactCard icon="📱" title="WhatsApp" sub="Respuesta directa" cta="+52 614 000 0000" color="green" href="https://wa.me/" />
            <ContactCard icon="📍" title="Ubicación" sub="Servicio a domicilio" cta="Chihuahua, Chih., México" color="blue" />
            <ContactCard icon="📸" title="Instagram" sub="Mira las batallas" cta="@EliteArenaMx" color="orange" href="#" />
            <div className="border-2 border-white/15 bg-surface p-6">
              <p className="font-pixel text-base text-neon-green text-glow-green tracking-widest">⏱ TIEMPO DE RESPUESTA</p>
              <p className="mt-3 font-display text-2xl font-bold text-white">Menos de 2 horas</p>
              <p className="mt-1 font-body text-sm text-white/65">Lun a Dom · 9am a 9pm</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="font-pixel text-base uppercase text-neon-green text-glow-green tracking-widest">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-2 border-white/20 bg-black p-3.5 font-body text-base text-white outline-none focus:border-neon-green"
      />
    </div>
  );
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="font-pixel text-base uppercase text-neon-green text-glow-green tracking-widest">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border-2 border-white/20 bg-black p-3.5 font-body text-base text-white outline-none focus:border-neon-green"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o || "Selecciona…"}</option>
        ))}
      </select>
    </div>
  );
}

function ContactCard({
  icon, title, sub, cta, color, href,
}: { icon: string; title: string; sub: string; cta: string; color: "green" | "blue" | "orange"; href?: string }) {
  const a = accentMap[color];
  const Comp: React.ElementType = href ? "a" : "div";
  return (
    <Comp
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`block border-2 ${a.border} bg-surface p-6 transition hover:bg-black hover:-translate-y-1 ${a.glow}`}
    >
      <div className="flex items-center gap-4">
        <div className="text-4xl">{icon}</div>
        <div>
          <p className={`font-pixel text-base ${a.text} ${a.textGlow} tracking-widest`}>{title.toUpperCase()}</p>
          <p className="mt-1 font-display text-lg font-bold text-white">{cta}</p>
          <p className="font-body text-sm text-white/65">{sub}</p>
        </div>
      </div>
    </Comp>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  const [easter, setEaster] = useState(false);
  return (
    <footer className="relative border-t-2 border-neon-green/40 bg-black py-14 overflow-hidden">
      {easter && (
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <div className="dart-fly absolute top-1/2 -translate-y-1/2 font-pixel text-4xl text-neon-green text-glow-green">
            ▶▶▶━━━
          </div>
        </div>
      )}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <button
            onClick={() => { setEaster(true); setTimeout(() => setEaster(false), 1500); }}
            aria-label="Elite Zone"
          >
            <img src={logo} alt="Elite Zone" className="h-16 w-auto drop-shadow-[0_0_12px_rgba(236,203,8,0.6)]" />
          </button>
          <p className="mt-3 font-body text-base text-white/65">Llevamos la batalla a tu puerta.</p>
          <div className="mt-5 flex gap-3 font-pixel text-base">
            <a href="#" className="border-2 border-neon-green/60 px-4 py-2 text-neon-green hover:bg-neon-green hover:text-black tracking-widest">IG</a>
            <a href="#" className="border-2 border-neon-blue/60 px-4 py-2 text-neon-blue hover:bg-neon-blue hover:text-black tracking-widest">FB</a>
            <a href="#" className="border-2 border-neon-orange/60 px-4 py-2 text-neon-orange hover:bg-neon-orange hover:text-black tracking-widest">TT</a>
          </div>
        </div>
        <div>
          <p className="font-pixel text-lg text-neon-green text-glow-green tracking-widest">NAVEGAR</p>
          <ul className="mt-4 space-y-2 font-body text-base text-white/75">
            <li><a href="#paquetes" className="hover:text-neon-green">Paquetes</a></li>
            <li><a href="#nosotros" className="hover:text-neon-green">Nosotros</a></li>
            <li><a href="#galeria" className="hover:text-neon-green">Galería</a></li>
            <li><a href="#politicas" className="hover:text-neon-green">Políticas</a></li>
            <li><a href="#contacto" className="hover:text-neon-green">Contacto</a></li>
          </ul>
        </div>
        <div>
          <p className="font-pixel text-lg text-neon-orange text-glow-orange tracking-widest">CONTACTO</p>
          <ul className="mt-4 space-y-2 font-body text-base text-white/75">
            <li>📱 +52 614 000 0000</li>
            <li>📍 Chihuahua, Chih., México</li>
            <li>📸 @EliteArenaMx</li>
          </ul>
        </div>
      </div>
      <p className="mt-12 text-center font-pixel text-base text-white/45 tracking-widest">
        © 2025 ELITE ARENA · CHIHUAHUA, MÉXICO
      </p>
    </footer>
  );
}
