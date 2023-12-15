<script setup lang="ts">

</script>

<template>
  <button class="secondary-button">
    <slot />
  </button>
</template>

<style scoped>

.secondary-button {
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
  background-color: rgba(59, 54, 142, .15);
  color: #3b368e;
  -webkit-text-fill-color: #3b368e;
}

.secondary-button[disabled],
.disabled {
  background-color: #d8dbe0;
  color: #3e434d;
  opacity: 1;
  cursor: not-allowed;
}
</style>
