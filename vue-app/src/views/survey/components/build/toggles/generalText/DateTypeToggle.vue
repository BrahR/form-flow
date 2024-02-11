<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";

import { format, isValid, parse } from "date-fns";
import { computed, onMounted, ref, watchEffect } from "vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionBuilder = useQuestionTogglesStore();
const { textAnswerFormat, formatRule, customErrorMessage } =
  storeToRefs(useQuestionBuilder);

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
    formatRule.value = "yyyy-MM-dd";
    patternWarning.value = true;
    // useQuestionBuilder.getAnswerFormat.error[0] = "Invalid date pattern";
  }
  error.value = false;
};

const onInput = (val: Event) => {
  const value = (val.target as HTMLInputElement).value;
  formatRule.value = value;

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
  customMessageError.value = !val;
  customErrorMessage.value = val;
};

const errors = computed(() =>
  [patternWarning.value, customMessageError.value, error.value].some(
    (value) => value,
  ),
);

onMounted(() => {
  textAnswerFormat.value.selected.rules.error = errors.value;
  onFocusOut(formatRule.value ?? "yyyy-MM-dd");
  //
  onCustomMessageInput(customErrorMessage.value);
});

watchEffect(() => {
  textAnswerFormat.value.selected.rules.error = errors.value;
});
</script>

<template>
  <div class="textInput_input_title undefined">Placeholder</div>
  <div class="textQuestion_text_inputs">
    <div class="textInput_input_wrapper">
      <input
        class="textInput_input false undefined false"
        type="text"
        :value="formatRule"
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
  <div class="textInput_input_title undefined">
    <div class="textQuestion_text_inputs">
      Message to display when answer does not pass the validation
    </div>
    <div class="textInput_input_wrapper">
      <input
        class="textInput_input false undefined false"
        name="regex_validation_message"
        type="text"
        :value="customErrorMessage"
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
.textInput_input_wrapper .textInput_input_title {
  height: fit-content;
  color: #3e434d;
  margin-bottom: 0.6rem;
}
.textInput_input_wrapper {
  display: flex;
  flex-direction: column;
}
.textInput_input_wrapper .textInput_input {
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
.textInput_input_wrapper .textInput_input:hover {
  border-color: #3b368e;
}
.textInput_input_wrapper .textInput_input:focus {
  box-shadow: 0 0 0 2px rgba(59, 54, 142, 0.15);
}
.textQuestion_text_inputs {
  width: 100%;
  margin-bottom: 0.75rem;
}
</style>
