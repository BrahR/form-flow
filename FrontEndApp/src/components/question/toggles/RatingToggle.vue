<script setup lang="ts">
import HeartIcon from "@/components/question/toggles/rating_icons/HeartIcon.vue";
import StarIcon from "@/components/question/toggles/rating_icons/StarIcon.vue";
import ThumbsUpIcon from "@/components/question/toggles/rating_icons/ThumbsUpIcon.vue";
import VueSlider from "vue-3-slider-component";
import { inject } from "vue";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;
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
          {{ useQuestion.getScaleParameters.value }}
        </div>
      </div>
      <VueSlider
        class="rangeInput_slider_input__cOgVu"
        v-model="useQuestion.getScaleParameters.value"
        :min="useQuestion.getScaleParameters.min"
        :max="useQuestion.getScaleParameters.max"
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
              useQuestion.getRatingType == index,
          }"
          v-for="(icon, index) in icons"
          :key="index"
          @click="useQuestion.getRatingType = index"
        >
          <component :is="icon" />
        </button>
        <!-- <button type="button" class="false undefined">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h24v24H0z"></path>
              <path
                d="M19.612 5.87a4.767 4.767 0 0 0-3.35-1.37 4.767 4.767 0 0 0-3.35 1.37L12 6.771l-.913-.9a4.78 4.78 0 0 0-6.7 0 4.635 4.635 0 0 0 0 6.614l.913.9L12 20l6.7-6.614.912-.901A4.646 4.646 0 0 0 21 9.177c0-1.24-.5-2.43-1.388-3.307z"
                stroke="#3E434D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </button>
        <button type="button" class="false undefined">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h24v24H0z"></path>
              <path
                d="M13.58 8.88V5.52A2.52 2.52 0 0 0 11.06 3L7.7 10.56v9.24h9.475a1.68 1.68 0 0 0 1.68-1.428l1.16-7.56a1.68 1.68 0 0 0-1.68-1.932H13.58zM7.7 19.8H5.18a1.68 1.68 0 0 1-1.68-1.68v-5.88c0-.928.752-1.68 1.68-1.68H7.7"
                stroke="#3E434D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </button> -->
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
