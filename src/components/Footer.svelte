<script lang="ts">
  import { timeStore } from "$stores/time.store"
</script>

<footer class="flex px-4 py-3 bg-slate-900 text-slate-500">
  {$timeStore.toLocaleString("en", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  })}
</footer>
