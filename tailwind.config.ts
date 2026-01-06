import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        arrow: {
          "0%": { opacity: "0" },
          "40%": { opacity: "1" },
          "80%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        arrow: "arrow 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
