import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit"
import {
  PUBLIC_SUPABASE_KEY,
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_AUTH_TOKEN,
} from "$env/static/public"

export const load = async ({ fetch, data, depends }) => {
  depends(PUBLIC_SUPABASE_AUTH_TOKEN)

  const supabase = createSupabaseLoadClient<Database>({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_KEY,
    serverSession: data.session,
    event: { fetch },
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { supabase, session }
}
