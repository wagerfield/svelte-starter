import { z } from "zod"

export const uuidSchema = z.string().uuid()

export const nameSchema = z
  .string()
  .min(3, "Name must be at least 3 characters")

export const emailSchema = z.string().email()
