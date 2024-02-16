<script setup lang="ts">
import { PencilIcon } from "@heroicons/vue/20/solid";

import { useSurveyViewerStore } from "@/stores/surveyViewer.ts";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useQuestionFactoryStore } from "@/stores/questions/factory.ts";
import { watch } from "vue";
import { decapitalize } from "@/utils";

const route = useRoute();
const questionFactory = useQuestionFactoryStore();
const useViewer = useSurveyViewerStore();
useViewer.hydrate(route.params.surveyLink as string);
const { store } = storeToRefs(questionFactory);
const { survey, question, progress, index } = storeToRefs(useViewer);
const { nextQuestion: next, previousQuestion: previous } = useViewer;

const hydrateFactory = () => {
  questionFactory.hydrate(
    decapitalize(question.value?.questionable.type ?? ""),
    question.value ?? null,
  );
};

const nextQuestion = () => {
  next();
  hydrateFactory();
};

const previousQuestion = () => {
  previous();
  hydrateFactory();
};

watch(
  () => question.value,
  () => {
    console.log("Question changed");
    hydrateFactory();
  },
  { once: true },
);
</script>

<template>
  <div>
    <div class="responsePage_background"></div>
    <main
      class="responsePage_response responsePage_ltr false responsePage_english false false false"
    >
      <div style="opacity: 1">
        <div class="responsePage_headerWrapper">
          <div class="headers_preview_and_deactivate_header">
            <p>
              Your survey is not active to collect responses
              {{ question?.questionable.type }}
            </p>
          </div>
        </div>
        <div
          class="questionsList_question_pages_wrapper questionsList_welcome_page"
          style="height: 739px"
        >
          <div style="opacity: 1">
            <!--            first wrapper -->
            <div
              class="classicQuestionsList_classic_questions_list_wrapper false"
              style="height: 682px; opacity: 1; z-index: 0; transform: none"
            >
              <div class="classicQuestionsList_question_lists_page false">
                <div
                  class="classicQuestionsList_classic_question_wrapper"
                  style="padding-top: 40px"
                >
                  <div class="false">
                    <div tabindex="100"></div>
                    <div
                      style="opacity: 1; pointer-events: unset; cursor: default"
                    >
                      <component :is="{ ...store?.preview }" />

                      <div class="textQuestion_continue_button_wrapper false">
                        <div>
                          <button
                            type="button"
                            class="shared_confirm_button false"
                            data-projection-id="3"
                            style="opacity: 1"
                          >
                            OK
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="navbar_navbar_container navbar_has_background navbar_ltr"
            >
              <div class="navbar_navigation_and_progress_wrapper navbar_ltr">
                <div class="navbar_questions_navigations navbar_ltr">
                  <div
                    role="presentation"
                    class="navbar_question_button navbar_question_next_button false false navbar_ltr false"
                    tabindex="0"
                    :class="{
                      navbar_disabled: false,
                    }"
                    @click="nextQuestion"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-label="Next"
                    >
                      <title>Next</title>
                      <desc>Next</desc>
                      <g fill="none" fill-rule="evenodd">
                        <g>
                          <path d="M0 0H24V24H0z"></path>
                          <path
                            fill="#5A5E66"
                            fill-rule="nonzero"
                            d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div
                    role="presentation"
                    class="navbar_question_button navbar_question_previous_button false navbar_bordered navbar_ltr false"
                    tabindex="0"
                    :class="{
                      navbar_disabled: index == 0,
                    }"
                    @click="previousQuestion"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-label="Prev"
                      style="transform: rotate(180deg)"
                    >
                      <title>Prev</title>
                      <desc>Prev</desc>
                      <g fill="none" fill-rule="evenodd">
                        <g>
                          <path d="M0 0H24V24H0z"></path>
                          <path
                            fill="#5A5E66"
                            fill-rule="nonzero"
                            d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div class="navbar_progressbar_wrapper false navbar_ltr">
                  <span class="navbar_percentage">
                    {{ progress }}% Answered
                  </span>
                  <div class="navbar_progressbar">
                    <div
                      :style="{
                        width: `${progress}%`,
                      }"
                    ></div>
                  </div>
                </div>
              </div>
              <router-link
                v-if="survey"
                v-slot="{ navigate }"
                custom
                :to="{
                  name: 'Survey.Build',
                  params: {
                    workspaceId: survey.workspace_id,
                    surveyId: survey.id,
                  },
                }"
              >
                <button
                  class="navbar_poweredByPorsline navbar_is_not_persian false w-6"
                  type="button"
                  @click="navigate"
                >
                  <PencilIcon class="h-5 w-5" />
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
:focus {
  outline: none;
}

