<script lang="ts">
  import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
  import { superForm } from "sveltekit-superforms/client"

  export let data

  const { form, errors, constraints } = superForm(data.form)
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
    <input
      type="text"
      name="firstName"
      placeholder="First name"
      aria-invalid={$errors.firstName ? "true" : undefined}
      bind:value={$form.firstName}
      {...$constraints.firstName}
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last name"
      aria-invalid={$errors.lastName ? "true" : undefined}
      bind:value={$form.lastName}
      {...$constraints.lastName}
    />
    <input
      type="text"
      name="username"
      placeholder="Username"
      aria-invalid={$errors.username ? "true" : undefined}
      bind:value={$form.username}
      {...$constraints.username}
    />
    <button>Sign Up</button>
  </form>
  <p class="mt-4">Already have an account? <a href="/signin">Sign in</a></p>
  <SuperDebug data={$form} />
</div>

<style lang="postcss">
  input {
    @apply block w-full px-2 py-1 border rounded;
  }
  button {
    @apply w-full p-2 rounded;
    @apply bg-primary text-primary-content;
  }
  a {
    @apply text-primary;
  }
</style>
