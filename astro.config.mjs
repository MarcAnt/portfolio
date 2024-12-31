// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",

    // routing: {
    //   prefixDefaultLocale: true,
    // },
  },

  // trailingSlash: "never",

  experimental: {
    svg: true,
  },

  integrations: [tailwind(), react()],
});
