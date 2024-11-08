import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#2563eb",
          dark: "#1e40af",
        },
        secondary: {
          DEFAULT: "#fbbf24",
          dark: "#d97706",
        },
      },
    },
  },
  plugins: [],
};
export default config;
