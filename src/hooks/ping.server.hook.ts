import type { Handle } from "@sveltejs/kit"

export const pingServerHook: Handle = async ({ event, resolve }) => {
  if (event.url.pathname === "/ping") return new Response("pong")

  return await resolve(event)
}
