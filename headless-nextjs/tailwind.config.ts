import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/config/componentMap.tsx",
  ],
  darkMode: "class",
  safelist: ["hero-highlight"],
  theme: {
    extend: {
      fontFamily: {
        source: ["var(--font-source)"],
        argentum: ["var(--font-argentum)"],
      },
      colors: {
        dark: {
          DEFAULT: colors.stone["800"],
        },
        light: {
          DEFAULT: colors.stone["50"],
        },
        primary: {
          DEFAULT: "#0077b6",
          light: "#4da8da",
          dark: "#005377",
        },
        secondary: {
          DEFAULT: "#2a9d8f",
          light: "#55c1b7",
          dark: "#1f6f71",
        },
        success: {
          DEFAULT: "#2a9d8f",
          light: "#68c4af",
          dark: "#207567",
        },
        error: {
          DEFAULT: "#e63946",
          light: "#ff6b6b",
          dark: "#ac1f37",
        },
        warning: {
          DEFAULT: "#f4a261",
          light: "#ffd384",
          dark: "#c27840",
        },
        info: {
          DEFAULT: "#4a4e69",
          light: "#787a91",
          dark: "#262a41",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
export default config;
