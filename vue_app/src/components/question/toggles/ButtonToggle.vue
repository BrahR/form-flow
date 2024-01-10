<script setup lang="ts">
import { inject } from "vue";
import type { QuestionBuilderStore } from "@/store/questionBuilder";

const useQuestionBuilder = inject("question") as QuestionBuilderStore;
</script>

<template>
  <div
    class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
  >
    <div class="group_toggle_component_wrapper__S7tie">
      <div class="sharedBuild_toggle_wrapper__R5w_y">
        <div class="toggleButton_wrapper__dOusd undefined false">
          <span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">
            Button
          </span>
          <label class="toggleButton_switch__EF_q8">
            <input
              name="continue_btn_active"
              class="toggleButton_toggle_button_checkbox__a2Pr8"
              type="checkbox"
              v-model="useQuestionBuilder.getIsButton"
            />
            <div
              class="toggleButton_slider_round__QN633 undefined undefined"
            ></div>
          </label>
        </div>
      </div>
      <div
        v-if="useQuestionBuilder.getIsButton"
        class="group_group_question_option_wrapper__P2vy4"
      >
        <div class="inlineInput_wrapper__7HOFO inlineInput_ltr__IdP5R">
          <p class="inlineInput_label__gJoig">Label:</p>
          <div class="inlineInput_input_wrapper__8ZUU7">
            <input
              class="inlineInput_input__S084b undefined"
              name="continue_text"
              type="text"
              min="0"
              v-model="useQuestionBuilder.getButtonLabel"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
.toggleButton_wrapper__dOusd {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.toggleButton_wrapper__dOusd > * {
  flex-shrink: 0;
}
.toggleButton_wrapper__dOusd .toggleButton_title__zP_tP {
  max-width: 16.75rem;
  color: #3e434d;
}
.toggleButton_wrapper__dOusd
  .toggleButton_title__zP_tP.toggleButton_bold__huFoE {
  font-weight: 700;
}
.toggleButton_wrapper__dOusd .toggleButton_switch__EF_q8 {
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1.25rem;
  max-width: 100%;
  font-weight: 700;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  .toggleButton_toggle_button_checkbox__a2Pr8 {
  display: none;
  margin: 0.25rem 0 0;
  line-height: normal;
  box-sizing: border-box;
  padding: 0;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  .toggleButton_slider_round__QN633 {
  border-radius: 1rem;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #bbbdc0;
  transition: 0.4s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  .toggleButton_slider_round__QN633:before {
  position: absolute;
  content: "";
  height: 1rem;
  width: 1rem;
  left: 0.125rem;
  bottom: 0.125rem;
  background-color: #fff;
  transition: 0.4s;
  border-radius: 50%;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  input:checked
  + .toggleButton_slider_round__QN633 {
  background-color: #3b368e;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  input:focus
  + .toggleButton_slider_round__QN633 {
  box-shadow: 0 0 0.0625rem #3b368e;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  input:checked
  + .toggleButton_slider_round__QN633:before {
  transform: translateX(1.25rem);
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
  .sharedBuild_toggle_input_row_wrapper__1KFOE
  .sharedBuild_toggle_wrapper__R5w_y {
  min-height: 1.25rem;
}
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_toggle_input_row_wrapper__1KFOE
  .sharedBuild_toggle_wrapper__R5w_y
  span {
  max-width: 15rem !important;
}
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_toggle_input_row_wrapper__1KFOE.sharedBuild_ltr__BELlV {
  direction: ltr;
}
.inlineInput_wrapper__7HOFO {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.inlineInput_wrapper__7HOFO .inlineInput_label__gJoig {
  margin: 0.5rem 0 0.5rem 0.5rem;
  white-space: nowrap;
  align-self: flex-start;
}
.inlineInput_wrapper__7HOFO .inlineInput_input_wrapper__8ZUU7 {
  position: relative;
}
.inlineInput_wrapper__7HOFO
  .inlineInput_input_wrapper__8ZUU7
  .inlineInput_input__S084b {
  font-family: unset;
  border: 1px solid #bbbcc0;
  height: 1.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
}
.inlineInput_wrapper__7HOFO.inlineInput_ltr__IdP5R .inlineInput_label__gJoig {
  margin: 0.5rem 0.5rem 0.5rem 0;
}
.group_toggle_component_wrapper__S7tie {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  font-size: 14px;
}
.group_group_question_option_wrapper__P2vy4 {
  margin-top: 1rem;
}
</style>
