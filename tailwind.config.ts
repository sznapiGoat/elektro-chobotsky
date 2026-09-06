import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Papír technického listu, studená neutrální škála.
        paper: {
          DEFAULT: "#F2F3F1",
          200: "#E9EBE8",
          300: "#DFE2DE",
        },
        ink: {
          DEFAULT: "#131A20",
          700: "#46535C",
          500: "#5F6B72",
          300: "#9AA3A0",
        },
        line: {
          DEFAULT: "#C6CCC9",
          strong: "#A4ACA9",
        },
        // Jediný akcent. Signální červená jako na štítcích rozvaděčů.
        signal: {
          DEFAULT: "#A82F26",
          hover: "#8E241C",
          soft: "#F4E7E5",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      // Technický list nemá zaoblené hrany.
      borderRadius: {
        none: "0px",
        sm: "0px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px",
      },
      maxWidth: {
        shell: "1240px",
        measure: "68ch",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
