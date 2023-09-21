<script lang="ts">
  import { page } from "$app/stores"
  import { enhance } from "$app/forms"
  import { isTheme, THEMES } from "$lib/theme"

  let form: HTMLFormElement
</script>

<form
  method="POST"
  action="/?/setTheme"
  bind:this={form}
  use:enhance={({ formData }) => {
    const theme = formData.get("theme")

    if (isTheme(theme)) {
      document.documentElement.setAttribute("data-theme", theme)
    }
  }}
>
  <select
    name="theme"
    class="bg-transparent"
    on:change={() => form.requestSubmit()}
  >
    {#each THEMES as value}
      <option {value} selected={value === $page.data.theme}>{value}</option>
    {/each}
  </select>
  <input name="url" type="hidden" value={$page.url} />
</form>
