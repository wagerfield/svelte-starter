import { sequence } from "@sveltejs/kit/hooks"
import { pingServerHook } from "./hooks/ping.server.hook"
import { themeServerHook } from "./hooks/theme.server.hook"

export const handle = sequence(pingServerHook, themeServerHook)
