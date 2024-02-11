<script setup lang="ts">
import QuestionHeader from "@/views/survey/components/build/question/QuestionHeader.vue";
import ThumbsUpIcon from "@/views/survey/components/build/question/rating/ThumbsUpIcon.vue";
import HeartIcon from "@/views/survey/components/build/question/rating/HeartIcon.vue";
import StarIcon from "@/views/survey/components/build/question/rating/StarIcon.vue";
import type { Component, Ref } from "vue";
import { ref } from "vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { rating, ratingParams } = storeToRefs(useQuestionToggles);

const icons: Component[] = [ThumbsUpIcon, HeartIcon, StarIcon];
const hoverIndex: Ref<number | null> = ref(0);

const isFilled = (val: number) => {
  return (
    (hoverIndex.value !== null && val <= hoverIndex.value) ||
    (hoverIndex.value === null && val <= rating.value.model)
  );
};
</script>

<template>
  <div class="rating_main_wrapper false rating_ltr">
    <QuestionHeader :sub-description="''" />

    <div class="rating_ltr rating_rating_question_icons_wrapper">
      <div
        class="rating_icons_wrapper"
        v-for="(i, key) in ratingParams.value"
        :key="key"
        @click="rating.model = i"
        @mouseover="hoverIndex = i"
        @mouseleave="hoverIndex = null"
      >
        <div
          class="rating_ltr rating_icon"
          :class="[isFilled(i) ? 'rating_is_filled' : 'rating_is_not_filled']"
        >
          <component class="icon" :is="{ ...icons[rating.type ?? 0] }" />
        </div>
        <div class="rating_icon_number">
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.rating_icon svg g {
  fill: transparent;
  transition: all 0.1s ease-in-out;
}
.rating_icon svg g path {
  transition: all 0.1s ease-in-out;
}
.rating_icon svg g:hover {
  cursor: pointer;
}
.rating_icon.rating_is_filled svg g {
  fill: var(--preview-theme-accent-color);
}
.rating_icon.rating_is_filled svg g path {
  stroke: var(--preview-theme-accent-color);
}
.rating_icon.rating_is_not_filled svg g {
  fill: transparent;
}
.rating_icon.rating_is_not_filled svg g path {
  stroke: var(--preview-theme-answer-color);
}
</style>

<style scoped>
.opinionScaleQuestion_main_wrapper.opinionScaleQuestion_ltr {
  direction: ltr !important;
}
.questionIntro_question_intro_wrapper {
  padding: 0 0 1em;
  transition: 0.4s;
}
.questionIntro_question_intro_wrapper p {
  margin: 0;
  word-break: break-word;
  white-space: pre-line;
  color: var(--preview-theme-question-color);
}
.questionIntro_question_intro_wrapper .questionIntro_question_intro_title {
  font-size: 1.25em;
  word-break: break-word;
  white-space: pre-line;
}
.questionIntro_question_intro_wrapper
  .questionIntro_question_intro_title
  .questionIntro_question_intro_title_text_wrapper {
  display: flex;
}
.questionIntro_question_intro_wrapper
  .questionIntro_question_intro_title
  .questionIntro_question_intro_title_text_wrapper
  .questionIntro_question_number_wrapper {
  display: flex;
  color: var(--preview-theme-question-color);
}
.questionIntro_question_intro_wrapper
  .questionIntro_question_intro_title
  .questionIntro_question_intro_title_text_wrapper
  .questionIntro_question_number_wrapper
  .questionIntro_question_number {
  word-break: normal;
}
.questionIntro_question_intro_wrapper
  .questionIntro_question_intro_title
  .questionIntro_question_intro_title_text_wrapper
  .questionIntro_question_number_wrapper
  .questionIntro_question_number_indicator_icon {
  display: flex;
  align-items: center;
  padding: 0 0.125rem 0 0.25rem;
  height: 1.875rem;
}
.questionIntro_question_intro_wrapper
  .questionIntro_question_intro_title
  .questionIntro_question_intro_title_text_wrapper
  .questionIntro_question_number_wrapper
  .questionIntro_question_number_indicator_icon
  svg
  g {
  fill: var(--preview-theme-question-color);
}
.questionIntro_question_intro_wrapper
  .questionIntro_question_intro_title
  .questionIntro_question_intro_title_text_wrapper
  .questionIntro_question_number_wrapper
  .questionIntro_question_number_indicator_icon.questionIntro_ltr {
  padding: 0 0.25rem 0 0.125rem;
}
.questionIntro_question_intro_wrapper
  .questionIntro_question_intro_title
  .questionIntro_question_intro_title_text_wrapper
  .questionIntro_question_intro_title_text {
  color: var(--preview-theme-question-color);
}
.rating_main_wrapper.rating_ltr {
  direction: ltr !important;
}
.rating_rating_question_icons_wrapper {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}
.rating_rating_question_icons_wrapper.rating_ltr {
  flex-direction: row;
  justify-content: flex-start;
}
.rating_icons_wrapper {
  display: flex;
  flex-direction: column;
}
.rating_icons_wrapper .rating_icon_number {
  text-align: center;
  width: 3rem;
  font-size: 0.8125rem;
  color: var(--preview-theme-answer-color);
}
.rating_icons_wrapper .rating_icon {
  padding-left: 0.25rem;
  width: 3rem;
}
.rating_icons_wrapper .rating_icon.rating_fade {
  animation: rating_fade-choice 0.4s;
}
.rating_icons_wrapper .rating_icon.rating_ltr {
  padding-left: 0;
  padding-right: 0.25rem;
}
@media (max-width: 1024px) {
  .rating_icons_wrapper .rating_icon {
    width: 1.375rem;
    padding-left: 0.125rem;
  }
  .rating_icons_wrapper .rating_icon_number {
    text-align: center;
    height: 1.438rem;
    width: 1.375rem;
    font-size: 0.8125rem;
    color: var(--preview-theme-answer-color);
  }
}
@keyframes rating_fade-choice {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
