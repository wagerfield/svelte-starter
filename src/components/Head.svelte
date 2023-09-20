<script lang="ts">
  export let title = "Svelte Starter"
  export let description = "Starter project for Svelte apps"
  export let url = "https://letsmake.com"

  export let statusBarStyle = "black-translucent"
  export let viewport = "width=device-width"

  export let themeLight = "#FFFFFF"
  export let themeDark = "#000000"

  $: theme = [
    ["light", themeLight],
    ["dark", themeDark],
  ]
</script>

<svelte:head>
  <title>{title}</title>

  <meta name="application-name" content={title} />
  <meta name="description" content={description} />
  <meta name="viewport" content={viewport} />

  <!-- Apple -->
  <meta name="apple-mobile-web-app-title" content={title} />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content={statusBarStyle} />

  <!-- Open Graph -->
  <meta name="og:title" content={title} />
  <meta name="og:site_name" content={title} />
  <meta name="og:description" content={description} />
  <meta name="og:type" content="website" />
  <meta name="og:url" content={url} />
  <meta name="og:image" content="{url}/og.png" />

  <!-- Theme -->
  {#each theme as [key, color] (key)}
    <meta
      name="theme-color"
      media="(prefers-color-scheme: {key})"
      content={color}
    />
  {/each}
</svelte:head>
