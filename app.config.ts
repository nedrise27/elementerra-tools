import { defineConfig } from "@solidjs/start/config";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  vite: {
    plugins: [nodePolyfills()],
  },
  ssr: true,
  server: {
    baseURL: process.env.VITE_BASE_PATH,
    preset: "static",
    static: true,
    prerender: {
      failOnError: true,
      routes: ["/"],
      crawlLinks: true,
    },
  },
});
