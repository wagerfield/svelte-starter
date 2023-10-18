import { isTheme } from "$lib/theme"

export const load = async ({ cookies, locals }) => {
  const theme = cookies.get("theme")

  return {
    session: await locals.getSession(),
    theme: isTheme(theme) ? theme : "system",
  }
}
