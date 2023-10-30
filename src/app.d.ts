import { SupabaseClient, Session } from "@supabase/supabase-js"
import type { Database as DB } from "./types/database.types"

declare global {
  type Database = DB
  type Supabase = SupabaseClient<DB>

  type DatabaseFunctions<T extends keyof DB["public"]["Functions"]> =
    DB["public"]["Functions"][T]

  type DatabaseTables<T extends keyof DB["public"]["Tables"]> =
    DB["public"]["Tables"][T]["Row"]

  type DatabaseEnums<T extends keyof DB["public"]["Enums"]> =
    DB["public"]["Enums"][T]

  // https://kit.svelte.dev/docs/types#app
  namespace App {
    interface Error {
      message: string
    }
    interface Locals {
      supabase: Supabase
      getSession(): Promise<Session | null>
    }
    interface PageData {
      supabase: Supabase
      session: Session | null
      theme: string
    }
  }
}
