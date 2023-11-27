<script setup lang="ts">
import WelcomeIcon from "@/components/survey/icons/WelcomeIcon.vue";
import ShortTextIcon from "@/components/survey/icons/ShortTextIcon.vue";
import MultipleChoiceIcon from "@/components/survey/icons/MultipleChoiceIcon.vue";
import LongTextIcon from "@/components/survey/icons/LongTextIcon.vue";
import PictureChoiceIcon from "@/components/survey/icons/PictureChoiceIcon.vue";
import QuestionGroupIcon from "@/components/survey/icons/QuestionGroupIcon.vue";
import DropdownIcon from "@/components/survey/icons/DropdownIcon.vue";
import NumericalAnswerIcon from "@/components/survey/icons/NumericalAnswerIcon.vue";
import OpinionScaleIcon from "@/components/survey/icons/OpinionScaleIcon.vue";
import EmailIcon from "@/components/survey/icons/EmailIcon.vue";
import RatingIcon from "@/components/survey/icons/RatingIcon.vue";
import LinkWebsiteIcon from "@/components/survey/icons/LinkWebsiteIcon.vue";
import RankingIcon from "@/components/survey/icons/RankingIcon.vue";
import StatementIcon from "@/components/survey/icons/StatementIcon.vue";
import FileUploadIcon from "@/components/survey/icons/FileUploadIcon.vue";
import PaymentIcon from "@/components/survey/icons/PaymentIcon.vue";
import MatrixIcon from "@/components/survey/icons/MatrixIcon.vue";
import EndingsIcon from "@/components/survey/icons/EndingsIcon.vue";
import CalculatedVariablesIcon from "@/components/survey/icons/CalculatedVariablesIcon.vue";
import CustomVariablesIcon from "@/components/survey/icons/CustomVariablesIcon.vue";

import QuestionMaker from "@/components/question/QuestionMaker.vue";
// const QuestionMaker = defineAsyncComponent(() => import("@/components/question/QuestionMaker.vue"))

import { useRouter, useRoute } from "vue-router";
import { QuestionType } from "@/types/store/question";

type SurveyButton = {
  title: string;
  component: unknown;
  fullWidth: boolean;
  type: QuestionType;
};

const buttons: SurveyButton[] = [
  {
    title: "Welcome page",
    component: WelcomeIcon,
    fullWidth: true,
    type: "welcome",
  },
  {
    title: "Short Text",
    component: ShortTextIcon,
    fullWidth: false,
    type: "shortText",
  },
  {
    title: "Multiple Choice",
    component: MultipleChoiceIcon,
    fullWidth: false,
    type: "multipleChoice",
  },
  {
    title: "Long Text",
    component: LongTextIcon,
    fullWidth: false,
    type: "longText",
  },
  {
    title: "Picture Choice",
    component: PictureChoiceIcon,
    fullWidth: false,
    type: "pictureChoice",
  },
  {
    title: "Question Group",
    component: QuestionGroupIcon,
    fullWidth: false,
    type: "questionGroup",
  },
  {
    title: "Dropwdown",
    component: DropdownIcon,
    fullWidth: false,
    type: "dropdown",
  },
  {
    title: "Numerical Answer",
    component: NumericalAnswerIcon,
    fullWidth: false,
    type: "numerical",
  },
  {
    title: "Opinion Scale",
    component: OpinionScaleIcon,
    fullWidth: false,
    type: "opinionScale",
  },
  {
    title: "Email",
    component: EmailIcon,
    fullWidth: false,
    type: "email",
  },
  {
    title: "Rating",
    component: RatingIcon,
    fullWidth: false,
    type: "rating",
  },
  {
    title: "Link Website",
    component: LinkWebsiteIcon,
    fullWidth: false,
    type: "linkWeb",
  },
  {
    title: "Ranking",
    component: RankingIcon,
    fullWidth: false,
    type: "ranking",
  },
  {
    title: "Statement",
    component: StatementIcon,
    fullWidth: false,
    type: "statement",
  },
  {
    title: "File Upload",
    component: FileUploadIcon,
    fullWidth: false,
    type: "fileUpload",
  },
  {
    title: "Payment",
    component: PaymentIcon,
    fullWidth: false,
    type: null,
  },
  {
    title: "Matrix",
    component: MatrixIcon,
    fullWidth: false,
    type: null,
  },
  {
    title: "Endings",
    component: EndingsIcon,
    fullWidth: true,
    type: "endings",
  },
];

