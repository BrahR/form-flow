<script setup lang="ts">
import { useQuestionStore } from "@/store/question.ts";

const useQuestion = useQuestionStore();
</script>

<template>
  <div
    class="preview_multiplechoice_question_wrapper__RatfO preview_ltr__Yc2N7"
    style="opacity: 1"
  >
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
        {{ useQuestion.getMultipleAnswersText }}
      </p>
    </div>

    <div
      :class="{ 'flex-col': useQuestion.getVerticalDisplay.on }"
      class="preview_multiplechoice_question_choices_wrapper__9pZyU preview_ltr__Yc2N7"
    >
      <template v-for="(choice, index) in useQuestion.getChoices" :key="index">
        <div
          v-if="choice.value && !choice.hidden"
          :class="{ preview_selected_choice__fQxbn: choice.selected }"
          class="preview_multichoice_item__im8xB preview_ltr__Yc2N7"
        >
          <div class="preview_question_number_and_label_wrapper__Bj0ev">
            <div>
              <p class="preview_question_number__VUiY4 preview_ltr__Yc2N7">
                {{ index + 1 }}
              </p>
            </div>
            <div class="preview_choice_label__41CYt">{{ choice.value }}</div>
          </div>
          <div class="preview_selected_choice_icon_wrapper__7VOl3">
            <div v-if="choice.selected" class="preview_selected_choice__fQxbn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <g>
                    <path d="M0 0H24V24H0z"></path>
                    <path
                      fill="#5A5E66"
                      fill-rule="nonzero"
                      d="M20.7 7.7l-11 11c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L9 16.6 19.3 6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="preview_multi_choice_error_wrapper__iXsW3"></div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}

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

.preview_multiplechoice_question_wrapper__RatfO {
  padding: 1rem 0;
}

.preview_multiplechoice_question_wrapper__RatfO.preview_ltr__Yc2N7 {
  direction: ltr !important;
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multiplechoice_question_choices_wrapper__9pZyU {
  padding-bottom: 1.5rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multiplechoice_question_choices_wrapper__9pZyU
  .preview_multichoice_item__im8xB {
  height: 100%;
  all: unset;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: flex-start;
  border-radius: 0.5rem;
  padding: 0.3125rem 0.25rem 0.25rem;
  border: 0.0625rem solid;
  min-height: 1.8125rem;
  color: var(--preview-theme-answer-color);
  -webkit-text-fill-color: var(--preview-theme-answer-color);
  background-color: var(--preview-theme-answer-color-lightest);
  transition: all 0.1s ease-in-out;
  min-width: 200px;
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multiplechoice_question_choices_wrapper__9pZyU
  .preview_multichoice_item__im8xB
  p {
  margin: 0;
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multiplechoice_question_choices_wrapper__9pZyU
  .preview_multichoice_item__im8xB
  .preview_question_number_and_label_wrapper__Bj0ev {
  display: flex;
  width: calc(100% - 2.25rem);
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multiplechoice_question_choices_wrapper__9pZyU
  .preview_multichoice_item__im8xB
  .preview_question_number_and_label_wrapper__Bj0ev
  .preview_choice_label__41CYt {
  margin: 0;
  font-size: 1.0625em;
  overflow-wrap: anywhere;
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multiplechoice_question_choices_wrapper__9pZyU
  .preview_multichoice_item__im8xB
  .preview_question_number_and_label_wrapper__Bj0ev
  .preview_question_number__VUiY4 {
  height: 1.75rem;
  min-width: 1.75rem;
  font-size: 1em;
  margin-left: 0.5rem;
  border-radius: 0.25rem;
  background-color: var(--preview-theme-answer-color);
  color: var(--preview-theme-answer-color-contrast);
  -webkit-text-fill-color: var(--preview-theme-answer-color-contrast);
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multiplechoice_question_choices_wrapper__9pZyU
  .preview_multichoice_item__im8xB
  .preview_question_number_and_label_wrapper__Bj0ev
  .preview_question_number__VUiY4.preview_ltr__Yc2N7 {
  margin-left: 0;
  margin-right: 0.5rem;
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multiplechoice_question_choices_wrapper__9pZyU
  .preview_multichoice_item__im8xB
  .preview_selected_choice_icon_wrapper__7VOl3 {
  width: 2rem;
  margin-right: 0.5rem;
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multiplechoice_question_choices_wrapper__9pZyU
  .preview_multichoice_item__im8xB.preview_ltr__Yc2N7 {
  padding: 0.3125rem 0.25rem 0.25rem;
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multiplechoice_question_choices_wrapper__9pZyU
  .preview_multichoice_item__im8xB.preview_ltr__Yc2N7
  .preview_selected_choice_icon_wrapper__7VOl3 {
  margin-left: 0.5rem;
  margin-right: 0;
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multiplechoice_question_choices_wrapper__9pZyU
  .preview_multichoice_item__im8xB:hover {
  cursor: pointer;
  border-color: var(--preview-theme-accent-color);
  box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multi_choice_error_wrapper__iXsW3 {
  height: 1.75rem;
}

@media (max-width: 1024px) {
  .preview_multiplechoice_question_wrapper__RatfO
    .preview_multiplechoice_question_choices_wrapper__9pZyU
    .preview_multichoice_item__im8xB:hover {
    cursor: pointer;
    border-color: var(--preview-theme-accent-color);
    box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
  }
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multiplechoice_question_choices_wrapper__9pZyU
  .preview_multichoice_item__im8xB
  .preview_selected_choice_icon_wrapper__7VOl3
  .preview_selected_choice__fQxbn {
  padding-top: 0;
  height: 1.75rem;
  min-width: 1.75rem;
  font-size: 1em;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--preview-theme-accent-color);
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multiplechoice_question_choices_wrapper__9pZyU
  .preview_multichoice_item__im8xB
  .preview_selected_choice_icon_wrapper__7VOl3
  .preview_selected_choice__fQxbn
  svg
  path:last-child {
  fill: var(--preview-theme-accent-color-contrast);
}

.preview_multiplechoice_question_wrapper__RatfO
  .preview_multiplechoice_question_choices_wrapper__9pZyU
  .preview_multichoice_item__im8xB.preview_selected_choice__fQxbn {
  border-color: var(--preview-theme-accent-color);
  box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
  background-color: transparent;
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
