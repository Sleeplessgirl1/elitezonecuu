import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Navbar from "@/components/elite/Navbar";
import { LoadingScreen, TacticalCursor, Toast } from "@/components/elite/Effects";
import {
  About, Contact, Footer, Gallery, Hero, Packages, Policies, SnacksCTA, Stats, Steps,
} from "@/components/elite/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELITE ARENA — Batallas de Nerf y Gelfire a domicilio en Chihuahua" },
      {
        name: "description",
        content:
          "Llevamos la arena hasta tu fiesta. Guerras de Nerf y Gelfire para niños y jóvenes en Chihuahua. Equipo, moderadores y diversión incluidos.",
      },
      { property: "og:title", content: "ELITE ARENA — Guerras de Nerf a domicilio" },
      {
        property: "og:description",
        content: "Servicio de batallas de Nerf y Gelfire en Chihuahua. Reserva tu paquete.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content: "nerf chihuahua, gelfire, batallas nerf, fiestas infantiles chihuahua, eventos",
      },
    ],
    links: [
      { rel: "icon", href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🎯%3C/text%3E%3C/svg%3E" },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<string | null>(null);
  const [mode, setMode] = useState<"nerf" | "gel">("nerf");
  const [pkgPrefill, setPkgPrefill] = useState<string | undefined>();

  const handleReserve = (name: string) => {
    setPkgPrefill(name);
    setToast(`PAQUETE ${name} SELECCIONADO`);
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <TacticalCursor />
      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}

      <Navbar mode={mode} onToggleMode={() => setMode((m) => (m === "nerf" ? "gel" : "nerf"))} />
      <main className="bg-black">
        <Hero mode={mode} />
        <Steps />
        <Stats />
        <Packages onReserve={handleReserve} />
        <About />
        <Gallery />
        <Policies />
        <Contact onSubmit={() => setToast("MENSAJE ENVIADO ▸ TE CONTACTAMOS PRONTO")} prefill={pkgPrefill} />
      </main>
      <Footer />
    </>
  );
}
