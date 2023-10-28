import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [sveltekit()],
  preview: {
    host: true,
    port: 3000,
  },
  server: {
    host: true,
    port: 3000,
  },
  test: {
    include: ["src/**/*.spec.ts"],
    server: {
      deps: {
        inline: ["@sveltejs/kit"],
      },
    },
  },
})
