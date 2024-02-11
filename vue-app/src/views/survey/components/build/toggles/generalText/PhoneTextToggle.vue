<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import { watchEffect } from "vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();

const { textAnswerFormat, customErrorMessage } =
  storeToRefs(useQuestionToggles);
watchEffect(() => {
  textAnswerFormat.value.selected.rules.error = !customErrorMessage.value;
});
</script>

<template>
  <!-- <div class="textQuestion_text_inputs">
    <div class="textInput_input_wrapper">
      <div class="textInput_input_title undefined">Placeholder</div>
      <input
        class="textInput_input false undefined false"
        type="text"
        v-model="useQuestionBuilder.getRules?.placeholder"
      />
    </div>
  </div> -->
  <div class="textQuestion_text_inputs">
    <div class="textInput_input_wrapper">
      <div class="textInput_input_title undefined">
        Message to display when answer does not pass the validation
      </div>
      <input
        class="textInput_input false undefined false"
        type="text"
        v-model="customErrorMessage"
      />
    </div>
    <InputError
      :show="textAnswerFormat.selected.rules.error"
      error="You have to enter a validation message"
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
.textQuestion_text_inputs {
  width: 100%;
  margin-bottom: 0.75rem;
}
</style>
