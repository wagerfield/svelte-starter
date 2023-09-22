import { isTheme } from "$lib/theme"

export const load = async ({ cookies }) => {
  const theme = cookies.get("theme")

  return {
    theme: isTheme(theme) ? theme : "system",
  }
}
