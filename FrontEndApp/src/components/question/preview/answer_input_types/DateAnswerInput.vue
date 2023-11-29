<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { format, parse, isValid } from "date-fns";
import { useQuestionStore } from "@/store/question";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const useQuestion = useQuestionStore();
const selected = useQuestion.getAnswerFormat.selected;
const datepicker = ref(null);
const valid = ref(true);

const validate = (val: string) => {
  if (!val || !useQuestion.getRulesFormat) {
    useQuestion.getIsAnswerError = useQuestion.getCustomError;
    valid.value = false;
    return valid.value;
  }

  try {
    valid.value = isValid(
      parse(val ?? "", useQuestion.getRulesFormat, new Date())
    );
  } catch (err) {
    valid.value = false;
  }

  useQuestion.getIsAnswerError = valid.value ? "" : useQuestion.getCustomError;
  return valid.value;
};

const formatDateInput = (date: Date | string) => {
  if (!date) return "";
  if (typeof date === "string") return date;

  let formated = "";
  try {
    formated = format(date as Date, useQuestion.getRulesFormat);
  } catch (err) {
    selected.model = "";
  }

  validate(formated);

  return formated;
};

const validateInput = (input: string) => {
  if (!input) return "";
  if (!validate(input)) return input;

  return new Date(input);
};

watch(
  [() => useQuestion.getRulesFormat, () => selected.rules?.selectedFormat],
  () => validate(selected.model as string),
  {
    deep: true,
  }
);

onMounted(() => {
  if (selected.model === "") return;
  validate(selected.model as string);
});
</script>

<template>
  <span class="textQuestion_hotkey_wrapper__lceii">
    <div>
      <div
        class="textQuestion_datepicker_input__uuCFd textQuestion_ltr__E3pny false"
      >
        <input
          :placeholder="selected.rules!.format!.toUpperCase()"
          type="text"
          :value="formatDateInput(selected.model)"
          @input="
            selected.model = validateInput(
              ($event.target as HTMLInputElement).value
            ) as string
          "
          :class="{
            textQuestion_hasError__19d2Q: useQuestion.getIsAnswerError,
          }"
          class="textQuestion_not_empty__sFAKu textQuestion_ltr__E3pny"
        />

        <span
          class="textQuestion_date_picker_icon__2RHy3 textQuestion_ltr__E3pny"
          role="presentation"
        >
          <VueDatePicker
            ref="datepicker"
            v-model="selected.model"
            :teleport="true"
            :format="selected.rules!.format"
            text-input
          >
            <template #dp-input="{}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <g>
                    <path d="M0 0H24V24H0z"></path>
                    <rect
                      width="15"
                      height="15"
                      x="4.5"
                      y="4.5"
                      stroke="#5A5E66"
                      rx="2"
                    ></rect>
                    <rect
                      width="4"
                      height="4"
                      x="7"
                      y="13"
                      fill="#5A5E66"
                      rx="1"
                    ></rect>
                    <path
                      fill="#5A5E66"
                      d="M6 4h12c1.105 0 2 .895 2 2v2H4V6c0-1.105.895-2 2-2z"
                    ></path>
                  </g>
                </g>
              </svg>
            </template>
          </VueDatePicker>
        </span>
      </div>
    </div>
  </span>
  <div
    v-if="useQuestion.getIsAnswerError"
    class="textQuestion_continue_button_wrapper__PBEZm textQuestion_text_question_error__Vp6AE"
  >
    <div class="textQuestion_question_error__W6xqr">
      {{ useQuestion.getIsAnswerError }}
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

.textQuestion_text_question_wrapper__WmtqL input.textQuestion_ltr__E3pny {
  direction: ltr;
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
  .textQuestion_datepicker_input__uuCFd {
  direction: ltr;
  width: 25rem;
}

.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_datepicker_input__uuCFd
  input {
  direction: ltr;
  width: 21.375rem;
  padding: 0.25rem 0.75rem 0.25rem 2.75rem;
}

.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_datepicker_input__uuCFd
  input.textQuestion_ltr__E3pny {
  padding-right: 2.875rem;
  padding-left: 0.75rem !important;
}

.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_datepicker_input__uuCFd.textQuestion_ltr__E3pny {
  padding-right: 2.875rem;
}

.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_date_picker_icon__2RHy3 {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  top: 0.25rem;
  left: 0.25rem;
  background-color: var(--preview-theme-button-color);
  border-radius: 0.25rem;
  width: 2rem;
  height: 2rem;
}

.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_date_picker_icon__2RHy3
  svg
  rect {
  stroke: var(--preview-theme-button-color-contrast);
  fill: transparent;
}

.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_date_picker_icon__2RHy3
  svg
  path:last-child {
  fill: var(--preview-theme-button-color-contrast);
}

.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_date_picker_icon__2RHy3.textQuestion_ltr__E3pny {
  right: 0.2rem;
  left: unset;
}

.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_date_picker_icon__2RHy3
  :hover {
  cursor: pointer;
}

@media (max-width: 1024px) {
  .textQuestion_text_question_wrapper__WmtqL input {
    width: 16.8125rem;
  }

  .textQuestion_text_question_wrapper__WmtqL
    .textQuestion_datepicker_input__uuCFd {
    width: 18.4375rem;
  }

  .textQuestion_text_question_wrapper__WmtqL
    .textQuestion_datepicker_input__uuCFd
    input {
    direction: ltr;
    width: 15.375rem;
    padding: 0.25rem 0.75rem 0.25rem 2.75rem;
  }

  .textQuestion_text_question_wrapper__WmtqL
    .textQuestion_datepicker_input__uuCFd
    input.textQuestion_ltr__E3pny {
    padding-right: 2.3rem;
    padding-left: 0.75rem !important;
  }

  .textQuestion_text_question_wrapper__WmtqL
    .textQuestion_datepicker_input__uuCFd.textQuestion_ltr__E3pny {
    padding-right: unset;
  }
}

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
}
</style>
