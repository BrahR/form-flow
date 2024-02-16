<script setup lang="ts">
import QuestionTypeButton from "@/views/survey/components/build/QuestionTypeButton.vue";
import AdvancedQuestionButtons from "@/views/survey/components/build/AdvancedQuestionButtons.vue";
import QuestionsList from "@/views/survey/components/build/QuestionsList.vue";
import QuestionModal from "@/views/survey/components/build/QuestionModal.vue";
import type { Component } from "vue";
import { defineAsyncComponent, onMounted, ref, Ref, watch } from "vue";
import { useQuestionFactoryStore } from "@/stores/questions/factory.ts";
import { useRoute, useRouter } from "vue-router";
import { useQuestionStore } from "@/stores/question.ts";
import NewQuestionPlus from "@/views/survey/icons/build/NewQuestionPlus.vue";
import QuestionItem from "@/views/survey/components/build/QuestionItem.vue";
import { storeToRefs } from "pinia";

type ButtonType = {
  title: string;
  type: QuestionType;
  fullWidth: boolean;
  component: Component;
  disabled: () => boolean;
};

const useQuestion = useQuestionStore();
const { welcome, questions, ending } = storeToRefs(useQuestion);
const useQuestionFactory = useQuestionFactoryStore();
const router = useRouter();
const route = useRoute();

const action: Ref<string | null> = ref(
  (route.query.action ?? null) as string | null,
);
const type: Ref<string | null> = ref(
  (route.query.type ?? null) as string | null,
);

const typeButtons: ButtonType[] = [
  {
    title: "Welcome page",
    type: "welcome",
    fullWidth: true,
    component: defineAsyncComponent(
      () => import("@/views/survey/icons/questions/WelcomeIcon.vue"),
    ),
    disabled: () => !!welcome.value,
  },
  {
    title: "General Text",
    type: "generalText",
    fullWidth: false,
    component: defineAsyncComponent(
      () => import("@/views/survey/icons/questions/GeneralTextIcon.vue"),
    ),
    disabled: () => false,
  },
  {
    title: "Multiple Choice",
    type: "multipleChoice",
    fullWidth: false,
    component: defineAsyncComponent(
      () => import("@/views/survey/icons/questions/MultipleChoiceIcon.vue"),
    ),
    disabled: () => false,
  },
  {
    title: "Picture Choice",
    type: "pictureChoice",
    fullWidth: false,
    component: defineAsyncComponent(
      () => import("@/views/survey/icons/questions/PictureChoiceIcon.vue"),
    ),
    disabled: () => false,
  },
  {
    title: "Question Group",
    type: "questionGroup",
    fullWidth: false,
    component: defineAsyncComponent(
      () => import("@/views/survey/icons/questions/QuestionGroupIcon.vue"),
    ),
    disabled: () => true,
  },
  // {
  //   title: "Link options",
  //   type: null as never,
  //   fullWidth: false,
  //   component: () => import("@/views/survey/icons/LinkOptionsIcon.vue"),
  // },
  {
    title: "Opinion Scale",
    type: "opinionScale",
    fullWidth: false,
    component: defineAsyncComponent(
      () => import("@/views/survey/icons/questions/OpinionScaleIcon.vue"),
    ),
    disabled: () => false,
  },
  {
    title: "Rating",
    type: "rating",
    fullWidth: false,
    component: defineAsyncComponent(
      () => import("@/views/survey/icons/questions/RatingIcon.vue"),
    ),
    disabled: () => false,
  },
  {
    title: "Ranking",
    type: "ranking",
    fullWidth: false,
    component: defineAsyncComponent(
      () => import("@/views/survey/icons/questions/RankingIcon.vue"),
    ),
    disabled: () => false,
  },
  {
    title: "Statement",
    type: "statement",
    fullWidth: false,
    component: defineAsyncComponent(
      () => import("@/views/survey/icons/questions/StatementIcon.vue"),
    ),
    disabled: () => false,
  },
  {
    title: "File Upload",
    type: "fileUpload",
    fullWidth: false,
    component: defineAsyncComponent(
      () => import("@/views/survey/icons/questions/FileUploadIcon.vue"),
    ),
    disabled: () => true,
  },
  {
    title: "Matrix",
    type: null as never,
    fullWidth: false,
    component: defineAsyncComponent(
      () => import("@/views/survey/icons/questions/MatrixIcon.vue"),
    ),
    disabled: () => true,
  },
  {
    title: "Ending",
    type: "ending",
    fullWidth: true,
    component: defineAsyncComponent(
      () => import("@/views/survey/icons/questions/EndingIcon.vue"),
    ),
    disabled: () => true,
  },
];
const surveyId = Number(route.params.surveyId);

