import { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import { getBodyFont, getHeroFont, getMonoFont } from "./tailwind.utils"
import { createTheme } from "./tailwind.theme"

export default {
  content: ["./src/**/*.{html,svelte,ts}"],
  plugins: [require("daisyui")],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", ...fontFamily.sans],
      mono: ["JetBrains Mono Variable", ...fontFamily.mono],
    },
    fontSize: {
      // body
      "xs": getBodyFont(12),
      "sm": getBodyFont(14),
      "md": getBodyFont(16),
      "lg": getBodyFont(18),
      "xl": getBodyFont(20),
      // mono
      "mono-xs": getMonoFont(11),
      "mono-sm": getMonoFont(12),
      "mono-md": getMonoFont(13),
      "mono-lg": getMonoFont(14),
      "mono-xl": getMonoFont(16),
      // hero
      "hero-1": getHeroFont(24, 1.15),
      "hero-2": getHeroFont(30, 1.15),
      "hero-3": getHeroFont(36),
      "hero-4": getHeroFont(42),
      "hero-5": getHeroFont(48),
      "hero-6": getHeroFont(60),
      "hero-7": getHeroFont(72, 1.05),
      "hero-8": getHeroFont(96, 1.05),
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
