<script lang="ts">
  import { getForm } from "formsnap"

  const { submitting, allErrors } = getForm()
</script>

<button
  type="submit"
  class="btn btn-primary w-full disabled:btn-disabled"
  disabled={Boolean($submitting || $allErrors.length)}
>
  <slot />
</button>
