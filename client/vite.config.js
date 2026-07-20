import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsx: "automatic"
  },
  server: {
    proxy: {
      "/api": process.env.BLINKRIDE_API_URL || "http://localhost:5001"
    }
  }
});
