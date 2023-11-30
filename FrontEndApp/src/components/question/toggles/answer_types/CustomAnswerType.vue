<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";

import { useQuestionStore } from "@/store/question";
import { ref } from "vue";

const useQuestion = useQuestionStore();
const isRegExDirty = ref(false);
const isCustomErrorDirty = ref(false);
</script>

<template>
  <div class="textQuestion_text_inputs__Hciae">
    <div class="textInput_input_wrapper__bZOVy">
      <div class="textInput_input_title__ssXRr undefined">
        Pattern(RegEx validation)
      </div>
      <input
        class="textInput_input__YzEWk false undefined false"
        name="regex_value"
        type="text"
        v-model="useQuestion.getRulesRegex"
        @input="isRegExDirty = true"
      />
    </div>
    <InputError
      :show="!useQuestion.getRulesRegex && isRegExDirty"
      error="RegEx cannot be empty"
    />
  </div>
  <div class="textQuestion_text_inputs__Hciae">
    <div class="textInput_input_wrapper__bZOVy">
      <div class="textInput_input_title__ssXRr undefined">Placeholder</div>
      <input
        class="textInput_input__YzEWk false undefined false"
        name="regex_placeholder"
        type="text"
        v-model="useQuestion.getRulesPlaceholder"
      />
    </div>
  </div>
  <div class="textQuestion_text_inputs__Hciae">
    <div class="textInput_input_wrapper__bZOVy">
      <div class="textInput_input_title__ssXRr undefined">
        Message to display when answer does not the validation
      </div>
      <input
        class="textInput_input__YzEWk false undefined false"
        name="regex_validation_message"
        type="text"
        v-model="useQuestion.getCustomError"
        @input="isCustomErrorDirty = true"
      />
    </div>
    <InputError
      :show="!useQuestion.getCustomError && isCustomErrorDirty"
      error="Custom error message cannot be empty"
    />
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
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
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_toggle_input_row_wrapper__1KFOE {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 0.875rem 0;
}
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_toggle_input_row_wrapper__1KFOE.sharedBuild_ltr__BELlV {
  direction: ltr;
}
.textQuestion_text_inputs__Hciae {
  width: 100%;
  margin-bottom: 0.75rem;
}
</style>
