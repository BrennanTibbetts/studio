import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { glslify } from "vite-plugin-glslify";

// Vite configuration
export default defineConfig({
  plugins: [
    react(), 
    glslify(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {},
      }
    }
  }
});
