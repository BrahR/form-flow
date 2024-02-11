<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";

import { ref, watchEffect } from "vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { textAnswerFormat, formatRule, placeholderRule, customErrorMessage } =
  storeToRefs(useQuestionToggles);

const isRegExDirty = ref(false);
const isPlaceholderDirty = ref(false);
const isCustomErrorDirty = ref(false);

watchEffect(() => {
  textAnswerFormat.value.selected.rules.error =
    !formatRule.value || !placeholderRule.value || !customErrorMessage.value;
});
</script>

<template>
  <div class="textQuestion_text_inputs">
    <div class="textInput_input_wrapper">
      <div class="textInput_input_title undefined">
        Pattern(RegEx validation)
      </div>
      <input
        class="textInput_input false undefined false"
        name="regex_value"
        type="text"
        v-model="formatRule"
        @input="isRegExDirty = true"
      />
    </div>
    <InputError :show="!formatRule && isRegExDirty" error="RegEx is required" />
  </div>
  <div class="textQuestion_text_inputs">
    <div class="textInput_input_wrapper">
      <div class="textInput_input_title undefined">Placeholder</div>
      <input
        class="textInput_input false undefined false"
        name="regex_placeholder"
        type="text"
        v-model="placeholderRule"
        @input="isPlaceholderDirty = true"
      />
    </div>
    <InputError
      :show="!placeholderRule && isPlaceholderDirty"
      error="Placeholder is required"
    />
  </div>
  <div class="textQuestion_text_inputs">
    <div class="textInput_input_wrapper">
      <div class="textInput_input_title undefined">
        Message to display when answer does not the validation
      </div>
      <input
        class="textInput_input false undefined false"
        name="regex_validation_message"
        type="text"
        v-model="customErrorMessage"
        @input="isCustomErrorDirty = true"
      />
    </div>
    <InputError
      :show="!customErrorMessage && isCustomErrorDirty"
      error="Custom validation message is required"
    />
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
.textInput_input_wrapper {
  display: flex;
  flex-direction: column;
}
.textInput_input_wrapper .textInput_input_title {
  height: fit-content;
  color: #3e434d;
  margin-bottom: 0.6rem;
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
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_toggle_input_row_wrapper {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 0.875rem 0;
}
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_toggle_input_row_wrapper.sharedBuild_ltr {
  direction: ltr;
}
.textQuestion_text_inputs {
  width: 100%;
  margin-bottom: 0.75rem;
}
</style>
