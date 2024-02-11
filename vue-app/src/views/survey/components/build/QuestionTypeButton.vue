<script setup lang="ts">
import type { Component } from "vue";

type Props = {
  icon: Component;
  fullWidth: boolean;
  disabled: boolean;
};

defineProps<Props>();
</script>

<template>
  <div
    :class="{
      questionsTypesList_disabled: disabled,
      questionsTypesList_full_width: fullWidth,
    }"
    class="questionsTypesList_question_type questionsTypesList_ltr questionsTypesList_translate_zero"
  >
    <component :is="icon" />
    <div class="questionsTypesList_name"><slot /></div>
  </div>
</template>

<style scoped></style>
