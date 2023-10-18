<script>
  import { Auth } from "@supabase/auth-ui-svelte"

  import Heading from "$components/Heading.svelte"

  export let data
</script>

<Heading>Make something wonderful.</Heading>

<a href="/jedi" class="btn btn-primary">Take me somewhere</a>

<Auth
  view="magic_link"
  showLinks={false}
  supabaseClient={data.supabase}
  redirectTo={`${data.url}/auth/callback`}
/>
