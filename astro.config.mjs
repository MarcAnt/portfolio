// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  },

  experimental: {
    svg: true,
  },
  site: "https://marcosesqueda.dev/",
  integrations: [tailwind(), react(), sitemap()],
});
