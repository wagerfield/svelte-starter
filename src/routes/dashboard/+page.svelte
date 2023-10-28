<script lang="ts">
  import { Form } from "formsnap"
  import { userSchema } from "./schemas"

  import FormMessage from "$components/FormMessage.svelte"
  import SubmitButton from "$components/SubmitButton.svelte"

  export let data
</script>

<div class="space-y-8 w-80">
  <h2>Dashboard</h2>
  <Form.Root form={data.form} schema={userSchema} class="space-y-4" let:config>
    <Form.Field {config} name="name">
      <div>
        <Form.Label>Name</Form.Label>
        <Form.Input placeholder="First Last" />
        <Form.Validation />
      </div>
    </Form.Field>
    <Form.Field {config} name="email">
      <div>
        <Form.Label>Email</Form.Label>
        <Form.Input readonly />
      </div>
    </Form.Field>
    <FormMessage />
    <SubmitButton>Save</SubmitButton>
  </Form.Root>
</div>
