<script lang="ts">
  import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
  import { superForm } from "sveltekit-superforms/client"

  export let data

  const { form, errors, constraints, submitting, message } = superForm(
    data.form,
  )

  $: console.log($message)
</script>

<div class="space-y-8 w-80">
  <form method="POST" class="space-y-2">
    <input
      type="email"
      name="email"
      placeholder="Email address"
      aria-invalid={$errors.email ? "true" : undefined}
      bind:value={$form.email}
      {...$constraints.email}
    />
    {#if $errors.email}
      <span class="text-red-500">{$errors.email}</span>
    {/if}
    <button
      class="btn btn-primary w-full disabled:opacity-50"
      disabled={$submitting}>Sign In</button
    >
  </form>
  <p class="text-center">
    No account? <a href="/signup">Sign up</a>
  </p>
  <SuperDebug data={$form} />
</div>

<style lang="postcss">
  input {
    @apply block w-full px-2 py-1 border rounded;
  }
  a {
    @apply text-primary;
  }
</style>
