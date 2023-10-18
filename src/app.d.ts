import { SupabaseClient, Session } from "@supabase/supabase-js"

// https://kit.svelte.dev/docs/types#app
declare global {
  namespace App {
    interface Error {
      message: string
    }
    interface Locals {
      supabase: SupabaseClient
      getSession(): Promise<Session | null>
    }
    interface PageData {
      session: Session | null
      theme: string
    }
  }
}
