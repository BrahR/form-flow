<script setup lang="ts">
defineProps<{
  isSubmitting: boolean;
}>();
</script>

<template>
  <button class="primary-button" :class="{ disabled: isSubmitting }">
    <span
      :class="{ hidden: !isSubmitting }"
      class="loading loading-spinner loading-md mr-1.5 absolute"
    ></span>
    <span class="m-auto">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.primary-button {
  transition: all 0.2s ease-in-out;
  all: unset;
  min-width: 4rem;
  min-height: 2rem;
  display: flex;
  align-items: center;
  padding: 0.25rem 0.875rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
  margin-top: 1.5rem;
  width: 100%;
  height: 2.5rem;
  background-color: #12151a;
  color: #fff;
}

button[disabled],
.disabled {
  background-color: #d8dbe0;
  color: #3e434d;
  opacity: 1;
  cursor: not-allowed;
}
</style>
