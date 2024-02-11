<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { customFileExtensions } = storeToRefs(useQuestionToggles);

type FileFormat = {
  name: string;
  value: string;
};

const fileFormatOptions: FileFormat[] = [
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
  <div class="sharedBuild_toggle_input_row_wrapper sharedBuild_ltr">
    <div class="sharedBuild_toggle_wrapper">
      <div class="toggleButton_wrapper undefined false">
        <span class="toggleButton_title toggleButton_bold">
          Set file type
          <div class="toggleButton_new_feature_label_wrapper">
            <div class="newFeatureLabel_container newFeatureLabel_ltr">
              <!-- New -->
            </div>
          </div>
        </span>
        <label class="toggleButton_switch">
          <input
            name="fileFormatToggle"
            class="toggleButton_toggle_button_checkbox"
            type="checkbox"
            v-model="customFileExtensions.on"
          />
          <div class="toggleButton_slider_round undefined undefined"></div>
        </label>
      </div>
      <div v-if="customFileExtensions.on" class="fileupload_format_section">
        <div class="fileupload_formats_dropdown">
          <div class="fileupload_title fileupload_ltr">File type</div>
          <Listbox
            class="fileupload_dropdown_wrapper z-10"
            v-model="customFileExtensions.extensions"
            multiple
          >
            <div role="listbox" class="fileFormatDropDown_main_wrapper">
              <div
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                <ListboxButton class="fileFormatDropDown_wrapper">
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
                  <ListboxOptions class="fileFormatDropDown_ul" as="ul">
                    <ListboxOption
                      v-slot="{ selected }"
                      v-for="option in fileFormatOptions"
                      :key="option.name"
                      :value="option"
                      as="div"
                    >
                      <div
                        v-if="option.value == 'Custom'"
                        class="fileFormatDropDown_divider"
                      ></div>
                      <li role="option">
                        <div class="fileFormatDropDown_checkbox_wrapper w-full">
                          <div
                            class="fileFormatDropDown_checkbox_label fileFormatDropDown_ltr"
                          >
                            <input type="checkbox" :checked="selected" />
                            <span class="fileFormatDropDown_checkmark"></span>
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
              v-if="
                customFileExtensions.extensions.some(
                  (format: FileFormat) => format.value == 'Custom',
                )
              "
            >
              <span class="fileFormatInput_input_title">Custom file type</span>
              <div
                class="fileFormatInput_format_input_wrapper fileFormatInput_ltr"
              >
                <div class="fileFormatInput_format_input fileFormatInput_ltr">
                  <div class="textInput_input_wrapper">
                    <input
                      class="textInput_input false undefined textInput_no_error_message"
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
                    class="buttons_button buttons_primary undefined buttons_disabled"
                    disabled
                  >
                    Add
                  </button>
                </div>
              </div>
            </template>
            <div class="fileFormatInput_input_wrapper">
              <div class="react-tag-input">
                <template
                  v-for="selectedFormat in customFileExtensions.extensions"
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
                        customFileExtensions.extensions.splice(
                          customFileExtensions.extensions.findIndex(
                            (item: FileFormat) =>
                              item.value == selectedFormat.value,
                          ),
                          1,
                        )
                      "
                    ></div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="fileupload_validation_message">
          <div class="textInput_input_wrapper">
            <div class="textInput_input_title undefined">
              Validation message
            </div>
            <input
              class="textInput_input false undefined false"
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
.buttons_button {
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
.buttons_button:focus {
  background-color: inherit;
}
.buttons_button.buttons_primary {
  background-color: #3b368e;
  color: #fff;
  -webkit-text-fill-color: #fff;
  opacity: 1;
}
.buttons_button.buttons_disabled {
  background-color: #d8dbe0;
  color: #3e434d;
  -webkit-text-fill-color: #3e434d;
  opacity: 1;
  cursor: not-allowed;
}
/*! CSS Used from: https://canarycdn.porsline.com/static/panel/v2/_next/static/css/08614b12debb10ee.css */
.newFeatureLabel_container {
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
.newFeatureLabel_container.newFeatureLabel_ltr {
  padding: 0 0.5rem;
}
.textInput_input_wrapper {
  display: flex;
  flex-direction: column;
}
.textInput_input_wrapper .textInput_input_title {
  height: fit-content;
  color: #3e434d;
  margin-bottom: 0.6rem;
}
.textInput_input_wrapper .textInput_input {
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
.textInput_input_wrapper .textInput_input.textInput_no_error_message {
  margin-bottom: 0 !important;
}
.textInput_input_wrapper .textInput_input:hover {
  border-color: #3b368e;
}
.textInput_input_wrapper .textInput_input:focus {
  box-shadow: 0 0 0 2px rgba(59, 54, 142, 0.15);
}
.toggleButton_wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.toggleButton_wrapper > * {
  flex-shrink: 0;
}
.toggleButton_wrapper .toggleButton_new_feature_label_wrapper {
  margin: 0 0.25rem;
  display: inline-block;
  vertical-align: middle;
}
.toggleButton_wrapper .toggleButton_title {
  max-width: 16.75rem;
  color: #3e434d;
}
.toggleButton_wrapper .toggleButton_title.toggleButton_bold {
  font-weight: 700;
}
.toggleButton_wrapper .toggleButton_switch {
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1.25rem;
  max-width: 100%;
  font-weight: 700;
}
.toggleButton_wrapper
  .toggleButton_switch
  .toggleButton_toggle_button_checkbox {
  display: none;
  margin: 0.25rem 0 0;
  line-height: normal;
  box-sizing: border-box;
  padding: 0;
}
.toggleButton_wrapper .toggleButton_switch .toggleButton_slider_round {
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
.toggleButton_wrapper .toggleButton_switch .toggleButton_slider_round:before {
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
.toggleButton_wrapper
  .toggleButton_switch
  input:checked
  + .toggleButton_slider_round {
  background-color: #3b368e;
}
.toggleButton_wrapper
  .toggleButton_switch
  input:focus
  + .toggleButton_slider_round {
  box-shadow: 0 0 0.0625rem #3b368e;
}
.toggleButton_wrapper
  .toggleButton_switch
  input:checked
  + .toggleButton_slider_round:before {
  transform: translateX(1.25rem);
}
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_toggle_input_row_wrapper {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 0.875rem 0;
}
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_toggle_input_row_wrapper
  .sharedBuild_toggle_wrapper {
  min-height: 1.25rem;
}
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_toggle_input_row_wrapper
  .sharedBuild_toggle_wrapper
  span {
  max-width: 15rem !important;
}
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_toggle_input_row_wrapper.sharedBuild_ltr {
  direction: ltr;
}
.fileupload_format_section {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}
.fileupload_format_section .fileupload_formats_dropdown {
  display: flex;
  flex-direction: row !important;
  align-items: center;
  margin-bottom: 0.75rem;
}
.fileupload_format_section .fileupload_formats_dropdown .fileupload_title {
  white-space: nowrap;
  margin-left: 0.5rem;
}
.fileupload_format_section
  .fileupload_formats_dropdown
  .fileupload_title.fileupload_ltr {
  margin-left: 0;
  margin-right: 0.5rem;
}
.fileupload_format_section
  .fileupload_formats_dropdown
  .fileupload_dropdown_wrapper {
  width: 100%;
}
.fileupload_format_section
  .fileupload_formats_dropdown
  .fileupload_dropdown_wrapper
  > div
  > div
  > div {
  margin-top: 0 !important;
}
.fileupload_format_section .fileupload_validation_message {
  width: 100%;
  margin-top: 1rem;
}
.fileFormatDropDown_main_wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 14px;
  outline: none;
  width: 100%;
}
.fileFormatDropDown_main_wrapper > div {
  width: 100%;
  position: relative;
}
.fileFormatDropDown_main_wrapper .fileFormatDropDown_wrapper {
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
.fileFormatDropDown_main_wrapper .fileFormatDropDown_wrapper span {
  padding: 0 0.25rem;
  border: none;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fileFormatDropDown_main_wrapper .fileFormatDropDown_wrapper input {
  display: none;
}
.fileFormatDropDown_main_wrapper .fileFormatDropDown_wrapper:hover {
  border-color: #3b368e;
}
.fileFormatDropDown_main_wrapper .fileFormatDropDown_wrapper_open_ul {
  border-color: rgba(59, 54, 142, 0.15) !important;
  box-shadow: 0 0 0 2px rgba(59, 54, 142, 0.15) !important;
}
.fileFormatDropDown_main_wrapper .fileFormatDropDown_ul {
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
.fileFormatDropDown_main_wrapper .fileFormatDropDown_ul::-webkit-scrollbar {
  width: 1.5rem;
}
.fileFormatDropDown_main_wrapper
  .fileFormatDropDown_ul::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem 0.5rem transparent;
}
.fileFormatDropDown_main_wrapper
  .fileFormatDropDown_ul::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem 0.5rem #f0f2f5;
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  min-height: 2rem;
}
.fileFormatDropDown_main_wrapper
  .fileFormatDropDown_ul
  .fileFormatDropDown_divider {
  height: 0.025rem;
  background-color: #d8dbe0;
  border: none;
  margin: 0.5rem 0;
}
.fileFormatDropDown_main_wrapper .fileFormatDropDown_ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 0.25rem;
  cursor: pointer;
  color: #3e434d;
  min-height: 1.5rem;
}
.fileFormatDropDown_main_wrapper .fileFormatDropDown_ul li span {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fileFormatDropDown_main_wrapper
  .fileFormatDropDown_ul
  li
  .fileFormatDropDown_checkbox_wrapper {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #3e434d;
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 0.2rem 0.35rem;
}

.fileFormatDropDown_checkbox_wrapper:hover {
  background-color: rgba(59, 54, 142, 0.15);
}

.fileFormatDropDown_main_wrapper
  .fileFormatDropDown_ul
  li
  .fileFormatDropDown_checkbox_wrapper
  .fileFormatDropDown_checkbox_label {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  margin: 0.375rem 0 0 0.375rem;
}
.fileFormatDropDown_main_wrapper
  .fileFormatDropDown_ul
  li
  .fileFormatDropDown_checkbox_wrapper
  .fileFormatDropDown_checkbox_label.fileFormatDropDown_ltr {
  margin: 0.375rem 0.375rem 0 0;
}
.fileFormatDropDown_main_wrapper
  .fileFormatDropDown_ul
  li
  .fileFormatDropDown_checkbox_wrapper
  input {
  visibility: hidden;
}
.fileFormatDropDown_main_wrapper
  .fileFormatDropDown_ul
  li
  .fileFormatDropDown_checkbox_wrapper
  .fileFormatDropDown_checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1rem;
  width: 1rem;
  background-color: #fff;
  border: 0.0625rem solid #bbbdc0;
  border-radius: 0.25rem;
}
.fileFormatDropDown_main_wrapper
  .fileFormatDropDown_ul
  li
  .fileFormatDropDown_checkbox_wrapper
  .fileFormatDropDown_checkbox_label
  input:checked
  ~ .fileFormatDropDown_checkmark {
  background-color: #3b368e;
}

.fileFormatDropDown_checkbox_label ~ span {
  margin-left: 0.5rem;
}
.fileFormatDropDown_main_wrapper
  .fileFormatDropDown_ul
  li
  .fileFormatDropDown_checkbox_wrapper
  .fileFormatDropDown_checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.fileFormatDropDown_main_wrapper
  .fileFormatDropDown_ul
  li
  .fileFormatDropDown_checkbox_wrapper
  .fileFormatDropDown_checkbox_label
  input:checked
  ~ .fileFormatDropDown_checkmark:after {
  display: block;
}
.fileFormatDropDown_main_wrapper
  .fileFormatDropDown_ul
  li
  .fileFormatDropDown_checkbox_wrapper
  .fileFormatDropDown_checkbox_label
  .fileFormatDropDown_checkmark:after {
  left: 0.375rem;
  bottom: 0.25rem;
  width: 0.125rem;
  height: 0.5rem;
  border: solid #fff;
  border-width: 0 0.1475rem 0.1475rem 0;
  transform: rotate(45deg);
}
.fileFormatDropDown_main_wrapper .fileFormatDropDown_ul:focus {
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
.react-tag-input {
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
.react-tag-input::placeholder {
  color: #333;
}
.react-tag-input:focus {
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
.fileFormatInput_format_input_wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin: 0.5rem 0;
}

.fileFormatInput_format_input_wrapper * {
  box-sizing: border-box !important;
}
.fileFormatInput_format_input_wrapper.fileFormatInput_ltr {
  flex-direction: row;
}
.fileFormatInput_format_input_wrapper .fileFormatInput_format_input {
  width: 75%;
  padding-right: 0.5rem;
}
.fileFormatInput_format_input_wrapper .fileFormatInput_format_input input {
  height: 2rem;
  box-sizing: border-box;
  direction: ltr;
}
.fileFormatInput_input_wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.fileFormatInput_input_wrapper > div:first-child {
  direction: ltr;
  text-align: left;
  min-width: inherit;
  outline: none;
  border: none;
  background-color: #fff;
  align-items: flex-start;
  height: max-content !important;
  min-height: auto !important;
  max-height: 13rem;
  overflow-x: hidden;
  padding: 0 !important;
}
.fileFormatInput_input_wrapper > div:first-child > div {
  height: 1.5rem !important;
  box-sizing: border-box !important;
  background-color: rgba(59, 54, 142, 0.15);
  color: #3b368e;
}
.fileFormatInput_input_wrapper > div:first-child > div > div {
  color: #3b368e;
  background-color: transparent;
}
.fileFormatInput_input_wrapper > div:first-child > div > div:after,
.fileFormatInput_input_wrapper > div:first-child > div > div:before {
  background-color: #3b368e;
}
.fileFormatInput_input_wrapper > div:first-child input {
  display: none;
}
.fileFormatInput_input_wrapper > div:first-child:hover {
  border-color: #3b368e;
}
.fileFormatInput_input_wrapper > div:first-child:focus {
  box-shadow: 0 0 0 2px rgba(59, 54, 142, 0.15);
}
</style>
