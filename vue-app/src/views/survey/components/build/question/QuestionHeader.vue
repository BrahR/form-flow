<script setup lang="ts">
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

type Props = {
  subDescription: string;
};

defineProps<Props>();

const useQuestionToggles = useQuestionTogglesStore();
const { label, description } = useQuestionToggles;
const { required, hideQuestionNumber } = storeToRefs(useQuestionToggles);
</script>

<template>
  <div class="questionIntro_question_intro_wrapper">
    <div class="questionIntro_question_intro_title">
      <div class="questionIntro_question_intro_title_text_wrapper">
        <div class="questionIntro_question_number_wrapper">
          <span
            v-if="required"
            class="questionIntro_ltr questionIntro_answer_required_icon"
          >
            *
          </span>
          <template v-if="!hideQuestionNumber">
            <span class="questionIntro_question_number">1</span>
            <div
              class="questionIntro_question_number_indicator_icon questionIntro_ltr"
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
          </template>
        </div>
        <span
          class="questionIntro_question_intro_title_text"
          v-html="label.model"
        ></span>
      </div>
    </div>
    <p
      v-if="description.on && description.model"
      class="questionIntro_question_intro_description"
      v-html="description.model"
    ></p>
    <p class="questionIntro_question_intro_description">
      {{ subDescription }}
    </p>
  </div>
</template>

<style scoped>
.questionIntro_question_intro_wrapper p {
  margin: 0;
  word-break: break-word;
  white-space: pre-line;
  color: var(--preview-theme-question-color);
}

.questionIntro_question_intro_wrapper
  .questionIntro_question_intro_description {
  padding-top: 1.23em;
  font-size: 0.8125em;
  color: var(--preview-theme-answer-color);
}

.buildChoice_input_wrapper.buildChoice_hidden {
  opacity: 0.7;
}

.questionIntro_question_intro_wrapper {
  padding: 0 0 1em;
  transition: 0.4s;
}

.questionIntro_question_intro_wrapper .questionIntro_question_intro_title {
  font-size: 1.25em;
  word-break: break-word;
  white-space: pre-line;
}

.questionIntro_question_intro_title_text_wrapper {
  display: flex;
  font-size: 1.25em;
  word-break: break-word;
  white-space: pre-line;
}

.questionIntro_question_number_wrapper {
  display: flex;
  color: var(--preview-theme-question-color);
}

.questionIntro_question_number {
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

.questionIntro_question_intro_wrapper p {
  text-align: start;
  margin: 0;
  word-break: break-word;
  white-space: pre-line;
  color: var(--preview-theme-question-color);
}

.questionIntro_question_intro_wrapper
  .questionIntro_question_intro_description {
  text-align: start;
  padding-top: 0.25em;
  font-size: 1em;
  word-break: break-word;
  white-space: pre-line;
  display: block;
}

.questionIntro_answer_required_icon {
  /* color: var(--preview-theme-button-color);*/
  color: red;
  margin-right: -0.563rem;
  vertical-align: super;
}

.questionIntro_answer_required_icon.questionIntro_ltr {
  margin-right: 0;
  margin-left: -0.563rem;
}

.questionIntro_question_intro_wrapper p {
  margin: 0;
  word-break: break-word;
  white-space: pre-line;
  color: var(--preview-theme-question-color);
}

.questionIntro_question_intro_wrapper
  .questionIntro_question_intro_description {
  padding-top: 0.25em;
  font-size: 1em;
  word-break: break-word;
  white-space: pre-line;
  display: block;
}
</style>
