<script setup lang="ts">
import QuestionHeader from "@/components/question/preview/QuestionHeader.vue";
import { inject } from "vue";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;
</script>

<template>
  <div
    class="preview_multiplechoice_question_wrapper__RatfO preview_ltr__Yc2N7"
    style="opacity: 1"
  >
    <QuestionHeader :description="useQuestion.getMultipleAnswersText" />

    <div
      :class="{ 'flex-col': useQuestion.getIsVerticalDisplay }"
      class="preview_multiplechoice_question_choices_wrapper__9pZyU preview_ltr__Yc2N7"
    >
      <template
        v-for="(choice, index) in useQuestion.getMultipleChoices"
        :key="index"
      >
        <div
          v-if="choice.value && !choice.hidden"
          :class="{ preview_selected_choice__fQxbn: choice.checked }"
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
            <div v-if="choice.checked" class="preview_selected_choice__fQxbn">
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
</style>
