import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        primary: { DEFAULT: "var(--primary)", hover: "var(--primary-hover)", soft: "var(--primary-soft)", on: "var(--on-primary)" },
        accent: "var(--accent)",
        danger: "var(--danger-text)",
      },
      borderRadius: { sm: "var(--radius-sm)", md: "var(--radius-md)", lg: "var(--radius-lg)" },
      boxShadow: { sm: "var(--shadow-sm)", md: "var(--shadow-md)" },
      fontFamily: { bn: ["var(--font-bn)"], display: ["var(--font-display-bn)"], latin: ["var(--font-latin)"] },
    },
  },
  plugins: [],
};
export default config;
