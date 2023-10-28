import { emailSchema } from "$schemas/common.schemas"
import { z } from "zod"

export const signInSchema = z.object({
  email: emailSchema,
})
