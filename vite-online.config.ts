import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = resolve(__dirname, "src/online/");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
});
