import type { PlaywrightTestConfig } from "@playwright/test"

export default {
  testDir: "tests",
  outputDir: "reports",
  testMatch: "**/*.e2e.test.ts",
  webServer: {
    command: "bun run build && bun run start",
    timeout: 10 * 1000, // 10 seconds
    port: 4173,
  },
} satisfies PlaywrightTestConfig
