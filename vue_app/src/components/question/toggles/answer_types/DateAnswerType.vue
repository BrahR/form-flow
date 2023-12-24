<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";

import type { QuestionStore } from "@/store/question";
import { format, isValid, parse } from "date-fns";
import { ref, inject, computed, watchEffect, onMounted } from "vue";

const useQuestion = inject("question") as QuestionStore;
const selected = useQuestion.getAnswerFormat.selected;
const patternWarning = ref(false);
const customMessageError = ref(false);
const error = ref(false);

const validate = (val: string) =>
  isValid(parse(format(new Date(), val), val, new Date()));

const onFocusIn = () => {
  patternWarning.value = false;
};

const onFocusOut = (val: string) => {
  try {
    validate(val);
  } catch (err) {
    selected.rules!.format = "yyyy-MM-dd";
    patternWarning.value = true;
    // useQuestion.getAnswerFormat.error[0] = "Invalid date pattern";
  }
  error.value = false;
};

const onInput = (val: Event) => {
  const value = (val.target as HTMLInputElement).value;
  selected.rules!.format = value;

  try {
    if (!validate(value)) {
      error.value = true;
      return;
    }
  } catch (err) {
    error.value = true;
    return;
  }

  error.value = false;
};

const onCustomMessageInput = (val: string) => {
  customMessageError.value = val ? false : true;
  selected.errorMessage = val;
};

const errors = computed(() =>
  [patternWarning.value, customMessageError.value, error.value].some(
    (value) => value !== false
  )
);

onMounted(() => {
  useQuestion.getAnswerFormat.error["date"] = errors.value;
  onFocusOut(selected.rules!.format ?? "yyyy-MM-dd");
  onCustomMessageInput(selected.errorMessage);
});

watchEffect(() => {
  useQuestion.getAnswerFormat.error["date"] = errors.value;
});
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
        @focusin="onFocusIn"
        @focusout="onFocusOut(($event.target as HTMLInputElement).value)"
      />
    </div>
    <InputError :show="error" error="Invalid date pattern" />
    <InputError
      :show="patternWarning"
      error="You must enter a valid pattern (click again to remove this message)"
    />
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
        :value="selected.errorMessage"
        @input="
          onCustomMessageInput(($event.currentTarget as HTMLInputElement).value)
        "
      />
      <!-- v-model="selected.errorMessage" -->
    </div>
    <InputError
      :show="customMessageError"
      error="Custom validation message is required"
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
