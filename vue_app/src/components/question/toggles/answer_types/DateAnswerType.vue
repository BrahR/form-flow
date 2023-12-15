<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";

import type { QuestionStore } from "@/store/question";
import { format, isValid, parse } from "date-fns";
import { ref, inject } from "vue";

const useQuestion = inject("question") as QuestionStore;
const selected = useQuestion.getAnswerFormat.selected;
const patternWarning = ref("");
const error = ref("");

const validate = (val: string) =>
  isValid(parse(format(new Date(), val), val, new Date()));

const onFocusOut = (val: string) => {
  try {
    validate(val);
  } catch (err) {
    selected.rules!.format = "yyyy-MM-dd";
    patternWarning.value = "You must enter a valid pattern";
  }
  error.value = "";
};

const onInput = (val: Event) => {
  const value = (val.target as HTMLInputElement).value;
  selected.rules!.format = value;

  try {
    if (!validate(value)) {
      error.value = "Invalid date pattern";
      return;
    }
  } catch (err) {
    error.value = "Invalid date pattern";
    return;
  }

  error.value = "";
};
</script>

<template>
  <div class="textQuestion_text_inputs__Hciae">
    <div class="textInput_input_wrapper__bZOVy">
      <div class="textInput_input_title__ssXRr undefined">Placeholder</div>
      <input
        class="textInput_input__YzEWk false undefined false"
        type="text"
        :value="selected.rules!.format"
        @input="onInput"
        @focusin="patternWarning = ''"
        @focusout="onFocusOut(($event.target as HTMLInputElement).value)"
      />
    </div>
    <InputError :error="error" />
    <InputError :error="patternWarning" />
  </div>
  <div class="textQuestion_text_inputs__Hciae">
    <div class="textInput_input_wrapper__bZOVy">
      <div class="textInput_input_title__ssXRr undefined">
        Message to display when answer does not pass the validation
      </div>
      <input
        class="textInput_input__YzEWk false undefined false"
        name="regex_validation_message"
        type="text"
        v-model="selected.errorMessage"
      />
    </div>
    <InputError
      v-if="selected.errorMessage == ''"
      error="You have to enter a validation message"
    />
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/2a2e4efde05c354a.css */
.textInput_input_wrapper__bZOVy {
  display: flex;
  flex-direction: column;
}
.textInput_input_wrapper__bZOVy .textInput_input_title__ssXRr {
  height: -moz-fit-content;
  height: fit-content;
  color: #3e434d;
  margin-bottom: 0.6rem;
}
.textInput_input_wrapper__bZOVy .textInput_input__YzEWk {
  font: unset;
  min-width: inherit;
  outline: none;
  height: 1.563rem;
  padding: 0.188rem 0.5rem 0.25rem;
  border-radius: 0.25rem;
  border: 0.063rem solid #bbbdc0;
  background-color: #fff;
  color: #3e434d;
}
.textInput_input_wrapper__bZOVy .textInput_input__YzEWk:hover {
  border-color: #3b368e;
}
.textInput_input_wrapper__bZOVy .textInput_input__YzEWk:focus {
  box-shadow: 0 0 0 2px rgba(59, 54, 142, 0.15);
}
.textQuestion_text_inputs__Hciae {
  width: 100%;
  margin-bottom: 0.75rem;
}
</style>
