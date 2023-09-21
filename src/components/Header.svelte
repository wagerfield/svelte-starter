<script lang="ts">
  import Clock from "./Clock.svelte"
</script>

<header class="shrink-0 flex justify-between px-4 py-3">
  <nav class="flex space-x-2">
    <a href="/">Home</a>
    <span class="text-gray-300">/</span>
    <a href="/about">About</a>
  </nav>
  <span><Clock /></span>
</header>
