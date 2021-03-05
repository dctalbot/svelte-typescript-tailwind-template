<script lang="ts">
  export let name: string

  import Nested from "./Nested.svelte"
</script>

<main>
  <h1>Hello {name}!</h1>
  <p class="something font-bold">how tefsszzo wefwefawef apps.</p>

  <Nested />
</main>

<style lang="postcss">
  .something {
    @apply text-red-800;
  }
</style>
