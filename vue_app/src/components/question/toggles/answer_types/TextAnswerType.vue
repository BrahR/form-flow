<script setup lang="ts">
import { inject, watch } from "vue";
import type { QuestionBuilderStore } from "@/store/questionBuilder";
import InputError from "@/components/form/InputError.vue";

const useQuestionBuilder = inject("question") as QuestionBuilderStore;

watch(
  [
    () => useQuestionBuilder.getRules!.min,
    () => useQuestionBuilder.getRules!.max,
  ],
  () => {
    if (useQuestionBuilder.getAnswerFormat.selected.value !== "text") return;

    if (useQuestionBuilder.getRules!.max == 0) {
      useQuestionBuilder.getAnswerFormat.error["text"] = true;
      return;
    }
    useQuestionBuilder.getAnswerFormat.error["text"] = false;
  }
);
</script>

<template>
  <div>
    <div>Min/Max characters</div>
    <div
      class="textQuestion_number_input_wrapper__rsaFR textQuestion_ltr__E3pny"
    >
      <p>Min</p>
      <div class="numberInput_input_wrapper___GMei">
        <input
          class="numberInput_input__a2e6l undefined undefined"
          type="number"
          inputmode="decimal"
          v-model="useQuestionBuilder.getRules!.min"
          @input="
            useQuestionBuilder.getRules!.min = Math.max(
              0,
              Math.min(
                useQuestionBuilder.getRules?.max ?? 0,
                Math.min(200, useQuestionBuilder.getRules?.min ?? 0)
              )
            )
          "
        />
      </div>
    </div>
    <div
      class="textQuestion_number_input_wrapper__rsaFR textQuestion_ltr__E3pny"
    >
      <p>Max</p>
      <div class="numberInput_input_wrapper___GMei">
        <input
          class="numberInput_input__a2e6l undefined undefined"
          type="number"
          inputmode="decimal"
          v-model="useQuestionBuilder.getRules!.max"
          @input="
            useQuestionBuilder.getRules!.max = Math.min(
              200,
              Math.max(
                useQuestionBuilder.getRules?.min ?? 0,
                useQuestionBuilder.getRules?.max ?? 0
              )
            )
          "
        />
      </div>
    </div>
    <InputError
      :show="useQuestionBuilder.getAnswerFormat.error['text']"
      error="Max value must be greater than 0"
    />
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/2a2e4efde05c354a.css */
.textQuestion_number_input_wrapper__rsaFR {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 0.25rem;
}
.textQuestion_number_input_wrapper__rsaFR p {
  width: -moz-fit-content;
  width: fit-content;
  font-weight: 700;
  margin-left: 0.5rem;
}
.textQuestion_number_input_wrapper__rsaFR.textQuestion_ltr__E3pny p {
  margin-left: 0 !important;
  margin-right: 0.5rem;
}
.textQuestion_number_input_wrapper__rsaFR input {
  width: 6.25rem !important;
}
.numberInput_input_wrapper___GMei {
  display: flex;
  flex-direction: column;
}
.numberInput_input_wrapper___GMei .numberInput_input__a2e6l {
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
