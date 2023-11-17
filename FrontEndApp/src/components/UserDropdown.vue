<script setup lang="ts">
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";
import router from "@/router";
import {useUserStore} from "@/store/user.ts";

const userStore = useUserStore()

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' }
]
function logout() {
  if (userStore.isLoggingOut()) return;
  userStore.logoutUser()
      .then(() => {
        router.push({ name: "Login" });
      })
}
</script>

<template>
  <Menu as="div" class="relative ml-auto mr-3">
    <div>
      <MenuButton
          class="relative flex items-center text-sm">
        <div class="accountButton_button__EyVHF accountButton_account___f_Yz accountButton_expiration_warning__4_q3n">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h24v24H0z"></path>
              <path d="M18.5 20v-1.667c0-1.84-1.455-3.333-3.25-3.333h-6.5c-1.795 0-3.25 1.492-3.25 3.333V20"
                    stroke="#3E434D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <ellipse stroke="#3E434D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" cx="12"
                       cy="8.333" rx="3.25" ry="3.333"></ellipse>
            </g>
          </svg>
        </div>
      </MenuButton>
    </div>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems
          class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
          <router-link :to="item.href"
                       :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}
          </router-link>
        </MenuItem>

        <MenuItem key="Sign-out" v-slot="{ active }">
          <a href="" @click.prevent="logout"
             :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<style scoped>

</style>
