<script setup lang="ts">
import { useQuestionBuilderStore } from "@/store/questionBuilder";
import { useSurveyStore } from "@/store/survey";

const useQuestionBuilder = useQuestionBuilderStore();
const useSurvey = useSurveyStore();

defineEmits<{
  (event: "close"): void;
}>();
</script>

<template>
  <div class="footer_footer_wrapper__CrUvK">
    <button
      type="button"
      class="footer_save_button__NO8M2"
      :disabled="
        useQuestionBuilder.isLoading || !useQuestionBuilder.selected.canSubmit
      "
      @click="
        useQuestionBuilder.postQuestion(useSurvey.getSelected?.id ?? null)
      "
    >
      Save
    </button>
    <button
      type="button"
      class="footer_cancel_button__XTxje"
      @click="$emit('close')"
    >
      Cancel
    </button>
  </div>
</template>

<style scoped>
.footer_footer_wrapper__CrUvK {
  display: flex;
  padding: 0.75rem 1rem;
  align-items: center;
  height: 2rem;
  box-shadow: inset 0 0.125rem 0 0 #f0f2f5;
  direction: ltr;
  background-color: #fff;
  border-radius: 0 0 0.5rem 0.5rem;
}
.footer_footer_wrapper__CrUvK button {
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  min-width: 4rem;
  height: 2rem;
  background-color: #9ee3ff;
  font-family: inherit;
}
.footer_footer_wrapper__CrUvK button:focus {
  outline: none;
}
.footer_footer_wrapper__CrUvK .footer_save_button__NO8M2 {
  color: #fff;
  background-color: #3b368e;
  margin-right: 1rem;
}

.footer_footer_wrapper__CrUvK .footer_save_button__NO8M2[disabled] {
  background-color: rgba(59, 54, 142, 0.7);
}

.footer_footer_wrapper__CrUvK .footer_save_button__NO8M2:hover:not([disabled]) {
  background-color: rgba(59, 54, 142, 0.8);
}

.footer_footer_wrapper__CrUvK .footer_cancel_button__XTxje {
  color: #3b368e;
  background-color: rgba(59, 54, 142, 0.15);
}
.footer_footer_wrapper__CrUvK .footer_cancel_button__XTxje:hover {
  background-color: #d8dbe0;
}
@media (max-width: 1024px) {
  .footer_footer_wrapper__CrUvK {
    border-radius: 0;
  }
}
</style>
