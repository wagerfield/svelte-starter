<script lang="ts">
  import { timeStore } from "$stores/time.store"

  $: time = $timeStore.toLocaleString("en", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  })
</script>

<footer class="flex px-4 py-3 bg-black text-slate-300">
  <span class="ml-auto">
    {time}
  </span>
</footer>
