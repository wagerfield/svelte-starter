import { emailSchema, nameSchema } from "$schemas/common.schemas"
import { z } from "zod"

export const signUpSchema = z.object({
  name: nameSchema,
  email: emailSchema,
})
