import { superValidate } from "sveltekit-superforms/server"
import { fail, redirect } from "@sveltejs/kit"
import { z } from "zod"

const schema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  username: z.string().min(3),
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

    if (!form.valid) return fail(400, { form })

    const { data, error } = await supabase.auth.signInWithOtp({
      email: form.data.email,
      options: {
        emailRedirectTo: `${url.origin}/auth/callback`,
        shouldCreateUser: true,
        data: {
          first_name: form.data.firstName,
          last_name: form.data.lastName,
          username: form.data.username,
        },
      },
    })

    console.log({ data, error })

    if (error) {
      return fail(error.status ?? 400, {
        message: error.message,
        cause: error.cause,
      })
    }

    return { form }
  },
}
