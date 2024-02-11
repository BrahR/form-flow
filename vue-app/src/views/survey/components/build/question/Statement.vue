<script setup lang="ts">
import QuestionHeader from "@/views/survey/components/build/question/QuestionHeader.vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { statementButton } = storeToRefs(useQuestionToggles);
</script>

<template>
  <div class="statement_wrapper false statement_ltr">
    <QuestionHeader sub-description="" />
    <button type="button" class="statement_button">
      {{ statementButton.value }}
    </button>
  </div>
</template>

<style scoped>
.statement_wrapper.statement_ltr {
  direction: ltr;
}
.statement_button {
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
.statement_button:hover {
  cursor: pointer;
  box-shadow: 0 0 0 0.125rem var(--preview-theme-accent-color);
}
.statement_button:focus {
  box-shadow: 0 0 0 0.0625rem var(--preview-theme-accent-color);
}
</style>
