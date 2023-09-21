<script lang="ts">
  import { timeStore } from "$stores/time.store"
</script>

{$timeStore.toLocaleString("en", {
  hour12: false,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
})}
