<script lang="ts">
  import { Form } from "formsnap"
  import { signInSchema } from "./schemas"

  import FormMessage from "$components/FormMessage.svelte"
  import SubmitButton from "$components/SubmitButton.svelte"

  export let data
</script>

<div class="space-y-8 w-80">
  <h2>Sign In</h2>
  <p>
    Don't have an account? <a class="text-primary" href="/signup">Sign up</a>
  </p>
  <Form.Root
    form={data.form}
    schema={signInSchema}
    class="space-y-4"
    let:config
  >
    <Form.Field {config} name="email" let:attrs>
      <div>
        <Form.Label {...attrs.label}>Email</Form.Label>
        <Form.Input {...attrs.input} placeholder="name@example.com" />
        <Form.Validation {...attrs.validation} />
      </div>
    </Form.Field>
    <FormMessage />
    <SubmitButton>Sign In</SubmitButton>
  </Form.Root>
</div>