* {
  box-sizing: content-box;
}
.navbar_navbar_container {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: calc(3.5625rem - 1.5rem);
  padding: 0.75rem 0;
  border-top: 0.0625rem solid var(--button-color-lightest);
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: rtl;
}
.navbar_navbar_container.navbar_has_background {
  background-color: hsla(0, 0%, 100%, 0.1);
}
.navbar_navbar_container.navbar_ltr {
  flex-direction: row-reverse;
}
.navbar_navigation_and_progress_wrapper {
  display: flex;
  margin-right: 0.75rem;
}
.navbar_navigation_and_progress_wrapper.navbar_ltr {
  flex-direction: row-reverse;
  margin-left: 0.75rem;
  margin-right: 0 !important;
}

.navbar_questions_navigations {
  display: flex;
  border-radius: 0.5rem;
  min-width: 4rem;
  height: 2rem;
}

.navbar_questions_navigations.navbar_ltr {
  flex-direction: row-reverse;
}

.navbar_question_button {
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  background-color: var(--button-color);
  transition: all 0.1s ease-in-out;
}

.navbar_question_button.navbar_question_next_button {
  border-radius: 0 0.5rem 0.5rem 0;
}
.navbar_question_button.navbar_question_next_button.navbar_ltr,
.navbar_question_button.navbar_question_previous_button {
  border-radius: 0.5rem 0 0 0.5rem;
}
.navbar_question_button.navbar_question_previous_button.navbar_ltr {
  border-radius: 0 0.5rem 0.5rem 0;
}

.navbar_question_button svg path:not(:first-child) {
  fill: var(--button-color-contrast);
}

.navbar_question_button:hover {
  cursor: pointer;
  background-color: var(--button-color-light);
}

.navbar_question_button.navbar_bordered {
  box-shadow: inset 1px 0 0 0 var(--background-color-lightest);
  border-left: 1px solid var(--background-color-lighter);
}

.navbar_question_button.navbar_disabled {
  cursor: not-allowed;
}

.navbar_question_button.navbar_disabled:hover {
  background-color: var(--button-color);
}

.navbar_question_button.navbar_disabled svg path:not(:first-child) {
  fill: var(--button-color-contrast);
  opacity: 50%;
}

.navbar_question_button:focus {
  background-color: var(--button-color-light);
  outline: none;
}

.navbar_question_button:active {
  outline: none;
}

.navbar_progressbar_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 1rem;
}

.navbar_progressbar_wrapper.navbar_ltr {
  direction: ltr;
  margin-left: 1rem;
  margin-right: 0 !important;
}

.navbar_progressbar_wrapper.navbar_ltr .navbar_percentage {
  text-align: left;
}

.navbar_progressbar_wrapper.navbar_ltr span {
  margin: 0 0.1875rem 0.125rem 0;
}

.navbar_percentage {
  direction: ltr;
  line-height: normal;
}
.navbar_progressbar_wrapper span {
  color: var(--question-color);
  font-size: 0.75em;
  text-align: right;
  margin: 0 0 0.125rem 0.1875rem;
}

.navbar_progressbar {
  border-radius: 0.125rem;
  height: 0.375rem;
  width: 6.25rem;
  background-color: var(--question-color-lighter);
  display: block;
}

.navbar_progressbar div {
  border-radius: 0.125rem;
  background-color: var(--question-color);
  height: 100%;
  margin-bottom: 0.25rem;
  transition: width 0.4s;
}

