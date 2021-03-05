<script lang="ts">
  export let url = "#"
  export let label: string
  export let mobile = false
</script>

<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

<a
  href={url}
  class={mobile
    ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
    : "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"}
  >{label}</a
>