const openQuestionModal = (
  questionType: QuestionType,
  _action: "create" | "update",
  disabled: () => boolean,
) => {
  if (disabled()) return;

  router.push({
    name: "Survey.Build",
    params: route.params,
    query: {
      action: _action,
      type: questionType,
    },
  });
  action.value = _action;
  type.value = questionType;
  useQuestionFactory.open(_action);
};

const closeQuestionModal = () => {
  router.push({
    name: "Survey.Build",
    params: route.params,
    query: {},
  });
  useQuestionFactory.resetModals();
};

const number = ref(questions.value ? questions.value.length + 1 : null);

watch(
  () => questions.value?.length,
  () => {
    setInterval(() => {
      const len = questions.value?.length ?? -1;
      number.value = len + 1;
    }, 700);
  },
);

onMounted(() => {
  useQuestion.hydrate(surveyId);
});
</script>

<template>
  <div class="buildMain_wrapper">
    <div class="questionsTypesList_wrapper questionsTypesList_ltr">
      <div class="drag_and_drop" style="pointer-events: auto">
        <QuestionTypeButton
          v-for="button in typeButtons"
          :key="button.title"
          :icon="button.component"
          :fullWidth="button.fullWidth"
          :disabled="button.disabled()"
          @click="openQuestionModal(button.type, 'create', button.disabled)"
        >
          {{ button.title }}
        </QuestionTypeButton>
        <div class="questionsTypesList_provided_placeholder"></div>
      </div>
      <AdvancedQuestionButtons />
    </div>

    <QuestionsList>
      <template v-slot:welcome>
        <QuestionItem v-if="welcome" :question="welcome" />
      </template>

      <QuestionItem
        v-for="(question, i) in questions"
        :key="question.id"
        :number="i + 1"
        :question
      />

      <template v-slot:ending>
        <QuestionItem v-if="ending" :question="ending" />
      </template>
    </QuestionsList>

    <div class="buildMain_new_question_modal_button buildMain_ltr">
      <NewQuestionPlus />
    </div>
  </div>

  <QuestionModal
    :action
    :type
    :number
    :surveyId="Number(route.params.surveyId)"
    @close="closeQuestionModal"
  />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

