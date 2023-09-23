import { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import { createTheme } from "./tailwind.theme"

export default {
  content: ["./src/**/*.{html,svelte,ts}"],
  plugins: [require("daisyui")],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", ...fontFamily.sans],
      mono: ["JetBrains Mono Variable", ...fontFamily.mono],
    },
  },
  // https://daisyui.com/docs/config
  daisyui: {
    logs: false,
    utils: false,
    themes: [
      {
        light: createTheme({
          background: "#fff",
          foreground: "#000",
          primary: {
            base: "#f00",
            content: "#fff",
          },
        }),
        dark: createTheme({
          background: "#000",
          foreground: "#fff",
          primary: {
            base: "#fff",
            content: "#000",
          },
        }),
      },
    ],
  },
} satisfies Config
