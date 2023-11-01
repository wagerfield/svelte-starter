<script lang="ts">
  import { onMount } from "svelte"
  import { getFormField } from "formsnap"
  import { getSupabase } from "$lib/supabase"

  const { name, setValue } = getFormField()

  const supabase = getSupabase()

  if (!supabase) throw new Error("Supabase client undefined")

  export let schema: keyof Database = "public"
  export let table: keyof Database["public"]["Tables"]
  export let filter: string | undefined = undefined
  export let column: string = name

  onMount(() => {
    const channel = supabase
      .channel("database_changes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema,
          filter,
          table,
        },
        (payload) => {
          const value = payload.new[column]
          if (value) setValue(value)
        },
      )
      .subscribe()

    return () => channel.unsubscribe()
  })
</script>
