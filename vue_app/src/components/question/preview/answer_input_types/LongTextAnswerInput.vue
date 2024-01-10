<script setup lang="ts">
import { computed, watch, inject } from "vue";
import * as yup from "yup";
import type { QuestionBuilderStore } from "@/store/questionBuilder";

const useQuestionBuilder = inject("question") as QuestionBuilderStore;

const errMessage = computed(() => {
  let message = `You can type between ${useQuestionBuilder.getRules!.min} and
      ${useQuestionBuilder.getRules!.max} characters.`;

  if (useQuestionBuilder.getRules!.min === useQuestionBuilder.getRules!.max) {
    message = `Your input must be ${
      useQuestionBuilder.getRules!.min
    } character${useQuestionBuilder.getRules!.min == 1 ? "" : "s"}`;
  }
  return message;
});

const schema = computed(() =>
  yup
    .string()
    .min(useQuestionBuilder.getRules!.min ?? 0, errMessage.value)
    .max(useQuestionBuilder.getRules!.max ?? 200, errMessage.value)
);

const validate = () => {
  console.log("HAHH");

  const value = useQuestionBuilder.getAnswerFormat.selected.model;
  useQuestionBuilder.getCustomError = errMessage.value;

  schema.value
    .validate(value)
    .then(() => {
      useQuestionBuilder.getIsAnswerError = false;
    })
    .catch((_err) => {
      useQuestionBuilder.getIsAnswerError = true;
    });
};

watch(
  [
    () => useQuestionBuilder.getRules!.min,
    () => useQuestionBuilder.getRules!.max,
  ],
  () => {
    if (useQuestionBuilder.getAnswerFormat.selected.value !== "long-text")
      return;
    validate();
  }
);
</script>

<template>
  <span class="textQuestion_hotkey_wrapper__lceii">
    <textarea
      class="textQuestion_not_empty__sFAKu false"
      :class="{
        textQuestion_hasError__19d2Q: useQuestionBuilder.getIsAnswerError,
      }"
      v-model="useQuestionBuilder.getAnswerFormat.selected.model"
      @input="validate"
    />
  </span>
  <div
    v-if="useQuestionBuilder.getIsAnswerError"
    class="textQuestion_continue_button_wrapper__PBEZm"
    :class="{
      textQuestion_text_question_error__Vp6AE:
        useQuestionBuilder.getIsAnswerError,
    }"
  >
    <div class="textQuestion_question_error__W6xqr">
      <!-- -->
      {{ useQuestionBuilder.getCustomError }}
    </div>
  </div>
</template>

<style scoped>
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
/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/2a2e4efde05c354a.css */
.textQuestion_text_question_wrapper__WmtqL .textQuestion_hotkey_wrapper__lceii {
  position: relative;
  display: inline-flex;
}
.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_hotkey_wrapper__lceii:focus {
  outline: none;
}
.textQuestion_text_question_wrapper__WmtqL textarea {
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
.textQuestion_text_question_wrapper__WmtqL textarea:focus {
  background-color: transparent;
}
.textQuestion_text_question_wrapper__WmtqL textarea:focus,
.textQuestion_text_question_wrapper__WmtqL textarea:hover {
  box-shadow: inset 0 0 0 0.125rem var(--preview-theme-accent-color);
  border-color: var(--preview-theme-accent-color);
}
.textQuestion_text_question_wrapper__WmtqL textarea::placeholder {
  color: var(--preview-theme-answer-color-light);
  -webkit-text-fill-color: var(--preview-theme-answer-color-light);
}
.textQuestion_text_question_wrapper__WmtqL
  textarea.textQuestion_not_empty__sFAKu {
  background-color: transparent;
}
.textQuestion_text_question_wrapper__WmtqL
  textarea.textQuestion_hasError__19d2Q {
  border-color: #d9426e;
}

.textQuestion_text_question_wrapper__WmtqL
  textarea.textQuestion_hasError__19d2Q:hover {
  box-shadow: inset 0 0 0 0.125rem #d9426e;
  background-color: var(--preview-theme-answer-color-lightest);
}
.textQuestion_text_question_wrapper__WmtqL
  textarea.textQuestion_hasError__19d2Q:focus {
  box-shadow: inset 0 0 0 0.125rem #d9426e;
}
@media (max-width: 1024px) {
  .textQuestion_text_question_wrapper__WmtqL textarea {
    width: 16.8125rem;
  }
}
</style>
