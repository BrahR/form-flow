<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";

import { useQuestionStore } from "@/store/question";
import { format, isValid, parse } from "date-fns";
import { watch, ref } from "vue";

const useQuestion = useQuestionStore();
const selected = useQuestion.getAnswerFormat.selected;
const patternWarning = ref("");

const validate = (val: string) =>
  isValid(parse(format(new Date(), val), val, new Date()));

const onFocusOut = (val: string) => {
  try {
    validate(val);
  } catch (err) {
    selected.rules.format = "yyyy-MM-dd";
    patternWarning.value = "You must enter a valid format";
  }
};

watch(
  () => selected.rules.format,
  (newValue: string, oldValue: string) => {
    if (newValue === oldValue) return;

    try {
      if (!validate(newValue)) {
        selected.rules.error = "Invalid date pattern";
        return;
      }

      selected.rules.error = "";
    } catch (error) {
      selected.rules.error = "Invalid date pattern";
    }
  }
);
</script>

<template>
  <div class="textQuestion_text_inputs__Hciae">
    <div class="textInput_input_wrapper__bZOVy">
      <div class="textInput_input_title__ssXRr undefined">Example</div>
      <input
        class="textInput_input__YzEWk false undefined false"
        type="text"
        v-model="selected.rules.format"
        @focusin="patternWarning = ''"
        @focusout="onFocusOut(($event.target as HTMLInputElement).value)"
      />
    </div>
    <InputError :error="selected.rules.error" />
    <InputError :error="patternWarning" />
  </div>
  <div class="textQuestion_text_inputs__Hciae">
    <div class="textInput_input_wrapper__bZOVy">
      <div class="textInput_input_title__ssXRr undefined">
        Message to display when answer does not pass RegEx
      </div>
      <input
        class="textInput_input__YzEWk false undefined false"
        name="regex_validation_message"
        type="text"
        value="Please enter a valid date."
      />
    </div>
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
