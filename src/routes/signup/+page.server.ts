import { message, superValidate } from "sveltekit-superforms/server"
import { StatusCode } from "status-code-enum"
import { redirect } from "@sveltejs/kit"
import { ErrorCode } from "$lib/errors"
import { signUpSchema } from "./schemas"

export const load = async ({ locals: { getSession } }) => {
  const session = await getSession()

  if (session) throw redirect(303, "/")

  return { form: await superValidate(signUpSchema) }
}

export const actions = {
  default: async ({ url, request, locals: { supabase } }) => {
    const form = await superValidate(request, signUpSchema)

    if (!form.valid) {
      return message(form, ErrorCode.InvalidFormData)
    }

    const { error } = await supabase.auth.signInWithOtp({
      email: form.data.email,
      options: {
        emailRedirectTo: `${url.origin}/auth/callback`,
        shouldCreateUser: true,
        data: {
          name: form.data.name,
        },
      },
    })

    if (error) {
      console.log({
        name: error.name,
        message: error.message,
      })

      return message(form, error.message, {
        status: StatusCode.ClientErrorBadRequest,
      })
    }

    throw redirect(303, "/auth/email")
  },
}
