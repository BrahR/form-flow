<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { isNumber } from "lodash";
import { inject } from "vue";
import type { QuestionBuilderStore } from "@/store/questionBuilder";

const useQuestionBuilder = inject("question") as QuestionBuilderStore;

const items = [
  {
    id: 1,
    name: "Randomize all questions",
    value: -1,
  },
  {
    id: 2,
    name: "Randomize part of questions",
    value: 1,
  },
];

useQuestionBuilder.getSelectedRandmoize = items[0];
</script>

<template>
  <div
    class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
  >
    <div class="group_toggle_component_wrapper__S7tie">
      <div class="sharedBuild_toggle_wrapper__R5w_y">
        <div class="toggleButton_wrapper__dOusd undefined false">
          <span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">
            Questions randomization
          </span>
          <label class="toggleButton_switch__EF_q8">
            <input
              name="subquestions_are_shuffled"
              class="toggleButton_toggle_button_checkbox__a2Pr8"
              type="checkbox"
              v-model="useQuestionBuilder.getIsRandomize"
            />
            <div
              class="toggleButton_slider_round__QN633 undefined undefined"
            ></div>
          </label>
        </div>
        <template v-if="useQuestionBuilder.getIsRandomize">
          <div class="group_group_question_option_wrapper__P2vy4">
            <Listbox
              class="group_group_question_option_wrapper__P2vy4 z-10"
              v-model="useQuestionBuilder.getSelectedRandmoize"
            >
              <div>
                <div class="dropDownInput_main_wrapper__Nhc3q">
                  <div>
                    <ListboxButton class="dropDownInput_wrapper__XAy_y">
                      <span class="text-start">{{
                        useQuestionBuilder.getSelectedRandmoize.name
                      }}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <g>
                            <g>
                              <g>
                                <path
                                  d="M0 0H24V24H0z"
                                  transform="translate(-651.000000, -290.000000) translate(647.000000, 286.000000) translate(4.000000, 4.000000)"
                                ></path>
                                <path
                                  stroke="#3B368E"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 10L12 16 18 10"
                                  transform="translate(-651.000000, -290.000000) translate(647.000000, 286.000000) translate(4.000000, 4.000000)"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </ListboxButton>

                    <transition
                      leave-active-class="transition duration-100 ease-in"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0"
                    >
                      <ListboxOptions class="dropDownInput_ul__DPvAW" as="ul">
                        <ListboxOption
                          v-slot="{ active, selected }"
                          v-for="item in items"
                          :key="item.name"
                          :value="item"
                          as="template"
                        >
                          <li
                            :class="[
                              active
                                ? 'bg-amber-100 text-amber-900'
                                : 'text-gray-900',
                            ]"
                          >
                            <span
                              :class="[
                                selected ? 'font-medium' : 'font-normal',
                                'block truncate',
                              ]"
                              >{{ item.name }}</span
                            >

                            <svg
                              v-if="selected"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <g>
                                  <g>
                                    <g>
                                      <path
                                        d="M0 0H16V16H0z"
                                        transform="translate(-78.000000, -514.000000) translate(70.000000, 506.000000) translate(8.000000, 8.000000)"
                                      ></path>
                                      <path
                                        stroke="#3B368E"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 9.2L5.846 11 12 5"
                                        transform="translate(-78.000000, -514.000000) translate(70.000000, 506.000000) translate(8.000000, 8.000000)"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </li>
                        </ListboxOption>
                      </ListboxOptions>
                    </transition>
                  </div>
                </div>
              </div>
            </Listbox>
          </div>
          <div
            v-if="useQuestionBuilder.getSelectedRandmoize.id === 2"
            class="group_group_question_option_wrapper__P2vy4"
          >
            <div class="inlineInput_wrapper__7HOFO inlineInput_ltr__IdP5R">
              <p class="inlineInput_label__gJoig">
                Number of questions to show
              </p>
              <div class="inlineInput_input_wrapper__8ZUU7">
                <input
                  class="inlineInput_input__S084b undefined"
                  name="number_of_visible_subquestions"
                  type="number"
                  min="1"
                  v-model="useQuestionBuilder.getSelectedRandmoize.value"
                />
              </div>
              <InputError
                v-if="
                  !isNumber(useQuestionBuilder.getSelectedRandmoize.value) ||
                  useQuestionBuilder.getSelectedRandmoize.value < 0
                "
                error="This field must be a valid number."
              />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/f419cc97160b5e33.css */
