import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A1015",
          950: "#080D11",
          900: "#0A1015",
          800: "#0E161D",
          700: "#131E27",
          600: "#1A2833",
          500: "#22343F",
        },
        steel: {
          400: "#8A9AA8",
          300: "#A9B7C3",
          200: "#C9D4DD",
          100: "#E6ECF1",
        },
        signal: {
          DEFAULT: "#B3342B",
          hover: "#C64236",
          soft: "rgba(179, 52, 43, 0.12)",
          // Zesvětlená varianta pro text a ikony na tmavém podkladu (WCAG AA).
          text: "#E9887B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        // Jediná škála: plochy 4px, nic zaobleného navíc.
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        md: "4px",
        lg: "4px",
        xl: "4px",
      },
      maxWidth: {
        shell: "1320px",
      },
      boxShadow: {
        panel: "0 24px 60px -32px rgba(3, 8, 12, 0.9)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
