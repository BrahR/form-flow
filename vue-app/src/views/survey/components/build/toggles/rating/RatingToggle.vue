<script setup lang="ts">
import ThumbsUpIcon from "@/views/survey/components/build/question/rating/ThumbsUpIcon.vue";
import HeartIcon from "@/views/survey/components/build/question/rating/HeartIcon.vue";
import StarIcon from "@/views/survey/components/build/question/rating/StarIcon.vue";
import VueSlider from "vue-3-slider-component";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { ratingParams, rating } = storeToRefs(useQuestionToggles);
const icons = [ThumbsUpIcon, HeartIcon, StarIcon] as const;
</script>

<template>
  <div class="sharedBuild_toggle_input_row_wrapper sharedBuild_ltr">
    <div class="rangeInput_slider_main_wrapper">
      <div class="rangeInput_slider_info_wrapper">
        <span>Scale</span>
        <div class="rangeInput_slider_value">
          {{ ratingParams.value }}
        </div>
      </div>
      <VueSlider
        class="rangeInput_slider_input"
        v-model="ratingParams.value"
        :min="ratingParams.min"
        :max="ratingParams.max"
        marks
      />
    </div>
    <div class="rating_rating_icon_selection_buttons_wrapper">
      <span>Shape</span>
      <div
        class="selectionButtonGroup_buttons_wrapper selectionButtonGroup_ltr selectionButtonGroup_default"
      >
        <button
          type="button"
          :class="{
            selectionButtonGroup_selected_tab: rating.type == index,
          }"
          v-for="(icon, index) in icons"
          :key="index"
          @click="rating.type = index as 0 | 1 | 2"
        >
          <component :is="icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
.sharedBuild_build_content .sharedBuild_toggle_input_row_wrapper {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 0.875rem 0;
}
.sharedBuild_build_content
  .sharedBuild_toggle_input_row_wrapper.sharedBuild_ltr {
  direction: ltr;
}
.selectionButtonGroup_buttons_wrapper {
  display: flex;
  width: 100%;
}
.selectionButtonGroup_buttons_wrapper button {
  margin: 0;
  flex-grow: 1;
  width: 0;
  cursor: pointer;
  padding: 0.25rem 0;
  font-family: unset;
  font-size: 14px;
  border-radius: 0;
  scrollbar-width: none;
}
.selectionButtonGroup_buttons_wrapper button svg {
  margin: auto;
}
.selectionButtonGroup_buttons_wrapper button:focus {
  outline: none;
}
.selectionButtonGroup_buttons_wrapper button:first-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.selectionButtonGroup_buttons_wrapper button:last-child,
.selectionButtonGroup_buttons_wrapper.selectionButtonGroup_ltr
  button:first-child {
  border-radius: 0.25rem 0 0 0.25rem;
}
.selectionButtonGroup_buttons_wrapper.selectionButtonGroup_ltr
  button:last-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.selectionButtonGroup_buttons_wrapper.selectionButtonGroup_default button {
  border: none;
  color: #6b7079;
  background-color: #f0f2f5;
}
.selectionButtonGroup_buttons_wrapper.selectionButtonGroup_default
  .selectionButtonGroup_selected_tab {
  color: #3e434d;
  background-color: #d8dbe0;
}

.selectionButtonGroup_selected_tab {
  color: #3e434d;
  background-color: #d8dbe0;
}
@media (max-width: 1024px) {
  .selectionButtonGroup_buttons_wrapper button {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .selectionButtonGroup_buttons_wrapper button:focus {
    outline: none;
  }
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
.rating_rating_icon_selection_buttons_wrapper {
  margin-top: 1rem;
}
.rating_rating_icon_selection_buttons_wrapper div {
  width: 12rem;
  height: 2rem;
  margin-top: 0.25rem;
}
</style>