body :focus-visible {
  outline: none;
}
.questionNumber_question_number_wrapper {
  display: flex;
  justify-content: center;
  padding: 0 0.25rem 0 0.5rem;
  height: 2rem;
  grid-gap: 0.125rem;
  align-items: center;
  font-weight: 700;
  border-radius: 0.25rem;
}
.questionNumber_question_number_wrapper .questionNumber_icon {
  display: flex;
  width: 1.5rem;
}
.questionNumber_question_number_wrapper .questionNumber_icon svg {
  vertical-align: middle;
}
.questionNumber_question_number_wrapper .questionNumber_question_number_text {
  margin: 0 0.2rem;
}
.questionsList_questions_list
  .questionNumber_question_number_wrapper
  .questionNumber_question_number_text {
  margin: 0 0.2rem -5px;
}
.questionNumber_question_number_wrapper.questionNumber_ltr {
  padding: 0 0.5rem 0 0.25rem;
}
.questionNumber_question_number_wrapper.questionNumber_without_number {
  height: 2rem;
  min-width: 2rem;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.questionNumber_question_number_wrapper.questionNumber_without_number.questionNumber_ltr {
  padding: 0 !important;
}
.questionNumber_welcome {
  background: #d8dbe0;
}
.questionNumber_long_text_question {
  background: #c1d8ff;
}
.questionNumber_short_text_question {
  background: #bbc5f9;
}
.questionNumber_number_question {
  background: #ffa4a4;
}
.questionNumber_email_question {
  background: #f2adc1;
}
.questionNumber_link_question {
  background: #b0e8ff;
}
.questionNumber_multiple_choice_question {
  background: #f4bbe1;
}
.questionNumber_picture_choice_question {
  background: #d8e8a7;
}
.questionNumber_statement_question {
  background: #c6edc3;
}
.questionNumber_opinion_scale_question {
  background-image: linear-gradient(270deg, #f4bbe1 0, #9ee3ff 99%);
}
.questionNumber_rating_question {
  background: #f8e393;
}
.questionNumber_group_question {
  background: #d0d6e3;
}
.questionNumber_dropdown_question {
  background: #bfeded;
}
.questionNumber_ranking_question {
  background: #f8c17f;
}
.questionNumber_file_upload_question {
  background: #98e3d5;
}
.questionNumber_payment_question {
  background: #a5e6bb;
}
.questionNumber_matrix_question {
  background: #e9e98a;
}
.questionNumber_appreciation {
  background: #f0f2f5;
}
.questionNumber_flip .questionNumber_question_icon {
  transform: scaleX(-1);
}
.questionsTypesList_wrapper {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 3rem);
  overflow-y: scroll;
  overflow-x: hidden;
  flex-shrink: 0;
  padding-right: 1.5rem;
  box-sizing: border-box;
  min-width: 26rem;
  scrollbar-color: #bbbcc0 transparent;
  scrollbar-width: thin;
}
.questionsTypesList_wrapper::-webkit-scrollbar {
  width: 1.5rem;
}
.questionsTypesList_wrapper::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem 0.5rem transparent;
}
.questionsTypesList_wrapper::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem 0.5rem #f0f2f5;
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  min-height: 2rem;
}
.questionsTypesList_wrapper.questionsTypesList_ltr {
  padding-left: 1.5rem;
  padding-right: 0;
}
.questionsTypesList_wrapper::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem 0.5rem #d8dbe0;
}
.questionsTypesList_wrapper .questionsTypesList_provided_placeholder {
  height: 0 !important;
  overflow: hidden;
}
.questionsTypesList_wrapper > .drag_and_drop {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  width: 23rem;
  padding: 1rem 0;
  color: #3e434d;
}
.questionsTypesList_variables_and_in_app_message_wrapper {
  flex-direction: column-reverse;
  height: 100%;
  justify-content: space-between;
  display: flex;
}

.questionsTypesList_variables {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23rem;
}

.questionsTypesList_variable {
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  width: 10.5rem;
  margin: 0 0.5rem 1.5rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
  position: relative;
}

.questionsTypesList_icon_and_title {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  color: #3e434d;
}

.questionsTypesList_icon {
  background-color: #3e434d;
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 0.5rem;
}

.questionsTypesList_icon.questionsTypesList_ltr {
  margin-right: 0.5rem;
  margin-left: 0 !important;
}

.questionsTypesList_icon.questionsTypesList_computational_variable_icon svg {
  transform: rotate(0deg) !important;
}

.questionsTypesList_variable.questionsTypesList_ltr {
  margin-right: 0.25rem;
  font-size: 12px !important;
}

