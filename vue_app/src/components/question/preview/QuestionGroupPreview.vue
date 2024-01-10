<script setup lang="ts">
import QuestionHeader from "@/components/question/preview/QuestionHeader.vue";
import { inject } from "vue";
import type { QuestionBuilderStore } from "@/store/questionBuilder";

const useQuestionBuilder = inject("question") as QuestionBuilderStore;
</script>

<template>
  <div class="group_preview_wrapper__tzyo_ group_ltr__ANDgI false">
    <QuestionHeader :description="''" />

    <button
      v-if="useQuestionBuilder.getIsButton"
      type="button"
      class="group_confirm_button__5uAMC"
    >
      {{ useQuestionBuilder.getButtonLabel }}
    </button>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
.group_preview_wrapper__tzyo_.group_ltr__ANDgI {
  direction: ltr !important;
}
.group_confirm_button__5uAMC {
  all: unset;
  min-height: 2.5em;
  width: -moz-fit-content;
  width: fit-content;
  min-width: 7.5rem;
  max-width: 18.4375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  color: var(--theme-button-color-contrast);
  background-color: var(--preview-theme-button-color);
  -webkit-text-fill-color: var(--preview-theme-button-color-contrast);
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;
  overflow-wrap: anywhere;
  cursor: pointer;
}
.group_confirm_button__5uAMC:hover {
  box-shadow: 0 0 0 0.125rem var(--preview-theme-accent-color);
}
.group_confirm_button__5uAMC:focus {
  box-shadow: 0 0 0 0.0625rem var(--preview-theme-accent-color);
}
</style>
