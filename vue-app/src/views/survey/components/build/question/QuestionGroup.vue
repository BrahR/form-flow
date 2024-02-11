<script setup lang="ts">
import QuestionHeader from "@/views/survey/components/build/question/QuestionHeader.vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { questionGroupButton } = storeToRefs(useQuestionToggles);
</script>

<template>
  <div class="group_preview_wrapper group_ltr false">
    <QuestionHeader sub-description="" />

    <button
      v-if="questionGroupButton.value"
      type="button"
      class="group_confirm_button"
    >
      {{ questionGroupButton.value }}
    </button>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
.group_preview_wrapper.group_ltr {
  direction: ltr !important;
}
.group_confirm_button {
  all: unset;
  min-height: 2.5em;
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
.group_confirm_button:hover {
  box-shadow: 0 0 0 0.125rem var(--preview-theme-accent-color);
}
.group_confirm_button:focus {
  box-shadow: 0 0 0 0.0625rem var(--preview-theme-accent-color);
}
</style>
