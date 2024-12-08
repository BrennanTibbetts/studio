import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";
import rewriteAll from "vite-plugin-rewrite-all"; // Plugin for rewriting
import wasm from "vite-plugin-wasm";

// Vite configuration
export default defineConfig({
  plugins: [
    react(), 
    glsl({
      glslify: true
    }), 
    rewriteAll(),
    wasm()
  ],
  optimizeDeps: {
    include: ['glslify']
  },
});
