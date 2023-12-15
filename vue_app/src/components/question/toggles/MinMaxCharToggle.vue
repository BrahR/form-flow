<script setup lang="ts"></script>

<template>
  <div
    class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
  >
    <div>
      <div>Minimum and Maximum Number</div>
      <div
        class="textQuestion_number_input_wrapper__rsaFR textQuestion_ltr__E3pny"
      >
        <p>Min</p>
        <div class="numberInput_input_wrapper___GMei">
          <input
            class="numberInput_input__a2e6l undefined false"
            type="number"
            max="2147483647"
            min="-2147483647"
            inputmode="decimal"
            name="number_min_value"
            value="0"
          />
        </div>
      </div>
      <div
        class="textQuestion_number_input_wrapper__rsaFR textQuestion_ltr__E3pny"
      >
        <p>Max</p>
        <div class="numberInput_input_wrapper___GMei">
          <input
            class="numberInput_input__a2e6l undefined false"
            type="number"
            max="2147483647"
            min="-214748365"
            inputmode="decimal"
            name="number_max_value"
            value="2000000000"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
/*! CSS Used from: Embedded */
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
