<script setup lang="ts">
import Slider from "vue3-slider";

import { inject } from "vue";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;
</script>

<template>
  <div
    class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
  >
    <div class="rangeInput_slider_main_wrapper__2AOqz">
      <div class="rangeInput_slider_info_wrapper__THWn0">
        <span>Scale</span>
        <div class="rangeInput_slider_value__nG5d0">
          {{ useQuestion.getOpinionParameters.value }}
        </div>
      </div>
      <Slider
        v-model="useQuestion.getOpinionParameters.value"
        color="#FB278D"
        track-color="rgb(16, 16, 16)"
      />
    </div>
    <div class="opinionScaleQuestion_labels_wrapper__2s4iM">
      <div class="opinionScaleQuestion_labels_title__PbIVX">Labels</div>
      <div class="opinionScaleQuestion_label_input_wrapper__RYacm">
        <div class="opinionScaleQuestion_label_input_label__E3T6A">Right</div>
        <input
          name="right_label"
          class="opinionScaleQuestion_label_input__ZEMa3 false"
          value=""
        />
      </div>
      <div class="opinionScaleQuestion_label_input_wrapper__RYacm">
        <div class="opinionScaleQuestion_label_input_label__E3T6A">Middle</div>
        <input
          name="center_label"
          class="opinionScaleQuestion_label_input__ZEMa3 false"
          value=""
        />
      </div>
      <div class="opinionScaleQuestion_label_input_wrapper__RYacm">
        <div class="opinionScaleQuestion_label_input_label__E3T6A">Left</div>
        <input
          name="left_label"
          class="opinionScaleQuestion_label_input__ZEMa3 false"
          value=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
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
.opinionScaleQuestion_labels_wrapper__2s4iM
  .opinionScaleQuestion_labels_title__PbIVX {
  margin: 1rem 0 0.75rem;
}
.opinionScaleQuestion_labels_wrapper__2s4iM
  .opinionScaleQuestion_label_input_wrapper__RYacm {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}
.opinionScaleQuestion_labels_wrapper__2s4iM
  .opinionScaleQuestion_label_input_wrapper__RYacm
  .opinionScaleQuestion_label_input_label__E3T6A {
  width: 3rem;
}
.opinionScaleQuestion_labels_wrapper__2s4iM
  .opinionScaleQuestion_label_input_wrapper__RYacm
  .opinionScaleQuestion_label_input__ZEMa3 {
  all: unset;
  height: 1.5rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid #bbbcc0;
  border-radius: 0.25rem;
  flex-grow: 1;
  max-width: calc(100% - 5rem);
}
.rangeInput_slider_main_wrapper__2AOqz .rangeInput_slider_info_wrapper__THWn0 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.rangeInput_slider_main_wrapper__2AOqz
  .rangeInput_slider_info_wrapper__THWn0
  span {
  font-weight: 700;
}
.rangeInput_slider_main_wrapper__2AOqz
  .rangeInput_slider_info_wrapper__THWn0
  .rangeInput_slider_value__nG5d0 {
  width: 2.5rem;
  height: 2rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid #bbbcc0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rangeInput_slider_main_wrapper__2AOqz .rangeInput_slider_input__cOgVu {
  -webkit-appearance: none;
  width: 100%;
  height: 0.1875rem !important;
  border-radius: 0.125rem;
  direction: ltr;
}
.rangeInput_slider_main_wrapper__2AOqz .rangeInput_slider_input__cOgVu:focus {
  outline: none;
}
</style>
