<script setup lang="ts">
import { inject } from "vue";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;
</script>

<template>
  <div
    class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
  >
    <div class="inlineInput_wrapper__7HOFO inlineInput_ltr__IdP5R">
      <p class="inlineInput_label__gJoig">Label</p>
      <div class="inlineInput_input_wrapper__8ZUU7">
        <input
          class="inlineInput_input__S084b false"
          type="text"
          v-model="useQuestion.getButton.value"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: content-box;
}
/*! CSS Used from: Embedded */
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_toggle_input_row_wrapper__1KFOE {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 0.875rem 0;
}
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_toggle_input_row_wrapper__1KFOE.sharedBuild_ltr__BELlV {
  direction: ltr;
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
