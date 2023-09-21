<script lang="ts">
  import { timeStore } from "$stores/time.store"

  $: year = $timeStore.getFullYear()
  $: time = $timeStore.toLocaleString("en", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  })
</script>

<footer class="shrink-0 flex justify-between px-4 py-3">
  <span>© {year} Acme Inc.</span>
  <span>
    {time}
  </span>
</footer>
