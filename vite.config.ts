// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deploy target: 'vercel' when building for Vercel, 'cloudflare-module' (default) otherwise.
// Set DEPLOY_TARGET=vercel on Vercel project env vars.
const isVercel = process.env.DEPLOY_TARGET === "vercel" || !!process.env.VERCEL;

export default defineConfig({
  // Disable the Cloudflare Workers plugin when targeting Vercel.
  cloudflare: isVercel ? false : undefined,
  // Tell TanStack Start which Nitro preset to bundle for.
  tanstackStart: isVercel ? { target: "vercel" } : undefined,
});
