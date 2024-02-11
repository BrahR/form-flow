<script setup lang="ts">
import Dialog from "@/components/Dialog.vue";
import CloseQuestionModal from "@/views/survey/components/build/CloseQuestionModal.vue";
import { useQuestionFactoryStore } from "@/stores/questions/factory.ts";
import { storeToRefs } from "pinia";
import { provide, watchEffect } from "vue";
import { USE_QUESTION_FACTORY } from "@/config/injections.ts";
import { validModalActions } from "@/config/typeValidation.ts";
import QuestionMakerFooter from "@/views/survey/components/build/QuestionMakerFooter.vue";

type Props = {
  action: string | null;
  type: string | null;
  number: number | null;
  surveyId: number | null;
};

type Emits = {
  (event: "close"): void;
};

const isValidAction = (action: string | null): action is "create" | "update" =>
  validModalActions.includes(action ?? "");

const { type, action, number, surveyId } = defineProps<Props>();
defineEmits<Emits>();

const useQuestionFactory = useQuestionFactoryStore();
const { hydrated, modals, store } = storeToRefs(useQuestionFactory);

watchEffect(() => {
  if (type && isValidAction(action)) {
    useQuestionFactory.open(action);
    useQuestionFactory.hydrate(type, null);
  }
});
provide(USE_QUESTION_FACTORY, useQuestionFactory);
</script>

<template>
  <Dialog
    v-if="store && isValidAction(action)"
    :show="hydrated && modals[action]"
    :full="true"
    @close="$emit('close')"
  >
    <div class="addOrEditQuestionModal_modal_overlay">
      <div
        class="addOrEditQuestionModal_modal_wrapper"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
      >
        <div class="sharedIndex_content sharedIndex_ltr">
          <div class="sharedIndex_sidebar sharedIndex_ltr">
            <div class="questionHeader_header">
              <div class="questionHeader_title">
                <CloseQuestionModal @close="$emit('close')" />
                <div
                  class="questionHeader_question_header_wrapper questionHeader_ltr"
                >
                  <component :is="{ ...store.icon }" :number></component>
                  <div class="questionHeader_name questionHeader_ltr">
                    {{ store.name }}
                  </div>
                </div>
              </div>
              <div class="questionHeader_mobile_navbar">
                <div class="questionHeader_navbar_item questionHeader_active">
                  Create
                </div>
                <div class="questionHeader_navbar_item">Preview</div>
              </div>
            </div>
            <div class="sharedIndex_content">
              <div
                :class="{ skeleton: useQuestionFactory.hydrating }"
                class="sharedIndex_questions_content"
              >
                <div v-if="!useQuestionFactory.hydrating">
                  <div class="sharedBuild_questions_content">
                    <div class="sharedBuild_build_content">
                      <template v-for="(component, index) in store.components">
                        <component
                          :is="{ ...component, key: index }"
                        ></component>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <QuestionMakerFooter :surveyId @close="$emit('close')" />
          </div>
          <div class="sharedIndex_preview sharedIndex_ltr">
            <div class="sharedIndex_preview_buttons">
              <div class="previewButtonGroup_preview_button_group">
                <div
                  class="selectionButtonGroup_buttons_wrapper selectionButtonGroup_ltr selectionButtonGroup_white"
                >
                  <button
                    type="button"
                    class="selectionButtonGroup_selected_tab"
                  >
                    <div class="previewButtonGroup_svg_on">
                      <svg
                        class="m-auto"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h24v24H0z"></path>
                          <g
                            transform="translate(3.429 4)"
                            stroke="#3E434D"
                            stroke-linejoin="round"
                          >
                            <rect
                              stroke-linecap="round"
                              width="17.143"
                              height="12"
                              rx="2"
                            ></rect>
                            <path stroke-linecap="round" d="M4.571 16h8"></path>
                            <path
                              stroke-linecap="square"
                              d="M8.571 13v3"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </button>
                  <button
                    type="button"
                    class="selectionButtonGroup_selected_tab"
                  >
                    <div class="false">
                      <svg
                        class="m-auto"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h24v24H0z"></path>
                          <g transform="translate(7 5)">
                            <rect
                              stroke="#3E434D"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              width="10"
                              height="15"
                              rx="2"
                            ></rect>
                            <rect
                              fill="#3E434D"
                              x="3"
                              y="12"
                              width="4"
                              height="1"
                              rx=".5"
                            ></rect>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div
              class="sharedIndex_background sharedIndex_animation sharedIndex_ltr"
            ></div>
            <div class="sharedIndex_question">
              <component
                :is="{
                  ...store.preview,
                }"
              ></component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
