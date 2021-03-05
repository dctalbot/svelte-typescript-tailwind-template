<script lang="ts">
  export let url = "#"
  export let label: string
  export let mobile = false
</script>

<a
  href={url}
  class={mobile
    ? "block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
    : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"}
  role="menuitem">{label}</a
>
