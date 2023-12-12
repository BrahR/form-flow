<script setup lang="ts">
import QuestionHeader from "@/components/question/preview/QuestionHeader.vue";
import HeartIcon from "@/components/question/preview/rating_icons/HeartIcon.vue";
import StarIcon from "@/components/question/preview/rating_icons/StarIcon.vue";
import ThumbsUpIcon from "@/components/question/preview/rating_icons/ThumbsUpIcon.vue";

import { inject } from "vue";
import type { Component } from "vue";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;
const icons: Component[] = [ThumbsUpIcon, HeartIcon, StarIcon];
</script>

<template>
  <div class="rating_main_wrapper__o80ga false rating_ltr__B9SPT">
    <QuestionHeader :description="''" />

    <div class="rating_ltr__B9SPT rating_rating_question_icons_wrapper__72r9H">
      <div
        class="rating_icons_wrapper__uFEsr"
        v-for="(i, key) in useQuestion.getScaleParameters.value"
        :key="key"
      >
        <div
          class="rating_is_not_filled__1t6lf rating_ltr__B9SPT rating_icon__IrWZ1"
        >
          <!-- style="width: 34.1px" -->
          <component :is="{ ...icons[useQuestion.getRatingType] }" />
        </div>
        <div class="rating_icon_number__DCbs1">
          <!-- style="width: 34.1px" -->
          {{ i }}
        </div>
      </div>

      <!--<div class="rating_ltr__B9SPT rating_rating_question_icons_wrapper__72r9H">
      <div class="rating_icons_wrapper__uFEsr">
        <div
          class="rating_is_filled__d2qfO rating_ltr__B9SPT rating_icon__IrWZ1 rating_fade__vUYCl"
          style="width: 34.1px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <g fill-rule="evenodd">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M39.224 11.74C37.448 9.987 35.038 9 32.524 9c-2.512 0-4.922.986-6.699 2.74L24 13.544l-1.826-1.802c-3.7-3.653-9.699-3.653-13.399 0-3.7 3.653-3.7 9.575 0 13.228l1.826 1.802L24 40l13.398-13.229 1.826-1.802C41.001 23.215 42 20.836 42 18.355s-.999-4.86-2.776-6.614z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="rating_icon_number__DCbs1" style="width: 34.1px">1</div>
      </div>
       <div class="rating_icons_wrapper__uFEsr">
        <div
          class="rating_is_not_filled__1t6lf rating_ltr__B9SPT rating_icon__IrWZ1 false"
          style="width: 34.1px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <g fill-rule="evenodd">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M39.224 11.74C37.448 9.987 35.038 9 32.524 9c-2.512 0-4.922.986-6.699 2.74L24 13.544l-1.826-1.802c-3.7-3.653-9.699-3.653-13.399 0-3.7 3.653-3.7 9.575 0 13.228l1.826 1.802L24 40l13.398-13.229 1.826-1.802C41.001 23.215 42 20.836 42 18.355s-.999-4.86-2.776-6.614z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="rating_icon_number__DCbs1" style="width: 34.1px">2</div>
      </div>
      <div class="rating_icons_wrapper__uFEsr">
        <div
          class="rating_is_not_filled__1t6lf rating_ltr__B9SPT rating_icon__IrWZ1 false"
          style="width: 34.1px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <g fill-rule="evenodd">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M39.224 11.74C37.448 9.987 35.038 9 32.524 9c-2.512 0-4.922.986-6.699 2.74L24 13.544l-1.826-1.802c-3.7-3.653-9.699-3.653-13.399 0-3.7 3.653-3.7 9.575 0 13.228l1.826 1.802L24 40l13.398-13.229 1.826-1.802C41.001 23.215 42 20.836 42 18.355s-.999-4.86-2.776-6.614z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="rating_icon_number__DCbs1" style="width: 34.1px">3</div>
      </div>
      <div class="rating_icons_wrapper__uFEsr">
        <div
          class="rating_is_not_filled__1t6lf rating_ltr__B9SPT rating_icon__IrWZ1 false"
          style="width: 34.1px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <g fill-rule="evenodd">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M39.224 11.74C37.448 9.987 35.038 9 32.524 9c-2.512 0-4.922.986-6.699 2.74L24 13.544l-1.826-1.802c-3.7-3.653-9.699-3.653-13.399 0-3.7 3.653-3.7 9.575 0 13.228l1.826 1.802L24 40l13.398-13.229 1.826-1.802C41.001 23.215 42 20.836 42 18.355s-.999-4.86-2.776-6.614z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="rating_icon_number__DCbs1" style="width: 34.1px">4</div>
      </div>
      <div class="rating_icons_wrapper__uFEsr">
        <div
          class="rating_is_not_filled__1t6lf rating_ltr__B9SPT rating_icon__IrWZ1 false"
          style="width: 34.1px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <g fill-rule="evenodd">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M39.224 11.74C37.448 9.987 35.038 9 32.524 9c-2.512 0-4.922.986-6.699 2.74L24 13.544l-1.826-1.802c-3.7-3.653-9.699-3.653-13.399 0-3.7 3.653-3.7 9.575 0 13.228l1.826 1.802L24 40l13.398-13.229 1.826-1.802C41.001 23.215 42 20.836 42 18.355s-.999-4.86-2.776-6.614z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="rating_icon_number__DCbs1" style="width: 34.1px">5</div>
      </div>
      <div class="rating_icons_wrapper__uFEsr">
        <div
          class="rating_is_not_filled__1t6lf rating_ltr__B9SPT rating_icon__IrWZ1 false"
          style="width: 34.1px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <g fill-rule="evenodd">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M39.224 11.74C37.448 9.987 35.038 9 32.524 9c-2.512 0-4.922.986-6.699 2.74L24 13.544l-1.826-1.802c-3.7-3.653-9.699-3.653-13.399 0-3.7 3.653-3.7 9.575 0 13.228l1.826 1.802L24 40l13.398-13.229 1.826-1.802C41.001 23.215 42 20.836 42 18.355s-.999-4.86-2.776-6.614z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="rating_icon_number__DCbs1" style="width: 34.1px">6</div>
      </div>
      <div class="rating_icons_wrapper__uFEsr">
        <div
          class="rating_is_not_filled__1t6lf rating_ltr__B9SPT rating_icon__IrWZ1 false"
          style="width: 34.1px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <g fill-rule="evenodd">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M39.224 11.74C37.448 9.987 35.038 9 32.524 9c-2.512 0-4.922.986-6.699 2.74L24 13.544l-1.826-1.802c-3.7-3.653-9.699-3.653-13.399 0-3.7 3.653-3.7 9.575 0 13.228l1.826 1.802L24 40l13.398-13.229 1.826-1.802C41.001 23.215 42 20.836 42 18.355s-.999-4.86-2.776-6.614z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="rating_icon_number__DCbs1" style="width: 34.1px">7</div>
      </div>
      <div class="rating_icons_wrapper__uFEsr">
        <div
          class="rating_is_not_filled__1t6lf rating_ltr__B9SPT rating_icon__IrWZ1 false"
          style="width: 34.1px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <g fill-rule="evenodd">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M39.224 11.74C37.448 9.987 35.038 9 32.524 9c-2.512 0-4.922.986-6.699 2.74L24 13.544l-1.826-1.802c-3.7-3.653-9.699-3.653-13.399 0-3.7 3.653-3.7 9.575 0 13.228l1.826 1.802L24 40l13.398-13.229 1.826-1.802C41.001 23.215 42 20.836 42 18.355s-.999-4.86-2.776-6.614z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="rating_icon_number__DCbs1" style="width: 34.1px">8</div>
      </div>
      <div class="rating_icons_wrapper__uFEsr">
        <div
          class="rating_is_not_filled__1t6lf rating_ltr__B9SPT rating_icon__IrWZ1 false"
          style="width: 34.1px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <g fill-rule="evenodd">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M39.224 11.74C37.448 9.987 35.038 9 32.524 9c-2.512 0-4.922.986-6.699 2.74L24 13.544l-1.826-1.802c-3.7-3.653-9.699-3.653-13.399 0-3.7 3.653-3.7 9.575 0 13.228l1.826 1.802L24 40l13.398-13.229 1.826-1.802C41.001 23.215 42 20.836 42 18.355s-.999-4.86-2.776-6.614z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="rating_icon_number__DCbs1" style="width: 34.1px">9</div>
      </div>
      <div class="rating_icons_wrapper__uFEsr">
        <div
          class="rating_is_not_filled__1t6lf rating_ltr__B9SPT rating_icon__IrWZ1 false"
          style="width: 34.1px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <g fill-rule="evenodd">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M39.224 11.74C37.448 9.987 35.038 9 32.524 9c-2.512 0-4.922.986-6.699 2.74L24 13.544l-1.826-1.802c-3.7-3.653-9.699-3.653-13.399 0-3.7 3.653-3.7 9.575 0 13.228l1.826 1.802L24 40l13.398-13.229 1.826-1.802C41.001 23.215 42 20.836 42 18.355s-.999-4.86-2.776-6.614z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="rating_icon_number__DCbs1" style="width: 34.1px">10</div>
      </div> -->
    </div>
  </div>
