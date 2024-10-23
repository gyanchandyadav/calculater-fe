import path from "path";
import react from "@vitejs/plugin-react";
import eslint from 'vite-plugin-eslint';
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), eslint() as any], // Cast eslint to any to bypass type issues
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
