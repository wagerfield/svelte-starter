<script lang="ts">
  import "../app.css"

  import "@fontsource-variable/inter"
  import "@fontsource-variable/jetbrains-mono"

  import Head from "$components/Head.svelte"
  import Header from "$components/Header.svelte"
  import Footer from "$components/Footer.svelte"
</script>

<Head />

<div class="min-h-screen flex flex-col">
  <Header />
  <main class="grow flex flex-col items-center justify-center p-4 space-y-12">
    <slot />
  </main>
  <Footer />
</div>
