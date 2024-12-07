import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";
import rewriteAll from "vite-plugin-rewrite-all"; // Plugin for rewriting

const boxleURL = "boxle.vercel.app"; // Replace with actual Boxle URL
const portfolioURL = "brennant-portfolio.vercel.app"; // Replace with actual Portfolio URL

// This is required for Vite to work correctly with CodeSandbox
const server = process.env.APP_ENV === "sandbox" ? { hmr: { clientPort: 443 } } : {};

// Vite configuration
export default defineConfig({
  server: {
    ...server,
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), glsl(), rewriteAll()],
});
