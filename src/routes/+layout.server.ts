import { Theme, isTheme } from "$lib/theme.js"

export const load = async ({ cookies }) => {
  const theme = cookies.get("theme")

  return {
    theme: isTheme(theme) ? theme : Theme.System,
  }
}
