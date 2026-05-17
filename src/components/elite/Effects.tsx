import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------------- HUD Button (tactical frame with details) ---------------- */
export function HudButton({
  children,
  href,
  onClick,
  color = "var(--neon-green)",
  size = "md",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  color?: string;
  size?: "sm" | "md";
  className?: string;
}) {
  const pad =
    size === "sm" ? "px-7 py-3 text-xs sm:text-sm" : "px-10 py-5 text-base sm:text-lg";
  const Comp: any = href ? "a" : onClick ? "button" : "div";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`hud-btn group relative inline-flex items-center justify-center font-pixel uppercase tracking-widest ${pad} ${className}`}
      style={{ color }}
    >
      {/* SVG frame */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {/* main outline: big chamfer top-left & bottom-right, small notch top-right & bottom-left */}
        <path
          d="
            M 22 4
            L 388 4
            L 396 12
            L 396 88
            L 378 96
            L 12 96
            L 4 88
            L 4 22
            Z
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
        {/* top center small dashes */}
        <g stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke">
          <line x1="180" y1="0" x2="186" y2="0" />
          <line x1="190" y1="0" x2="196" y2="0" />
          <line x1="200" y1="0" x2="206" y2="0" />
          <line x1="210" y1="0" x2="216" y2="0" />
        </g>
        {/* bottom center small dashes */}
        <g stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" opacity="0.7">
          <line x1="186" y1="100" x2="192" y2="100" />
          <line x1="196" y1="100" x2="202" y2="100" />
          <line x1="206" y1="100" x2="212" y2="100" />
        </g>
        {/* corner triangle indicators */}
        <polygon points="14,14 28,14 14,28" fill="currentColor" opacity="0.9" />
        <polygon points="386,86 372,86 386,72" fill="currentColor" opacity="0.9" />
      </svg>
      <span className="relative z-10" style={{ textShadow: `0 0 10px ${color}, 0 0 20px ${color}` }}>
        {children}
      </span>
    </Comp>
  );
}


/* ---------------- Loading screen ---------------- */
export function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
      <div className="relative w-full max-w-md px-6">
        <p className="font-pixel text-base sm:text-xl text-neon-green mb-6 text-center text-glow-green tracking-widest">
          INITIALIZING BATTLE...
        </p>
        <div className="relative h-3 w-full border border-neon-green bg-black overflow-hidden">
          <div className="load-bar h-full bg-neon-green" />
        </div>
        <div className="relative mt-6 h-6 overflow-hidden">
          <div className="dart-fly absolute top-1/2 -translate-y-1/2 text-neon-green font-pixel text-base">
            ▶▶▶━━
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Custom cursor ---------------- */
export function TacticalCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;
    document.body.classList.add("cursor-tactical");
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("cursor-tactical");
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-8 w-8 md:block"
      aria-hidden
    >
      <svg viewBox="0 0 32 32" className="h-full w-full crosshair-pulse">
        <circle cx="16" cy="16" r="10" fill="none" stroke="#eccb08" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="1.5" fill="#eccb08" />
        <line x1="16" y1="0" x2="16" y2="8" stroke="#eccb08" strokeWidth="1.5" />
        <line x1="16" y1="24" x2="16" y2="32" stroke="#eccb08" strokeWidth="1.5" />
        <line x1="0" y1="16" x2="8" y2="16" stroke="#eccb08" strokeWidth="1.5" />
        <line x1="24" y1="16" x2="32" y2="16" stroke="#eccb08" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/* ---------------- Floating particles (darts) ---------------- */
export function Particles() {
  const [items] = useState(() =>
    Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 10,
      size: 10 + Math.random() * 18,
      color: ["#eccb08", "#00BFFF", "#3b6fe8"][i % 3],
    })),
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((p) => (
        <span
          key={p.id}
          className="particle absolute font-pixel"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            color: p.color,
            fontSize: p.size,
            textShadow: `0 0 8px ${p.color}`,
          }}
        >
          ▶
        </span>
      ))}
    </div>
  );
}

/* ---------------- Reveal wrapper ---------------- */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}

/* ---------------- Animated counter ---------------- */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const dur = 1400;
            const step = (now: number) => {
              const p = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(to * eased));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ---------------- Toast ---------------- */
export function Toast({ msg, onClose }: { msg: string; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div className="fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 border-2 border-neon-green bg-black px-5 py-3 font-pixel text-[10px] text-neon-green text-glow-green glow-green animate-in fade-in slide-in-from-bottom-4">
      ▶ {msg}
    </div>
  );
}

/* ---------------- Countdown ---------------- */
export function Countdown() {
  const [days, setDays] = useState(() => 3 + Math.floor(Math.random() * 5));
  useEffect(() => {
    const t = setInterval(() => setDays((d) => (d > 1 ? d - 1 : 7)), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="tactical-btn" style={{ ["--bd" as any]: "var(--neon-orange)" }}>
      <span className="px-6 py-3 font-pixel text-sm sm:text-base text-neon-orange text-glow-orange tracking-widest whitespace-nowrap">
        ⏱ PRÓXIMA BATALLA EN {days} DÍAS
      </span>
    </div>
  );
}
