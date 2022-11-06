import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  server: {
    open: true,
    host: "0.0.0.0",
    port: 3000,
  },
  build: {
    reportCompressedSize: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        regester: resolve(__dirname, "regester.html"),
        forget: resolve(__dirname, "forget.html"),
      },
    },
  },
});