import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit"
import type { Handle } from "@sveltejs/kit"
import {
  PUBLIC_SUPABASE_BASE_URL,
  PUBLIC_SUPABASE_ANON_KEY,
} from "$env/static/public"

export const supabaseHook: Handle = async ({ event, resolve }) => {
  const supabase = createSupabaseServerClient({
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    supabaseUrl: PUBLIC_SUPABASE_BASE_URL,
    event,
  })

  event.locals.supabase = supabase
  event.locals.getSession = async () => {
    const { data } = await supabase.auth.getSession()

    return data.session
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range"
    },
  })
}
