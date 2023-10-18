import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit"
import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_BASE_URL,
  PUBLIC_SUPABASE_ID_TOKEN,
} from "$env/static/public"

export const load = async ({ fetch, data, depends }) => {
  depends(PUBLIC_SUPABASE_ID_TOKEN)

  const supabase = createSupabaseLoadClient({
    supabaseUrl: PUBLIC_SUPABASE_BASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    serverSession: data.session,
    event: { fetch },
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { supabase, session }
}
