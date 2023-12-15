<script setup lang="ts">
import * as yup from "yup";
import { computed, watch, inject } from "vue";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;

const errMessage = computed(() => {
  let message = `You can type between ${useQuestion.getRules!.min} and
      ${useQuestion.getRules!.max} characters.`;

  if (useQuestion.getRules!.min === useQuestion.getRules!.max) {
    message = `Your input must be ${useQuestion.getRules!.min} character${
      useQuestion.getRules!.min == 1 ? "" : "s"
    }`;
  }
  return message;
});

const schema = computed(() =>
  yup
    .string()
    .min(useQuestion.getRules!.min ?? 0, errMessage.value)
    .max(useQuestion.getRules!.max ?? 200, errMessage.value)
);

const validate = () => {
  const regex = /^\d+$/;
  const value = useQuestion.getAnswerFormat.selected.model;
  if (!regex.test(value)) {
    useQuestion.getIsAnswerError = true;

    useQuestion.getRules!.displayError = useQuestion.getCustomError;
    return;
  }

  schema.value
    .validate(value)
    .then(() => {
      useQuestion.getIsAnswerError = false;
      useQuestion.getRules!.displayError = "";
    })
    .catch((err) => {
      useQuestion.getIsAnswerError = true;
      useQuestion.getRules!.displayError = err.message;
    });
};

watch(
  [
    () => useQuestion.getAnswerFormat.selected.model,
    () => useQuestion.getCustomError,
    () => useQuestion.getRules,
  ],
  () => {
    if (useQuestion.getAnswerFormat.selected.value !== "numeric") return;
    validate();
  },
  {
    deep: true,
  }
);
</script>

<template>
  <span class="textQuestion_hotkey_wrapper__lceii">
    <input
      inputmode="text"
      class="textQuestion_not_empty__sFAKu false"
      :placeholder="useQuestion.getRulesPlaceholder"
      :class="{
        textQuestion_hasError__19d2Q: useQuestion.getIsAnswerError,
      }"
      v-model="useQuestion.getAnswerFormat.selected.model"
      @input="validate"
  /></span>
  <div
    v-if="useQuestion.getIsAnswerError"
    class="textQuestion_continue_button_wrapper__PBEZm textQuestion_text_question_error__Vp6AE"
  >
    <div class="textQuestion_question_error__W6xqr">
      {{ useQuestion.getRules!.displayError }}
    </div>
  </div>
</template>

<style scoped>
/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/f419cc97160b5e33.css */
body :focus-visible {
  outline: none;
}
/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/2a2e4efde05c354a.css */
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
@media (max-width: 1024px) {
  .textQuestion_text_question_wrapper__WmtqL input {
    width: 16.8125rem;
  }
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
