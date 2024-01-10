<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const props = defineProps<{
  question: Question;
}>();

const icon = defineAsyncComponent(
  () =>
    import(
      `@/components/survey/icons/${props.question.questionable.type}Icon.vue`
    )
);
</script>

<template>
  <div
    class="questionsList_question__P0Pyw questionsList_ltr__kky6C"
    tabindex="0"
  >
    <div class="0 0 false questionsList_ltr__kky6C">
      <div
        class="questionComponent_wrapper__nqbcA questionComponent_ltr__w3iIm false"
      >
        <div class="questionComponent_title_wrapper__xBaLc false">
          <div class="questionComponent_question_number__br1P8">
            <component :is="icon" />
          </div>
          <div class="questionComponent_title__9LpMC">
            <div
              class="styled-question-title questionComponent_styled_title__NrRLu"
              v-html="question.html_label"
            ></div>
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
                id="downshift-17-toggle-button"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-labelledby="downshift-17-label downshift-17-toggle-button"
              >
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
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
                id="downshift-17-menu"
                role="listbox"
                aria-labelledby="downshift-17-label"
                tabindex="-1"
              ></ul>
            </div>
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
.moreDropDown_wrapper__3ZqgO {
  position: relative;
}
.moreDropDown_wrapper__3ZqgO .moreDropDown_list__6nQ41 {
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
  width: -moz-max-content;
  width: max-content;
  margin: 0;
  outline: none;
}
.moreDropDown_wrapper__3ZqgO
  .moreDropDown_list__6nQ41.moreDropDown_not_show__HjTwn {
  display: none;
}
.moreDropDown_wrapper__3ZqgO
  .moreDropDown_list__6nQ41.moreDropDown_bottom__i91Ga {
  right: 0;
  top: 1.8rem;
}
.moreDropDown_wrapper__3ZqgO .moreDropDown_button__3GhWA {
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
.moreDropDown_wrapper__3ZqgO
  .moreDropDown_button__3GhWA.moreDropDown_bordered__H7rK2 {
  border: 0.0625rem solid #d8dbe0;
}
.questionComponent_wrapper__nqbcA {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.25rem;
  padding: 0.375rem;
  border-radius: 0.5rem;
  background-color: #fff;
  position: relative;
}
.questionComponent_wrapper__nqbcA .questionComponent_title_wrapper__xBaLc {
  display: flex;
  align-items: center;
  width: 100%;
}
.questionComponent_wrapper__nqbcA
  .questionComponent_title_wrapper__xBaLc
  .questionComponent_question_number__br1P8 {
  margin-left: 0.5rem;
}
.questionComponent_wrapper__nqbcA
  .questionComponent_title_wrapper__xBaLc
  .questionComponent_required_icon__vkROU {
  margin-left: 0.25rem;
  color: #e3324f;
}
.questionComponent_wrapper__nqbcA
  .questionComponent_title_wrapper__xBaLc
  .questionComponent_title__9LpMC {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.questionComponent_wrapper__nqbcA
  .questionComponent_title_wrapper__xBaLc
  .questionComponent_title__9LpMC
  .questionComponent_styled_title__NrRLu {
  display: inline-flex;
}
.questionComponent_wrapper__nqbcA
  .questionComponent_title_wrapper__xBaLc
  .questionComponent_title__9LpMC
  p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 2.5rem;
}
.questionComponent_wrapper__nqbcA .questionComponent_actions_wrapper__HQ_yX {
  background-color: #fff;
  padding: 0.25rem 0.5rem;
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
}
.questionComponent_wrapper__nqbcA
  .questionComponent_actions_wrapper__HQ_yX
  .questionComponent_action_button__IYgbj {
  display: none;
}
.questionComponent_wrapper__nqbcA
  .questionComponent_actions_wrapper__HQ_yX
  .questionComponent_icon__EQsPj {
  display: flex;
  align-items: center;
  margin-left: 0.25rem;
}
.questionComponent_wrapper__nqbcA
  .questionComponent_actions_wrapper__HQ_yX
  .questionComponent_icon__EQsPj
  svg {
  stroke: initial;
}
.questionComponent_wrapper__nqbcA
  .questionComponent_actions_wrapper__HQ_yX
  .questionComponent_icon__EQsPj
  svg
  g
  path:nth-child(2) {
  fill: #5a5e66;
}
.questionComponent_wrapper__nqbcA
  .questionComponent_actions_wrapper__HQ_yX
  .questionComponent_more_dropdown_button__GDa_B {
  display: none;
}
.questionComponent_wrapper__nqbcA
  .questionComponent_actions_wrapper__HQ_yX.questionComponent_ltr__w3iIm {
  left: unset;
  right: 0;
}
.questionComponent_wrapper__nqbcA
  .questionComponent_actions_wrapper__HQ_yX.questionComponent_ltr__w3iIm
  .questionComponent_icon__EQsPj {
  margin-left: unset !important;
  margin-right: 0.25rem;
}
.questionComponent_wrapper__nqbcA.questionComponent_ltr__w3iIm
  .questionComponent_title_wrapper__xBaLc
  .questionComponent_question_number__br1P8 {
  margin-left: 0;
  margin-right: 0.5rem;
}
.questionComponent_wrapper__nqbcA.questionComponent_ltr__w3iIm
  .questionComponent_title_wrapper__xBaLc
  .questionComponent_required_icon__vkROU {
  margin-left: 0;
  margin-right: 0.25rem;
}
.questionComponent_wrapper__nqbcA:hover {
  cursor: pointer;
  background-color: #f7f8fa;
}
.questionComponent_wrapper__nqbcA:hover
  .questionComponent_title_wrapper__xBaLc {
  width: calc(100% - 3rem);
}
.questionComponent_wrapper__nqbcA:hover
  .questionComponent_actions_wrapper__HQ_yX {
  display: flex;
  background-color: #f7f8fa;
}
.questionComponent_wrapper__nqbcA:hover
  .questionComponent_actions_wrapper__HQ_yX
  .questionComponent_action_button__IYgbj {
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
.questionComponent_wrapper__nqbcA:hover
  .questionComponent_actions_wrapper__HQ_yX
  .questionComponent_action_button__IYgbj
  .questionComponent_icon__EQsPj {
  margin-left: 0.25rem;
  display: flex;
}
.questionComponent_wrapper__nqbcA:hover
  .questionComponent_actions_wrapper__HQ_yX
  .questionComponent_action_button__IYgbj:hover {
  background-color: #3b368e;
  color: #fff;
}
.questionComponent_wrapper__nqbcA:hover
  .questionComponent_actions_wrapper__HQ_yX
  .questionComponent_action_button__IYgbj:hover
  .questionComponent_icon__EQsPj {
  margin-left: 0.25rem;
  display: flex;
}
.questionComponent_wrapper__nqbcA:hover
  .questionComponent_actions_wrapper__HQ_yX
  .questionComponent_action_button__IYgbj:hover
  .questionComponent_icon__EQsPj
  svg {
  stroke: #fff;
}
.questionComponent_wrapper__nqbcA:hover
  .questionComponent_actions_wrapper__HQ_yX
  .questionComponent_action_button__IYgbj:hover
  .questionComponent_icon__EQsPj.questionComponent_computation__8Uk0j
  svg {
  stroke: initial;
}
.questionComponent_wrapper__nqbcA:hover
  .questionComponent_actions_wrapper__HQ_yX
  .questionComponent_action_button__IYgbj:hover
  .questionComponent_icon__EQsPj.questionComponent_computation__8Uk0j
  svg
  g
  path:nth-child(2) {
  fill: #fff;
}
.questionComponent_wrapper__nqbcA:hover
  .questionComponent_actions_wrapper__HQ_yX
  .questionComponent_more_dropdown_button__GDa_B {
  display: block;
}
.questionComponent_wrapper__nqbcA:hover
  .questionComponent_actions_wrapper__HQ_yX.questionComponent_ltr__w3iIm
  .questionComponent_action_button__IYgbj {
  margin-left: unset;
  margin-right: 0.5rem;
}
@media (max-width: 1024px) {
  .questionComponent_wrapper__nqbcA .questionComponent_title_wrapper__xBaLc {
    width: calc(100% - 5rem);
  }
  .questionComponent_wrapper__nqbcA .questionComponent_actions_wrapper__HQ_yX {
    background-color: transparent;
  }
  .questionComponent_wrapper__nqbcA
    .questionComponent_actions_wrapper__HQ_yX
    .questionComponent_more_dropdown_button__GDa_B {
    display: block;
  }
  .questionComponent_wrapper__nqbcA:hover {
    background-color: unset;
  }
  .questionComponent_wrapper__nqbcA:hover
    .questionComponent_actions_wrapper__HQ_yX
    .questionComponent_action_button__IYgbj {
    display: none;
  }
}
.questionsList_wrapper__AaFrc
  .questionsList_questions_list_wrapper__L6jFw
  .questionsList_questions_list__15XoV
  .questionsList_sub_question__7ktby {
  margin-right: 1.5rem;
  margin-left: 0;
  position: relative;
}
.questionsList_wrapper__AaFrc
  .questionsList_questions_list_wrapper__L6jFw
  .questionsList_questions_list__15XoV
  .questionsList_sub_question__7ktby.questionsList_placeholder__3_WjH {
  margin-bottom: 1.5rem;
}
.questionsList_wrapper__AaFrc
  .questionsList_questions_list_wrapper__L6jFw
  .questionsList_questions_list__15XoV
  .questionsList_sub_question__7ktby.questionsList_line__lDy16:before {
  display: block;
  content: "";
  position: absolute;
  top: -1rem;
  width: 0.125rem;
  height: 4rem;
  background: #cad3e5;
  right: -0.75rem;
  transform: translate(-50%);
}
.questionsList_wrapper__AaFrc
  .questionsList_questions_list_wrapper__L6jFw
  .questionsList_questions_list__15XoV
  .questionsList_sub_question__7ktby.questionsList_ltr__kky6C {
  margin-left: 1.5rem;
  margin-right: 0;
}
.questionsList_wrapper__AaFrc
  .questionsList_questions_list_wrapper__L6jFw
  .questionsList_questions_list__15XoV
  .questionsList_sub_question__7ktby.questionsList_ltr__kky6C:before {
  right: 0;
  left: -0.75rem;
}
.questionsList_wrapper__AaFrc
  .questionsList_questions_list_wrapper__L6jFw
  .questionsList_questions_list__15XoV
  .questionsList_question__P0Pyw {
  padding-bottom: 0.25rem;
  direction: rtl;
  z-index: 5;
}
.questionsList_wrapper__AaFrc
  .questionsList_questions_list_wrapper__L6jFw
  .questionsList_questions_list__15XoV
  .questionsList_question__P0Pyw.questionsList_ltr__kky6C {
  direction: ltr;
}
</style>
