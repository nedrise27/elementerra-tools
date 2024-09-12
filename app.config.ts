import { defineConfig } from "@solidjs/start/config";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  vite: {
    plugins: [nodePolyfills()],
  },
  server: {
    baseURL: process.env.BASE_PATH,
    static: true,
    prerender: {
      failOnError: true,
      routes: ["/"],
      crawlLinks: true,
    },
  },
});
