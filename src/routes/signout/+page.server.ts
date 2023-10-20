import { redirect } from "@sveltejs/kit"

export const load = async ({ locals: { getSession } }) => {
  const session = await getSession()

  if (!session) throw redirect(303, "/")
}

export const actions = {
  default: async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()
    if (session) {
      await supabase.auth.signOut()
    }
  },
}
