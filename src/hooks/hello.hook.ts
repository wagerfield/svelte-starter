import type { Handle } from "@sveltejs/kit"

export const helloHook: Handle = async ({ event, resolve }) => {
  if (event.url.pathname === "/hello") return new Response("world")

  return await resolve(event)
}
