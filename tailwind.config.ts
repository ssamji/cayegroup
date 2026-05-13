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
        // Navy ramp — section backgrounds
        navy: {
          0:  "#080f24",  // body bg
          1:  "#0d1635",  // primary sections
          2:  "#111d40",  // alternate sections
          3:  "#162248",  // cards, elevated surfaces
          4:  "#1e2f5c",  // card hover, borders
          5:  "#243669",  // bright border accents
        },
        // Amber — accent, CTAs, kickers
        amber: {
          DEFAULT: "#f59e0b",
          lt:      "#fbbf24",
          dim:     "rgba(245,158,11,0.12)",
        },
        // Blue — primary action
        blue: {
          DEFAULT: "#2563eb",
          lt:      "#3b82f6",
          dim:     "rgba(37,99,235,0.15)",
        },
        // Text alphas on dark
        t: {
          high: "rgba(255,255,255,0.92)",
          med:  "rgba(255,255,255,0.60)",
          low:  "rgba(255,255,255,0.35)",
          dim:  "rgba(255,255,255,0.10)",
          hair: "rgba(255,255,255,0.07)",
        },
        // Semantic
        red: {
          DEFAULT: "#ef4444",
          dim:     "rgba(239,68,68,0.15)",
        },
        green: {
          DEFAULT: "#22c55e",
        },
      },
      fontFamily: {
        sora:   ["Sora", "sans-serif"],
        dm:     ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
