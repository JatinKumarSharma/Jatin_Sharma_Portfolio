import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { writePublicFiles, writeRouteHtml } from "./scripts/generate-seo.mjs";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "portfolio-seo-routes",
      apply: "build",
      buildStart() {
        writePublicFiles();
      },
      closeBundle() {
        writeRouteHtml();
      },
    },
  ],
});
