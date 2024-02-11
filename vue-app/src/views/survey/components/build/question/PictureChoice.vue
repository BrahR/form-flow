<script setup lang="ts">
import QuestionHeader from "@/views/survey/components/build/question/QuestionHeader.vue";
import { computed } from "vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { pictureChoices, multipleAnswersText, doublePictureSize, hiddenLabel } =
  storeToRefs(useQuestionToggles);

const shownChoices = computed(() => {
  return pictureChoices.value.filter((choice) => {
    if (!choice.hidden) {
      return choice;
    }
    return;
  });
});
</script>

<template>
  <div
    class="picturechoice_picturechoice_question_wrapper false picturechoice_ltr"
  >
    <QuestionHeader :sub-description="multipleAnswersText" />

    <div
      v-if="pictureChoices.length > 0"
      class="picturechoice_picturechoice_question_choices_wrapper false"
      :class="{
        picturechoice_picturechoice_double_sized: doublePictureSize,
      }"
    >
      <div
        role="presentation"
        class="picturechoice_picturechoice_choice picturechoice_fade false false"
        v-for="(choice, index) in shownChoices"
        :key="index"
        :tabindex="index"
        :class="{
          picturechoice_selected_choice: choice.checked,
        }"
        @click="choice.checked = !choice.checked"
      >
        <div class="picturechoice_picturechoice_image_wrapper">
          <img :src="choice.image" alt="" />
        </div>
        <div v-if="!hiddenLabel" class="picturechoice_choice_detail_wrapper">
          <div class="picturechoice_choice_detail">
            <div class="picturechoice_question_number picturechoice_ltr">
              {{ index + 1 }}
            </div>
            <p>{{ choice.value }}</p>
          </div>
        </div>
        <div
          v-if="choice.checked"
          class="picturechoice_selected_choice_icon_wrapper picturechoice_ltr"
        >
          <div class="picturechoice_selected_choice">
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
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}

.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, 10.6875rem);
  grid-gap: 0.75rem;
  padding-bottom: 1.5rem;
}

.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper.picturechoice_picturechoice_double_sized
  .picturechoice_picturechoice_choice
  .picturechoice_picturechoice_image_wrapper {
  height: 15.375rem;
}

.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper.picturechoice_picturechoice_double_sized {
  grid-template-columns: repeat(auto-fit, 20rem);
}
@media (max-width: 1024px) {
  .picturechoice_picturechoice_question_wrapper
    .picturechoice_picturechoice_question_choices_wrapper {
    grid-template-columns: repeat(auto-fit, calc(50% - 0.375rem));
  }
  .picturechoice_picturechoice_question_wrapper
    .picturechoice_picturechoice_question_choices_wrapper.picturechoice_picturechoice_double_sized {
    grid-gap: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
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
.picturechoice_picturechoice_question_wrapper {
  padding: 1rem 0;
}
.picturechoice_picturechoice_question_wrapper.picturechoice_ltr {
  direction: ltr !important;
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, 10.6875rem);
  grid-gap: 0.75rem;
  padding-bottom: 1.5rem;
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice {
  outline: none;
  padding: 0.5rem;
  border: 0.0625rem solid var(--preview-theme-answer-color-lighter);
  border-radius: 0.25rem;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  background-color: var(--preview-theme-answer-color-lightest);
  position: relative;
  height: calc(100% - 1.25rem);
  transition: all 0.1s ease-in-out;
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice
  .picturechoice_picturechoice_image_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9.125rem;
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice
  .picturechoice_picturechoice_image_wrapper
  img {
  max-width: 100%;
  border-radius: 0.25rem;
  max-height: 100%;
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice
  .picturechoice_choice_detail_wrapper {
  display: flex;
  color: var(--preview-theme-answer-color);
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice
  .picturechoice_choice_detail_wrapper
  .picturechoice_choice_detail {
  padding-top: 0.5rem;
  display: flex;
  font-weight: bold;
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice
  .picturechoice_choice_detail_wrapper
  .picturechoice_choice_detail
  p {
  margin: 0;
  overflow-wrap: anywhere;
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice
  .picturechoice_choice_detail_wrapper
  .picturechoice_choice_detail
  .picturechoice_question_number {
  font-size: 0.875rem;
  height: 1.75rem;
  min-width: 1.75rem;
  margin-left: 0.5rem;
  border-radius: 0.25rem;
  background-color: var(--preview-theme-answer-color);
  color: var(--preview-theme-answer-color-contrast);
  display: flex;
  justify-content: center;
  align-items: center;
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice
  .picturechoice_choice_detail_wrapper
  .picturechoice_choice_detail
  .picturechoice_question_number.picturechoice_ltr {
  margin-left: 0;
  margin-right: 0.5rem;
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice
  .picturechoice_selected_choice_icon_wrapper {
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice
  .picturechoice_selected_choice_icon_wrapper.picturechoice_ltr {
  right: 0.5rem;
  left: unset;
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice
  .picturechoice_selected_choice_icon_wrapper
  .picturechoice_selected_choice {
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
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice
  .picturechoice_selected_choice_icon_wrapper
  .picturechoice_selected_choice
  svg
  path:last-child {
  fill: var(--preview-theme-accent-color-contrast);
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice.picturechoice_selected_choice {
  box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
  border-color: var(--preview-theme-accent-color);
  background-color: transparent;
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice.picturechoice_fade {
  animation: picturechoice_fade-choice 0.4s;
}
.picturechoice_picturechoice_question_wrapper
  .picturechoice_picturechoice_question_choices_wrapper
  .picturechoice_picturechoice_choice:hover {
  cursor: pointer;
  border-color: var(--preview-theme-accent-color);
  box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
}
@media (max-width: 1024px) {
  .picturechoice_picturechoice_question_wrapper
    .picturechoice_picturechoice_question_choices_wrapper {
    grid-template-columns: repeat(auto-fit, calc(50% - 0.375rem));
  }
  .picturechoice_picturechoice_question_wrapper
    .picturechoice_picturechoice_question_choices_wrapper
    .picturechoice_picturechoice_choice
    .picturechoice_picturechoice_image_wrapper {
    justify-content: center;
  }
  .picturechoice_picturechoice_question_wrapper
    .picturechoice_picturechoice_question_choices_wrapper
    .picturechoice_picturechoice_choice:hover {
    box-shadow: none;
    border-color: transparent;
  }
  .picturechoice_picturechoice_question_wrapper
    .picturechoice_picturechoice_question_choices_wrapper
    .picturechoice_picturechoice_choice.picturechoice_selected_choice {
    box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
  }
}
/*! CSS Used keyframes */
@keyframes picturechoice_fade-choice {
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
