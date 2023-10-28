import { message, superValidate } from "sveltekit-superforms/server"
import { StatusCode } from "status-code-enum"
import { redirect } from "@sveltejs/kit"
import { ErrorCode } from "$lib/errors"
import { userSchema } from "./schemas"

export const load = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession()

  if (!session) throw redirect(303, "/")

  const { data } = await supabase
    .from("user_profiles")
    .select("name")
    .eq("id", session.user.id)
    .single()

  const user = { ...data, email: session.user.email }

  return { session, form: await superValidate(user, userSchema) }
}

export const actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    const form = await superValidate(request, userSchema)

    if (!form.valid) {
      return message(form, ErrorCode.InvalidFormData)
    }

    const session = await getSession()

    if (!session) throw redirect(303, "/")

    const { error } = await supabase
      .from("user_profiles")
      .update({ name: form.data.name })
      .eq("id", session.user.id)

    if (error) {
      console.log(error)

      return message(form, ErrorCode.CannotUpdateUser, {
        status: StatusCode.ClientErrorBadRequest,
      })
    }

    return { form }
  },
}
