import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,svelte,ts}"],
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", ...fontFamily.sans],
      mono: ["JetBrains Mono Variable", ...fontFamily.mono],
    },
    extend: {
      colors: {
        fg: "rgb(var(--color-fg) / <alpha-value>)",
        bg: "rgb(var(--color-bg) / <alpha-value>)",
      },
    },
  },
}
