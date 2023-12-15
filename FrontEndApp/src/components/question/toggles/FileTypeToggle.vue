<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

import { inject } from "vue";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;

type Format = {
  name: string;
  value: string;
};

const fileFormatOptions: Format[] = [
  { name: "Image", value: "Image" },
  { name: "Video", value: "Video" },
  { name: "Audio", value: "Audio" },
  { name: "Compressed file", value: "Compressed file" },
  { name: "PDF", value: "PDF" },
  { name: "Excel", value: "Excel" },
  { name: "Document", value: "Document" },
  { name: "Presentation", value: "Presentation" },
  { name: "Custom file type", value: "Custom" },
];
</script>

<template>
  <div
    class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
  >
    <div class="sharedBuild_toggle_wrapper__R5w_y">
      <div class="toggleButton_wrapper__dOusd undefined false">
        <span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">
          Set file type
          <div class="toggleButton_new_feature_label_wrapper__RvA1u">
            <div
              class="newFeatureLabel_container__CEmG_ newFeatureLabel_ltr__Jgiuy"
            >
              <!-- New -->
            </div>
          </div>
        </span>
        <label class="toggleButton_switch__EF_q8">
          <input
            name="fileFormatToggle"
            class="toggleButton_toggle_button_checkbox__a2Pr8"
            type="checkbox"
            v-model="useQuestion.getIsCustomExtension"
          />
          <div
            class="toggleButton_slider_round__QN633 undefined undefined"
          ></div>
        </label>
      </div>
      <div
        v-if="useQuestion.getIsCustomExtension"
        class="fileupload_format_section__CvKTY"
      >
        <div class="fileupload_formats_dropdown__KHXx1">
          <div class="fileupload_title__H7iVa fileupload_ltr__e03wd">
            File type
          </div>
          <Listbox
            class="fileupload_dropdown_wrapper__KjWrH z-10"
            v-model="useQuestion.getCustomExtensions"
            multiple
          >
            <div role="listbox" class="fileFormatDropDown_main_wrapper__OGo0I">
              <div
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                <ListboxButton class="fileFormatDropDown_wrapper__rDqrx">
                  <span class="text-start">Select file types</span>
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
                  <ListboxOptions class="fileFormatDropDown_ul__Skopk" as="ul">
                    <ListboxOption
                      v-slot="{ selected }"
                      v-for="option in fileFormatOptions"
                      :key="option.name"
                      :value="option"
                      as="div"
                    >
                      <div
                        v-if="option.value == 'Custom'"
                        class="fileFormatDropDown_divider__dwiED"
                      ></div>
                      <li role="option">
                        <div
                          class="fileFormatDropDown_checkbox_wrapper__IHtCO w-full"
                        >
                          <div
                            class="fileFormatDropDown_checkbox_label__qiWA9 fileFormatDropDown_ltr__rB403"
                          >
                            <input type="checkbox" :checked="selected" />
                            <span
                              class="fileFormatDropDown_checkmark__aVap_"
                            ></span>
                          </div>
                          <span>{{ option.name }}</span>
                        </div>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </div>
          </Listbox>
        </div>
        <div>
          <div>
            <template
              v-if="useQuestion.getCustomExtensions.some((format: Format) => format.value == 'Custom')"
            >
              <span class="fileFormatInput_input_title__Fgc6x">
                Custom file type
              </span>
              <div
                class="fileFormatInput_format_input_wrapper__HSpJD fileFormatInput_ltr__HP8Hm"
              >
                <div
                  class="fileFormatInput_format_input__YD3lb fileFormatInput_ltr__HP8Hm"
                >
                  <div class="textInput_input_wrapper__bZOVy">
                    <input
                      class="textInput_input__YzEWk false undefined textInput_no_error_message__JnfQj"
                      name="format"
                      type="text"
                      placeholder="Example: PNG"
                      value=""
                    />
                  </div>
                </div>
                <div class="">
                  <button
                    type="button"
                    class="buttons_button__PUTxb buttons_primary__RmNyQ undefined buttons_disabled__Vkw32"
                    disabled
                  >
                    Add
                  </button>
                </div>
              </div>
            </template>
            <div class="fileFormatInput_input_wrapper__XZBE2">
              <div class="react-tag-input">
                <template
                  v-for="selectedFormat in useQuestion.getCustomExtensions"
                  :key="selectedFormat.value"
                >
                  <div
                    v-if="selectedFormat.value != 'Custom'"
                    class="react-tag-input__tag"
                  >
                    <div class="react-tag-input__tag__content">
                      {{ selectedFormat.name }}
                    </div>
                    <div
                      class="react-tag-input__tag__remove"
                      @click="
                        useQuestion.getCustomExtensions.splice(
                          useQuestion.getCustomExtensions.findIndex(
                            (item: Format) => item.value == selectedFormat.value
                          ),
                          1
                        )
                      "
                    ></div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="fileupload_validation_message__NPk8C">
          <div class="textInput_input_wrapper__bZOVy">
            <div class="textInput_input_title__ssXRr undefined">
              Validation message
            </div>
            <input
              class="textInput_input__YzEWk false undefined false"
              name="custom_validation_message"
              type="text"
              value="Wrong file type"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
