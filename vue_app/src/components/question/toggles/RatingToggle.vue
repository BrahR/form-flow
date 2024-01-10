<script setup lang="ts">
import HeartIcon from "@/components/question/toggles/rating_icons/HeartIcon.vue";
import StarIcon from "@/components/question/toggles/rating_icons/StarIcon.vue";
import ThumbsUpIcon from "@/components/question/toggles/rating_icons/ThumbsUpIcon.vue";
import VueSlider from "vue-3-slider-component";
import { inject } from "vue";
import type { QuestionBuilderStore } from "@/store/questionBuilder";

const useQuestionBuilder = inject("question") as QuestionBuilderStore;
const icons = [ThumbsUpIcon, HeartIcon, StarIcon];
</script>

<template>
  <div
    class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
  >
    <div class="rangeInput_slider_main_wrapper__2AOqz">
      <div class="rangeInput_slider_info_wrapper__THWn0">
        <span>Scale</span>
        <div class="rangeInput_slider_value__nG5d0">
          {{ useQuestionBuilder.getScaleParameters.value }}
        </div>
      </div>
      <VueSlider
        class="rangeInput_slider_input__cOgVu"
        v-model="useQuestionBuilder.getScaleParameters.value"
        :min="useQuestionBuilder.getScaleParameters.min"
        :max="useQuestionBuilder.getScaleParameters.max"
        marks
      />
    </div>
    <div class="rating_rating_icon_selection_buttons_wrapper__fEUPx">
      <span>Shape</span>
      <div
        class="selectionButtonGroup_buttons_wrapper__jbKNI selectionButtonGroup_ltr__V3WKz selectionButtonGroup_default__ePF4M"
      >
        <button
          type="button"
          class="undefined"
          :class="{
            selectionButtonGroup_selected_tab__BT9Pz:
              useQuestionBuilder.getRating.type == index,
          }"
          v-for="(icon, index) in icons"
          :key="index"
          @click="useQuestionBuilder.getRating.type = index"
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

.sharedBuild_build_content__A2KQg .sharedBuild_toggle_input_row_wrapper__1KFOE {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 0.875rem 0;
}
.sharedBuild_build_content__A2KQg
  .sharedBuild_toggle_input_row_wrapper__1KFOE.sharedBuild_ltr__BELlV {
  direction: ltr;
}
.selectionButtonGroup_buttons_wrapper__jbKNI {
  display: flex;
  width: 100%;
}
.selectionButtonGroup_buttons_wrapper__jbKNI button {
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
.selectionButtonGroup_buttons_wrapper__jbKNI button svg {
  margin: auto;
}
.selectionButtonGroup_buttons_wrapper__jbKNI button:focus {
  outline: none;
}
.selectionButtonGroup_buttons_wrapper__jbKNI button:first-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.selectionButtonGroup_buttons_wrapper__jbKNI button:last-child,
.selectionButtonGroup_buttons_wrapper__jbKNI.selectionButtonGroup_ltr__V3WKz
  button:first-child {
  border-radius: 0.25rem 0 0 0.25rem;
}
.selectionButtonGroup_buttons_wrapper__jbKNI.selectionButtonGroup_ltr__V3WKz
  button:last-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.selectionButtonGroup_buttons_wrapper__jbKNI.selectionButtonGroup_default__ePF4M
  button {
  border: none;
  color: #6b7079;
  background-color: #f0f2f5;
}
.selectionButtonGroup_buttons_wrapper__jbKNI.selectionButtonGroup_default__ePF4M
  .selectionButtonGroup_selected_tab__BT9Pz {
  color: #3e434d;
  background-color: #d8dbe0;
}

.selectionButtonGroup_selected_tab__BT9Pz {
  color: #3e434d;
  background-color: #d8dbe0;
}
@media (max-width: 1024px) {
  .selectionButtonGroup_buttons_wrapper__jbKNI button {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .selectionButtonGroup_buttons_wrapper__jbKNI button:focus {
    outline: none;
  }
}
.rangeInput_slider_main_wrapper__2AOqz {
  margin-bottom: 2rem;
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
.rating_rating_icon_selection_buttons_wrapper__fEUPx {
  margin-top: 1rem;
}
.rating_rating_icon_selection_buttons_wrapper__fEUPx div {
  width: 12rem;
  height: 2rem;
  margin-top: 0.25rem;
}
</style>
