import { sequence } from "@sveltejs/kit/hooks"
import { helloHook } from "./hooks/hello.hook"
import { themeHook } from "./hooks/theme.hook"

export const handle = sequence(helloHook, themeHook)