*,
*::after,
*::before {
  box-sizing: content-box !important;
}
.buttons_button__PUTxb {
  all: unset;
  min-width: 4rem;
  min-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.875rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
}
.buttons_button__PUTxb:focus {
  background-color: inherit;
}
.buttons_button__PUTxb.buttons_primary__RmNyQ {
  background-color: #3b368e;
  color: #fff;
  -webkit-text-fill-color: #fff;
  opacity: 1;
}
.buttons_button__PUTxb.buttons_disabled__Vkw32 {
  background-color: #d8dbe0;
  color: #3e434d;
  -webkit-text-fill-color: #3e434d;
  opacity: 1;
  cursor: not-allowed;
}
/*! CSS Used from: https://canarycdn.porsline.com/static/panel/v2/_next/static/css/08614b12debb10ee.css */
.newFeatureLabel_container__CEmG_ {
  width: -moz-fit-content;
  width: fit-content;
  height: 1rem;
  color: #fff;
  font-size: 10px;
  font-weight: 400;
  padding: 0 0.5rem 0.125rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: #f14499;
  display: flex;
  justify-content: center;
  align-items: center;
}
.newFeatureLabel_container__CEmG_.newFeatureLabel_ltr__Jgiuy {
  padding: 0 0.5rem;
}
.textInput_input_wrapper__bZOVy {
  display: flex;
  flex-direction: column;
}
.textInput_input_wrapper__bZOVy .textInput_input_title__ssXRr {
  height: -moz-fit-content;
  height: fit-content;
  color: #3e434d;
  margin-bottom: 0.6rem;
}
.textInput_input_wrapper__bZOVy .textInput_input__YzEWk {
  font: unset;
  min-width: inherit;
  outline: none;
  height: 1.563rem;
  padding: 0.188rem 0.5rem 0.25rem;
  border-radius: 0.25rem;
  border: 0.063rem solid #bbbdc0;
  background-color: #fff;
  color: #3e434d;
}
.textInput_input_wrapper__bZOVy
  .textInput_input__YzEWk.textInput_no_error_message__JnfQj {
  margin-bottom: 0 !important;
}
.textInput_input_wrapper__bZOVy .textInput_input__YzEWk:hover {
  border-color: #3b368e;
}
.textInput_input_wrapper__bZOVy .textInput_input__YzEWk:focus {
  box-shadow: 0 0 0 2px rgba(59, 54, 142, 0.15);
}
.toggleButton_wrapper__dOusd {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.toggleButton_wrapper__dOusd > * {
  flex-shrink: 0;
}
.toggleButton_wrapper__dOusd .toggleButton_new_feature_label_wrapper__RvA1u {
  margin: 0 0.25rem;
  display: inline-block;
  vertical-align: middle;
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
.fileupload_format_section__CvKTY {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}
.fileupload_format_section__CvKTY .fileupload_formats_dropdown__KHXx1 {
  display: flex;
  flex-direction: row !important;
  align-items: center;
  margin-bottom: 0.75rem;
}
.fileupload_format_section__CvKTY
  .fileupload_formats_dropdown__KHXx1
  .fileupload_title__H7iVa {
  white-space: nowrap;
  margin-left: 0.5rem;
}
.fileupload_format_section__CvKTY
  .fileupload_formats_dropdown__KHXx1
  .fileupload_title__H7iVa.fileupload_ltr__e03wd {
  margin-left: 0;
  margin-right: 0.5rem;
}
.fileupload_format_section__CvKTY
  .fileupload_formats_dropdown__KHXx1
  .fileupload_dropdown_wrapper__KjWrH {
  width: 100%;
}
.fileupload_format_section__CvKTY
  .fileupload_formats_dropdown__KHXx1
  .fileupload_dropdown_wrapper__KjWrH
  > div
  > div
  > div {
  margin-top: 0 !important;
}
.fileupload_format_section__CvKTY .fileupload_validation_message__NPk8C {
  width: 100%;
  margin-top: 1rem;
}
.fileFormatDropDown_main_wrapper__OGo0I {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 14px;
  outline: none;
  width: 100%;
}
.fileFormatDropDown_main_wrapper__OGo0I > div {
  width: 100%;
  position: relative;
}
.fileFormatDropDown_main_wrapper__OGo0I .fileFormatDropDown_wrapper__rDqrx {
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
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_wrapper__rDqrx
  span {
  padding: 0 0.25rem;
  border: none;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_wrapper__rDqrx
  input {
  display: none;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_wrapper__rDqrx:hover {
  border-color: #3b368e;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_wrapper_open_ul__AbN4V {
  border-color: rgba(59, 54, 142, 0.15) !important;
  box-shadow: 0 0 0 2px rgba(59, 54, 142, 0.15) !important;
}
.fileFormatDropDown_main_wrapper__OGo0I .fileFormatDropDown_ul__Skopk {
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
  max-height: 15rem;
  overflow-y: scroll;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_ul__Skopk::-webkit-scrollbar {
  width: 1.5rem;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_ul__Skopk::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem 0.5rem transparent;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_ul__Skopk::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem 0.5rem #f0f2f5;
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  min-height: 2rem;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_ul__Skopk
  .fileFormatDropDown_divider__dwiED {
  height: 0.025rem;
  background-color: #d8dbe0;
  border: none;
  margin: 0.5rem 0;
}
.fileFormatDropDown_main_wrapper__OGo0I .fileFormatDropDown_ul__Skopk li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 0.25rem;
  cursor: pointer;
  color: #3e434d;
  min-height: 1.5rem;
}
.fileFormatDropDown_main_wrapper__OGo0I .fileFormatDropDown_ul__Skopk li span {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_ul__Skopk
  li
  .fileFormatDropDown_checkbox_wrapper__IHtCO {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #3e434d;
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 0.2rem 0.35rem;
}

.fileFormatDropDown_checkbox_wrapper__IHtCO:hover {
  background-color: rgba(59, 54, 142, 0.15);
}

.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_ul__Skopk
  li
  .fileFormatDropDown_checkbox_wrapper__IHtCO
  .fileFormatDropDown_checkbox_label__qiWA9 {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  margin: 0.375rem 0 0 0.375rem;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_ul__Skopk
  li
  .fileFormatDropDown_checkbox_wrapper__IHtCO
  .fileFormatDropDown_checkbox_label__qiWA9.fileFormatDropDown_ltr__rB403 {
  margin: 0.375rem 0.375rem 0 0;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_ul__Skopk
  li
  .fileFormatDropDown_checkbox_wrapper__IHtCO
  input {
  visibility: hidden;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_ul__Skopk
  li
  .fileFormatDropDown_checkbox_wrapper__IHtCO
  .fileFormatDropDown_checkmark__aVap_ {
  position: absolute;
  top: 0;
  left: 0;
  height: 1rem;
  width: 1rem;
  background-color: #fff;
  border: 0.0625rem solid #bbbdc0;
  border-radius: 0.25rem;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_ul__Skopk
  li
  .fileFormatDropDown_checkbox_wrapper__IHtCO
  .fileFormatDropDown_checkbox_label__qiWA9
  input:checked
  ~ .fileFormatDropDown_checkmark__aVap_ {
  background-color: #3b368e;
}

.fileFormatDropDown_checkbox_label__qiWA9 ~ span {
  margin-left: 0.5rem;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_ul__Skopk
  li
  .fileFormatDropDown_checkbox_wrapper__IHtCO
  .fileFormatDropDown_checkmark__aVap_:after {
  content: "";
  position: absolute;
  display: none;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_ul__Skopk
  li
  .fileFormatDropDown_checkbox_wrapper__IHtCO
  .fileFormatDropDown_checkbox_label__qiWA9
  input:checked
  ~ .fileFormatDropDown_checkmark__aVap_:after {
  display: block;
}
.fileFormatDropDown_main_wrapper__OGo0I
  .fileFormatDropDown_ul__Skopk
  li
  .fileFormatDropDown_checkbox_wrapper__IHtCO
  .fileFormatDropDown_checkbox_label__qiWA9
  .fileFormatDropDown_checkmark__aVap_:after {
  left: 0.375rem;
  bottom: 0.25rem;
  width: 0.125rem;
  height: 0.5rem;
  border: solid #fff;
  border-width: 0 0.1475rem 0.1475rem 0;
  transform: rotate(45deg);
}
.fileFormatDropDown_main_wrapper__OGo0I .fileFormatDropDown_ul__Skopk:focus {
  outline: none;
}
.react-tag-input {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 2.375em;
  padding: 0.1875em 0.375em;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1rem;
  background: #fff;
  color: #333;
  border: 1px solid #e1e1e1;
  border-radius: 3px;
}
.react-tag-input,
.react-tag-input * {
  box-sizing: border-box;
}
.react-tag-input > * {
  margin: 0.1875em;
}
.react-tag-input__input {
  width: auto;
  flex-grow: 1;
  height: 1.875em;
  padding: 0 0 0 0.1875em;
  margin: 0 0.1875em;
  font-size: 1em;
  line-height: 1;
  background: transparent;
  color: #333;
  border: none;
  border-radius: 3px;
  outline: 0;
  box-shadow: none;
  appearance: none;
}
.react-tag-input__input::placeholder {
  color: #333;
}
.react-tag-input__input:focus {
  border: none;
}
.react-tag-input__tag {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 0.85em;
  line-height: 1;
  background: #e1e1e1;
  border-radius: 3px;
}
.react-tag-input__tag__content {
  outline: 0;
  border: none;
  white-space: nowrap;
  padding: 0 0.46875em;
}
.react-tag-input__tag__remove {
  position: relative;
  height: 2em;
  width: 2em;
  font-size: 0.85em;
  cursor: pointer;
  background: #d4d4d4;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.react-tag-input__tag__remove:after,
.react-tag-input__tag__remove:before {
  position: absolute;
  top: 50%;
  left: 50%;
  content: " ";
  height: 0.9em;
  width: 0.15em;
  background-color: #333;
}
.react-tag-input__tag__remove:before {
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
}
.react-tag-input__tag__remove:after {
  transform: translateX(-50%) translateY(-50%) rotate(-45deg);
}
.fileFormatInput_format_input_wrapper__HSpJD {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin: 0.5rem 0;
}

.fileFormatInput_format_input_wrapper__HSpJD * {
  box-sizing: border-box !important;
}
.fileFormatInput_format_input_wrapper__HSpJD.fileFormatInput_ltr__HP8Hm {
  flex-direction: row;
}
.fileFormatInput_format_input_wrapper__HSpJD
  .fileFormatInput_format_input__YD3lb {
  width: 75%;
  padding-right: 0.5rem;
}
.fileFormatInput_format_input_wrapper__HSpJD
  .fileFormatInput_format_input__YD3lb
  input {
  height: 2rem;
  box-sizing: border-box;
  direction: ltr;
}
.fileFormatInput_input_wrapper__XZBE2 {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.fileFormatInput_input_wrapper__XZBE2 > div:first-child {
  direction: ltr;
  text-align: left;
  min-width: inherit;
  outline: none;
  border: none;
  background-color: #fff;
  align-items: flex-start;
  height: -moz-max-content !important;
  height: max-content !important;
  min-height: auto !important;
  max-height: 13rem;
  overflow-x: hidden;
  padding: 0 !important;
}
.fileFormatInput_input_wrapper__XZBE2 > div:first-child > div {
  height: 1.5rem !important;
  box-sizing: border-box !important;
  background-color: rgba(59, 54, 142, 0.15);
  color: #3b368e;
}
.fileFormatInput_input_wrapper__XZBE2 > div:first-child > div > div {
  color: #3b368e;
  background-color: transparent;
}
.fileFormatInput_input_wrapper__XZBE2 > div:first-child > div > div:after,
.fileFormatInput_input_wrapper__XZBE2 > div:first-child > div > div:before {
  background-color: #3b368e;
}
.fileFormatInput_input_wrapper__XZBE2 > div:first-child input {
  display: none;
}
.fileFormatInput_input_wrapper__XZBE2 > div:first-child:hover {
  border-color: #3b368e;
}
.fileFormatInput_input_wrapper__XZBE2 > div:first-child:focus {
  box-shadow: 0 0 0 2px rgba(59, 54, 142, 0.15);
}
</style>
