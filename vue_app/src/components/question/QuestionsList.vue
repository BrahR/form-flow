<script setup lang="ts">
import QuestionBar from "@/components/question/QuestionBar.vue";

import { useQuestionStore } from "@/store/question";

const useQuestion = useQuestionStore();
</script>

<template>
  <div class="questionsList_wrapper__AaFrc">
    <div
      class="questionsList_welcome_wrapper__Vq7wD questionsList_empty__JIwpm"
    >
      <div class="questionsList_droppable__cWD_h false">
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
      <div
        class="bulkActionsHeader_bulk_actions_header__9qM_1 bulkActionsHeader_hide__jnTFm"
      >
        <div class="bulkActionsHeader_icon__2hHSK">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <g fill="none" fill-rule="evenodd">
              <g>
                <g>
                  <g>
                    <path
                      stroke="#3E434D"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M30 18L18 30M18 18L30 30"
                      transform="translate(-1152.000000, -306.000000) translate(232.000000, 302.000000) translate(920.000000, 4.000000)"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div
          class="bulkActionsHeader_icon__2hHSK"
          data-tooltip-id="move-to"
          data-tooltip-content="Move to question group"
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
                d="M2 7h6a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 4h6a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zM13 4h1a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
                fill="#3E434D"
              ></path>
              <g
                stroke="#3E434D"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19.5 14.5 17 12l2.5-2.5"></path>
                <path d="M18 12h5V8"></path>
              </g>
            </g>
          </svg>
        </div>
        <div
          class="bulkActionsHeader_icon__2hHSK"
          data-tooltip-id="move-out"
          data-tooltip-content="Remove from question group"
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
                d="M2 7h6a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 4h6a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zM13 4h1a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
                fill="#3E434D"
              ></path>
              <g
                stroke="#3E434D"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20.5 14.5 23 12l-2.5-2.5M22 12h-5"></path>
              </g>
            </g>
          </svg>
        </div>
        <div
          class="bulkActionsHeader_icon__2hHSK bulkActionsHeader_delete__J5Cqa"
          data-tooltip-id="delete"
          data-tooltip-content="Delete"
        >
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h16v16H0z"></path>
              <path
                d="M9 .833a1.5 1.5 0 0 1 1.493 1.356l.007.144V3H13a.5.5 0 0 1 .09.992L13 4h-.5v8.75c0 .907-.65 1.666-1.5 1.744l-.143.006H5.143c-.87 0-1.566-.712-1.637-1.6l-.006-.15V4H3a.5.5 0 0 1-.09-.992L3 3h2.5v-.667A1.5 1.5 0 0 1 6.856.84L7 .833h2zM11.5 4h-7v8.75c0 .388.25.695.558.743l.085.007h5.714c.316 0 .593-.274.637-.646l.006-.104V4zM9 1.833H7a.5.5 0 0 0-.492.41l-.008.09V3h3v-.667a.5.5 0 0 0-.41-.492L9 1.833z"
                fill="#3E434D"
                fill-rule="nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div class="questionsList_questions_list__15XoV false">
        <div data-react-beautiful-dnd-droppable="0">
          <QuestionBar
            v-for="question in useQuestion.data.filter(
              (question) => !['Welcome'].includes(question.questionable.type)
            )"
            :key="question.id"
            :question="question"
          />
          <!-- <div
            class="questionsList_question__P0Pyw questionsList_ltr__kky6C"
            data-react-beautiful-dnd-draggable="0"
            tabindex="0"
            data-react-beautiful-dnd-drag-handle="0"
            aria-roledescription="Draggable item. Press space bar to lift"
            draggable="false"
          >
            <div class="0 0 false questionsList_ltr__kky6C">
              <div
                class="questionComponent_wrapper__nqbcA questionComponent_ltr__w3iIm false"
              >
                <div class="questionComponent_title_wrapper__xBaLc false">
                  <div class="questionComponent_question_number__br1P8">
                    <div
                      class="questionNumber_question_number_wrapper__eCXI_ questionNumber_multiple_choice_question__Qb_fe false questionNumber_ltr__n8kqK questionNumber_flip__rDXRs"
                    >
                      <div class="questionNumber_icon__nsjC6">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 13a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4zm-8.5 3a.5.5 0 1 1 0 1h-8a.5.5 0 1 1 0-1h8zM18 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11.5 8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1 0-1h8z"
                            fill="#3E434D"
                            fill-rule="nonzero"
                          ></path>
                        </svg>
                      </div>
                      <div class="questionNumber_question_number_text__MJfAs">
                        2
                      </div>
                    </div>
                  </div>
                  <div class="questionComponent_required_icon__vkROU">*</div>
                  <div class="questionComponent_title__9LpMC">
                    <div
                      class="styled-question-title questionComponent_styled_title__NrRLu"
                    >
                      <p>Hi</p>
                    </div>
                  </div>
                </div>
                <div
                  class="questionComponent_actions_wrapper__HQ_yX questionComponent_ltr__w3iIm"
                >
                  <div class="questionComponent_action_button__IYgbj">
                    <div
                      class="questionComponent_icon__EQsPj questionComponent_computation__8Uk0j"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <title>variable</title>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Create---add-question"
                            transform="translate(-78.000000, -236.000000)"
                          >
                            <g
                              id="variable"
                              transform="translate(78.000000, 236.000000)"
                            >
                              <rect
                                id="Rectangle"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              ></rect>
                              <path
                                d="M11.4327109,5.00036653 C11.7390329,5.00036653 12.1264401,5.05125251 12.5949326,5.15302449 L12.3967242,6.50898643 C12.1084212,6.44912056 11.8171149,6.41320103 11.5228056,6.40122786 C10.9582121,6.40122786 10.5002306,6.57633553 10.1488613,6.92655086 C9.79749192,7.2767662 9.57976304,7.74222333 9.49567465,8.32292226 L9.35152311,9.28376946 L11.3696446,9.28376946 L11.1444078,10.5678923 L9.12628635,10.5678923 L7.65774262,19 L6.02702841,19 L7.50458161,10.5678923 L6,10.5678923 L6.22523677,9.28376946 L7.72080891,9.28376946 L7.88297938,8.13434477 C8.03914354,7.1585311 8.41754131,6.39524127 9.0181727,5.84447528 C9.64883565,5.26976294 10.4536817,4.98839335 11.4327109,5.00036653 Z M13.387151,11.6350986 L14.9400561,14.2147734 L16.5126183,11.6350986 L17.9279242,11.6350986 L15.608395,15.1290885 L18,18.7014481 L16.5977987,18.7014481 L14.9597131,16.0564652 L13.3216276,18.7014481 L11.912874,18.7014481 L14.3044789,15.1290885 L11.9849497,11.6350986 L13.387151,11.6350986 Z"
                                id="Combined-Shape"
                                fill="#3E434D"
                                fill-rule="nonzero"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    Calculations
                  </div>
                  <div class="questionComponent_action_button__IYgbj">
                    <div class="questionComponent_icon__EQsPj">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3 3.2c.904 0 1.625.75 1.694 1.684l.006.15v7.435l1.817-1.831.068-.058a.5.5 0 0 1 .7.692l-.058.07-3.042 3.068-3.04-3.068-.058-.07a.5.5 0 0 1 .003-.568l.058-.07.07-.057a.5.5 0 0 1 .568.003l.07.058L11 12.5V5.033c0-.432-.274-.772-.608-.826L10.3 4.2H8.5a.5.5 0 0 1-.09-.992L8.5 3.2h1.8zm-5.8-2A2.5 2.5 0 0 1 5 6.15V14H4V6.15a2.5 2.5 0 0 1 .5-4.95zm0 1A1.5 1.5 0 0 0 4 5.115V5h1v.114A1.5 1.5 0 0 0 4.5 2.2z"
                          fill="#5A5E66"
                          fill-rule="nonzero"
                        ></path>
                      </svg>
                    </div>
                    Logic
                  </div>
                  <div class="questionComponent_more_dropdown_button__GDa_B">
                    <div class="moreDropDown_wrapper__3ZqgO">
                      <div
                        class="moreDropDown_button__3GhWA undefined moreDropDown_bordered__H7rK2"
                        id="downshift-18-toggle-button"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        aria-labelledby="downshift-18-label downshift-18-toggle-button"
                      >
                        <svg
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h16v16H0z"></path>
                            <path
                              d="M8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM2 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                              stroke="#3E434D"
                              fill="#3E434D"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <ul
                        class="moreDropDown_list__6nQ41 moreDropDown_bottom__i91Ga undefined moreDropDown_not_show__HjTwn undefined"
                        id="downshift-18-menu"
                        role="listbox"
                        aria-labelledby="downshift-18-label"
                        tabindex="-1"
                      ></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!-- <div
            class="questionsList_question__P0Pyw questionsList_ltr__kky6C"
            data-react-beautiful-dnd-draggable="0"
            tabindex="0"
            data-react-beautiful-dnd-drag-handle="0"
            aria-roledescription="Draggable item. Press space bar to lift"
            draggable="false"
          >
            <div class="0 0 false questionsList_ltr__kky6C">
              <div
                class="questionComponent_wrapper__nqbcA questionComponent_ltr__w3iIm false"
              >
                <div class="questionComponent_title_wrapper__xBaLc false">
                  <div class="questionComponent_question_number__br1P8">
                    <div
                      class="questionNumber_question_number_wrapper__eCXI_ questionNumber_group_question__W9Tij false questionNumber_ltr__n8kqK questionNumber_flip__rDXRs"
                    >
                      <div class="questionNumber_icon__nsjC6">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1zm-6 11a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h6zm0-4a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h6zm0-4a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2h6z"
                            fill="#3E434D"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div class="questionNumber_question_number_text__MJfAs">
                        3
                      </div>
                    </div>
                  </div>
                  <div class="questionComponent_title__9LpMC">
                    <div
                      class="styled-question-title questionComponent_styled_title__NrRLu"
                    >
                      <p>dasdsad</p>
                    </div>
                  </div>
                </div>
                <div
                  class="questionComponent_actions_wrapper__HQ_yX questionComponent_ltr__w3iIm"
                >
                  <div class="questionComponent_more_dropdown_button__GDa_B">
                    <div class="moreDropDown_wrapper__3ZqgO">
                      <div
                        class="moreDropDown_button__3GhWA undefined moreDropDown_bordered__H7rK2"
                        id="downshift-19-toggle-button"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        aria-labelledby="downshift-19-label downshift-19-toggle-button"
                      >
                        <svg
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h16v16H0z"></path>
                            <path
                              d="M8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM2 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                              stroke="#3E434D"
                              fill="#3E434D"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <ul
                        class="moreDropDown_list__6nQ41 moreDropDown_bottom__i91Ga undefined moreDropDown_not_show__HjTwn undefined"
                        id="downshift-19-menu"
                        role="listbox"
                        aria-labelledby="downshift-19-label"
                        tabindex="-1"
                      ></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="questionsList_question__P0Pyw questionsList_ltr__kky6C"
            data-react-beautiful-dnd-draggable="0"
            tabindex="0"
            data-react-beautiful-dnd-drag-handle="0"
            aria-roledescription="Draggable item. Press space bar to lift"
            draggable="false"
          >
            <div
              class="questionsList_sub_question__7ktby questionsList_line__lDy16 false questionsList_ltr__kky6C"
            >
              <div
                class="questionComponent_wrapper__nqbcA questionComponent_ltr__w3iIm false"
              >
                <div class="questionComponent_title_wrapper__xBaLc false">
                  <div class="questionComponent_question_number__br1P8">
                    <div
                      class="questionNumber_question_number_wrapper__eCXI_ questionNumber_short_text_question___ITk5 false questionNumber_ltr__n8kqK questionNumber_flip__rDXRs"
                    >
                      <div class="questionNumber_icon__nsjC6">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h10zm0 1H7a1 1 0 0 0-.993.883L6 8v8a1 1 0 0 0 .883.993L7 17h10a1 1 0 0 0 .993-.883L18 16V8a1 1 0 0 0-.883-.993L17 7zm-1.5 6a.5.5 0 1 1 0 1h-3a.5.5 0 1 1 0-1h3zm0-3a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1h7z"
                            fill="#3E434D"
                            fill-rule="nonzero"
                          ></path>
                        </svg>
                      </div>
                      <div class="questionNumber_question_number_text__MJfAs">
                        3.1
                      </div>
                    </div>
                  </div>
                  <div class="questionComponent_title__9LpMC">
                    <div
                      class="styled-question-title questionComponent_styled_title__NrRLu"
                    >
                      <p>erefsds</p>
                    </div>
                  </div>
                </div>
                <div
                  class="questionComponent_actions_wrapper__HQ_yX questionComponent_ltr__w3iIm"
                >
                  <div class="questionComponent_action_button__IYgbj">
                    <div
                      class="questionComponent_icon__EQsPj questionComponent_computation__8Uk0j"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <title>variable</title>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Create---add-question"
                            transform="translate(-78.000000, -236.000000)"
                          >
                            <g
                              id="variable"
                              transform="translate(78.000000, 236.000000)"
                            >
                              <rect
                                id="Rectangle"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              ></rect>
                              <path
                                d="M11.4327109,5.00036653 C11.7390329,5.00036653 12.1264401,5.05125251 12.5949326,5.15302449 L12.3967242,6.50898643 C12.1084212,6.44912056 11.8171149,6.41320103 11.5228056,6.40122786 C10.9582121,6.40122786 10.5002306,6.57633553 10.1488613,6.92655086 C9.79749192,7.2767662 9.57976304,7.74222333 9.49567465,8.32292226 L9.35152311,9.28376946 L11.3696446,9.28376946 L11.1444078,10.5678923 L9.12628635,10.5678923 L7.65774262,19 L6.02702841,19 L7.50458161,10.5678923 L6,10.5678923 L6.22523677,9.28376946 L7.72080891,9.28376946 L7.88297938,8.13434477 C8.03914354,7.1585311 8.41754131,6.39524127 9.0181727,5.84447528 C9.64883565,5.26976294 10.4536817,4.98839335 11.4327109,5.00036653 Z M13.387151,11.6350986 L14.9400561,14.2147734 L16.5126183,11.6350986 L17.9279242,11.6350986 L15.608395,15.1290885 L18,18.7014481 L16.5977987,18.7014481 L14.9597131,16.0564652 L13.3216276,18.7014481 L11.912874,18.7014481 L14.3044789,15.1290885 L11.9849497,11.6350986 L13.387151,11.6350986 Z"
                                id="Combined-Shape"
                                fill="#3E434D"
                                fill-rule="nonzero"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    Calculations
                  </div>
                  <div class="questionComponent_action_button__IYgbj">
                    <div class="questionComponent_icon__EQsPj">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3 3.2c.904 0 1.625.75 1.694 1.684l.006.15v7.435l1.817-1.831.068-.058a.5.5 0 0 1 .7.692l-.058.07-3.042 3.068-3.04-3.068-.058-.07a.5.5 0 0 1 .003-.568l.058-.07.07-.057a.5.5 0 0 1 .568.003l.07.058L11 12.5V5.033c0-.432-.274-.772-.608-.826L10.3 4.2H8.5a.5.5 0 0 1-.09-.992L8.5 3.2h1.8zm-5.8-2A2.5 2.5 0 0 1 5 6.15V14H4V6.15a2.5 2.5 0 0 1 .5-4.95zm0 1A1.5 1.5 0 0 0 4 5.115V5h1v.114A1.5 1.5 0 0 0 4.5 2.2z"
                          fill="#5A5E66"
                          fill-rule="nonzero"
                        ></path>
                      </svg>
                    </div>
                    Logic
                  </div>
                  <div class="questionComponent_more_dropdown_button__GDa_B">
                    <div class="moreDropDown_wrapper__3ZqgO">
                      <div
                        class="moreDropDown_button__3GhWA undefined moreDropDown_bordered__H7rK2"
                        id="downshift-20-toggle-button"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        aria-labelledby="downshift-20-label downshift-20-toggle-button"
                      >
                        <svg
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h16v16H0z"></path>
                            <path
                              d="M8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM2 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                              stroke="#3E434D"
                              fill="#3E434D"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <ul
                        class="moreDropDown_list__6nQ41 moreDropDown_bottom__i91Ga undefined moreDropDown_not_show__HjTwn undefined"
                        id="downshift-20-menu"
                        role="listbox"
                        aria-labelledby="downshift-20-label"
                        tabindex="-1"
                      ></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="questionsList_sub_question__7ktby questionsList_ltr__kky6C false questionsList_placeholder__3_WjH"
            data-react-beautiful-dnd-draggable="0"
          >
            <div
              class="dropHerePlaceholder_drop_here_placeholder__mCdLf false undefined dropHerePlaceholder_hidden__u_K24 dropHerePlaceholder_ltr__Mwv9S"
            >
              <div>Drag and drop questions here.</div>
              <div class="dropHerePlaceholder_drop_here_icon__DdJk1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h24v24H0z"></path>
                    <g stroke="#6B7079" stroke-linecap="round" stroke-width="2">
                      <path d="M22 16c-9 0-11-4-11-14"></path>
                      <path stroke-linejoin="round" d="m15 6-4-4-4 4"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="dropHerePlaceholder_close_icon__bQF0s">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g>
                      <g>
                        <g>
                          <path
                            stroke="#3E434D"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M30 18L18 30M18 18L30 30"
                            transform="translate(-1152.000000, -306.000000) translate(232.000000, 302.000000) translate(920.000000, 4.000000)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div
            class="questionsList_question__P0Pyw questionsList_ltr__kky6C"
            data-react-beautiful-dnd-draggable="0"
            tabindex="0"
            data-react-beautiful-dnd-drag-handle="0"
            aria-roledescription="Draggable item. Press space bar to lift"
            draggable="false"
          >
            <div class="0 0 false questionsList_ltr__kky6C">
              <div
                class="questionComponent_wrapper__nqbcA questionComponent_ltr__w3iIm false"
              >
                <div class="questionComponent_title_wrapper__xBaLc false">
                  <div class="questionComponent_question_number__br1P8">
                    <div
                      class="questionNumber_question_number_wrapper__eCXI_ questionNumber_multiple_choice_question__Qb_fe false questionNumber_ltr__n8kqK questionNumber_flip__rDXRs"
                    >
                      <div class="questionNumber_icon__nsjC6">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 13a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4zm-8.5 3a.5.5 0 1 1 0 1h-8a.5.5 0 1 1 0-1h8zM18 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11.5 8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1 0-1h8z"
                            fill="#3E434D"
                            fill-rule="nonzero"
                          ></path>
                        </svg>
                      </div>
                      <div class="questionNumber_question_number_text__MJfAs">
                        4
                      </div>
                    </div>
                  </div>
                  <div class="questionComponent_title__9LpMC">
                    <div
                      class="styled-question-title questionComponent_styled_title__NrRLu"
                    >
                      <p>hehehaah</p>
                    </div>
                  </div>
                </div>
                <div
                  class="questionComponent_actions_wrapper__HQ_yX questionComponent_ltr__w3iIm"
                >
                  <div class="questionComponent_action_button__IYgbj">
                    <div
                      class="questionComponent_icon__EQsPj questionComponent_computation__8Uk0j"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <title>variable</title>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Create---add-question"
                            transform="translate(-78.000000, -236.000000)"
                          >
                            <g
                              id="variable"
                              transform="translate(78.000000, 236.000000)"
                            >
                              <rect
                                id="Rectangle"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              ></rect>
                              <path
                                d="M11.4327109,5.00036653 C11.7390329,5.00036653 12.1264401,5.05125251 12.5949326,5.15302449 L12.3967242,6.50898643 C12.1084212,6.44912056 11.8171149,6.41320103 11.5228056,6.40122786 C10.9582121,6.40122786 10.5002306,6.57633553 10.1488613,6.92655086 C9.79749192,7.2767662 9.57976304,7.74222333 9.49567465,8.32292226 L9.35152311,9.28376946 L11.3696446,9.28376946 L11.1444078,10.5678923 L9.12628635,10.5678923 L7.65774262,19 L6.02702841,19 L7.50458161,10.5678923 L6,10.5678923 L6.22523677,9.28376946 L7.72080891,9.28376946 L7.88297938,8.13434477 C8.03914354,7.1585311 8.41754131,6.39524127 9.0181727,5.84447528 C9.64883565,5.26976294 10.4536817,4.98839335 11.4327109,5.00036653 Z M13.387151,11.6350986 L14.9400561,14.2147734 L16.5126183,11.6350986 L17.9279242,11.6350986 L15.608395,15.1290885 L18,18.7014481 L16.5977987,18.7014481 L14.9597131,16.0564652 L13.3216276,18.7014481 L11.912874,18.7014481 L14.3044789,15.1290885 L11.9849497,11.6350986 L13.387151,11.6350986 Z"
                                id="Combined-Shape"
                                fill="#3E434D"
                                fill-rule="nonzero"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    Calculations
                  </div>
                  <div class="questionComponent_action_button__IYgbj">
                    <div class="questionComponent_icon__EQsPj">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3 3.2c.904 0 1.625.75 1.694 1.684l.006.15v7.435l1.817-1.831.068-.058a.5.5 0 0 1 .7.692l-.058.07-3.042 3.068-3.04-3.068-.058-.07a.5.5 0 0 1 .003-.568l.058-.07.07-.057a.5.5 0 0 1 .568.003l.07.058L11 12.5V5.033c0-.432-.274-.772-.608-.826L10.3 4.2H8.5a.5.5 0 0 1-.09-.992L8.5 3.2h1.8zm-5.8-2A2.5 2.5 0 0 1 5 6.15V14H4V6.15a2.5 2.5 0 0 1 .5-4.95zm0 1A1.5 1.5 0 0 0 4 5.115V5h1v.114A1.5 1.5 0 0 0 4.5 2.2z"
                          fill="#5A5E66"
                          fill-rule="nonzero"
                        ></path>
                      </svg>
                    </div>
                    Logic
                  </div>
                  <div class="questionComponent_more_dropdown_button__GDa_B">
                    <div class="moreDropDown_wrapper__3ZqgO">
                      <div
                        class="moreDropDown_button__3GhWA undefined moreDropDown_bordered__H7rK2"
                        id="downshift-21-toggle-button"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        aria-labelledby="downshift-21-label downshift-21-toggle-button"
                      >
                        <svg
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h16v16H0z"></path>
                            <path
                              d="M8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM2 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                              stroke="#3E434D"
                              fill="#3E434D"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <ul
                        class="moreDropDown_list__6nQ41 moreDropDown_bottom__i91Ga undefined moreDropDown_not_show__HjTwn undefined"
                        id="downshift-21-menu"
                        role="listbox"
                        aria-labelledby="downshift-21-label"
                        tabindex="-1"
                      ></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <div
          class="dropHerePlaceholder_drop_here_placeholder__mCdLf false undefined dropHerePlaceholder_hidden__u_K24 dropHerePlaceholder_ltr__Mwv9S"
        >
          <div>Drag and drop questions here.</div>
          <div class="dropHerePlaceholder_drop_here_icon__DdJk1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <g stroke="#6B7079" stroke-linecap="round" stroke-width="2">
                  <path d="M22 16c-9 0-11-4-11-14"></path>
                  <path stroke-linejoin="round" d="m15 6-4-4-4 4"></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="dropHerePlaceholder_close_icon__bQF0s">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <g fill="none" fill-rule="evenodd">
                <g>
                  <g>
                    <g>
                      <path
                        stroke="#3E434D"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M30 18L18 30M18 18L30 30"
                        transform="translate(-1152.000000, -306.000000) translate(232.000000, 302.000000) translate(920.000000, 4.000000)"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="questionsList_appreciation_pages_list__D__gY">
      <div data-react-beautiful-dnd-droppable="0" style="min-height: 52px">
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
</template>

