<script setup lang="ts">
import QuestionHeader from "@/views/survey/components/build/question/QuestionHeader.vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";

const useQuestionToggles = useQuestionTogglesStore();
</script>

<template>
  <div class="textQuestion_text_question_wrapper textQuestion_ltr false">
    <QuestionHeader sub-description="" />
    <component
      :is="{ ...useQuestionToggles.textAnswerFormat.selected.input }"
    ></component>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
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
.questionIntro_question_intro_title_ {
  font-size: 1.25em;
  word-break: break-word;
  white-space: pre-line;
}
.questionIntro_question_intro_title_text_wrapper {
  display: flex;
}

.questionIntro_answer_required_icon__xsNa1 {
  color: var(--preview-theme-button-color);
  margin-right: -0.563rem;
  vertical-align: super;
}

.questionIntro_answer_required_icon__xsNa1.questionIntro_ltr {
  margin-right: 0;
  margin-left: -0.563rem;
}

.questionIntro_question_number_wrapper_ {
  display: flex;
  color: var(--preview-theme-question-color);
}

.questionIntro_question_number___M7ip {
  word-break: normal;
}

.questionIntro_question_number_indicator_icon {
  display: flex;
  align-items: center;
  padding: 0 0.125rem 0 0.25rem;
  height: 1.875rem;
}

.questionIntro_question_number_indicator_icon svg g {
  fill: var(--preview-theme-question-color);
}

.questionIntro_question_number_indicator_icon.questionIntro_ltr {
  padding: 0 0.25rem 0 0.125rem;
}

.questionIntro_question_intro_title_text {
  color: var(--preview-theme-question-color);
}
.questionIntro_question_intro_description {
  padding-top: 0.25em;
  font-size: 1em;
  word-break: break-word;
  white-space: pre-line;
  display: block;
}

.sharedIndex_question {
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

.sharedIndex_question::-webkit-scrollbar {
  width: 0;
}
.textQuestion_text_question_wrapper {
  padding: 1rem 0;
}
.textQuestion_text_question_wrapper.textQuestion_ltr {
  direction: ltr !important;
}
.textQuestion_text_question_wrapper .textQuestion_hotkey_wrapper {
  position: relative;
  display: inline-flex;
}
.textQuestion_text_question_wrapper .textQuestion_hotkey_wrapper:focus {
  outline: none;
}
.textQuestion_text_question_wrapper input {
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
.textQuestion_text_question_wrapper input:focus {
  background-color: transparent;
}
.textQuestion_text_question_wrapper input:focus,
.textQuestion_text_question_wrapper input:hover {
  box-shadow: inset 0 0 0 0.125rem var(--preview-theme-accent-color);
  border-color: var(--preview-theme-accent-color);
}
.textQuestion_text_question_wrapper input::placeholder {
  color: var(--preview-theme-answer-color-light);
  -webkit-text-fill-color: var(--preview-theme-answer-color-light);
}
.textQuestion_text_question_wrapper input.textQuestion_not_empty {
  background-color: transparent;
}
.textQuestion_text_question_wrapper input.textQuestion_hasError {
  border-color: #d9426e;
  animation: textQuestion_shake 0.4s linear 1;
}
.textQuestion_text_question_wrapper input.textQuestion_hasError:hover {
  box-shadow: inset 0 0 0 0.125rem #d9426e;
  background-color: var(--preview-theme-answer-color-lightest);
}
.textQuestion_text_question_wrapper input.textQuestion_hasError:focus {
  box-shadow: inset 0 0 0 0.125rem #d9426e;
}
.textQuestion_text_question_wrapper .textQuestion_continue_button_wrapper {
  height: 2.5rem;
  margin-top: 1.5rem;
}
.textQuestion_text_question_wrapper
  .textQuestion_continue_button_wrapper.textQuestion_text_question_error {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
.textQuestion_question_error {
  font-size: 0.8125rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25em;
  min-height: 1.125rem;
  background-color: #d9426e;
  color: #fff;
  display: table;
  line-height: 1.25rem !important;
  animation: textQuestion_fade 0.3s linear 1;
}
/*! CSS Used keyframes */
@keyframes textQuestion_fade {
  0% {
    -webkit-opacity: 0;
  }
  to {
    -webkit-opacity: 1;
  }
}
@media (max-width: 1024px) {
  .textQuestion_text_question_wrapper input {
    width: 16.8125rem;
  }
}
/*! CSS Used keyframes */
@keyframes textQuestion_shake {
  0% {
    transform: translate(15px);
  }
  20% {
    transform: translate(-15px);
  }
  40% {
    transform: translate(7px);
  }
  60% {
    transform: translate(-7px);
  }
  80% {
    transform: translate(4px);
  }
  to {
    transform: translate(0);
  }
}
</style>
