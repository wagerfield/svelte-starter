<script lang="ts">
  import { Form } from "formsnap"
  import { signUpSchema } from "./schemas"

  import SubmitButton from "$components/SubmitButton.svelte"
  import FormMessage from "$components/FormMessage.svelte"

  export let data
</script>

<div class="space-y-8 w-80">
  <h2>Create Account</h2>
  <p>
    Already have an account? <a class="text-primary" href="/signin">Sign in</a>
  </p>
  <Form.Root
    form={data.form}
    schema={signUpSchema}
    class="space-y-4"
    let:config
  >
    <Form.Field {config} name="name" let:attrs>
      <div>
        <Form.Label {...attrs.label}>Name</Form.Label>
        <Form.Input {...attrs.input} placeholder="First Last" />
        <Form.Validation {...attrs.validation} />
      </div>
    </Form.Field>
    <Form.Field {config} name="email" let:attrs>
      <div>
        <Form.Label {...attrs.label}>Email</Form.Label>
        <Form.Input {...attrs.input} placeholder="name@example.com" />
        <Form.Validation {...attrs.validation} />
      </div>
    </Form.Field>
    <FormMessage />
    <SubmitButton>Create Account</SubmitButton>
  </Form.Root>
</div>
