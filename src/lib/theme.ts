export const THEMES = ["system", "light", "dark"] as const

export type Theme = (typeof THEMES)[number]

export const isTheme = (value: unknown): value is Theme => {
  return THEMES.includes(value as Theme)
}
