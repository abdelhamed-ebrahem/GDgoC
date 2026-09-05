import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1F1F1F",
        paper: "#FAFAF8",
        surface: "#F1F3F4",
        blue: "#4285F4",
        red: "#EA4335",
        yellow: "#FBBC05",
        green: "#34A853",
      },
      fontFamily: {
        tajawal: ["var(--font-tajawal)", "Tahoma", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
