<script lang="ts">
  import UserMenuItem from "./UserMenuItem.svelte"
  import NavTab from "./NavTab.svelte"

  import { fade } from "svelte/transition"
  import BellSvg from "./BellSVG.svelte"

  let isMobileMenuOpen = false
  let isUserMenuOpen = false

  const navTabs = [
    { label: "Dashboard", url: "https://www.example.com" },
    { label: "Team", url: "https://www.example.com" },
    { label: "Projects", url: "https://www.example.com" },
    { label: "Calendar", url: "https://www.example.com" },
  ]

  const userMenuItems = [
    { label: "Profile", url: "https://www.example.com" },
    { label: "Settings", url: "https://www.example.com" },
    { label: "Sign Out", url: "https://www.example.com" },
  ]

  const user = {
    imgURL:
      "https://avatars.githubusercontent.com/u/17692467?s=460&u=2497b0bf958510f8bebbbb173f8fe8761c268ce8&v=4",
    name: "Dave Smith",
    email: "dave@example.com",
  }
</script>

<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img
            class="h-8 w-8"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
          />
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            {#each navTabs as { label, url }}
              <NavTab {label} {url} />
            {/each}
          </div>
        </div>
      </div>
      <div class="hidden md:block">
        <div class="ml-4 flex items-center md:ml-6">
          <button
            class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <BellSvg />
          </button>

          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <button
                class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu"
                aria-haspopup="true"
                on:click={() => {
                  isUserMenuOpen = !isUserMenuOpen
                }}
              >
                <span class="sr-only"
                  >{(isUserMenuOpen ? "Close" : "Open") + " user menu"}</span
                >
                <img class="h-8 w-8 rounded-full" src={user.imgURL} alt="" />
              </button>
            </div>

            {#if isUserMenuOpen}
              <div
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
                in:fade={{ duration: 150 }}
                out:fade={{ duration: 150 }}
              >
                {#each userMenuItems as { label, url }}
                  <UserMenuItem {label} {url} />
                {/each}
              </div>
            {/if}
          </div>
        </div>
      </div>
      <div class="-mr-2 flex md:hidden">
        <!-- Mobile menu button -->
        <button
          type="button"
          class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          on:click={() => {
            isMobileMenuOpen = !isMobileMenuOpen
          }}
        >
          <span class="sr-only"
            >{(isMobileMenuOpen ? "Close" : "Open") + " main menu"}</span
          >

          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d={isMobileMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  {#if isMobileMenuOpen}
    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {#each navTabs as { label, url }}
          <NavTab {label} {url} mobile={true} />
        {/each}
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src={user.imgURL} alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">
              {user.name}
            </div>
            <div class="text-sm font-medium leading-none text-gray-400">
              {user.email}
            </div>
          </div>
          <button
            class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <BellSvg />
          </button>
        </div>
        <div class="mt-3 px-2 space-y-1">
          {#each userMenuItems as { label, url }}
            <UserMenuItem {label} {url} mobile={true} />
          {/each}
        </div>
      </div>
    </div>
  {/if}
</nav>
