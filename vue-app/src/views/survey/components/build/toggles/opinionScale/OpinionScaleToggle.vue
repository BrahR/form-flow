<script setup lang="ts">
import VueSlider from "vue-3-slider-component";
import { computed, watch } from "vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { startAtZero, scaleParams, scaleLabels } =
  storeToRefs(useQuestionToggles);

const sliderMinMax = computed(() => {
  return {
    min: scaleParams.value.min + (startAtZero.value ? 0 : 1),
    max: scaleParams.value.max + (startAtZero.value ? 0 : 1),
  };
});

watch(
  () => startAtZero.value,
  () => {
    if (scaleParams.value.value === 2 || scaleParams.value.value === 11) {
      scaleParams.value.value = 3;
    }
  },
);
</script>

<template>
  <div class="sharedBuild_toggle_input_row_wrapper sharedBuild_ltr">
    <div class="rangeInput_slider_main_wrapper">
      <div class="rangeInput_slider_info_wrapper">
        <span>Scale</span>
        <div class="rangeInput_slider_value">
          {{ scaleParams.value }}
        </div>
      </div>
      <VueSlider
        class="rangeInput_slider_input"
        v-model="scaleParams.value"
        :min="sliderMinMax.min"
        :max="sliderMinMax.max"
        marks
      />
    </div>
    <div class="opinionScaleQuestion_labels_wrapper">
      <div class="opinionScaleQuestion_labels_title">Labels</div>
      <div class="opinionScaleQuestion_label_input_wrapper">
        <div class="opinionScaleQuestion_label_input_label">Right</div>
        <input
          name="right_label"
          class="opinionScaleQuestion_label_input false"
          v-model="scaleLabels.right"
        />
      </div>
      <div class="opinionScaleQuestion_label_input_wrapper">
        <div class="opinionScaleQuestion_label_input_label">Middle</div>
        <input
          name="center_label"
          class="opinionScaleQuestion_label_input false"
          v-model="scaleLabels.center"
        />
      </div>
      <div class="opinionScaleQuestion_label_input_wrapper">
        <div class="opinionScaleQuestion_label_input_label">Left</div>
        <input
          name="left_label"
          class="opinionScaleQuestion_label_input false"
          v-model="scaleLabels.left"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}

.sharedBuild_toggle_input_row_wrapper {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 0.875rem 0;
}

.sharedBuild_toggle_input_row_wrapper.sharedBuild_ltr {
  direction: ltr;
}
.opinionScaleQuestion_labels_wrapper .opinionScaleQuestion_labels_title {
  margin: 1rem 0 0.75rem;
}
.opinionScaleQuestion_labels_wrapper .opinionScaleQuestion_label_input_wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}
.opinionScaleQuestion_labels_wrapper
  .opinionScaleQuestion_label_input_wrapper
  .opinionScaleQuestion_label_input_label {
  width: 3rem;
}
.opinionScaleQuestion_labels_wrapper
  .opinionScaleQuestion_label_input_wrapper
  .opinionScaleQuestion_label_input {
  all: unset;
  height: 1.5rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid #bbbcc0;
  border-radius: 0.25rem;
  flex-grow: 1;
  max-width: calc(100% - 5rem);
}
.rangeInput_slider_main_wrapper {
  margin-bottom: 2rem;
}
.rangeInput_slider_main_wrapper .rangeInput_slider_info_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.rangeInput_slider_main_wrapper .rangeInput_slider_info_wrapper span {
  font-weight: 700;
}
.rangeInput_slider_main_wrapper
  .rangeInput_slider_info_wrapper
  .rangeInput_slider_value {
  width: 2.5rem;
  height: 2rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid #bbbcc0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rangeInput_slider_main_wrapper .rangeInput_slider_input {
  appearance: none;
  width: 100%;
  height: 0.1875rem !important;
  border-radius: 0.125rem;
  direction: ltr;
}
.rangeInput_slider_main_wrapper .rangeInput_slider_input:focus {
  outline: none;
}
</style>
