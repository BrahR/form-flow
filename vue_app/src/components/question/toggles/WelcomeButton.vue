<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import { inject, watch } from "vue";
import type { QuestionBuilderStore } from "@/store/questionBuilder";

const useQuestionBuilder = inject("question") as QuestionBuilderStore;

watch(
  () => useQuestionBuilder.getButton.value,
  (value) => {
    if (!value) {
      useQuestionBuilder.getButton.error = true;
      return;
    }
    useQuestionBuilder.getButton.error = false;
  }
);
</script>

<template>
  <div class="sharedBuild_title_row_wrapper__y3pqQ sharedBuild_ltr__BELlV">
    <div class="inlineInput_wrapper__7HOFO inlineInput_ltr__IdP5R">
      <p class="inlineInput_label__gJoig">Button</p>
      <div class="inlineInput_input_wrapper__8ZUU7">
        <input
          v-model="useQuestionBuilder.getButton.value"
          class="inlineInput_input__S084b undefined"
          type="text"
        />
      </div>
    </div>

    <InputError
      :show="useQuestionBuilder.getButton.error"
      error="Button value is required."
    />
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
/*! CSS Used from: Embedded */
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_title_row_wrapper__y3pqQ {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 1.5rem 0 0.65rem;
}
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_title_row_wrapper__y3pqQ.sharedBuild_ltr__BELlV {
  direction: ltr;
}
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_title_row_wrapper__y3pqQ:last-child {
  box-shadow: none;
}
.inlineInput_wrapper__7HOFO {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.inlineInput_wrapper__7HOFO .inlineInput_label__gJoig {
  margin: 0.5rem 0 0.5rem 0.5rem;
  white-space: nowrap;
  align-self: flex-start;
}
.inlineInput_wrapper__7HOFO .inlineInput_input_wrapper__8ZUU7 {
  position: relative;
}
.inlineInput_wrapper__7HOFO
  .inlineInput_input_wrapper__8ZUU7
  .inlineInput_input__S084b {
  font-family: unset;
  border: 1px solid #bbbcc0;
  height: 1.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
}
.inlineInput_wrapper__7HOFO.inlineInput_ltr__IdP5R .inlineInput_label__gJoig {
  margin: 0.5rem 0.5rem 0.5rem 0;
}
</style>
