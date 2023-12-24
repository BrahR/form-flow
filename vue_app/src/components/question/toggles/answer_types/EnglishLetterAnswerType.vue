<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import { inject, computed, watchEffect } from "vue";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;

const errors = computed(() =>
  [!useQuestion.getRulesPlaceholder, !useQuestion.getCustomError].some(
    (value) => value !== false
  )
);

watchEffect(() => {
  useQuestion.getAnswerFormat.error["numeric"] = errors.value;
});
</script>

<template>
  <div class="textQuestion_text_inputs__Hciae">
    <div class="textInput_input_wrapper__bZOVy">
      <div class="textInput_input_title__ssXRr undefined">Placeholder</div>
      <input
        class="textInput_input__YzEWk false undefined false"
        type="text"
        v-model="useQuestion.getRulesPlaceholder"
      />
    </div>
    <InputError
      :show="!useQuestion.getRulesPlaceholder"
      error="Palceholder is required"
    />
  </div>
  <div class="textQuestion_text_inputs__Hciae">
    <div class="textInput_input_wrapper__bZOVy">
      <div class="textInput_input_title__ssXRr undefined">
        Message to display when answer does not the validation
      </div>
      <input
        class="textInput_input__YzEWk false undefined false"
        type="text"
        v-model="useQuestion.getCustomError"
      />
    </div>
    <InputError
      :show="!useQuestion.getCustomError"
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
