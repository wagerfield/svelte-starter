<script lang="ts">
  import { onMount } from "svelte"
  import { getFormField } from "formsnap"
  import { getSupabase } from "$lib/supabase"

  const { name, setValue } = getFormField()

  const supabase = getSupabase()

  if (!supabase) throw new Error("Supabase client undefined")

  export let column = name

  onMount(() => {
    const channel = supabase
      .channel("user_profiles")
      .on(
        "postgres_changes",
        {
          schema: "public",
          table: "user_profiles",
          event: "UPDATE",
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
