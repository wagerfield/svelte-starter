import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
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
    themes: [
      {
        light: {
          // https://daisyui.com/docs/colors
          "base-100": "#fff",
          // "base-200": "#fff",
          // "base-300": "#fff",
          "base-content": "#000",

          "primary": "#ff0000",
          // "primary-focus": "#ff0000",
          // "primary-content": "#ff0000",

          "secondary": "#0000ff",
          // "secondary-focus": "#0000ff",
          // "secondary-content": "#0000ff",

          "accent": "#37cdbe",
          // "accent-focus": "#37cdbe",
          // "accent-content": "#37cdbe",

          "neutral": "#3d4451",
          // "neutral-focus": "#3d4451",
          // "neutral-content": "#3d4451",

          "info": "#3d4451",
          "info-content": "#3d4451",

          "success": "#3d4451",
          "success-content": "#3d4451",

          "warning": "#3d4451",
          "warning-content": "#3d4451",

          "error": "#3d4451",
          "error-content": "#3d4451",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
        dark: {
          "base-100": "#000",
          "base-content": "#fff",
          "primary": "#d00",
          "primary-content": "#fff",
          "secondary": "#0000ff",
          "accent": "#37cdbe",
          "neutral": "#3d4451",

          // "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.25rem", // border radius rounded-btn utility class, used in buttons and similar element
          // "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          // "--animation-btn": "0.25s", // duration of animation when you click on button
          // "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          // "--btn-text-case": "uppercase", // set default text transform for buttons
          // "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          // "--border-btn": "1px", // border width of buttons
          // "--tab-border": "1px", // border width of tabs
          // "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
}
