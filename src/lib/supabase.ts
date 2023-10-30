import { getContext, setContext } from "svelte"

export const SUPABASE = Symbol()

export const setSupabase = (client: Supabase) => setContext(SUPABASE, client)

export const getSupabase = () => getContext<Supabase>(SUPABASE)
