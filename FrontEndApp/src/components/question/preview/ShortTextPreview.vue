<script setup lang="ts">
import { useQuestionStore } from "@/store/question.ts";

const useQuestion = useQuestionStore();
</script>

<template>
  <div
    class="textQuestion_text_question_wrapper__WmtqL textQuestion_ltr__E3pny false"
  >
    <div class="questionIntro_question_intro_wrapper__93qE0">
      <div class="questionIntro_question_intro_title__soL_1">
        <div
          v-if="useQuestion.getLabel"
          class="questionIntro_question_intro_title_text_wrapper__FjDMC"
        >
          <span
            v-if="useQuestion.getRequired"
            class="questionIntro_ltr__PbYmc questionIntro_answer_required_icon__xsNa1"
          >
            *
          </span>
          <div class="questionIntro_question_number_wrapper__4lzy7">
            <span class="questionIntro_question_number___M7ip">1</span>
            <div
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
            v-html="useQuestion.getLabel"
          >
          </span>
        </div>
      </div>
      <p
        v-if="useQuestion.getDescribed.on && useQuestion.getDesc"
        v-html="useQuestion.getDesc"
        class="questionIntro_question_intro_description__J0fpU"
      ></p>
    </div>
    <!-- <span class="textQuestion_hotkey_wrapper__lceii">
      <input
        inputmode="text"
        class="textQuestion_not_empty__sFAKu false textQuestion_hasError__19d2Q"
        value="dsadasdasdsadasdasdd"
      />
    </span>
    <div
      class="textQuestion_continue_button_wrapper__PBEZm textQuestion_text_question_error__Vp6AE"
    >
      <div class="textQuestion_question_error__W6xqr">
        You can type between 35 and 100 characters.
      </div>
    </div> -->
    <component
      :is="{ ...useQuestion.getAnswerFormat.selected.input }"
    ></component>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
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
  .questionIntro_answer_required_icon__xsNa1 {
  color: var(--preview-theme-button-color);
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
.questionIntro_question_intro_wrapper__93qE0
  .questionIntro_question_intro_description__J0fpU {
  padding-top: 0.25em;
  font-size: 1em;
  word-break: break-word;
  white-space: pre-line;
  display: block;
}
.sharedIndex_content__3SCeJ
  .sharedIndex_preview__HrJbC
  .sharedIndex_question__ROyXE {
  position: absolute;
  padding: 2rem 4rem;
  box-sizing: border-box;
  width: calc(100% - 8rem);
  overflow-y: auto;
  max-height: calc(100% - 4rem);
  scrollbar-width: none;
  font-family: var(--preview-theme-font-family) !important;
  font-size: var(--preview-theme-font-size) !important;
  direction: rtl;
}
.sharedIndex_content__3SCeJ
  .sharedIndex_preview__HrJbC
  .sharedIndex_question__ROyXE::-webkit-scrollbar {
  width: 0;
}
.textQuestion_text_question_wrapper__WmtqL {
  padding: 1rem 0;
}
.textQuestion_text_question_wrapper__WmtqL.textQuestion_ltr__E3pny {
  direction: ltr !important;
}
.textQuestion_text_question_wrapper__WmtqL .textQuestion_hotkey_wrapper__lceii {
  position: relative;
  display: inline-flex;
}
.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_hotkey_wrapper__lceii:focus {
  outline: none;
}
.textQuestion_text_question_wrapper__WmtqL input {
  all: unset;
  width: 23.375rem;
  height: 1.875rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  color: var(--preview-theme-answer-color);
  -webkit-text-fill-color: var(--preview-theme-answer-color);
  border: 0.0625rem solid var(--preview-theme-answer-color);
  background-color: var(--preview-theme-answer-color-lightest);
  transition: all 0.1s ease-in-out;
  caret-color: var(--preview-theme-answer-color);
}
.textQuestion_text_question_wrapper__WmtqL input:focus {
  background-color: transparent;
}
.textQuestion_text_question_wrapper__WmtqL input:focus,
.textQuestion_text_question_wrapper__WmtqL input:hover {
  box-shadow: inset 0 0 0 0.125rem var(--preview-theme-accent-color);
  border-color: var(--preview-theme-accent-color);
}
.textQuestion_text_question_wrapper__WmtqL input::placeholder {
  color: var(--preview-theme-answer-color-light);
  -webkit-text-fill-color: var(--preview-theme-answer-color-light);
}
.textQuestion_text_question_wrapper__WmtqL input.textQuestion_not_empty__sFAKu {
  background-color: transparent;
}
.textQuestion_text_question_wrapper__WmtqL input.textQuestion_hasError__19d2Q {
  border-color: #d9426e;
  animation: textQuestion_shake__k4nDZ 0.4s linear 1;
}
.textQuestion_text_question_wrapper__WmtqL
  input.textQuestion_hasError__19d2Q:hover {
  box-shadow: inset 0 0 0 0.125rem #d9426e;
  background-color: var(--preview-theme-answer-color-lightest);
}
.textQuestion_text_question_wrapper__WmtqL
  input.textQuestion_hasError__19d2Q:focus {
  box-shadow: inset 0 0 0 0.125rem #d9426e;
}
/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/f419cc97160b5e33.css */
body :focus-visible {
  outline: none;
}
/*! CSS Used from: Embedded */
.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_continue_button_wrapper__PBEZm {
  height: 2.5rem;
  margin-top: 1.5rem;
}
.textQuestion_text_question_wrapper__WmtqL
  .textQuestion_continue_button_wrapper__PBEZm.textQuestion_text_question_error__Vp6AE {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
.textQuestion_question_error__W6xqr {
  font-size: 0.8125rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25em;
  min-height: 1.125rem;
  background-color: #d9426e;
  color: #fff;
  display: table;
  line-height: 1.25rem !important;
  animation: textQuestion_fade__ZYVn3 0.3s linear 1;
}
/*! CSS Used keyframes */
@keyframes textQuestion_fade__ZYVn3 {
  0% {
    -webkit-opacity: 0;
  }
  to {
    -webkit-opacity: 1;
  }
}
@media (max-width: 1024px) {
  .textQuestion_text_question_wrapper__WmtqL input {
    width: 16.8125rem;
  }
}
/*! CSS Used keyframes */
@keyframes textQuestion_shake__k4nDZ {
  0% {
    -webkit-transform: translate(15px);
  }
  20% {
    -webkit-transform: translate(-15px);
  }
  40% {
    -webkit-transform: translate(7px);
  }
  60% {
    -webkit-transform: translate(-7px);
  }
  80% {
    -webkit-transform: translate(4px);
  }
  to {
    -webkit-transform: translate(0);
  }
}
</style>
