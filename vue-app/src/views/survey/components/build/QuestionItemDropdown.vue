<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

type Props = {
  questionId: number;
  duplicate: boolean;
};

type Emits = {
  (event: "duplicate", questionId: number): void;
  (event: "delete", questionId: number): void;
};

const { questionId, duplicate } = defineProps<Props>();
const emits = defineEmits<Emits>();

const navigation = [
  {
    text: "Duplicate",
    classes: "",
    shown: duplicate,
    action: emits("duplicate", questionId),
  },
  {
    text: "Delete",
    classes: "text-red-600",
    shown: true,
    action: emits("delete", questionId),
  },
];
</script>

<template>
  <Menu as="div" class="relative ml-auto mr-3">
    <div>
      <MenuButton class="relative flex items-center text-sm">
        <div
          class="moreDropDown_button undefined moreDropDown_bordered"
          id="downshift-15-toggle-button"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-labelledby="downshift-15-label downshift-15-toggle-button"
        >
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h16v16H0z"></path>
              <path
                d="M8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM2 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                stroke="#3E434D"
                fill="#3E434D"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </div>
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <template v-for="nav in navigation" :key="nav.text">
          <MenuItem v-if="nav.shown" v-slot="{ active }">
            <span
              :class="[
                active ? 'bg-gray-100' : '',
                'block px-4 py-2 text-sm text-gray-700',
                nav.classes,
              ]"
              @click="nav.action"
            >
              {{ nav.text }}
            </span>
          </MenuItem>
        </template>
      </MenuItems>
    </transition>
  </Menu>
</template>