.questionsTypesList_variable.questionsTypesList_ltr svg {
  transform: rotate(180deg);
}
.questionsTypesList_wrapper .questionsTypesList_question_type {
  background-color: #fff;
  border-radius: 0.5rem;
  box-sizing: border-box;
  max-height: 2.5rem;
  width: 10.5rem;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  margin-bottom: 1rem;
  position: relative;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.questionsTypesList_wrapper .questionsTypesList_question_type:hover {
  box-shadow: 0 0.25rem 0.5rem 0.125rem rgba(0, 0, 0, 0.15);
}
.questionsTypesList_question_type .questionsTypesList_name {
  margin-right: 0.5rem;
}
.questionsTypesList_question_type.questionsTypesList_ltr
  .questionsTypesList_name {
  margin-right: 0;
  margin-left: 0.5rem;
}
.questionsTypesList_wrapper
  .questionsTypesList_question_type.questionsTypesList_translate_zero {
  transform: translate(0) !important;
}
.questionsTypesList_wrapper
  .questionsTypesList_question_type.questionsTypesList_full_width {
  width: 22rem;
  justify-content: center;
}
.questionsTypesList_wrapper
  .questionsTypesList_question_type.questionsTypesList_disabled {
  cursor: not-allowed !important;
  opacity: 0.7;
}
.questionsTypesList_wrapper .questionsTypesList_question_type:hover {
  cursor: pointer;
}
@media (max-width: 1024px) {
  .questionsTypesList_wrapper {
    width: 100%;
    min-width: 0;
    min-width: auto;
    padding: 1rem 0.5rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    flex-direction: row;
    overflow-y: unset;
  }
  .questionsTypesList_wrapper::-webkit-scrollbar {
    width: 0;
  }
  .questionsTypesList_wrapper .questionsTypesList_question_type {
    width: calc(50% - 1rem);
  }
  .questionsTypesList_wrapper
    .questionsTypesList_question_type.questionsTypesList_full_width {
    width: calc(100% - 1rem);
  }
  .questionsTypesList_wrapper
    .questionsTypesList_variables_and_in_app_message_wrapper {
    all: unset;
    flex-direction: column;
    width: 100%;
  }
  .questionsTypesList_wrapper
    .questionsTypesList_variables_and_in_app_message_wrapper
    .questionsTypesList_variables {
    flex-direction: column;
    width: 100%;
  }
  .questionsTypesList_wrapper
    .questionsTypesList_variables_and_in_app_message_wrapper
    .questionsTypesList_variables
    .questionsTypesList_variable {
    border-radius: 0.5rem;
    width: calc(100% - 1rem);
    margin-bottom: 1rem;
  }
  .questionsTypesList_wrapper
    .questionsTypesList_variables_and_in_app_message_wrapper
    .questionsTypesList_variables
    .questionsTypesList_variable:last-child {
    margin-bottom: 1.5rem;
  }
}
.moreDropDown_wrapper {
  position: relative;
}
.moreDropDown_wrapper .moreDropDown_list {
  list-style-type: none;
  padding: 0.5rem 0;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  position: absolute;
  z-index: 10;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 7rem;
  width: max-content;
  margin: 0;
  outline: none;
}
.moreDropDown_wrapper .moreDropDown_list.moreDropDown_not_show {
  display: none;
}
.moreDropDown_wrapper .moreDropDown_list.moreDropDown_bottom {
  right: 0;
  top: 1.8rem;
}
.moreDropDown_wrapper .moreDropDown_button {
  background-color: #fff;
  width: 2rem;
  min-height: 1.5rem;
  height: calc(100% - 0.125rem);
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.moreDropDown_wrapper .moreDropDown_button.moreDropDown_bordered {
  border: 0.0625rem solid #d8dbe0;
}
.questionComponent_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.25rem;
  padding: 0.375rem;
  border-radius: 0.5rem;
  background-color: #fff;
  position: relative;
}
.questionComponent_wrapper .questionComponent_title_wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}

