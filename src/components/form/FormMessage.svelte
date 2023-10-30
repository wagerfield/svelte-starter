<script lang="ts">
  import { getForm } from "formsnap"

  let tag: string | undefined = "p"
  let className: string | undefined = undefined

  export { className as class }

  const { message } = getForm()
</script>

{#if $message}
  <svelte:element this={tag} class={className}>{$message}</svelte:element>
{/if}
