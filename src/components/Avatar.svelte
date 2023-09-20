<script lang="ts">
  export let src: string
  export let alt: string
  export let size = "40px"
</script>

<div style:width={size} style:height={size}>
  <img {src} {alt} />
</div>
