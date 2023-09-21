import type { Handle } from "@sveltejs/kit"
import { isTheme } from "$lib/theme"

export const themeHook: Handle = async ({ event, resolve }) => {
  const theme = event.cookies.get("theme")

  if (!isTheme(theme)) return await resolve(event)

  return await resolve(event, {
    transformPageChunk({ html }) {
      return html.replace("data-theme", `data-theme="${theme}"`)
    },
  })
}
