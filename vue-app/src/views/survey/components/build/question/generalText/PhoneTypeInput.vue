<script setup lang="ts">
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

import { isValidNumber, parse } from "libphonenumber-js";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { textAnswerFormat, customErrorMessage, placeholderRule } =
  storeToRefs(useQuestionToggles);

type PhoneObject = {
  country: {
    name: string;
    iso2: string;
    dialCode: string;
  };
  countryCallingCode: string;
  nationalNumber: string;
  number: string;
  __countryCallingCodeSource: string;
  countryCode: string;
  valid: boolean;
  formatted: string;
};

const onInput = (event: string, phoneObject: PhoneObject) => {
  const { number, country } = phoneObject;
  const regex = /^\+?[1-9]\d{1,14}$/;

  if (!country && !regex.test(event)) {
    return;
  }
  textAnswerFormat.value.error.phoneNumber = true;

  textAnswerFormat.value.error.phoneNumber = number
    ? !isValidNumber(parse(number))
    : false;
};
</script>

<template>
  <span class="textQuestion_hotkey_wrapper">
    <VueTelInput
      v-model="textAnswerFormat.selected.model"
      defaultCountry=" "
      :autoFormat="false"
      :autoDefaultCountry="false"
      :inputOptions="{
        placeholder: placeholderRule,
        styleClasses: {
          textQuestion_hasError: textAnswerFormat.error.phoneNumber,
          textQuestion_not_empty: true,
        },
      }"
      :dropdownOptions="{
        showSearchBox: true,
        showDialCodeInList: true,
        showFlags: true,
        tabindex: 0,
        showDialCodeInSelection: true,
      }"
      @onInput="onInput"
    />
  </span>
  <div
    v-if="textAnswerFormat.error.phoneNumber"
    class="textQuestion_continue_button_wrapper textQuestion_text_question_error"
  >
    <div class="textQuestion_question_error">
      {{ customErrorMessage }}
    </div>
  </div>
</template>

<style>
.vue-tel-input {
  all: unset;
  display: flex;
}

.vti__dropdown {
  all: unset;
  height: 1.875rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem 0 0 0.5rem;
  color: var(--preview-theme-answer-color);
  border: 0.0625rem solid var(--preview-theme-answer-color);
  border-right: none;
  transition: all 0.1s ease-in-out;
}

.vti__dropdown:is(.open, :hover) {
  caret-color: var(--preview-theme-answer-color);
  box-shadow: inset 0 0 0 0.125rem var(--preview-theme-accent-color);
  border-color: var(--preview-theme-accent-color);
}

.vti__dropdown-list.below {
  width: max-content;
  max-height: 12rem;
  overflow-y: auto;
  list-style-type: none;
  margin-top: 0.0625rem;
  padding: 0.5rem;
  border: 0.00625rem solid #d8dbe0;
  box-shadow: 0 2px 4px 0 rgba(151, 160, 179, 0.5);
  border-radius: 0.25rem;
  position: absolute;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
}

.vti__dropdown-list.below::-webkit-scrollbar {
  width: 1.5rem;
}

.vti__dropdown-list.below::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem 0.5rem transparent;
}

.vti__dropdown-list.below::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem 0.5rem #f0f2f5;
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  min-height: 2rem;
}

.vti__dropdown-list.below:focus {
  outline: none;
}

li.vti__dropdown-item {
  display: flex;
  flex-direction: row;
  /*justify-content: space-between; */
  padding: 0.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
  color: #3e434d;
  min-height: 1.5rem;
  align-items: center;
  transition: all 0.1s ease-in-out;
}

li.vti__dropdown-item :last-child {
  margin-left: auto;
}

.highlighted {
  background-color: rgba(59, 54, 142, 0.15);
}

.vti__input.vti__search_box {
  border-radius: 0;
  width: calc(100% - 1.7rem);
}

/*
.dropDownInput_main_wrapper .dropDownInput_ul li svg {
  margin-top: 0.25rem;
}
.dropDownInput_main_wrapper .dropDownInput_ul li span {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
*/
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
  border-radius: 0 0.5rem 0.5rem 0;
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
</style>
