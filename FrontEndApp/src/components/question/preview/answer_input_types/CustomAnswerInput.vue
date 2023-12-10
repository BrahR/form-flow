<script setup lang="ts">
import { inject } from "vue";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;

const validate = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  const regex = new RegExp(useQuestion.getRulesRegex ?? "");

  console.log(regex);

  if (!regex.test(value)) {
    useQuestion.getIsAnswerError = true;
    return;
  }

  useQuestion.getIsAnswerError = false;
};
</script>

<template>
  <span class="textQuestion_hotkey_wrapper__lceii">
    <input
      inputmode="text"
      class="textQuestion_not_empty__sFAKu"
      :class="{ textQuestion_hasError__19d2Q: useQuestion.getIsAnswerError }"
      :placeholder="useQuestion.getRulesPlaceholder"
      v-model="useQuestion.getAnswerFormat.selected.model"
      @input="validate"
    />
  </span>
  <div
    v-if="useQuestion.getIsAnswerError && useQuestion.getCustomError"
    class="textQuestion_continue_button_wrapper__PBEZm textQuestion_text_question_error__Vp6AE"
  >
    <div class="textQuestion_question_error__W6xqr">
      {{ useQuestion.getCustomError }}
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
.textQuestion_text_question_wrapper__WmtqL {
  padding: 1rem 0;
}
.textQuestion_text_question_wrapper__WmtqL.textQuestion_ltr__E3pny {
  direction: ltr !important;
}
.textQuestion_text_question_wrapper__WmtqL .textQuestion_hotkey_wrapper__lceii {
  position: relative;
  display: inline-flex;
}
.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_hotkey_wrapper__lceii:focus {
  outline: none;
}
.textQuestion_text_question_wrapper__WmtqL input {
  all: unset;
  width: 23.375rem;
  height: 1.875rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  color: var(--preview-theme-answer-color);
  -webkit-text-fill-color: var(--preview-theme-answer-color);
  border: 0.0625rem solid var(--preview-theme-answer-color);
  background-color: var(--preview-theme-answer-color-lightest);
  transition: all 0.1s ease-in-out;
  caret-color: var(--preview-theme-answer-color);
}
.textQuestion_text_question_wrapper__WmtqL input:focus {
  background-color: transparent;
}
.textQuestion_text_question_wrapper__WmtqL input:focus,
.textQuestion_text_question_wrapper__WmtqL input:hover {
  box-shadow: inset 0 0 0 0.125rem var(--preview-theme-accent-color);
  border-color: var(--preview-theme-accent-color);
}
.textQuestion_text_question_wrapper__WmtqL input::placeholder {
  color: var(--preview-theme-answer-color-light);
  -webkit-text-fill-color: var(--preview-theme-answer-color-light);
}
.textQuestion_text_question_wrapper__WmtqL input.textQuestion_not_empty__sFAKu {
  background-color: transparent;
}
.textQuestion_text_question_wrapper__WmtqL input.textQuestion_hasError__19d2Q {
  border-color: #d9426e;
}
.textQuestion_text_question_wrapper__WmtqL
  input.textQuestion_hasError__19d2Q:hover {
  box-shadow: inset 0 0 0 0.125rem #d9426e;
  background-color: var(--preview-theme-answer-color-lightest);
}
.textQuestion_text_question_wrapper__WmtqL
  input.textQuestion_hasError__19d2Q:focus {
  box-shadow: inset 0 0 0 0.125rem #d9426e;
}
.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_continue_button_wrapper__PBEZm {
  height: 2.5rem;
  margin-top: 1.5rem;
}
.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_continue_button_wrapper__PBEZm.textQuestion_text_question_error__Vp6AE {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
@media (max-width: 1024px) {
  .textQuestion_text_question_wrapper__WmtqL input {
    width: 16.8125rem;
  }
}
.textQuestion_question_error__W6xqr {
  font-size: 0.8125rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25em;
  min-height: 1.125rem;
  background-color: #d9426e;
  color: #fff;
  display: table;
  line-height: 1.25rem !important;
}
</style>
