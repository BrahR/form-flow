<script setup lang="ts">
import { inject } from "vue";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;

defineProps<{
  description: string;
}>();
</script>

<template>
  <div class="questionIntro_question_intro_wrapper__93qE0">
    <div class="questionIntro_question_intro_title__soL_1">
      <div class="questionIntro_question_intro_title_text_wrapper__FjDMC">
        <div class="questionIntro_question_number_wrapper__4lzy7">
          <span
            v-if="useQuestion.getRequired.on"
            class="questionIntro_ltr__PbYmc questionIntro_answer_required_icon__xsNa1"
            >*</span
          >
          <span
            v-if="!useQuestion.getHideQuestionNumber.on"
            class="questionIntro_question_number___M7ip"
            >1</span
          >
          <div
            v-if="!useQuestion.getHideQuestionNumber.on"
            class="questionIntro_question_number_indicator_icon__SdB_o questionIntro_ltr__PbYmc"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="2"
              viewBox="0 0 8 2"
            >
              <g fill="none" fill-rule="evenodd">
                <g fill="#FFF">
                  <path
                    d="M848 133H856V135H848z"
                    transform="translate(-848.000000, -133.000000)"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <span
          class="questionIntro_question_intro_title_text__YurZo"
          v-html="useQuestion.getLabelModel"
        ></span>
      </div>
    </div>
    <p
      v-if="useQuestion.getDescribed.on && useQuestion.getDescModel"
      class="questionIntro_question_intro_description__J0fpU"
      v-html="useQuestion.getDescModel"
    ></p>
    <p class="questionIntro_question_intro_porsline_description__ZEPzQ">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.questionIntro_question_intro_wrapper__93qE0 p {
  margin: 0;
  word-break: break-word;
  white-space: pre-line;
  color: var(--preview-theme-question-color);
}

.questionIntro_question_intro_wrapper__93qE0
  .questionIntro_question_intro_porsline_description__ZEPzQ {
  padding-top: 1.23em;
  font-size: 0.8125em;
  color: var(--preview-theme-answer-color);
}

.buildChoice_input_wrapper__j2HKG.buildChoice_hidden__ITdK4 {
  opacity: 0.7;
}

.questionIntro_question_intro_wrapper__93qE0 {
  padding: 0 0 1em;
  transition: 0.4s;
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
  font-size: 1.25em;
  word-break: break-word;
  white-space: pre-line;
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

.questionIntro_question_intro_wrapper__93qE0 p {
  text-align: start;
  margin: 0;
  word-break: break-word;
  white-space: pre-line;
  color: var(--preview-theme-question-color);
}

.questionIntro_question_intro_wrapper__93qE0
  .questionIntro_question_intro_description__J0fpU {
  text-align: start;

  padding-top: 0.25em;
  font-size: 1em;
  word-break: break-word;
  white-space: pre-line;
  display: block;
}

/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/2a2e4efde05c354a.css */
.questionIntro_question_intro_wrapper__93qE0
  .questionIntro_question_intro_title__soL_1
  .questionIntro_question_intro_title_text_wrapper__FjDMC
  .questionIntro_answer_required_icon__xsNa1 {
  /* color: var(--preview-theme-button-color);*/
  color: red;
  margin-right: -0.563rem;
  vertical-align: super;
}

.questionIntro_question_intro_wrapper__93qE0
  .questionIntro_question_intro_title__soL_1
  .questionIntro_question_intro_title_text_wrapper__FjDMC
  .questionIntro_answer_required_icon__xsNa1.questionIntro_ltr__PbYmc {
  margin-right: 0;
  margin-left: -0.563rem;
}

.questionIntro_question_intro_wrapper__93qE0 p {
  margin: 0;
  word-break: break-word;
  white-space: pre-line;
  color: var(--preview-theme-question-color);
}

.questionIntro_question_intro_wrapper__93qE0
  .questionIntro_question_intro_description__J0fpU {
  padding-top: 0.25em;
  font-size: 1em;
  word-break: break-word;
  white-space: pre-line;
  display: block;
}
</style>
