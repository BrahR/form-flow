<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>

<template>
  <div class="drag_and_drop" style="min-height: 52px">
    <div
      class="dropHerePlaceholder_drop_here_placeholder dropHerePlaceholder_add_on_click undefined false dropHerePlaceholder_ltr"
    >
      <template v-if="slots.default">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 1-1z"
              fill="#3E434D"
            ></path>
          </g>
        </svg>
        <div><slot /></div>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
