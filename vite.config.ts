import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Si vas a hacer deploy en GitHub Pages con subpath, descomenta:
  // base: '/ohmybowl/',
});