.questionComponent_question_number {
  margin-left: 0.5rem;
}
.questionComponent_title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.questionComponent_styled_title {
  display: inline-flex;
}
.questionComponent_title p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 2.5rem;
}
.questionComponent_wrapper .questionComponent_actions_wrapper {
  background-color: #fff;
  padding: 0.25rem 0.5rem;
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
}
.questionComponent_action_button {
  display: none;
}
.questionComponent_icon {
  display: flex;
  align-items: center;
  margin-left: 0.25rem;
}
.questionComponent_icon svg {
  stroke: none;
}
.questionComponent_icon svg g path:nth-child(2) {
  fill: #5a5e66;
}
.questionComponent_more_dropdown_button {
  display: none;
}
.questionComponent_actions_wrapper.questionComponent_ltr {
  left: unset;
  right: 0;
}
.questionComponent_actions_wrapper.questionComponent_ltr
  .questionComponent_icon {
  margin-left: unset !important;
  margin-right: 0.25rem;
}
.questionComponent_wrapper.questionComponent_ltr
  .questionComponent_title_wrapper
  .questionComponent_question_number {
  margin-left: 0;
  margin-right: 0.5rem;
}
.questionComponent_wrapper:hover {
  cursor: pointer;
  background-color: #f7f8fa;
}
.questionComponent_wrapper:hover .questionComponent_title_wrapper {
  width: calc(100% - 3rem);
}
.questionComponent_wrapper:hover .questionComponent_actions_wrapper {
  display: flex;
  background-color: #f7f8fa;
}
.questionComponent_wrapper:hover
  .questionComponent_actions_wrapper
  .questionComponent_action_button {
  height: 1.375rem;
  border: 1px solid #d8dbe0;
  margin-left: 0.5rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.questionComponent_wrapper:hover
  .questionComponent_actions_wrapper
  .questionComponent_action_button
  .questionComponent_icon {
  margin-left: 0.25rem;
  display: flex;
}
.questionComponent_wrapper:hover
  .questionComponent_actions_wrapper
  .questionComponent_action_button:hover {
  background-color: #3b368e;
  color: #fff;
}
.questionComponent_wrapper:hover
  .questionComponent_actions_wrapper
  .questionComponent_action_button:hover
  .questionComponent_icon {
  margin-left: 0.25rem;
  display: flex;
}
.questionComponent_wrapper:hover
  .questionComponent_actions_wrapper
  .questionComponent_action_button:hover
  .questionComponent_icon
  svg {
  stroke: #fff;
}
.questionComponent_wrapper:hover
  .questionComponent_actions_wrapper
  .questionComponent_action_button:hover
  .questionComponent_icon.questionComponent_computation
  svg {
  stroke: none;
}
.questionComponent_wrapper:hover
  .questionComponent_actions_wrapper
  .questionComponent_action_button:hover
  .questionComponent_icon.questionComponent_computation
  svg
  g
  path:nth-child(2) {
  fill: #fff;
}
.questionComponent_wrapper:hover
  .questionComponent_actions_wrapper
  .questionComponent_more_dropdown_button {
  display: block;
}
.questionComponent_wrapper:hover
  .questionComponent_actions_wrapper.questionComponent_ltr
  .questionComponent_action_button {
  margin-left: unset;
  margin-right: 0.5rem;
}
@media (max-width: 1024px) {
  .questionComponent_wrapper .questionComponent_title_wrapper {
    width: calc(100% - 5rem);
  }
  .questionComponent_wrapper .questionComponent_actions_wrapper {
    background-color: transparent;
  }
  .questionComponent_wrapper
    .questionComponent_actions_wrapper
    .questionComponent_more_dropdown_button {
    display: block;
  }
  .questionComponent_wrapper:hover {
    background-color: unset;
  }
  .questionComponent_wrapper:hover
    .questionComponent_actions_wrapper
    .questionComponent_action_button {
    display: none;
  }
}
.questionsList_wrapper {
  background: #fff;
  width: calc(100% - 25rem);
  height: calc(100vh - 3rem);
  box-sizing: border-box;
  padding: 0 1.5rem 1.5rem;
  position: relative;
  overflow: auto;
}
.questionsList_wrapper::-webkit-scrollbar {
  width: 1.5rem;
}
.questionsList_wrapper::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem 0.5rem transparent;
}
.questionsList_wrapper::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem 0.5rem #f0f2f5;
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  min-height: 2rem;
}
.questionsList_wrapper .drag_and_drop {
  min-height: 3rem;
}
.questionsList_welcome_wrapper {
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
}
.questionsList_welcome_wrapper .questionsList_droppable {
  pointer-events: auto;
  cursor: pointer;
  opacity: 1;
}
.questionsList_questions_list_wrapper .drag_and_drop {
  padding-bottom: 0.25rem;
}

.questionsList_questions_list {
  position: relative;
}

