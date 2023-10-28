<script lang="ts">
  import { page } from "$app/stores"

  import Clock from "./Clock.svelte"
  import SignOutButton from "./SignOutButton.svelte"
</script>

<header class="shrink-0 flex justify-between px-4 py-3">
  <nav class="flex space-x-2">
    <a href="/">Home</a>
  </nav>
  <span><Clock /></span>
  <nav class="flex space-x-2">
    {#if $page.data.session}
      <SignOutButton />
    {:else}
      <a href="/signup">Sign up</a>
      <span class="text-gray-300">/</span>
      <a href="/signin">Sign in</a>
    {/if}
  </nav>
</header>
