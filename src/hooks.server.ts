import { sequence } from "@sveltejs/kit/hooks"
import { themeHook } from "./hooks/theme.hook"
import { supabaseHook } from "./hooks/supabase.hook"

export const handle = sequence(supabaseHook, themeHook)
