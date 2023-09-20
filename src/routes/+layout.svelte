<script lang="ts">
  import "../app.css"

  import "@fontsource-variable/inter"
  import "@fontsource-variable/jetbrains-mono"

  import Head from "$components/Head.svelte"
  import Header from "$components/Header.svelte"
  import Footer from "$components/Footer.svelte"
</script>

<Head />

<Header />
<main class="p-4">
  <slot />
</main>
<Footer />
