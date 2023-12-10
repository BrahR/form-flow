<script setup lang="ts">
import { inject } from "vue";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;
</script>

<template>
  <div
    class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
  >
    <div class="sharedBuild_toggle_wrapper__R5w_y">
      <div class="toggleButton_wrapper__dOusd">
        <span class="toggleButton_title__zP_tP toggleButton_bold__huFoE"
          >Multiple Selection</span
        >
        <label class="toggleButton_switch__EF_q8">
          <input
            v-model="useQuestion.getMultipleAnswers.on"
            class="toggleButton_toggle_button_checkbox__a2Pr8"
            type="checkbox"
          />
          <div class="toggleButton_slider_round__QN633"></div>
        </label>
      </div>
    </div>
    <div
      v-if="useQuestion.getMultipleAnswers.on"
      class="buildMinMaxChoice_min_max_choices_wrapper__WvAKM"
    >
      <div class="buildMinMaxChoice_title__Nv3yz">Range</div>
      <div class="buildMinMaxChoice_min_max_wrapper__5S8Wi">
        <div class="buildMinMaxChoice_wrapper__Kmwsk">
          <div class="buildMinMaxChoice_min_wrapper__8oipe">
            <div
              class="buildMinMaxChoice_description__kycW8 buildMinMaxChoice_ltr__rNhi8"
            >
              Min
            </div>
            <input
              v-model="useQuestion.getMultipleAnswers.min"
              class="buildMinMaxChoice_input__29wsq"
              type="number"
              inputmode="decimal"
            />
          </div>
        </div>
        <div class="buildMinMaxChoice_wrapper__Kmwsk">
          <div class="buildMinMaxChoice_max_wrapper__zI1rG">
            <div
              class="buildMinMaxChoice_description__kycW8 buildMinMaxChoice_ltr__rNhi8"
            >
              Max
            </div>
            <input
              v-model="useQuestion.getMultipleAnswers.max"
              class="buildMinMaxChoice_input__29wsq"
              type="number"
              inputmode="decimal"
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
/*! CSS Used from: Embedded */
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
.buildMinMaxChoice_min_max_choices_wrapper__WvAKM
  .buildMinMaxChoice_title__Nv3yz {
  margin-top: 1rem;
  color: #6b7079;
}
.buildMinMaxChoice_min_max_choices_wrapper__WvAKM
  .buildMinMaxChoice_min_max_wrapper__5S8Wi
  .buildMinMaxChoice_wrapper__Kmwsk
  .buildMinMaxChoice_max_wrapper__zI1rG,
.buildMinMaxChoice_min_max_choices_wrapper__WvAKM
  .buildMinMaxChoice_min_max_wrapper__5S8Wi
  .buildMinMaxChoice_wrapper__Kmwsk
  .buildMinMaxChoice_min_wrapper__8oipe {
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  color: #6b7079;
}
.buildMinMaxChoice_min_max_choices_wrapper__WvAKM
  .buildMinMaxChoice_min_max_wrapper__5S8Wi
  .buildMinMaxChoice_wrapper__Kmwsk
  .buildMinMaxChoice_max_wrapper__zI1rG
  .buildMinMaxChoice_description__kycW8,
.buildMinMaxChoice_min_max_choices_wrapper__WvAKM
  .buildMinMaxChoice_min_max_wrapper__5S8Wi
  .buildMinMaxChoice_wrapper__Kmwsk
  .buildMinMaxChoice_min_wrapper__8oipe
  .buildMinMaxChoice_description__kycW8 {
  margin-left: 0.5rem;
}
.buildMinMaxChoice_min_max_choices_wrapper__WvAKM
  .buildMinMaxChoice_min_max_wrapper__5S8Wi
  .buildMinMaxChoice_wrapper__Kmwsk
  .buildMinMaxChoice_max_wrapper__zI1rG
  .buildMinMaxChoice_description__kycW8.buildMinMaxChoice_ltr__rNhi8,
.buildMinMaxChoice_min_max_choices_wrapper__WvAKM
  .buildMinMaxChoice_min_max_wrapper__5S8Wi
  .buildMinMaxChoice_wrapper__Kmwsk
  .buildMinMaxChoice_min_wrapper__8oipe
  .buildMinMaxChoice_description__kycW8.buildMinMaxChoice_ltr__rNhi8 {
  margin-right: 0.5rem;
  margin-left: 0;
}
.buildMinMaxChoice_min_max_choices_wrapper__WvAKM
  .buildMinMaxChoice_min_max_wrapper__5S8Wi
  .buildMinMaxChoice_wrapper__Kmwsk
  .buildMinMaxChoice_max_wrapper__zI1rG
  .buildMinMaxChoice_input__29wsq,
.buildMinMaxChoice_min_max_choices_wrapper__WvAKM
  .buildMinMaxChoice_min_max_wrapper__5S8Wi
  .buildMinMaxChoice_wrapper__Kmwsk
  .buildMinMaxChoice_min_wrapper__8oipe
  .buildMinMaxChoice_input__29wsq {
  outline: none;
  height: 2rem;
  margin-top: 0.25rem;
  padding: 0.188rem 0.5rem 0.25rem;
  border-radius: 0.25rem;
  border: 0.063rem solid #bbbdc0;
  background-color: #fff;
  width: 5rem;
  direction: ltr;
  padding-right: 0.25rem !important;
  color: #3e434d;
  box-sizing: border-box;
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
</style>
