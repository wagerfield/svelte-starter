<script lang="ts">
  import ThemePicker from "./ThemePicker.svelte"
</script>

<footer class="shrink-0 flex justify-between px-4 py-3">
  <span>© {new Date().getFullYear()} Acme Inc.</span>
  <ThemePicker />
</footer>
