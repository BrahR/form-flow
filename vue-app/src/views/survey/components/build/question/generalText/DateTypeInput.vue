<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import { ref, watch, onMounted } from "vue";
import { format, parse, isValid } from "date-fns";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { textAnswerFormat, formatRule, customErrorMessage } =
  storeToRefs(useQuestionToggles);
const datepicker = ref(null);
const valid = ref(true);

const validate = (val: string) => {
  if (!val || !formatRule.value) {
    textAnswerFormat.value.error.date = true;
    valid.value = false;
    return valid.value;
  }

  try {
    valid.value = isValid(parse(val ?? "", formatRule.value, new Date()));
  } catch (err) {
    valid.value = false;
  }

  textAnswerFormat.value.error.date = !valid.value;
  return valid.value;
};

const formatDateInput = (date: Date | string) => {
  if (!date) return "";
  if (typeof date === "string") return date;

  let formated = "";
  try {
    formated = format(date as Date, formatRule.value);
  } catch (err) {
    textAnswerFormat.value.selected.model = "";
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
  () => formatRule.value,
  // [
  //   () => useQuestionBuilder.getRulesFormat,
  //   () => selected.rules?.selectedFormat,
  // ],
  () => {
    if (textAnswerFormat.value.selected.type !== "date") return;

    validate(textAnswerFormat.value.selected.model);
  },
  {
    deep: true,
  },
);

onMounted(() => {
  if (textAnswerFormat.value.selected.model === "") return;
  validate(textAnswerFormat.value.selected.model);
});
</script>

<template>
  <span class="textQuestion_hotkey_wrapper">
    <div>
      <div class="textQuestion_datepicker_input textQuestion_ltr false">
        <input
          :placeholder="formatRule.toUpperCase()"
          type="text"
          :value="formatDateInput(textAnswerFormat.selected.model)"
          @input="
            textAnswerFormat.selected.model = validateInput(
              ($event.target as HTMLInputElement).value,
            ) as string
          "
          :class="{
            textQuestion_hasError: textAnswerFormat.error.date,
          }"
          class="textQuestion_not_empty textQuestion_ltr"
        />

        <span
          class="textQuestion_date_picker_icon textQuestion_ltr"
          role="presentation"
        >
          <VueDatePicker
            ref="datepicker"
            v-model="textAnswerFormat.selected.model"
            :teleport="true"
            :format="formatRule"
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
    v-if="textAnswerFormat.error.date"
    class="textQuestion_continue_button_wrapper textQuestion_text_question_error"
  >
    <div class="textQuestion_question_error">
      {{ customErrorMessage }}
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

.textQuestion_text_question_wrapper input.textQuestion_ltr {
  direction: ltr;
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

.textQuestion_text_question_wrapper .textQuestion_datepicker_input {
  direction: ltr;
  width: 25rem;
}

.textQuestion_text_question_wrapper .textQuestion_datepicker_input input {
  direction: ltr;
  width: 21.375rem;
  padding: 0.25rem 0.75rem 0.25rem 2.75rem;
}

.textQuestion_text_question_wrapper
  .textQuestion_datepicker_input
  input.textQuestion_ltr {
  padding-right: 2.875rem;
  padding-left: 0.75rem !important;
}

.textQuestion_text_question_wrapper
  .textQuestion_datepicker_input.textQuestion_ltr {
  padding-right: 2.875rem;
}

.textQuestion_text_question_wrapper .textQuestion_date_picker_icon {
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

.textQuestion_text_question_wrapper .textQuestion_date_picker_icon svg rect {
  stroke: var(--preview-theme-button-color-contrast);
  fill: transparent;
}

.textQuestion_text_question_wrapper
  .textQuestion_date_picker_icon
  svg
  path:last-child {
  fill: var(--preview-theme-button-color-contrast);
}

.textQuestion_text_question_wrapper
  .textQuestion_date_picker_icon.textQuestion_ltr {
  right: 0.2rem;
  left: unset;
}

.textQuestion_text_question_wrapper .textQuestion_date_picker_icon :hover {
  cursor: pointer;
}

@media (max-width: 1024px) {
  .textQuestion_text_question_wrapper input {
    width: 16.8125rem;
  }

  .textQuestion_text_question_wrapper .textQuestion_datepicker_input {
    width: 18.4375rem;
  }

  .textQuestion_text_question_wrapper .textQuestion_datepicker_input input {
    direction: ltr;
    width: 15.375rem;
    padding: 0.25rem 0.75rem 0.25rem 2.75rem;
  }

  .textQuestion_text_question_wrapper
    .textQuestion_datepicker_input
    input.textQuestion_ltr {
    padding-right: 2.3rem;
    padding-left: 0.75rem !important;
  }

  .textQuestion_text_question_wrapper
    .textQuestion_datepicker_input.textQuestion_ltr {
    padding-right: unset;
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
