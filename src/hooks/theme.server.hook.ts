import type { Handle } from "@sveltejs/kit"

export const themeServerHook: Handle = async ({ event, resolve }) => {
  return await resolve(event)
}
