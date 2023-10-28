import { vitePreprocess } from "@sveltejs/kit/vite"
import vercelAdapter from "@sveltejs/adapter-vercel"

// https://kit.svelte.dev/docs/configuration
/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  vitePlugin: {
    inspector: {
      showToggleButton: false,
      toggleKeyCombo: "control-shift",
    },
  },
  kit: {
    appDir: "app",
    outDir: ".svelte",
    adapter: vercelAdapter({ runtime: "edge" }),
    alias: {
      $components: "src/components",
      $schemas: "src/schemas",
      $stores: "src/stores",
    },
  },
}
