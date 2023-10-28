<script lang="ts">
  import { onMount } from "svelte"
  import { goto } from "$app/navigation"

  export let data

  onMount(() => {
    const result = data.supabase.auth.onAuthStateChange((event, session) => {
      if (session) goto("/dashboard")
    })

    return () => result.data.subscription.unsubscribe()
  })
</script>

<p>Check your inbox</p>
