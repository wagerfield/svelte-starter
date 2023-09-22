import { redirect } from "@sveltejs/kit"
import { isString } from "$lib/utils"
import { isTheme } from "$lib/theme"

export const actions = {
  setTheme: async ({ cookies, request }) => {
    const formData = await request.formData()
    const theme = formData.get("theme")
    const url = formData.get("url")

    if (isTheme(theme)) {
      cookies.set("theme", theme, { path: "/" })
    }

    throw redirect(303, isString(url) ? url : "/")
  },
}