</template>

<style>
.rating_icons_wrapper__uFEsr .rating_icon__IrWZ1 svg g {
  fill: transparent;
  transition: all 0.1s ease-in-out;
}
.rating_icons_wrapper__uFEsr .rating_icon__IrWZ1 svg g path {
  transition: all 0.1s ease-in-out;
}
.rating_icons_wrapper__uFEsr .rating_icon__IrWZ1 svg g:hover {
  cursor: pointer;
}
.rating_icons_wrapper__uFEsr .rating_icon__IrWZ1.rating_is_filled__d2qfO svg g {
  fill: var(--preview-theme-accent-color);
}
.rating_icons_wrapper__uFEsr
  .rating_icon__IrWZ1.rating_is_filled__d2qfO
  svg
  g
  path {
  stroke: var(--preview-theme-accent-color);
}
.rating_icons_wrapper__uFEsr
  .rating_icon__IrWZ1.rating_is_not_filled__1t6lf
  svg
  g {
  fill: transparent;
}
.rating_icons_wrapper__uFEsr
  .rating_icon__IrWZ1.rating_is_not_filled__1t6lf
  svg
  g
  path {
  stroke: var(--preview-theme-answer-color);
}
</style>

<style scoped>
* {
  box-sizing: content-box;
}
.opinionScaleQuestion_main_wrapper__G02jI.opinionScaleQuestion_ltr__Rt0Kw {
  direction: ltr !important;
}
.questionIntro_question_intro_wrapper__93qE0 {
  padding: 0 0 1em;
  transition: 0.4s;
}
.questionIntro_question_intro_wrapper__93qE0 p {
  margin: 0;
  word-break: break-word;
  white-space: pre-line;
  color: var(--preview-theme-question-color);
}
.questionIntro_question_intro_wrapper__93qE0
  .questionIntro_question_intro_title__soL_1 {
  font-size: 1.25em;
  word-break: break-word;
  white-space: pre-line;
}
.questionIntro_question_intro_wrapper__93qE0
  .questionIntro_question_intro_title__soL_1
  .questionIntro_question_intro_title_text_wrapper__FjDMC {
  display: flex;
}
.questionIntro_question_intro_wrapper__93qE0
  .questionIntro_question_intro_title__soL_1
  .questionIntro_question_intro_title_text_wrapper__FjDMC
  .questionIntro_question_number_wrapper__4lzy7 {
  display: flex;
  color: var(--preview-theme-question-color);
}
.questionIntro_question_intro_wrapper__93qE0
  .questionIntro_question_intro_title__soL_1
  .questionIntro_question_intro_title_text_wrapper__FjDMC
  .questionIntro_question_number_wrapper__4lzy7
  .questionIntro_question_number___M7ip {
  word-break: normal;
}
.questionIntro_question_intro_wrapper__93qE0
  .questionIntro_question_intro_title__soL_1
  .questionIntro_question_intro_title_text_wrapper__FjDMC
  .questionIntro_question_number_wrapper__4lzy7
  .questionIntro_question_number_indicator_icon__SdB_o {
  display: flex;
  align-items: center;
  padding: 0 0.125rem 0 0.25rem;
  height: 1.875rem;
}
.questionIntro_question_intro_wrapper__93qE0
  .questionIntro_question_intro_title__soL_1
  .questionIntro_question_intro_title_text_wrapper__FjDMC
  .questionIntro_question_number_wrapper__4lzy7
  .questionIntro_question_number_indicator_icon__SdB_o
  svg
  g {
  fill: var(--preview-theme-question-color);
}
.questionIntro_question_intro_wrapper__93qE0
  .questionIntro_question_intro_title__soL_1
  .questionIntro_question_intro_title_text_wrapper__FjDMC
  .questionIntro_question_number_wrapper__4lzy7
  .questionIntro_question_number_indicator_icon__SdB_o.questionIntro_ltr__PbYmc {
  padding: 0 0.25rem 0 0.125rem;
}
.questionIntro_question_intro_wrapper__93qE0
  .questionIntro_question_intro_title__soL_1
  .questionIntro_question_intro_title_text_wrapper__FjDMC
  .questionIntro_question_intro_title_text__YurZo {
  color: var(--preview-theme-question-color);
}
.rating_main_wrapper__o80ga.rating_ltr__B9SPT {
  direction: ltr !important;
}
.rating_rating_question_icons_wrapper__72r9H {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}
.rating_rating_question_icons_wrapper__72r9H.rating_ltr__B9SPT {
  flex-direction: row;
  justify-content: flex-start;
}
.rating_icons_wrapper__uFEsr {
  display: flex;
  flex-direction: column;
}
.rating_icons_wrapper__uFEsr .rating_icon_number__DCbs1 {
  text-align: center;
  width: 3rem;
  font-size: 0.8125rem;
  color: var(--preview-theme-answer-color);
}
.rating_icons_wrapper__uFEsr .rating_icon__IrWZ1 {
  padding-left: 0.25rem;
  width: 3rem;
}
.rating_icons_wrapper__uFEsr .rating_icon__IrWZ1.rating_fade__vUYCl {
  animation: rating_fade-choice__W4wB1 0.4s;
}
.rating_icons_wrapper__uFEsr .rating_icon__IrWZ1.rating_ltr__B9SPT {
  padding-left: 0;
  padding-right: 0.25rem;
}
@media (max-width: 1024px) {
  .rating_icons_wrapper__uFEsr .rating_icon__IrWZ1 {
    width: 1.375rem;
    padding-left: 0.125rem;
  }
  .rating_icons_wrapper__uFEsr .rating_icon_number__DCbs1 {
    text-align: center;
    height: 1.438;
    width: 1.375rem;
    font-size: 0.8125rem;
    color: var(--preview-theme-answer-color);
  }
}
/*! CSS Used keyframes */
@keyframes rating_fade-choice__W4wB1 {
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
