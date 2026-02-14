import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0891b2",
        "primary-dark": "#0e7490",
        "primary-light": "#22d3ee",
        background: "#ffffff",
        surface: "#f8fafc",
        "surface-dark": "#f1f5f9",
      },
    },
  },
  plugins: [],
} satisfies Config;
