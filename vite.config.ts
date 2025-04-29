import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import packageJson from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  base: `/${packageJson.name}/`,
  plugins: [react(), tailwindcss(),
  ],
});
