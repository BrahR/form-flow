<script setup lang="ts">
import { useQuestionStore } from "@/store/question";
import { computed } from "vue";

const useQuestion = useQuestionStore();
const selected = useQuestion.getAnswerFormat.selected;
const tokenLength = computed(() => {
  return useQuestion
    .getSelectedFormat!.tokens.map((t: string) => t.length)
    .reduce((a: number, b: number) => a + b);
});

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (target.value.length - tokenLength.value === 11) {
    target.value = selected.model;
    return;
  }

  selected.model = target.value;
};

// https://stackoverflow.com/questions/30058927/format-a-phone-number-as-a-user-types-using-pure-javascript
const isNumericInput = (event: KeyboardEvent) => {
  const key = event.keyCode;
  return (key >= 48 && key <= 57) || (key >= 96 && key <= 105);
};

const isModifierKey = (event: KeyboardEvent) => {
  const key = event.keyCode;
  const isModifiers = [35, 36, 8, 9, 13, 46, 65, 67, 86, 88, 90].includes(key);
  return (
    event.shiftKey === true ||
    isModifiers ||
    (key > 36 && key < 41) ||
    ((event.ctrlKey === true || event.metaKey === true) && isModifiers)
  );
};

const enforceFormat = (event: KeyboardEvent) => {
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault();
  }
};

const formatToPhone = (event: KeyboardEvent) => {
  if (isModifierKey(event)) return;

  const target = event.target as HTMLInputElement;
  const input = target.value.replace(/\D/g, "").substring(0, 10);
  const areaCode = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);

  if (input.length > 6) {
    target.value =
      useQuestion.getSelectedFormat!.tokens[0] +
      areaCode +
      useQuestion.getSelectedFormat!.tokens[1] +
      middle +
      useQuestion.getSelectedFormat!.tokens[2] +
      last;
    selected.model = target.value;

    return;
  }

  if (input.length > 3) {
    target.value =
      useQuestion.getSelectedFormat!.tokens[0] +
      areaCode +
      useQuestion.getSelectedFormat!.tokens[1] +
      middle;
    selected.model = target.value;
    return;
  }

  if (input.length > 0)
    target.value = useQuestion.getSelectedFormat!.tokens[0] + areaCode;
  selected.model = target.value;
};
</script>

<template>
  <span class="textQuestion_hotkey_wrapper__lceii">
    <input
      inputmode="text"
      class="textQuestion_not_empty__sFAKu"
      maxlength="16"
      :placeholder="useQuestion.getSelectedFormat!.pattern"
      :class="{
        textQuestion_hasError__19d2Q: useQuestion.getRulesError,
      }"
      :value="selected.model"
      @input="onInput"
      @keydown="enforceFormat"
      @keyup="formatToPhone"
    />
  </span>
  <div
    v-if="useQuestion.getRulesError"
    class="textQuestion_continue_button_wrapper__PBEZm textQuestion_text_question_error__Vp6AE"
  >
    <div class="textQuestion_question_error__W6xqr">
      {{ useQuestion.getRulesError }}
    </div>
  </div>
</template>

<style scoped>
/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/f419cc97160b5e33.css */
body :focus-visible {
  outline: none;
}
/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/2a2e4efde05c354a.css */
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
  animation: textQuestion_fade__ZYVn3 0.3s linear 1;
}
/*! CSS Used keyframes */
@keyframes textQuestion_fade__ZYVn3 {
  0% {
    -webkit-opacity: 0;
  }
  to {
    -webkit-opacity: 1;
  }
}
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
  animation: textQuestion_shake__k4nDZ 0.4s linear 1;
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
/*! CSS Used keyframes */
@keyframes textQuestion_shake__k4nDZ {
  0% {
    -webkit-transform: translate(15px);
  }
  20% {
    -webkit-transform: translate(-15px);
  }
  40% {
    -webkit-transform: translate(7px);
  }
  60% {
    -webkit-transform: translate(-7px);
  }
  80% {
    -webkit-transform: translate(4px);
  }
  to {
    -webkit-transform: translate(0);
  }
}
</style>
