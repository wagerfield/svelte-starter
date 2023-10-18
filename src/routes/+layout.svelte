<script lang="ts">
  import "../app.css"

  import { onMount } from "svelte"
  import { invalidate } from "$app/navigation"
  import { PUBLIC_SUPABASE_ID_TOKEN } from "$env/static/public"

  import "@fontsource-variable/inter"
  import "@fontsource-variable/jetbrains-mono"

  import Head from "$components/Head.svelte"
  import Header from "$components/Header.svelte"
  import Footer from "$components/Footer.svelte"

  export let data

  onMount(() => {
    const result = data.supabase.auth.onAuthStateChange((event, session) => {
      if (session?.expires_at !== data.session?.expires_at) {
        invalidate(PUBLIC_SUPABASE_ID_TOKEN)
      }
    })

    return () => result.data.subscription.unsubscribe()
  })
</script>

<Head />

<div class="min-h-screen flex flex-col">
  <Header />
  <main class="grow flex flex-col items-center justify-center p-4 space-y-12">
    <slot />
  </main>
  <Footer />
</div>
