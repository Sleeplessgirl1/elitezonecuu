import { useEffect, useRef, useState } from "react";

/* ---------------- Loading screen ---------------- */
export function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
      <div className="relative w-full max-w-md px-6">
        <p className="font-pixel text-[10px] sm:text-xs text-neon-green mb-6 text-center text-glow-green">
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
        <circle cx="16" cy="16" r="10" fill="none" stroke="#39FF14" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="1.5" fill="#39FF14" />
        <line x1="16" y1="0" x2="16" y2="8" stroke="#39FF14" strokeWidth="1.5" />
        <line x1="16" y1="24" x2="16" y2="32" stroke="#39FF14" strokeWidth="1.5" />
        <line x1="0" y1="16" x2="8" y2="16" stroke="#39FF14" strokeWidth="1.5" />
        <line x1="24" y1="16" x2="32" y2="16" stroke="#39FF14" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/* ---------------- Floating particles (darts) ---------------- */
export function Particles() {
  const [items] = useState(() =>
    Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 10,
      size: 8 + Math.random() * 14,
      color: ["#39FF14", "#00BFFF", "#FF6600"][i % 3],
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
    <div className="inline-flex items-center gap-2 border border-neon-orange/60 bg-black/60 px-3 py-2 font-pixel text-[9px] text-neon-orange text-glow-orange">
      ⏱ PRÓXIMA BATALLA EN {days} DÍAS
    </div>
  );
}