.questionsList_question {
  padding-bottom: 0.25rem;
  direction: rtl;
  z-index: 5;
}
.questionsList_question.questionsList_ltr {
  direction: ltr;
}
.questionsList_wrapper .questionsList_appreciation_pages_list {
  margin-top: 2.5rem;
  position: relative;
}
@media (max-width: 900px) {
  .questionsList_wrapper {
    height: calc(100 * var(--vh, 1vh) - 9rem);
  }
}
@media (max-width: 1024px) {
  .questionsList_wrapper {
    width: 100%;
    padding: 1rem;
    height: calc(100 * var(--vh, 1vh) - 6rem);
  }
  .questionsList_wrapper .questionsList_appreciation_pages_list {
    margin-bottom: 7rem;
  }
}
.dropHerePlaceholder_drop_here_placeholder {
  height: 3rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f8fa;
  border-radius: 0.5rem;
  color: #6b7079;
  margin-bottom: 0.25rem;
  position: relative;
}
.dropHerePlaceholder_close_icon {
  position: absolute;
  left: 0;
  cursor: pointer;
}
.dropHerePlaceholder_close_icon svg {
  display: block;
}

.dropHerePlaceholder_close_icon svg path {
  stroke: #6b7079;
}
.dropHerePlaceholder_drop_here_placeholder.dropHerePlaceholder_ltr
  .dropHerePlaceholder_drop_here_icon {
  transform: scaleX(-1);
}
.dropHerePlaceholder_drop_here_placeholder.dropHerePlaceholder_ltr
  .dropHerePlaceholder_close_icon {
  left: unset;
  right: 0;
}
.dropHerePlaceholder_drop_here_placeholder .dropHerePlaceholder_drop_here_icon {
  margin: 0 0.125rem;
}
.dropHerePlaceholder_drop_here_placeholder
  .dropHerePlaceholder_drop_here_icon
  svg {
  display: block;
}
.dropHerePlaceholder_drop_here_placeholder.dropHerePlaceholder_add_on_click {
  background-color: transparent;
  height: 3rem;
  border: 0.0625rem dashed #bbbcc0;
  border-radius: 0.5rem;
  color: #3e434d;
  cursor: pointer;
}
.dropHerePlaceholder_drop_here_placeholder.dropHerePlaceholder_add_on_click:hover {
  background-color: #f7f8fa;
}
.dropHerePlaceholder_drop_here_placeholder.dropHerePlaceholder_add_on_click
  svg
  path:last-child {
  stroke: #3e434d;
}
@media (max-width: 1024px) {
  .dropHerePlaceholder_drop_here_placeholder {
    background-color: transparent;
    height: 3rem;
    border: 0.0625rem dashed #bbbcc0;
    border-radius: 0.5rem;
    color: #3e434d;
  }
  .dropHerePlaceholder_drop_here_placeholder div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.bulkActionsHeader_bulk_actions_header {
  position: fixed;
  top: 3rem;
  width: 100%;
  height: 3rem;
  background-color: #fff;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  z-index: 1;
  margin-right: -1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0.875rem;
  transition: 0.4s ease-in-out;
}
.bulkActionsHeader_bulk_actions_header.bulkActionsHeader_hide {
  top: 0;
}
.bulkActionsHeader_bulk_actions_header .bulkActionsHeader_icon {
  width: 2.5rem;
  height: 2rem;
  margin: 0 0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.bulkActionsHeader_bulk_actions_header .bulkActionsHeader_icon svg {
  display: block;
}
.bulkActionsHeader_bulk_actions_header
  .bulkActionsHeader_icon.bulkActionsHeader_delete
  svg {
  transform: scale(1.5);
}
.buildMain_wrapper {
  min-height: calc(100% - 3rem);
  display: flex;
  width: 100%;
}
.buildMain_wrapper .buildMain_new_question_modal_button {
  display: none;
}
@media (max-width: 1024px) {
  .buildMain_wrapper {
    position: relative;
  }
  .buildMain_wrapper .buildMain_new_question_modal_button {
    position: fixed;
    background-color: #3b368e;
    color: #fff;
    border-radius: 0.25rem;
    padding: 0.75rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 2rem;
    left: 1.5rem;
  }
  .buildMain_wrapper .buildMain_new_question_modal_button svg path:last-child {
    stroke: #fff;
  }
  .buildMain_wrapper .buildMain_new_question_modal_button.buildMain_ltr {
    left: unset;
    right: 1rem;
  }
}
</style>
