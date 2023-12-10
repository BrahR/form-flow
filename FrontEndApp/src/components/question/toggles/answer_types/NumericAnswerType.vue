<script setup lang="ts">
import { inject } from "vue";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;
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
          v-model="useQuestion.getRules!.min"
          @input="
            useQuestion.getRules!.min = Math.max(
              0,
              Math.min(
                useQuestion.getRules?.max ?? 0,
                Math.min(200, useQuestion.getRules?.min ?? 0)
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
          v-model="useQuestion.getRules!.max"
          @input="
            useQuestion.getRules!.max = Math.min(
              200,
              Math.max(
                useQuestion.getRules?.min ?? 0,
                useQuestion.getRules?.max ?? 0
              )
            )
          "
        />
      </div>
    </div>
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
        Message to display when answer does not pass validation
      </div>
      <input
        class="textInput_input__YzEWk false undefined false"
        type="text"
        v-model="useQuestion.getCustomError"
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
.textQuestion_text_inputs__Hciae {
  width: 100%;
  margin-bottom: 0.75rem;
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
