<script lang="ts">
  import type { SubmitFunction } from "@sveltejs/kit"
  import { enhance } from "$app/forms"

  export let data
  export let form

  let { session, profile } = data
  $: ({ session, profile } = data)

  let loading = false
  let fullName: string = profile?.full_name ?? ""
  let username: string = profile?.username ?? ""
  let website: string = profile?.website ?? ""

  const handleSubmit: SubmitFunction = () => {
    loading = true
    return async () => {
      loading = false
    }
  }

  const handleSignOut: SubmitFunction = () => {
    loading = true
    return async ({ update }) => {
      loading = false
      update()
    }
  }
</script>

<div>
  <form method="post" action="?/update" use:enhance={handleSubmit}>
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" value={session.user.email} disabled />
    </div>

    <div>
      <label for="fullName">Full Name</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        value={form?.fullName ?? fullName}
      />
    </div>

    <div>
      <label for="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        value={form?.username ?? username}
      />
    </div>

    <div>
      <label for="website">Website</label>
      <input
        id="website"
        name="website"
        type="url"
        value={form?.website ?? website}
      />
    </div>

    <div>
      <input
        type="submit"
        value={loading ? "Loading..." : "Update"}
        disabled={loading}
      />
    </div>
  </form>

  <form method="post" action="?/signOut" use:enhance={handleSignOut}>
    <div>
      <button disabled={loading}>Sign Out</button>
    </div>
  </form>
</div>

<style>
  input {
    background: transparent;
    border: 1px solid #ccc;
  }
</style>
