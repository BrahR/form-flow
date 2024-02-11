<script setup lang="ts">
import { watch } from "vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";
import InputError from "@/components/form/InputError.vue";

const useQuestionToggles = useQuestionTogglesStore();
const { multipleAnswers } = storeToRefs(useQuestionToggles);

watch(
  [() => multipleAnswers.value.min, () => multipleAnswers.value.max],
  () => {
    if (multipleAnswers.value.max == 1) {
      multipleAnswers.value.error = true;
      return;
    }
    multipleAnswers.value.error = false;
  },
);
</script>

<template>
  <div class="sharedBuild_toggle_input_row_wrapper sharedBuild_ltr">
    <div class="sharedBuild_toggle_wrapper">
      <div class="toggleButton_wrapper">
        <span class="toggleButton_title toggleButton_bold">
          Multiple Selection
        </span>
        <label class="toggleButton_switch">
          <input
            v-model="multipleAnswers.on"
            class="toggleButton_toggle_button_checkbox"
            type="checkbox"
          />
          <div class="toggleButton_slider_round"></div>
        </label>
      </div>
    </div>
    <div
      v-if="multipleAnswers.on"
      class="buildMinMaxChoice_min_max_choices_wrapper"
    >
      <div class="buildMinMaxChoice_title">Range</div>
      <div class="buildMinMaxChoice_min_max_wrapper">
        <div class="buildMinMaxChoice_wrapper">
          <div class="buildMinMaxChoice_min_wrapper">
            <div class="buildMinMaxChoice_description buildMinMaxChoice_ltr">
              Min
            </div>
            <input
              class="buildMinMaxChoice_input"
              type="number"
              inputmode="decimal"
              v-model="multipleAnswers.min"
              @input="
                multipleAnswers.min = Math.max(
                  1,
                  Math.min(
                    multipleAnswers.max ?? 1,
                    Math.min(99, multipleAnswers.min ?? 1),
                  ),
                )
              "
            />
          </div>
        </div>
        <div class="buildMinMaxChoice_wrapper">
          <div class="buildMinMaxChoice_max_wrapper">
            <div class="buildMinMaxChoice_description buildMinMaxChoice_ltr">
              Max
            </div>
            <input
              class="buildMinMaxChoice_input"
              type="number"
              inputmode="decimal"
              v-model="multipleAnswers.max"
              @input="
                multipleAnswers.max = Math.min(
                  99,
                  Math.max(multipleAnswers.min ?? 2, multipleAnswers.max ?? 2),
                )
              "
            />
          </div>
        </div>
      </div>
      <InputError
        :show="multipleAnswers.error"
        error="Max must be greater than 1"
      />
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
.toggleButton_wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.toggleButton_wrapper > * {
  flex-shrink: 0;
}
.toggleButton_wrapper .toggleButton_title {
  max-width: 16.75rem;
  color: #3e434d;
}
.toggleButton_wrapper .toggleButton_title.toggleButton_bold {
  font-weight: 700;
}
.toggleButton_wrapper .toggleButton_switch {
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1.25rem;
  max-width: 100%;
  font-weight: 700;
}
.toggleButton_wrapper
  .toggleButton_switch
  .toggleButton_toggle_button_checkbox {
  display: none;
  margin: 0.25rem 0 0;
  line-height: normal;
  box-sizing: border-box;
  padding: 0;
}
.toggleButton_wrapper .toggleButton_switch .toggleButton_slider_round {
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
.toggleButton_wrapper .toggleButton_switch .toggleButton_slider_round:before {
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
.toggleButton_wrapper
  .toggleButton_switch
  input:checked
  + .toggleButton_slider_round {
  background-color: #3b368e;
}
.toggleButton_wrapper
  .toggleButton_switch
  input:focus
  + .toggleButton_slider_round {
  box-shadow: 0 0 0.0625rem #3b368e;
}
.toggleButton_wrapper
  .toggleButton_switch
  input:checked
  + .toggleButton_slider_round:before {
  transform: translateX(1.25rem);
}
.buildMinMaxChoice_min_max_choices_wrapper .buildMinMaxChoice_title {
  margin-top: 1rem;
  color: #6b7079;
}
.buildMinMaxChoice_min_max_choices_wrapper
  .buildMinMaxChoice_min_max_wrapper
  .buildMinMaxChoice_wrapper
  .buildMinMaxChoice_max_wrapper,
.buildMinMaxChoice_min_max_choices_wrapper
  .buildMinMaxChoice_min_max_wrapper
  .buildMinMaxChoice_wrapper
  .buildMinMaxChoice_min_wrapper {
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  color: #6b7079;
}
.buildMinMaxChoice_min_max_choices_wrapper
  .buildMinMaxChoice_min_max_wrapper
  .buildMinMaxChoice_wrapper
  .buildMinMaxChoice_max_wrapper
  .buildMinMaxChoice_description,
.buildMinMaxChoice_min_max_choices_wrapper
  .buildMinMaxChoice_min_max_wrapper
  .buildMinMaxChoice_wrapper
  .buildMinMaxChoice_min_wrapper
  .buildMinMaxChoice_description {
  margin-left: 0.5rem;
}
.buildMinMaxChoice_min_max_choices_wrapper
  .buildMinMaxChoice_min_max_wrapper
  .buildMinMaxChoice_wrapper
  .buildMinMaxChoice_max_wrapper
  .buildMinMaxChoice_description.buildMinMaxChoice_ltr,
.buildMinMaxChoice_min_max_choices_wrapper
  .buildMinMaxChoice_min_max_wrapper
  .buildMinMaxChoice_wrapper
  .buildMinMaxChoice_min_wrapper
  .buildMinMaxChoice_description.buildMinMaxChoice_ltr {
  margin-right: 0.5rem;
  margin-left: 0;
}
.buildMinMaxChoice_min_max_choices_wrapper
  .buildMinMaxChoice_min_max_wrapper
  .buildMinMaxChoice_wrapper
  .buildMinMaxChoice_max_wrapper
  .buildMinMaxChoice_input,
.buildMinMaxChoice_min_max_choices_wrapper
  .buildMinMaxChoice_min_max_wrapper
  .buildMinMaxChoice_wrapper
  .buildMinMaxChoice_min_wrapper
  .buildMinMaxChoice_input {
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
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_toggle_input_row_wrapper {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 0.875rem 0;
}
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_toggle_input_row_wrapper
  .sharedBuild_toggle_wrapper {
  min-height: 1.25rem;
}
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_toggle_input_row_wrapper
  .sharedBuild_toggle_wrapper
  span {
  max-width: 15rem !important;
}
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_toggle_input_row_wrapper.sharedBuild_ltr {
  direction: ltr;
}
</style>
