<script setup lang="ts">
import * as yup from "yup";
import { computed, watch } from "vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { textAnswerFormat, placeholderRule, customErrorMessage, formatRule } =
  storeToRefs(useQuestionToggles);

const errMessage = computed(() => {
  let message = `You can type between ${textAnswerFormat.value.selected.rules.min} and
      ${textAnswerFormat.value.selected.rules.max} characters.`;

  if (
    textAnswerFormat.value.selected.rules.min ===
    textAnswerFormat.value.selected.rules.max
  ) {
    message = `Your input must be ${
      textAnswerFormat.value.selected.rules.min
    } character${textAnswerFormat.value.selected.rules.min == 1 ? "" : "s"}`;
  }
  return message;
});

const schema = computed(() =>
  yup
    .string()
    .min(textAnswerFormat.value.selected.rules.min ?? 0, errMessage.value)
    .max(textAnswerFormat.value.selected.rules.max ?? 200, errMessage.value),
);

const validate = () => {
  const regex = /^\d+$/;
  const value = textAnswerFormat.value.selected.model;
  if (!regex.test(value)) {
    textAnswerFormat.value.error.numeric = true;

    textAnswerFormat.value.selected.rules.validationError =
      customErrorMessage.value;
    return;
  }

  schema.value
    .validate(value)
    .then(() => {
      textAnswerFormat.value.error.numeric = false;
      textAnswerFormat.value.selected.rules.validationError = "";
    })
    .catch((err) => {
      textAnswerFormat.value.error.numeric = true;
      textAnswerFormat.value.selected.rules.validationError = err.message;
    });
};

watch(
  [
    () => textAnswerFormat.value.selected.model,
    () => customErrorMessage.value,
    () => formatRule.value,
  ],
  () => {
    if (textAnswerFormat.value.selected.type !== "numeric") return;
    validate();
  },
  {
    deep: true,
  },
);
</script>

<template>
  <span class="textQuestion_hotkey_wrapper">
    <input
      inputmode="text"
      class="textQuestion_not_empty false"
      :placeholder="placeholderRule"
      :class="{
        textQuestion_hasError: textAnswerFormat.error.numeric,
      }"
      v-model="textAnswerFormat.selected.model"
      @input="validate"
    />
  </span>
  <div
    v-if="textAnswerFormat.error.numeric"
    class="textQuestion_continue_button_wrapper textQuestion_text_question_error"
  >
    <div class="textQuestion_question_error">
      {{ textAnswerFormat.selected.rules.validationError }}
    </div>
  </div>
</template>

<style scoped>
body :focus-visible {
  outline: none;
}
.textQuestion_text_question_wrapper .textQuestion_hotkey_wrapper {
  position: relative;
  display: inline-flex;
}
.textQuestion_text_question_wrapper .textQuestion_hotkey_wrapper:focus {
  outline: none;
}
.textQuestion_text_question_wrapper input {
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
.textQuestion_text_question_wrapper input:focus {
  background-color: transparent;
}
.textQuestion_text_question_wrapper input:focus,
.textQuestion_text_question_wrapper input:hover {
  box-shadow: inset 0 0 0 0.125rem var(--preview-theme-accent-color);
  border-color: var(--preview-theme-accent-color);
}
.textQuestion_text_question_wrapper input::placeholder {
  color: var(--preview-theme-answer-color-light);
  -webkit-text-fill-color: var(--preview-theme-answer-color-light);
}
.textQuestion_text_question_wrapper input.textQuestion_not_empty {
  background-color: transparent;
}
.textQuestion_text_question_wrapper input.textQuestion_hasError {
  border-color: #d9426e;
}
.textQuestion_text_question_wrapper input.textQuestion_hasError:hover {
  box-shadow: inset 0 0 0 0.125rem #d9426e;
  background-color: var(--preview-theme-answer-color-lightest);
}
.textQuestion_text_question_wrapper input.textQuestion_hasError:focus {
  box-shadow: inset 0 0 0 0.125rem #d9426e;
}
@media (max-width: 1024px) {
  .textQuestion_text_question_wrapper input {
    width: 16.8125rem;
  }
}
.textQuestion_text_question_wrapper .textQuestion_continue_button_wrapper {
  height: 2.5rem;
  margin-top: 1.5rem;
}
.textQuestion_text_question_wrapper
  .textQuestion_continue_button_wrapper.textQuestion_text_question_error {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
.textQuestion_question_error {
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
