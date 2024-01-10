<script setup lang="ts">
import QuestionHeader from "@/components/question/preview/QuestionHeader.vue";
import { inject } from "vue";
import type { QuestionBuilderStore } from "@/store/questionBuilder";

const useQuestionBuilder = inject("question") as QuestionBuilderStore;
</script>

<template>
  <div class="statement_wrapper__sKGXy false statement_ltr__mMIb2">
    <QuestionHeader description="" />
    <button type="button" class="statement_button__5vdzb">
      {{ useQuestionBuilder.getButton.value }}
    </button>
  </div>
</template>

<style scoped>
.statement_wrapper__sKGXy.statement_ltr__mMIb2 {
  direction: ltr;
}
.statement_wrapper__sKGXy .statement_button__5vdzb {
  all: unset;
  background-color: var(--preview-theme-button-color);
  color: var(--preview-theme-button-color-contrast);
  border-radius: 0.5rem;
  padding: 0.25rem 0.75rem;
  min-width: 7.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
}
.statement_wrapper__sKGXy .statement_button__5vdzb:hover {
  cursor: pointer;
  box-shadow: 0 0 0 0.125rem var(--preview-theme-accent-color);
}
.statement_wrapper__sKGXy .statement_button__5vdzb:focus {
  box-shadow: 0 0 0 0.0625rem var(--preview-theme-accent-color);
}
</style>
