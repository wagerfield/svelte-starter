export enum Theme {
  System = "system",
  Light = "light",
  Dark = "dark",
}

export const THEMES = Object.values(Theme)

export const isTheme = (value: unknown): value is Theme => {
  return THEMES.includes(value as Theme)
}
