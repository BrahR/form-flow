<script setup lang="ts">
import QuestionHeader from "@/views/survey/components/build/question/QuestionHeader.vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { multipleChoices, multipleAnswersText, verticalDisplay } =
  storeToRefs(useQuestionToggles);
</script>

<template>
  <div
    class="preview_multiple_choice_question_wrapper preview_ltr"
    style="opacity: 1"
  >
    <QuestionHeader :sub-description="multipleAnswersText" />

    <div
      :class="{ 'flex-col': verticalDisplay }"
      class="preview_multiple_choice_question_choices_wrapper preview_ltr"
    >
      <template
        v-for="(choice, index) in multipleChoices.filter(
          (choice) => !!choice.value && !choice.hidden,
        )"
        :key="choice.id"
      >
        <div
          v-if="choice.value && !choice.hidden"
          :class="{ preview_selected_choice: choice.checked }"
          class="preview_multi_choice_item preview_ltr"
        >
          <div class="preview_question_number_and_label_wrapper">
            <div>
              <p class="preview_question_number preview_ltr">
                {{ index + 1 }}
              </p>
            </div>
            <div class="preview_choice_label">{{ choice.value }}</div>
          </div>
          <div class="preview_selected_choiceicon_wrapper">
            <div v-if="choice.checked" class="preview_selected_choice">
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
    <div class="preview_multi_choice_error_wrapper"></div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}

.preview_multiple_choice_question_wrapper {
  padding: 1rem 0;
}

.preview_multiple_choice_question_wrapper.preview_ltr {
  direction: ltr !important;
}

.preview_multiple_choice_question_choices_wrapper {
  padding-bottom: 1.5rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.preview_multi_choice_item {
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

.preview_multi_choice_item p {
  margin: 0;
}

.preview_question_number_and_label_wrapper {
  display: flex;
  width: calc(100% - 2.25rem);
}

.preview_choice_label {
  margin: 0;
  font-size: 1.0625em;
  overflow-wrap: anywhere;
}

.preview_question_number {
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

.preview_question_number.preview_ltr {
  margin-left: 0;
  margin-right: 0.5rem;
}

.preview_selected_choiceicon_wrapper {
  width: 2rem;
  margin-right: 0.5rem;
}

.preview_multi_choice_item.preview_ltr {
  padding: 0.3125rem 0.25rem 0.25rem;
}

.preview_multi_choice_item.preview_ltr .preview_selected_choiceicon_wrapper {
  margin-left: 0.5rem;
  margin-right: 0;
}

.preview_multi_choice_item:hover {
  cursor: pointer;
  border-color: var(--preview-theme-accent-color);
  box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
}

.preview_multi_choice_error_wrapper {
  height: 1.75rem;
}

@media (max-width: 1024px) {
  .preview_multi_choice_item:hover {
    cursor: pointer;
    border-color: var(--preview-theme-accent-color);
    box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
  }
}

.preview_selected_choice {
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

.preview_selected_choice svg path:last-child {
  fill: var(--preview-theme-accent-color-contrast);
}

.preview_multi_choice_item.preview_selected_choice {
  border-color: var(--preview-theme-accent-color);
  box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
  background-color: transparent;
}
</style>
