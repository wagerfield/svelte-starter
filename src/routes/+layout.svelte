<script lang="ts">
  import "../app.css"

  import "@fontsource-variable/inter"
  import "@fontsource-variable/jetbrains-mono"

  import { onMount } from "svelte"

  import Head from "$components/Head.svelte"
  import Header from "$components/Header.svelte"
  import Footer from "$components/Footer.svelte"

  onMount(() => {
    document.documentElement.removeAttribute("data-ssr")
  })
</script>

<Head />

<div class="min-h-screen flex flex-col">
  <Header />
  <main class="grow flex items-center justify-center p-4">
    <slot />
  </main>
  <Footer />
</div>