@media (max-width: 768px) {
  .navbar_question_button:hover {
    background-color: var(--button-color);
  }
}
.classicQuestionsList_classic_questions_list_wrapper {
  overflow-y: auto;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  scrollbar-width: none;
}
.classicQuestionsList_classic_questions_list_wrapper::-webkit-scrollbar {
  width: 0;
  background: transparent;
  display: none;
}
.classicQuestionsList_question_lists_page::-webkit-scrollbar {
  width: 0;
  background: transparent;
  display: none;
}
.classicQuestionsList_question_lists_page {
  max-width: 45rem;
  width: 100%;
  margin: auto;
  padding: 2rem 0;
  scrollbar-width: none;
}
.classicQuestionsList_classic_question_wrapper {
  max-height: 100%;
  padding-bottom: 2rem;
}
@media (max-width: 768px) {
  .classicQuestionsList_classic_questions_list_wrapper {
    padding: 0 1.5rem;
  }
}
.questionsList_question_pages_wrapper {
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
}
.questionsList_question_pages_wrapper.questionsList_welcome_page {
  height: 100vh;
}
.headers_preview_and_deactivate_header {
  text-align: center;
  background-color: #d9426e !important;
  color: #fff;
  font-size: 0.875rem;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.headers_preview_and_deactivate_header p {
  margin: 0;
}
.responsePage_ltr {
  direction: ltr;
}
.responsePage_response {
  position: relative;
  z-index: 0;
  font-family: var(--font-family) !important;
}
.responsePage_background {
  position: fixed;
  height: 100vh;
  width: 100%;
  left: 0;
  background-color: var(--background-color);
  background-image: var(--background-image);
  background-position: var(--background-position);
  background-size: var(--background-size);
  background-repeat: var(--background-repeat);
  opacity: var(--background-opacity);
}
.responsePage_headerWrapper {
  display: inline;
  position: fixed;
  width: 100%;
  z-index: 10;
}
.responsePage_english {
  font-family: Roboto, serif;
  line-height: 1.75rem !important;
}

/* amogos */
.shared_confirm_button {
  all: unset;
  font-size: var(--font-size);
  min-height: 2.5rem;
  height: 2.5em;
  width: fit-content;
  min-width: 7.5rem;
  max-width: 18.4375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  color: var(--button-color-contrast);
  background-color: var(--button-color);
  -webkit-text-fill-color: var(--button-color-contrast);
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;
  overflow-wrap: anywhere;
  cursor: pointer;
}
.shared_confirm_button:hover {
  box-shadow: 0 0 0 0.125rem var(--accent-color);
}
.shared_confirm_button:focus {
  box-shadow: 0 0 0 0.0625rem var(--accent-color);
}
.shared_confirm_button:disabled {
  cursor: not-allowed;
}
@media (max-width: 768px) {
  .shared_confirm_button:hover {
    box-shadow: none;
  }
}
.textQuestion_text_question_wrapper .textQuestion_continue_button_wrapper {
  height: 2.5rem;
  margin-top: 1.5rem;
}
.navbar_navbar_container .navbar_poweredByPorsline {
  all: unset;
  background-color: var(--button-color);
  color: var(--button-color-contrast);
  -webkit-text-fill-color: var(--button-color-contrast);
  line-height: normal;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  height: 2rem;
  font-size: 0.75rem;
  box-sizing: border-box;
  transition: all 0.1s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-family: Vazir, sans-serif;
  margin-left: 0.75rem;
}
.navbar_navbar_container .navbar_poweredByPorsline span {
  margin-right: 0;
  margin-left: 0.125rem;
}
.navbar_navbar_container .navbar_poweredByPorsline:hover {
  cursor: pointer;
  opacity: 90%;
}
.navbar_navbar_container .navbar_poweredByPorsline.navbar_is_not_persian {
  font-family: Roboto, sans-serif;
  flex-direction: row-reverse;
  margin-right: 0.75rem;
  margin-left: 0 !important;
}
.navbar_navbar_container .navbar_poweredByPorsline.navbar_is_not_persian span {
  margin-right: 0.125rem;
}
@media (max-width: 360px) {
  .navbar_navbar_container .navbar_poweredByPorsline {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0.125rem 0.5rem;
  }
  .navbar_navbar_container .navbar_poweredByPorsline.navbar_is_not_persian {
    flex-direction: column;
    width: 4.0625rem;
  }
  .navbar_navbar_container
    .navbar_poweredByPorsline.navbar_is_not_persian
    span {
    display: inline;
    font-size: 0.5rem;
  }
}
</style>
