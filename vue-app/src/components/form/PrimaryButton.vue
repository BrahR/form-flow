<script setup lang="ts">
type Props = {
  submitting: boolean;
  disabled: boolean;
};

defineProps<Props>();
</script>

<template>
  <button :class="{ 'on-submit': submitting }" :disabled class="primary-button">
    <span
      :class="{ hidden: !submitting }"
      class="loading loading-spinner loading-md mr-1.5 absolute"
    ></span>
    <span class="m-auto">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.primary-button {
  all: unset;
  min-width: 4rem;
  min-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.875rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
  background-color: #3b368e;
  color: #fff;
  -webkit-text-fill-color: #fff;
  transition: 0.1s ease-in-out;
}

.primary-button[disabled],
.primary-button.on-submit {
  background-color: #d8dbe0;
  color: #3e434d;
  cursor: not-allowed;
}
</style>
