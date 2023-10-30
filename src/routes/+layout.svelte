<script lang="ts">
  import "../app.css"

  import { onMount } from "svelte"
  import { invalidate } from "$app/navigation"
  import { PUBLIC_SUPABASE_AUTH_TOKEN } from "$env/static/public"
  import { setSupabase } from "$lib/supabase"

  import "@fontsource-variable/inter"
  import "@fontsource-variable/jetbrains-mono"

  import Head from "$components/Head.svelte"
  import Header from "$components/Header.svelte"
  import Footer from "$components/Footer.svelte"

  export let data

  setSupabase(data.supabase)

  onMount(() => {
    const result = data.supabase.auth.onAuthStateChange((event, session) => {
      if (session?.expires_at !== data.session?.expires_at) {
        invalidate(PUBLIC_SUPABASE_AUTH_TOKEN)
      }
    })

    return () => result.data.subscription.unsubscribe()
  })
</script>

<Head />

<div class="min-h-screen flex flex-col">
  <Header />
  <main class="grow p-4 flex items-center justify-center">
    <slot />
  </main>
  <Footer />
</div>
