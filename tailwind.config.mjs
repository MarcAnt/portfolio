import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "instrument-sans",
          "instrument-sans-bold",

          ...defaultTheme.fontFamily.sans,
        ],
        "geist-mono": ["geist-mono"],
      },
      colors: {
        navigation: "#d4a3731a",
        lightCard: "#d4a373a3",
        textMessage: "#D4A373",
        textDark: "#1c1c1c",
        darkNavigation: "#221C1C",
        langLink: "#473333",
        LinkNavigationFrom: "#473333",
        LinkNavigationTo: "#584141",
        borderLinkNavigation: "#584141",
        textLight: "#FEFAE0",
        blueLink: "#3974de",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
