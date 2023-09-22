import { z } from "zod"
import { THEMES } from "$lib/theme"

export const themeSchema = z.object({
  theme: z.enum(THEMES).default("system"),
})

export const setThemeSchema = themeSchema.extend({
  url: z.string().url().optional(),
})
