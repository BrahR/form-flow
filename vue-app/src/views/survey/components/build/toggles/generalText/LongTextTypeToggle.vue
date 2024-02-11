<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import { watch } from "vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { textAnswerFormat } = storeToRefs(useQuestionToggles);

watch(
  [
    () => textAnswerFormat.value.selected.rules.min,
    () => textAnswerFormat.value.selected.rules.max,
  ],
  () => {
    if (textAnswerFormat.value.selected.type !== "longText") return;

    if (textAnswerFormat.value.selected.rules.max == 0) {
      textAnswerFormat.value.selected.rules.error = true;
      return;
    }
    textAnswerFormat.value.selected.rules.error = false;
  },
);
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
                Math.min(5000, textAnswerFormat.selected.rules.min ?? 0),
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
              5000,
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
      :show="textAnswerFormat.selected.rules.error"
      error="Max value must be greater than 0"
    />
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
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