<style scoped>
* {
  box-sizing: content-box;
}

body :focus-visible {
  outline: none;
}
.questionsList_wrapper__AaFrc {
  background: #fff;
  width: calc(100% - 25rem);
  height: calc(100 * var(7.65px, 1vh) - 3rem);
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
.questionsList_wrapper__AaFrc .questionsList_welcome_wrapper__Vq7wD {
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
}
.questionsList_wrapper__AaFrc
  .questionsList_welcome_wrapper__Vq7wD
  .questionsList_droppable__cWD_h {
  pointer-events: "auto";
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
    height: calc(100 * var(--vh, 1vh) - 9rem);
  }
}
@media (max-width: 1024px) {
  .questionsList_wrapper__AaFrc {
    width: 100%;
    padding: 1rem;
    height: calc(100 * var(--vh, 1vh) - 6rem);
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
.dropHerePlaceholder_drop_here_placeholder__mCdLf
  .dropHerePlaceholder_close_icon__bQF0s {
  position: absolute;
  left: 0;
  cursor: pointer;
}
.dropHerePlaceholder_drop_here_placeholder__mCdLf
  .dropHerePlaceholder_close_icon__bQF0s
  svg {
  display: block;
}
.dropHerePlaceholder_drop_here_placeholder__mCdLf
  .dropHerePlaceholder_close_icon__bQF0s
  svg
  path {
  stroke: #6b7079;
}
.dropHerePlaceholder_drop_here_placeholder__mCdLf.dropHerePlaceholder_ltr__Mwv9S
  .dropHerePlaceholder_drop_here_icon__DdJk1 {
  transform: scaleX(-1);
}
.dropHerePlaceholder_drop_here_placeholder__mCdLf.dropHerePlaceholder_ltr__Mwv9S
  .dropHerePlaceholder_close_icon__bQF0s {
  left: unset;
  right: 0;
}
.dropHerePlaceholder_drop_here_placeholder__mCdLf
  .dropHerePlaceholder_drop_here_icon__DdJk1 {
  margin: 0 0.125rem;
}
.dropHerePlaceholder_drop_here_placeholder__mCdLf
  .dropHerePlaceholder_drop_here_icon__DdJk1
  svg {
  display: block;
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
.dropHerePlaceholder_drop_here_placeholder__mCdLf.dropHerePlaceholder_hidden__u_K24 {
  background-color: transparent;
  height: 1.5rem;
}
.dropHerePlaceholder_drop_here_placeholder__mCdLf.dropHerePlaceholder_hidden__u_K24
  > div {
  display: none;
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
.bulkActionsHeader_bulk_actions_header__9qM_1 {
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
.bulkActionsHeader_bulk_actions_header__9qM_1.bulkActionsHeader_hide__jnTFm {
  top: 0;
}
.bulkActionsHeader_bulk_actions_header__9qM_1 .bulkActionsHeader_icon__2hHSK {
  width: 2.5rem;
  height: 2rem;
  margin: 0 0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.bulkActionsHeader_bulk_actions_header__9qM_1
  .bulkActionsHeader_icon__2hHSK
  svg {
  display: block;
}
.bulkActionsHeader_bulk_actions_header__9qM_1
  .bulkActionsHeader_icon__2hHSK.bulkActionsHeader_delete__J5Cqa
  svg {
  transform: scale(1.5);
}
/*! CSS Used from: Embedded */
[data-react-beautiful-dnd-drag-handle="0"] {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  touch-action: manipulation;
}
[data-react-beautiful-dnd-droppable="0"] {
  overflow-anchor: none;
}
/*! CSS Used from: Embedded */
[data-react-beautiful-dnd-drag-handle="0"] {
  cursor: -webkit-grab;
  cursor: grab;
}
</style>
