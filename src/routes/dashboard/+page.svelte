<script lang="ts">
  import { Form } from "formsnap"
  import { userSchema } from "./schemas"
  import { FormMessage, SubmitButton, SupabaseBinding } from "$components/form"

  export let data
</script>

<div class="space-y-8 w-80">
  <h2>Dashboard</h2>
  <Form.Root form={data.form} schema={userSchema} class="space-y-4" let:config>
    <Form.Field {config} name="name" let:attrs>
      <div>
        <Form.Label {...attrs.label}>Name</Form.Label>
        <Form.Input {...attrs.input} placeholder="First Last" />
        <Form.Validation {...attrs.validation} />
        <SupabaseBinding />
      </div>
    </Form.Field>
    <Form.Field {config} name="email" let:attrs>
      <div>
        <Form.Label {...attrs.label}>Email</Form.Label>
        <Form.Input {...attrs.input} placeholder="name@example.com" readonly />
      </div>
    </Form.Field>
    <FormMessage />
    <SubmitButton>Save</SubmitButton>
  </Form.Root>
</div>
