import { message, superValidate } from "sveltekit-superforms/server"
import { redirect } from "@sveltejs/kit"
import { z } from "zod"
import { ErrorCode } from "$lib/errors.js"

const schema = z.object({
  email: z.string().email(),
})

export const load = async ({ locals: { getSession } }) => {
  const session = await getSession()

  if (session) throw redirect(303, "/")

  const form = await superValidate(schema)

  return { form }
}

export const actions = {
  default: async ({ url, request, locals: { supabase } }) => {
    const form = await superValidate(request, schema)

    if (!form.valid) {
      return message(form, ErrorCode.INVALID_FORM_DATA)
    }

    console.log(url.origin, url)

    const { error } = await supabase.auth.signInWithOtp({
      email: form.data.email,
      options: {
        emailRedirectTo: `${url.origin}/auth/callback`,
        shouldCreateUser: false,
      },
    })

    if (error) {
      return message(form, ErrorCode.USER_NOT_FOUND)
    }

    return message(form, "OK")
  },
}
