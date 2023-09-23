interface ColorConfig {
  base: string
  focus?: string
  content: string
}

interface ThemeConfig {
  // base?: [string, string]
  background: string
  foreground: string
  primary: ColorConfig
  // secondary: ColorConfig
  // accent: ColorConfig
  // neutral: ColorConfig
  // success: ColorConfig
  // warning: ColorConfig
  // error: ColorConfig
  // info: ColorConfig

  buttonRadius?: string
}

// https://daisyui.com/docs/colors
export const createTheme = (theme: ThemeConfig) => ({
  "base-100": theme.background,
  // "base-200": "#fff",
  // "base-300": "#fff",
  "base-content": theme.foreground,

  "primary": theme.primary.base,
  "primary-content": theme.primary.content,

  // "secondary": theme.secondary.base,
  // "secondary-content": theme.secondary.content,

  // "accent": theme.accent.base,
  // "accent-content": theme.accent.content,

  // "neutral": theme.neutral.base,
  // "neutral-content": theme.neutral.content,

  // "info": "#3d4451",
  // "info-content": "#3d4451",

  // "success": "#3d4451",
  // "success-content": "#3d4451",

  // "warning": "#3d4451",
  // "warning-content": "#3d4451",

  // "error": "#3d4451",
  // "error-content": "#3d4451",

  // "--animation-btn": "0.25s", // duration of animation when you click on button
  // "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc

  // "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
  "--rounded-btn": theme.buttonRadius, // border radius rounded-btn utility class, used in buttons and similar element
  // "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar

  "--btn-text-case": "none", // set default text transform for buttons
  "--btn-focus-scale": "1", // scale transform of button when you focus on it
  "--border-btn": "1px", // border width of buttons

  // "--tab-border": "1px", // border width of tabs
  // "--tab-radius": "0.5rem", // border radius of tabs
})
