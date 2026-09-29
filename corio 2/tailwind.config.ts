import type { Config } from "tailwindcss";

// Farben/Tokens leben als CSS-Variablen in app/globals.css und werden hier nur referenziert.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        grey: "var(--color-grey)",
        black: "var(--color-black)",
        white: "var(--color-white)",
        offwhite: "var(--color-offwhite)",
        muted: "var(--color-muted)",
      },
      fontFamily: {
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      // Fluid Typography: Referenz = 1920px-Frame, Obergrenze = Referenzgröße
      fontSize: {
        display: ["clamp(2.25rem, 1rem + 3.9vw, 5.5rem)", { lineHeight: "1" }], // Hero-Headline ≈ 88px @1920
        statement: ["clamp(1.125rem, 0.35rem + 2vw, 2.75rem)", { lineHeight: "1.07" }], // Hero-Textblock ≈ 44px @1920
        nav: ["clamp(0.9375rem, 0.7rem + 0.4vw, 1.125rem)", { lineHeight: "1.2" }], // ≈ 18px @1920
        label: ["clamp(0.6875rem, 0.6rem + 0.2vw, 0.875rem)", { lineHeight: "1.2" }],
      },
      maxWidth: { frame: "120rem" }, // 1920px
      transitionTimingFunction: { soft: "cubic-bezier(0.22, 1, 0.36, 1)" },
      spacing: { gutter: "var(--gutter)", header: "var(--header-h)" },
    },
  },
  plugins: [],
};
export default config;
