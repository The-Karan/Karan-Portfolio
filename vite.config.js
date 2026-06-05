import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 650,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("three") ||
              id.includes("@react-three") ||
              id.includes("@pmndrs") ||
              id.includes("maath")
            ) {
              return "three-vendor";
            }

            if (id.includes("framer-motion")) {
              return "motion-vendor";
            }

            if (id.includes("react")) {
              return "react-vendor";
            }

            return "vendor";
          }
        },
      },
    },
  },
});
