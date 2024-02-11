<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import { onMounted, ref, watch, watchEffect } from "vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { textAnswerFormat, placeholderRule, customErrorMessage } =
  storeToRefs(useQuestionToggles);
const minMaxError = ref(false);

watch(
  [
    () => textAnswerFormat.value.selected.rules.min,
    () => textAnswerFormat.value.selected.rules.max,
  ],
  () => {
    if (textAnswerFormat.value.selected.type !== "numeric") return;

    if (textAnswerFormat.value.selected.rules.max == 0) {
      minMaxError.value = true;
      return;
    }
    minMaxError.value = false;
  },
);

onMounted(() => {
  if (textAnswerFormat.value.selected.rules.max === 0) {
    minMaxError.value = true;
  }
});

watchEffect(() => {
  textAnswerFormat.value.selected.rules.error =
    minMaxError.value || !placeholderRule.value || !customErrorMessage.value;
});
</script>

<template>
  <div>
    <div>Min/Max characters</div>
    <div class="textQuestion_number_input_wrapper textQuestion_ltr">
      <p>Min</p>
      <div class="numberInput_input_wrapper">
        <input
          class="numberInput_input undefined undefined"
          type="number"
          inputmode="decimal"
          v-model="textAnswerFormat.selected.rules.min"
          @input="
            textAnswerFormat.selected.rules.min = Math.max(
              0,
              Math.min(
                textAnswerFormat.selected.rules.max ?? 0,
                Math.min(200, textAnswerFormat.selected.rules.min ?? 0),
              ),
            )
          "
        />
      </div>
    </div>
    <div class="textQuestion_number_input_wrapper textQuestion_ltr">
      <p>Max</p>
      <div class="numberInput_input_wrapper">
        <input
          class="numberInput_input undefined undefined"
          type="number"
          inputmode="decimal"
          v-model="textAnswerFormat.selected.rules.max"
          @input="
            textAnswerFormat.selected.rules.max = Math.min(
              200,
              Math.max(
                textAnswerFormat.selected.rules.min ?? 0,
                textAnswerFormat.selected.rules.max ?? 0,
              ),
            )
          "
        />
      </div>
    </div>
    <InputError
      class="mb-2"
      :show="minMaxError"
      error="Max value must be greater than 0"
    />
  </div>
  <div class="textQuestion_text_inputs">
    <div class="textInput_input_wrapper">
      <div class="textInput_input_title undefined">Placeholder</div>
      <input
        class="textInput_input false undefined false"
        name="regex_placeholder"
        type="text"
        v-model="placeholderRule"
      />
    </div>
    <InputError :show="!placeholderRule" error="Placeholder is required" />
  </div>
  <div class="textQuestion_text_inputs">
    <div class="textInput_input_wrapper">
      <div class="textInput_input_title undefined">
        Message to display when answer does not pass validation
      </div>
      <input
        class="textInput_input false undefined false"
        type="text"
        v-model="customErrorMessage"
      />
    </div>
    <InputError
      :show="!customErrorMessage"
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
.textQuestion_number_input_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 0.25rem;
}
.textQuestion_number_input_wrapper p {
  width: fit-content;
  font-weight: 700;
  margin-left: 0.5rem;
}
.textQuestion_number_input_wrapper.textQuestion_ltr p {
  margin-left: 0 !important;
  margin-right: 0.5rem;
}
.textQuestion_number_input_wrapper input {
  width: 6.25rem !important;
}
.textQuestion_text_inputs {
  width: 100%;
  margin-bottom: 0.75rem;
}
.numberInput_input_wrapper {
  display: flex;
  flex-direction: column;
}
.numberInput_input_wrapper .numberInput_input {
  outline: none;
  height: 1.563rem;
  margin-top: 0.25rem;
  padding: 0.188rem 0.5rem 0.25rem;
  border-radius: 0.25rem;
  border: 0.063rem solid #bbbdc0;
  background-color: #fff;
  width: 2.25rem;
  direction: ltr;
  padding-right: 0.25rem !important;
  color: #3e434d;
}
</style>
