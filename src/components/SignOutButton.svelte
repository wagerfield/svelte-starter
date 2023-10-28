<script lang="ts">
  import { enhance } from "$app/forms"

  let className: string | undefined = undefined

  export { className as class }
</script>

<form method="POST" action="/?/signOut" use:enhance>
  <button class={className}>Sign Out</button>
</form>
