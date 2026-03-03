import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#2d6a4f",
          "green-dark": "#1b4332",
          "green-light": "#f0f7f4",
        },
        text: {
          dark: "#1a1a1a",
          body: "#333333",
          muted: "#888888",
        },
        border: "#e5e5e5",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