const bottomButtons = [
  {
    title: "Custom Variables",
    component: CustomVariablesIcon,
    type: null,
  },
  {
    title: "Calculated Variables",
    component: CalculatedVariablesIcon,
    type: null,
  },
];

const router = useRouter();
const route = useRoute();

const addParam = (title: QuestionType) => {
  router.push({
    name: "Survey.Build",
    params: route.params,
    query: { type: title },
  });
};
</script>

<template>
  <div class="ptr">
    <div class="ptr__children">
      <div class="buildMain_wrapper__txnsx">
        <div
          class="questionsTypesList_wrapper__ZpLGJ questionsTypesList_ltr__Z0TqO"
        >
          <div
            data-react-beautiful-dnd-droppable="4"
            style="pointer-events: auto"
          >
            <div v-for="(btn, index) in buttons" :key="index">
              <div
                @click="addParam(btn.type)"
                data-react-beautiful-dnd-draggable="4"
                tabindex="0"
                data-react-beautiful-dnd-drag-handle="4"
                aria-roledescription="Draggable item. Press space bar to lift"
                draggable="false"
                class="questionsTypesList_question_type__476hn questionsTypesList_ltr__Z0TqO questionsTypesList_translate_zero__IHjmN"
                :class="{ questionsTypesList_full_width__pFODE: btn.fullWidth }"
              >
                <component :is="btn.component"></component>
                <div class="questionsTypesList_name__o2b3D">
                  {{ btn.title }}
                </div>
              </div>
            </div>
            <div class="questionsTypesList_provided_placeholder__Y0aOz"></div>
          </div>
          <div
            class="questionsTypesList_variables_and_in_app_message_wrapper__mmjWr"
          >
            <div class="questionsTypesList_variables__VXEhg">
              <div
                v-for="(btn, index) in bottomButtons"
                :key="index"
                class="questionsTypesList_variable__0pjbr questionsTypesList_ltr__Z0TqO"
              >
                <div class="questionsTypesList_icon_and_title__jClBm">
                  <component :is="btn.component"></component>
                  {{ btn.title }}
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h16v16H0z"></path>
                    <path
                      stroke="#3E434D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.25 12.5 5.75 8l4.5-4.5"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="questionsList_wrapper__AaFrc">
          <div
            class="questionsList_welcome_wrapper__Vq7wD questionsList_empty__JIwpm"
          >
            <div
              class="questionsList_droppable__cWD_h false"
              data-react-beautiful-dnd-droppable="4"
            >
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h24v24H0z"></path>
                    <path
                      d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 1-1z"
                      fill="#3E434D"
                    ></path>
                  </g>
                </svg>
                <div class="questionsList_text__m9oDX">Welcome Page</div>
              </div>
            </div>
          </div>
          <div class="questionsList_questions_list_wrapper__L6jFw">
            <div class="questionsList_questions_list__15XoV undefined">
              <div data-react-beautiful-dnd-droppable="4">
                <div
                  class="questionsList_empty_provided_placholder__8Kk_P"
                ></div>
              </div>
              <div class="questionsList_empty_survey_container__wL6zF">
                <div class="questionsList_empty_survey_box__1KFAs null"></div>
                <div class="questionsList_empty_survey_placeholder__KBtgK">
                  Drag and drop questions here.
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path d="M0 0h24v24H0z"></path>
                        <g
                          stroke="#6B7079"
                          stroke-linecap="round"
                          stroke-width="2"
                        >
                          <path d="M22 16c-9 0-11-4-11-14"></path>
                          <path
                            stroke-linejoin="round"
                            d="m15 6-4-4-4 4"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="questionsList_appreciation_pages_list__D__gY">
            <div
              data-react-beautiful-dnd-droppable="4"
              style="min-height: 52px"
            >
              <div
                class="dropHerePlaceholder_drop_here_placeholder__mCdLf dropHerePlaceholder_add_on_click__I_ZZN undefined false dropHerePlaceholder_ltr__Mwv9S"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h24v24H0z"></path>
                    <path
                      d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 1-1z"
                      fill="#3E434D"
                    ></path>
                  </g>
                </svg>
                <div>Endings</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="buildMain_new_question_modal_button__7GbOa buildMain_ltr__Qz_0d"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h24v24H0z"></path>
              <path
                d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 1-1z"
                fill="#3E434D"
              ></path>
            </g>
          </svg>
          <div class="buildMain_text__AsezH">Add question</div>
        </div>
      </div>
    </div>
  </div>
  <QuestionMaker
    :open="!!route.query?.type"
    :type="route.query?.type as QuestionType ?? null"
    @close="router.push({ name: 'Survey.Build', params: route.params })"
  />
