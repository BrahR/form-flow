<script setup lang="ts">
import QuestionHeader from "@/components/question/preview/QuestionHeader.vue";
import { inject } from "vue";
import type { QuestionBuilderStore } from "@/store/questionBuilder";

const useQuestionBuilder = inject("question") as QuestionBuilderStore;
import { computed } from "vue";

const shownChoices = computed(() => {
  return useQuestionBuilder.getPictureChoices.filter((choice) => {
    if (choice.hidden) return;
    return choice;
  });
});
</script>

<template>
  <div
    class="picturechoice_picturechoice_question_wrapper__JMyi4 false picturechoice_ltr__zJCqm"
  >
    <QuestionHeader :description="useQuestionBuilder.getMultipleAnswersText" />

    <div
      v-if="useQuestionBuilder.getPictureChoices.length > 0"
      class="picturechoice_picturechoice_question_choices_wrapper__x1dG3 false"
      :class="{
        picturechoice_picturechoice_double_sized__NdPI4:
          useQuestionBuilder.getIsDoubleDisplaySize,
      }"
    >
      <div
        role="presentation"
        class="picturechoice_picturechoice_choice__YpLSF picturechoice_fade__wF_Dc false false"
        v-for="(choice, index) in shownChoices"
        :key="index"
        :tabindex="index"
        :class="{
          picturechoice_selected_choice__EfE4I: choice.checked,
        }"
        @click="choice.checked = !choice.checked"
      >
        <div class="picturechoice_picturechoice_image_wrapper__DjAE6">
          <img :src="choice.image" alt="" />
        </div>
        <div
          v-if="!useQuestionBuilder.getIsHiddenLabel"
          class="picturechoice_choice_detail_wrapper___STzf"
        >
          <div class="picturechoice_choice_detail__GBGox">
            <div
              class="picturechoice_question_number__4eqxW picturechoice_ltr__zJCqm"
            >
              {{ index + 1 }}
            </div>
            <p>{{ choice.label }}</p>
          </div>
        </div>
        <div
          v-if="choice.checked"
          class="picturechoice_selected_choice_icon_wrapper__h0Lb0 picturechoice_ltr__zJCqm"
        >
          <div class="picturechoice_selected_choice__EfE4I">
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

.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, 10.6875rem);
  grid-gap: 0.75rem;
  padding-bottom: 1.5rem;
}

.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3.picturechoice_picturechoice_double_sized__NdPI4
  .picturechoice_picturechoice_choice__YpLSF
  .picturechoice_picturechoice_image_wrapper__DjAE6 {
  height: 15.375rem;
}

.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3.picturechoice_picturechoice_double_sized__NdPI4 {
  grid-template-columns: repeat(auto-fit, 20rem);
}
@media (max-width: 1024px) {
  .picturechoice_picturechoice_question_wrapper__JMyi4
    .picturechoice_picturechoice_question_choices_wrapper__x1dG3 {
    grid-template-columns: repeat(auto-fit, calc(50% - 0.375rem));
  }
  .picturechoice_picturechoice_question_wrapper__JMyi4
    .picturechoice_picturechoice_question_choices_wrapper__x1dG3.picturechoice_picturechoice_double_sized__NdPI4 {
    grid-gap: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
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
.picturechoice_picturechoice_question_wrapper__JMyi4 {
  padding: 1rem 0;
}
.picturechoice_picturechoice_question_wrapper__JMyi4.picturechoice_ltr__zJCqm {
  direction: ltr !important;
}
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, 10.6875rem);
  grid-gap: 0.75rem;
  padding-bottom: 1.5rem;
}
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF {
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
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF
  .picturechoice_picturechoice_image_wrapper__DjAE6 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9.125rem;
}
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF
  .picturechoice_picturechoice_image_wrapper__DjAE6
  img {
  max-width: 100%;
  border-radius: 0.25rem;
  max-height: 100%;
}
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF
  .picturechoice_choice_detail_wrapper___STzf {
  display: flex;
  color: var(--preview-theme-answer-color);
}
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF
  .picturechoice_choice_detail_wrapper___STzf
  .picturechoice_choice_detail__GBGox {
  padding-top: 0.5rem;
  display: flex;
}
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF
  .picturechoice_choice_detail_wrapper___STzf
  .picturechoice_choice_detail__GBGox
  p {
  margin: 0;
  overflow-wrap: anywhere;
}
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF
  .picturechoice_choice_detail_wrapper___STzf
  .picturechoice_choice_detail__GBGox
  .picturechoice_question_number__4eqxW {
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
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF
  .picturechoice_choice_detail_wrapper___STzf
  .picturechoice_choice_detail__GBGox
  .picturechoice_question_number__4eqxW.picturechoice_ltr__zJCqm {
  margin-left: 0;
  margin-right: 0.5rem;
}
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF
  .picturechoice_selected_choice_icon_wrapper__h0Lb0 {
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
}
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF
  .picturechoice_selected_choice_icon_wrapper__h0Lb0.picturechoice_ltr__zJCqm {
  right: 0.5rem;
  left: unset;
}
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF
  .picturechoice_selected_choice_icon_wrapper__h0Lb0
  .picturechoice_selected_choice__EfE4I {
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
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF
  .picturechoice_selected_choice_icon_wrapper__h0Lb0
  .picturechoice_selected_choice__EfE4I
  svg
  path:last-child {
  fill: var(--preview-theme-accent-color-contrast);
}
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF.picturechoice_selected_choice__EfE4I {
  box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
  border-color: var(--preview-theme-accent-color);
  background-color: transparent;
}
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF.picturechoice_fade__wF_Dc {
  animation: picturechoice_fade-choice__eLUaX 0.4s;
}
.picturechoice_picturechoice_question_wrapper__JMyi4
  .picturechoice_picturechoice_question_choices_wrapper__x1dG3
  .picturechoice_picturechoice_choice__YpLSF:hover {
  cursor: pointer;
  border-color: var(--preview-theme-accent-color);
  box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
}
@media (max-width: 1024px) {
  .picturechoice_picturechoice_question_wrapper__JMyi4
    .picturechoice_picturechoice_question_choices_wrapper__x1dG3 {
    grid-template-columns: repeat(auto-fit, calc(50% - 0.375rem));
  }
  .picturechoice_picturechoice_question_wrapper__JMyi4
    .picturechoice_picturechoice_question_choices_wrapper__x1dG3
    .picturechoice_picturechoice_choice__YpLSF
    .picturechoice_picturechoice_image_wrapper__DjAE6 {
    justify-content: center;
  }
  .picturechoice_picturechoice_question_wrapper__JMyi4
    .picturechoice_picturechoice_question_choices_wrapper__x1dG3
    .picturechoice_picturechoice_choice__YpLSF:hover {
    box-shadow: none;
    border-color: transparent;
  }
  .picturechoice_picturechoice_question_wrapper__JMyi4
    .picturechoice_picturechoice_question_choices_wrapper__x1dG3
    .picturechoice_picturechoice_choice__YpLSF.picturechoice_selected_choice__EfE4I {
    box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
  }
}
/*! CSS Used keyframes */
@keyframes picturechoice_fade-choice__eLUaX {
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
