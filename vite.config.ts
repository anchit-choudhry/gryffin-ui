import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from 'vite-plugin-compression2';
import packageJson from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  base: `/${packageJson.name}/`,
  plugins: [react(), tailwindcss(), viteCompression({
    algorithms: ['gzip', 'brotliCompress'],
  }),],
});