.questionHeader_header .questionHeader_title {
  display: flex;
  justify-content: flex-start;
  box-shadow: inset 0 -0.125rem 0 0 #f0f2f5;
  position: relative;
  height: 3.5rem;
  align-items: center;
}
.questionHeader_header .questionHeader_mobile_navbar {
  display: none;
}
.questionHeader_header .questionHeader_question_header_wrapper {
  align-items: center;
  display: flex;
  padding: 0 0.25rem;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
}
.questionHeader_header
  .questionHeader_question_header_wrapper
  .questionHeader_name {
  align-items: center;
  display: flex;
  margin-right: 0.5rem;
}
.questionHeader_header
  .questionHeader_question_header_wrapper
  .questionHeader_name.questionHeader_ltr {
  margin-right: 0;
  margin-left: 0.5rem;
}
.questionHeader_header
  .questionHeader_question_header_wrapper.questionHeader_ltr {
  direction: ltr;
}
@media (max-width: 1024px) {
  .questionHeader_header .questionHeader_mobile_navbar {
    display: flex;
    box-shadow: inset 0 -0.125rem 0 0 #f0f2f5;
    width: 100%;
    height: 3rem;
    padding: 0 2rem;
  }
  .questionHeader_header
    .questionHeader_mobile_navbar
    .questionHeader_navbar_item {
    justify-content: flex-start;
    align-items: center;
    padding: 0.75rem;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    cursor: pointer;
    position: relative;
    font-size: 14px;
  }
  .questionHeader_header
    .questionHeader_mobile_navbar
    .questionHeader_navbar_item.questionHeader_active {
    color: #3b368e;
    position: relative;
  }
  .questionHeader_header
    .questionHeader_mobile_navbar
    .questionHeader_navbar_item.questionHeader_active:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 0.2rem;
    bottom: 0;
    left: 0;
    background-color: #3b368e;
    border-radius: 1rem 1rem 0 0;
  }
}
.sharedBuild_questions_content {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.selectionButtonGroup_buttons_wrapper {
  display: flex;
  width: 100%;
}
.selectionButtonGroup_buttons_wrapper button {
  margin: 0;
  flex-grow: 1;
  width: 0;
  cursor: pointer;
  padding: 0.25rem 0;
  font-family: unset;
  font-size: 14px;
  border-radius: 0;
  scrollbar-width: none;
}
.selectionButtonGroup_buttons_wrapper button:focus {
  outline: none;
}
.selectionButtonGroup_buttons_wrapper button:first-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.selectionButtonGroup_buttons_wrapper button:last-child,
.selectionButtonGroup_buttons_wrapper.selectionButtonGroup_ltr
  button:first-child {
  border-radius: 0.25rem 0 0 0.25rem;
}
.selectionButtonGroup_buttons_wrapper.selectionButtonGroup_ltr
  button:last-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.selectionButtonGroup_buttons_wrapper.selectionButtonGroup_white button {
  border: none;
  background-color: #fff;
}
@media (max-width: 1024px) {
  .selectionButtonGroup_buttons_wrapper button {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .selectionButtonGroup_buttons_wrapper button:focus {
    outline: none;
  }
}
.previewButtonGroup_preview_button_group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 5rem;
}
.previewButtonGroup_preview_button_group button {
  background-color: #fff;
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
.previewButtonGroup_preview_button_group
  button
  .previewButtonGroup_svg_on
  svg
  g
  g {
  stroke: #3b368e;
}
.previewButtonGroup_preview_button_group
  button
  .previewButtonGroup_svg_on
  svg
  g
  g
  rect:first-child {
  fill: #3b368e;
  fill-opacity: 0.15;
}
.previewButtonGroup_preview_button_group button:focus {
  outline: none;
}
.sharedIndex_content {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 0.5rem;
}
.sharedIndex_content.sharedIndex_ltr {
  direction: ltr;
}
.sharedIndex_content .sharedIndex_sidebar {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 22.5rem;
  height: 100%;
  border-radius: 0 0.5rem 0.5rem 0;
  background-color: #fff;
  justify-content: stretch;
  border-left: 0.0625rem solid #f0f2f5;
}
.sharedIndex_content .sharedIndex_sidebar.sharedIndex_ltr {
  border-radius: 0.5rem 0 0 0.5rem;
  border-left: none;
  border-right: 0.0625rem solid #f0f2f5;
}
.sharedIndex_content .sharedIndex_sidebar .sharedIndex_content {
  overflow-y: auto;
  flex-grow: 1;
  padding: 0 1rem;
  box-sizing: border-box !important;
  scrollbar-gutter: stable both-edges;
}
.sharedIndex_content
  .sharedIndex_sidebar
  .sharedIndex_content::-webkit-scrollbar {
  width: 1.5rem;
}
.sharedIndex_content
  .sharedIndex_sidebar
  .sharedIndex_content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem 0.5rem transparent;
}
.sharedIndex_content
  .sharedIndex_sidebar
  .sharedIndex_content::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem 0.5rem #f0f2f5;
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  min-height: 2rem;
}
.sharedIndex_content
  .sharedIndex_sidebar
  .sharedIndex_content::-webkit-scrollbar {
  width: 0.75rem !important;
}
.sharedIndex_content
  .sharedIndex_sidebar
  .sharedIndex_content::-webkit-scrollbar-thumb {
  border: 0.2rem solid transparent !important;
}
.sharedIndex_content .sharedIndex_sidebar .sharedIndex_questions_content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.sharedIndex_content .sharedIndex_preview {
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: #eef0f5;
  display: flex;
  height: 100%;
  width: calc(100% - 22.5625rem);
  align-items: center;
  line-height: var(--preview-line-height);
  position: relative;
}
.sharedIndex_content .sharedIndex_preview.sharedIndex_ltr {
  border-radius: 0 0.5rem 0.5rem 0;
}
.sharedIndex_content .sharedIndex_preview .sharedIndex_preview_buttons {
  z-index: 99;
  position: absolute;
  top: 0;
  left: calc(50% - 2.5rem);
  margin-top: 0.75rem;
}
.sharedIndex_content .sharedIndex_preview .sharedIndex_background {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: var(--preview-theme-background-color);
  background-image: var(--preview-theme-background-image);
  background-position: var(--preview-theme-background-position);
  background-size: var(--preview-theme-background-size);
  background-repeat: var(--preview-theme-background-repeat);
  opacity: var(--preview-theme-background-opacity);
}
.sharedIndex_content
  .sharedIndex_preview
  .sharedIndex_background.sharedIndex_ltr {
  border-radius: 0 0.5rem 0.5rem 0;
}
.sharedIndex_content .sharedIndex_preview .sharedIndex_question {
  position: absolute;
  padding: 2rem 4rem;
  box-sizing: border-box;
  width: 100%;
  /*overflow-y: auto;*/
  max-height: calc(100% - 4rem);
  scrollbar-width: none;
  font-family: var(--preview-theme-font-family) !important;
  font-size: var(--preview-theme-font-size) !important;
  direction: rtl;
}
.sharedIndex_content
  .sharedIndex_preview
  .sharedIndex_question::-webkit-scrollbar {
  width: 0;
}
@media (max-width: 1024px) {
  .sharedIndex_content {
    border-radius: 0;
    flex-wrap: wrap;
  }
  .sharedIndex_content .sharedIndex_sidebar {
    width: 100%;
    height: 100%;
    border-radius: 0 !important;
  }
}
.addOrEditQuestionModal_modal_overlay {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
}
.addOrEditQuestionModal_modal_overlay .addOrEditQuestionModal_modal_wrapper {
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  color: #3e434d;
}
@media (max-width: 1024px) {
  .addOrEditQuestionModal_modal_overlay {
    padding: 0;
  }
  .addOrEditQuestionModal_modal_overlay .addOrEditQuestionModal_modal_wrapper {
    flex-direction: column;
    border-radius: 0;
    height: 100%;
    width: 100%;
  }
}
</style>