</template>

<style scoped>
* {
  box-sizing: content-box;
}

.ptr__pull-down--pull-more div p {
  display: none;
}
.questionsTypesList_wrapper__ZpLGJ {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100 * 1vh - 3rem);
  overflow-y: scroll;
  overflow-x: hidden;
  flex-shrink: 0;
  padding-right: 1.5rem;
  box-sizing: border-box;
  min-width: 26rem;
  scrollbar-color: #bbbcc0 transparent;
  scrollbar-width: thin;
}

.questionsTypesList_wrapper__ZpLGJ::-webkit-scrollbar {
  width: 1.5rem;
}

.questionsTypesList_wrapper__ZpLGJ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem 0.5rem transparent;
}

.questionsTypesList_wrapper__ZpLGJ::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem 0.5rem #f0f2f5;
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  min-height: 2rem;
}

.questionsTypesList_wrapper__ZpLGJ.questionsTypesList_ltr__Z0TqO {
  padding-left: 1.5rem;
  padding-right: 0;
}

.questionsTypesList_wrapper__ZpLGJ::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem 0.5rem #d8dbe0;
}

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_provided_placeholder__Y0aOz {
  height: 0 !important;
  overflow: hidden;
}

.questionsTypesList_wrapper__ZpLGJ > [data-react-beautiful-dnd-droppable] {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  width: 23rem;
  padding: 1rem 0;
  color: #3e434d;
}

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_variables_and_in_app_message_wrapper__mmjWr {
  flex-direction: column-reverse;
  height: 100%;
  justify-content: space-between;
  display: flex;
}

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_variables_and_in_app_message_wrapper__mmjWr
  .questionsTypesList_variables__VXEhg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23rem;
}

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_variables_and_in_app_message_wrapper__mmjWr
  .questionsTypesList_variables__VXEhg
  .questionsTypesList_variable__0pjbr {
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

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_variables_and_in_app_message_wrapper__mmjWr
  .questionsTypesList_variables__VXEhg
  .questionsTypesList_variable__0pjbr
  .questionsTypesList_icon_and_title__jClBm {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  color: #3e434d;
}

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_variables_and_in_app_message_wrapper__mmjWr
  .questionsTypesList_variables__VXEhg
  .questionsTypesList_variable__0pjbr
  .questionsTypesList_icon_and_title__jClBm
  .questionsTypesList_icon__Klvg9 {
  background-color: #3e434d;
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 0.5rem;
}

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_variables_and_in_app_message_wrapper__mmjWr
  .questionsTypesList_variables__VXEhg
  .questionsTypesList_variable__0pjbr
  .questionsTypesList_icon_and_title__jClBm
  .questionsTypesList_icon__Klvg9.questionsTypesList_ltr__Z0TqO {
  margin-right: 0.5rem;
  margin-left: 0 !important;
}

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_variables_and_in_app_message_wrapper__mmjWr
  .questionsTypesList_variables__VXEhg
  .questionsTypesList_variable__0pjbr
  .questionsTypesList_icon_and_title__jClBm
  .questionsTypesList_icon__Klvg9.questionsTypesList_computational_variable_icon__Omrzq
  svg {
  transform: rotate(0deg) !important;
}

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_variables_and_in_app_message_wrapper__mmjWr
  .questionsTypesList_variables__VXEhg
  .questionsTypesList_variable__0pjbr.questionsTypesList_ltr__Z0TqO {
  margin-right: 0.25rem;
  font-size: 12px !important;
}

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_variables_and_in_app_message_wrapper__mmjWr
  .questionsTypesList_variables__VXEhg
  .questionsTypesList_variable__0pjbr.questionsTypesList_ltr__Z0TqO
  svg {
  transform: rotate(180deg);
}

.questionsTypesList_wrapper__ZpLGJ .questionsTypesList_question_type__476hn {
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

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_question_type__476hn:hover {
  box-shadow: 0 0.25rem 0.5rem 0.125rem rgba(0, 0, 0, 0.15);
}

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_question_type__476hn
  .questionsTypesList_name__o2b3D {
  margin-right: 0.5rem;
}

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_question_type__476hn.questionsTypesList_ltr__Z0TqO
  .questionsTypesList_name__o2b3D {
  margin-right: 0;
  margin-left: 0.5rem;
}

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_question_type__476hn.questionsTypesList_translate_zero__IHjmN {
  transform: translate(0) !important;
}

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_question_type__476hn.questionsTypesList_full_width__pFODE {
  width: 22rem;
  justify-content: center;
}

.questionsTypesList_wrapper__ZpLGJ
  .questionsTypesList_question_type__476hn:hover {
  cursor: pointer;
}

@media (max-width: 1024px) {
  .questionsTypesList_wrapper__ZpLGJ {
    width: 100%;
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

  .questionsTypesList_wrapper__ZpLGJ::-webkit-scrollbar {
    width: 0;
  }

  .questionsTypesList_wrapper__ZpLGJ .questionsTypesList_question_type__476hn {
    width: calc(50% - 1rem);
  }

  .questionsTypesList_wrapper__ZpLGJ
    .questionsTypesList_question_type__476hn.questionsTypesList_full_width__pFODE {
    width: calc(100% - 1rem);
  }

  .questionsTypesList_wrapper__ZpLGJ
    .questionsTypesList_variables_and_in_app_message_wrapper__mmjWr {
    all: unset;
    flex-direction: column;
    width: 100%;
  }

  .questionsTypesList_wrapper__ZpLGJ
    .questionsTypesList_variables_and_in_app_message_wrapper__mmjWr
    .questionsTypesList_variables__VXEhg {
    flex-direction: column;
    width: 100%;
  }

  .questionsTypesList_wrapper__ZpLGJ
    .questionsTypesList_variables_and_in_app_message_wrapper__mmjWr
    .questionsTypesList_variables__VXEhg
    .questionsTypesList_variable__0pjbr {
    border-radius: 0.5rem;
    width: calc(100% - 1rem);
    margin-bottom: 1rem;
  }

  .questionsTypesList_wrapper__ZpLGJ
    .questionsTypesList_variables_and_in_app_message_wrapper__mmjWr
    .questionsTypesList_variables__VXEhg
    .questionsTypesList_variable__0pjbr:last-child {
    margin-bottom: 1.5rem;
  }
}

.questionsList_wrapper__AaFrc {
  background: #fff;
  width: calc(100% - 25rem);
  height: calc(100 * 1vh - 3rem);
  box-sizing: border-box;
  padding: 0 1.5rem 1.5rem;
  position: relative;
  overflow: auto;
}

.questionsList_wrapper__AaFrc::-webkit-scrollbar {
  width: 1.5rem;
}

.questionsList_wrapper__AaFrc::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem 0.5rem transparent;
}

.questionsList_wrapper__AaFrc::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem 0.5rem #f0f2f5;
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  min-height: 2rem;
}

.questionsList_wrapper__AaFrc [data-react-beautiful-dnd-droppable] {
  min-height: 3rem;
}

.questionsList_wrapper__AaFrc .questionsList_empty_provided_placholder__8Kk_P {
  height: 0;
  overflow: hidden;
}

.questionsList_wrapper__AaFrc
  .questionsList_empty_survey_container__wL6zF
  .questionsList_empty_survey_box__1KFAs {
  border: 0.0625rem dashed #bbbcc0;
  height: 3rem;
  border-radius: 0.5rem;
  top: -0.0625rem;
  right: 0;
  left: 0;
  position: absolute;
}

.questionsList_wrapper__AaFrc
  .questionsList_empty_survey_container__wL6zF
  .questionsList_empty_survey_placeholder__KBtgK {
  color: #6b7079;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin-top: 0;
}

.questionsList_wrapper__AaFrc
  .questionsList_empty_survey_container__wL6zF
  .questionsList_empty_survey_placeholder__KBtgK
  svg {
  display: block;
  margin: 0 0.125rem;
}

.questionsList_wrapper__AaFrc .questionsList_welcome_wrapper__Vq7wD {
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
}

.questionsList_wrapper__AaFrc
  .questionsList_welcome_wrapper__Vq7wD
  .questionsList_droppable__cWD_h {
  pointer-events: auto;
  cursor: pointer;
  opacity: 1;
}

.questionsList_wrapper__AaFrc
  .questionsList_welcome_wrapper__Vq7wD.questionsList_empty__JIwpm {
  border: 0.0625rem dashed #bbbcc0;
  border-radius: 0.5rem;
  color: #3e434d;
}

.questionsList_wrapper__AaFrc
  .questionsList_welcome_wrapper__Vq7wD.questionsList_empty__JIwpm:hover {
  background-color: #f7f8fa;
}

.questionsList_wrapper__AaFrc
  .questionsList_welcome_wrapper__Vq7wD.questionsList_empty__JIwpm
  > div {
  height: 3rem;
  position: relative;
}

.questionsList_wrapper__AaFrc
  .questionsList_welcome_wrapper__Vq7wD.questionsList_empty__JIwpm
  > div
  > div {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 100%;
}

.questionsList_wrapper__AaFrc
  .questionsList_welcome_wrapper__Vq7wD.questionsList_empty__JIwpm
  svg
  path:last-child {
  stroke: #3e434d;
}

.questionsList_wrapper__AaFrc
  .questionsList_questions_list_wrapper__L6jFw
  [data-react-beautiful-dnd-droppable] {
  padding-bottom: 0.25rem;
}

.questionsList_wrapper__AaFrc
  .questionsList_questions_list_wrapper__L6jFw
  .questionsList_questions_list__15XoV {
  position: relative;
}

.questionsList_wrapper__AaFrc .questionsList_appreciation_pages_list__D__gY {
  margin-top: 2.5rem;
  position: relative;
}

@media (max-width: 900px) {
  .questionsList_wrapper__AaFrc {
    height: calc(100 * 1vh - 9rem);
  }
}

@media (max-width: 1024px) {
  .questionsList_wrapper__AaFrc {
    width: 100%;
    padding: 1rem;
    height: calc(100 * 1vh - 6rem);
  }

  .questionsTypesList_wrapper__ZpLGJ.questionsTypesList_ltr__Z0TqO {
    display: none;
  }

  .questionsList_wrapper__AaFrc .questionsList_appreciation_pages_list__D__gY {
    margin-bottom: 7rem;
  }
}

.dropHerePlaceholder_drop_here_placeholder__mCdLf {
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

.dropHerePlaceholder_drop_here_placeholder__mCdLf.dropHerePlaceholder_add_on_click__I_ZZN {
  background-color: transparent;
  height: 3rem;
  border: 0.0625rem dashed #bbbcc0;
  border-radius: 0.5rem;
  color: #3e434d;
  cursor: pointer;
}

.dropHerePlaceholder_drop_here_placeholder__mCdLf.dropHerePlaceholder_add_on_click__I_ZZN:hover {
  background-color: #f7f8fa;
}

.dropHerePlaceholder_drop_here_placeholder__mCdLf.dropHerePlaceholder_add_on_click__I_ZZN
  svg
  path:last-child {
  stroke: #3e434d;
}

@media (max-width: 1024px) {
  .dropHerePlaceholder_drop_here_placeholder__mCdLf {
    background-color: transparent;
    height: 3rem;
    border: 0.0625rem dashed #bbbcc0;
    border-radius: 0.5rem;
    color: #3e434d;
  }

  .dropHerePlaceholder_drop_here_placeholder__mCdLf div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.buildMain_wrapper__txnsx {
  min-height: calc(100% - 6rem);
  display: flex;
  width: 100%;
}

.buildMain_wrapper__txnsx .buildMain_editor_wrapper__kNTHz,
.buildMain_wrapper__txnsx .buildMain_new_question_modal_button__7GbOa {
  display: none;
}

@media (max-width: 1024px) {
  .buildMain_wrapper__txnsx {
    position: relative;
  }

  .buildMain_wrapper__txnsx .buildMain_new_question_modal_button__7GbOa {
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

  .buildMain_wrapper__txnsx
    .buildMain_new_question_modal_button__7GbOa
    svg
    path:last-child {
    stroke: #fff;
  }

  .buildMain_wrapper__txnsx
    .buildMain_new_question_modal_button__7GbOa
    .buildMain_text__AsezH {
    margin-right: 0.25rem;
  }

  .buildMain_wrapper__txnsx
    .buildMain_new_question_modal_button__7GbOa.buildMain_ltr__Qz_0d {
    left: unset;
    right: 1rem;
  }
}

/*! CSS Used from: Embedded ; media=x */
@media x {
  .questionNumber_question_number_wrapper__eCXI_ {
    display: flex;
    justify-content: center;
    padding: 0 0.25rem 0 0.5rem;
    height: 2rem;
    grid-gap: 0.125rem;
    align-items: center;
    font-weight: 700;
    border-radius: 0.25rem;
  }

  .questionNumber_question_number_wrapper__eCXI_ .questionNumber_icon__nsjC6 {
    display: flex;
  }

  .questionNumber_question_number_wrapper__eCXI_
    .questionNumber_icon__nsjC6
    svg {
    vertical-align: middle;
  }

  .questionNumber_question_number_wrapper__eCXI_.questionNumber_ltr__n8kqK {
    padding: 0 0.5rem 0 0.25rem;
  }

  .questionNumber_question_number_wrapper__eCXI_.questionNumber_without_number__wzBhB {
    height: 2rem;
    min-width: 2rem;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .questionNumber_question_number_wrapper__eCXI_.questionNumber_without_number__wzBhB.questionNumber_ltr__n8kqK {
    padding: 0 !important;
  }

  .questionNumber_welcome__AtnYQ {
    background: #d8dbe0;
  }

  .questionNumber_welcome__AtnYQ.questionNumber_ltr__n8kqK
    .questionNumber_icon__nsjC6
    svg {
    transform: rotate(180deg);
  }

  .questionNumber_long_text_question__DBdLS {
    background: #c1d8ff;
  }

  .questionNumber_short_text_question___ITk5 {
    background: #bbc5f9;
  }

  .questionNumber_number_question__6yM8E {
    background: #ffa4a4;
  }

  .questionNumber_email_question__TSDOB {
    background: #f2adc1;
  }

  .questionNumber_link_question__9HK67 {
    background: #b0e8ff;
  }

  .questionNumber_multiple_choice_question__Qb_fe {
    background: #f4bbe1;
  }

  .questionNumber_picture_choice_question___LZMh {
    background: #d8e8a7;
  }

  .questionNumber_statement_question__pm5ku {
    background: #c6edc3;
  }

  .questionNumber_opinion_scale_question__7_QGT {
    background-image: linear-gradient(270deg, #f4bbe1 0, #9ee3ff 99%);
  }

  .questionNumber_rating_question__WxdYy {
    background: #f8e393;
  }

  .questionNumber_group_question__W9Tij {
    background: #d0d6e3;
  }

  .questionNumber_dropdown_question__BL_1f {
    background: #bfeded;
  }

  .questionNumber_ranking_question__Djy9o {
    background: #f8c17f;
  }

  .questionNumber_file_upload_question__7znwY {
    background: #98e3d5;
  }

  .questionNumber_payment_question__QWN7s {
    background: #a5e6bb;
  }

  .questionNumber_matrix_question__cW0YF {
    background: #e9e98a;
  }

  .questionNumber_appreciation__n01FS {
    background: #d8dbe0;
  }

  .questionNumber_appreciation__n01FS.questionNumber_ltr__n8kqK
    .questionNumber_icon__nsjC6
    svg {
    transform: rotate(180deg);
  }
}

/*! CSS Used from: Embedded ; media=x */
@media x {
  .questionNumber_question_number_wrapper__eCXI_ {
    display: flex;
    justify-content: center;
    padding: 0 0.25rem 0 0.5rem;
    height: 2rem;
    grid-gap: 0.125rem;
    align-items: center;
    font-weight: 700;
    border-radius: 0.25rem;
  }

  .questionNumber_question_number_wrapper__eCXI_ .questionNumber_icon__nsjC6 {
    display: flex;
  }

  .questionNumber_question_number_wrapper__eCXI_
    .questionNumber_icon__nsjC6
    svg {
    vertical-align: middle;
  }

  .questionNumber_question_number_wrapper__eCXI_.questionNumber_ltr__n8kqK {
    padding: 0 0.5rem 0 0.25rem;
  }

  .questionNumber_question_number_wrapper__eCXI_.questionNumber_without_number__wzBhB {
    height: 2rem;
    min-width: 2rem;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .questionNumber_question_number_wrapper__eCXI_.questionNumber_without_number__wzBhB.questionNumber_ltr__n8kqK {
    padding: 0 !important;
  }

  .questionNumber_welcome__AtnYQ {
    background: #d8dbe0;
  }

  .questionNumber_welcome__AtnYQ.questionNumber_ltr__n8kqK
    .questionNumber_icon__nsjC6
    svg {
    transform: rotate(180deg);
  }

  .questionNumber_long_text_question__DBdLS {
    background: #c1d8ff;
  }

  .questionNumber_short_text_question___ITk5 {
    background: #bbc5f9;
  }

  .questionNumber_number_question__6yM8E {
    background: #ffa4a4;
  }

  .questionNumber_email_question__TSDOB {
    background: #f2adc1;
  }

  .questionNumber_link_question__9HK67 {
    background: #b0e8ff;
  }

  .questionNumber_multiple_choice_question__Qb_fe {
    background: #f4bbe1;
  }

  .questionNumber_picture_choice_question___LZMh {
    background: #d8e8a7;
  }

  .questionNumber_statement_question__pm5ku {
    background: #c6edc3;
  }

  .questionNumber_opinion_scale_question__7_QGT {
    background-image: linear-gradient(270deg, #f4bbe1 0, #9ee3ff 99%);
  }

  .questionNumber_rating_question__WxdYy {
    background: #f8e393;
  }

  .questionNumber_group_question__W9Tij {
    background: #d0d6e3;
  }

  .questionNumber_dropdown_question__BL_1f {
    background: #bfeded;
  }

  .questionNumber_ranking_question__Djy9o {
    background: #f8c17f;
  }

  .questionNumber_file_upload_question__7znwY {
    background: #98e3d5;
  }

  .questionNumber_payment_question__QWN7s {
    background: #a5e6bb;
  }

  .questionNumber_matrix_question__cW0YF {
    background: #e9e98a;
  }

  .questionNumber_appreciation__n01FS {
    background: #d8dbe0;
  }

  .questionNumber_appreciation__n01FS.questionNumber_ltr__n8kqK
    .questionNumber_icon__nsjC6
    svg {
    transform: rotate(180deg);
  }
}

/*! CSS Used from: Embedded */
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}

.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #363636;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}

/*! CSS Used from: Embedded */
.ptr,
.ptr__children {
  height: 100%;
  width: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
}

.ptr__children,
.ptr__pull-down {
  transition: transform 0.2s cubic-bezier(0, 0, 0.31, 1);
}

.ptr__pull-down {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  visibility: hidden;
}

.ptr__pull-down > div {
  display: none;
}

.ptr__loader {
  margin: 0 auto;
  text-align: center;
}

/*! CSS Used from: https://canarycdn.porsline.com/static/panel/v2/_next/static/css/fae0d74cb8e16e53.css */
.newPipedTextInput_pipe_with_dropdown_toggle__lqrEA {
  display: flex;
  align-items: center;
}

.newPipedTextInput_pipe_with_dropdown_toggle__lqrEA
  .newPipedTextInput_piping_helper_text__SzvxU {
  font-size: 12px;
  color: #6b7079;
  margin-top: 0.25rem;
}

.newPipedTextInput_pipe_with_dropdown_toggle__lqrEA
  .newPipedTextInput_piping_helper_text__SzvxU:hover {
  cursor: pointer;
}

.newPipedTextInput_pipe_with_dropdown_toggle__lqrEA
  .newPipedTextInput_icon__yOCYK {
  display: flex;
  align-items: center;
  padding-top: 0.25rem;
  cursor: pointer;
}

.newPipedTextInput_pipe_with_dropdown_toggle__lqrEA
  .newPipedTextInput_icon__yOCYK
  svg {
  height: 1.25rem;
}

.newPipedTextInput_dropdown_wrapper__8nWQk {
  position: relative;
  list-style: none;
}

@media (max-width: 1024px) {
  .newPipedTextInput_dropdown_wrapper__8nWQk,
  .newPipedTextInput_dropdown_wrapper__8nWQk:focus {
    outline: none;
  }
}

/*! CSS Used from: Embedded */
[data-react-beautiful-dnd-drag-handle="4"] {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  touch-action: manipulation;
}

[data-react-beautiful-dnd-droppable="4"] {
  overflow-anchor: none;
}

/*! CSS Used from: Embedded */
[data-react-beautiful-dnd-drag-handle="4"] {
  cursor: grab;
}

/*! CSS Used keyframes */
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