body :focus-visible {
  outline: none;
}
/*! CSS Used from: Embedded */
.toggleButton_wrapper__dOusd {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.toggleButton_wrapper__dOusd > * {
  flex-shrink: 0;
}
.toggleButton_wrapper__dOusd .toggleButton_title__zP_tP {
  max-width: 16.75rem;
  color: #3e434d;
}
.toggleButton_wrapper__dOusd
  .toggleButton_title__zP_tP.toggleButton_bold__huFoE {
  font-weight: 700;
}
.toggleButton_wrapper__dOusd .toggleButton_switch__EF_q8 {
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1.25rem;
  max-width: 100%;
  font-weight: 700;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  .toggleButton_toggle_button_checkbox__a2Pr8 {
  display: none;
  margin: 0.25rem 0 0;
  line-height: normal;
  box-sizing: border-box;
  padding: 0;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  .toggleButton_slider_round__QN633 {
  border-radius: 1rem;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #bbbdc0;
  transition: 0.4s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  .toggleButton_slider_round__QN633:before {
  position: absolute;
  content: "";
  height: 1rem;
  width: 1rem;
  left: 0.125rem;
  bottom: 0.125rem;
  background-color: #fff;
  transition: 0.4s;
  border-radius: 50%;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  input:checked
  + .toggleButton_slider_round__QN633 {
  background-color: #3b368e;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  input:focus
  + .toggleButton_slider_round__QN633 {
  box-shadow: 0 0 0.0625rem #3b368e;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  input:checked
  + .toggleButton_slider_round__QN633:before {
  transform: translateX(1.25rem);
}
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_toggle_input_row_wrapper__1KFOE {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 0.875rem 0;
}
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_toggle_input_row_wrapper__1KFOE
  .sharedBuild_toggle_wrapper__R5w_y {
  min-height: 1.25rem;
}
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_toggle_input_row_wrapper__1KFOE
  .sharedBuild_toggle_wrapper__R5w_y
  span {
  max-width: 15rem !important;
}
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_toggle_input_row_wrapper__1KFOE.sharedBuild_ltr__BELlV {
  direction: ltr;
}
.inlineInput_wrapper__7HOFO {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.inlineInput_wrapper__7HOFO .inlineInput_label__gJoig {
  margin: 0.5rem 0 0.5rem 0.5rem;
  white-space: nowrap;
  align-self: flex-start;
}
.inlineInput_wrapper__7HOFO .inlineInput_input_wrapper__8ZUU7 {
  position: relative;
}
.inlineInput_wrapper__7HOFO
  .inlineInput_input_wrapper__8ZUU7
  .inlineInput_input__S084b {
  font-family: unset;
  border: 1px solid #bbbcc0;
  height: 1.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
}
.inlineInput_wrapper__7HOFO.inlineInput_ltr__IdP5R .inlineInput_label__gJoig {
  margin: 0.5rem 0.5rem 0.5rem 0;
}
.group_toggle_component_wrapper__S7tie {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  font-size: 14px;
}
.group_group_question_option_wrapper__P2vy4 {
  margin-top: 0.5rem;
}
.dropDownInput_main_wrapper__Nhc3q {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 14px;
  outline: none;
  width: 100%;
}
.dropDownInput_main_wrapper__Nhc3q > div {
  width: 100%;
  position: relative;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_wrapper__XAy_y {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
  margin-top: 0.5rem;
  border: 0.063rem solid #bbbdc0;
  border-radius: 0.25rem;
  width: 100%;
  box-sizing: border-box;
  color: #3e434d;
  cursor: pointer;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_wrapper__XAy_y span {
  white-space: nowrap;
  padding: 0 0.25rem;
  border: none;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_wrapper__XAy_y input {
  display: none;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_wrapper__XAy_y:hover {
  border-color: #3b368e;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_wrapper_open_ul__xpG2L {
  border-color: rgba(59, 54, 142, 0.15) !important;
  box-shadow: 0 0 0 2px rgba(59, 54, 142, 0.15) !important;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_ul__DPvAW {
  max-height: 12rem;
  overflow-y: auto;
  list-style-type: none;
  margin-top: 0.0625rem;
  padding: 0.5rem;
  border: 0.00625rem solid #d8dbe0;
  box-shadow: 0 2px 4px 0 rgba(151, 160, 179, 0.5);
  border-radius: 0.25rem;
  position: absolute;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
}

.dropDownInput_main_wrapper__Nhc3q .dropDownInput_ul__DPvAW.closed-dropdown {
  display: none;
}

.dropDownInput_main_wrapper__Nhc3q .dropDownInput_ul__DPvAW::-webkit-scrollbar {
  width: 1.5rem;
}
.dropDownInput_main_wrapper__Nhc3q
  .dropDownInput_ul__DPvAW::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem 0.5rem transparent;
}
.dropDownInput_main_wrapper__Nhc3q
  .dropDownInput_ul__DPvAW::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem 0.5rem #f0f2f5;
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  min-height: 2rem;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_ul__DPvAW li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
  color: #3e434d;
  min-height: 1.5rem;
  align-items: center;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_ul__DPvAW li svg {
  margin-top: 0.25rem;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_ul__DPvAW li span {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_ul__DPvAW:focus {
  outline: none;
}
</style>
