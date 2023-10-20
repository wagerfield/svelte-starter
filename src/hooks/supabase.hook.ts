import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit"
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from "$env/static/public"
import type { Handle } from "@sveltejs/kit"

export const supabaseHook: Handle = async ({ event, resolve }) => {
  const supabase = createSupabaseServerClient<Database>({
    supabaseKey: PUBLIC_SUPABASE_KEY,
    supabaseUrl: PUBLIC_SUPABASE_URL,
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
