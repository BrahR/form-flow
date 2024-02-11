<script setup lang="ts">
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

type Emits = {
  submit?: void;
};

defineEmits<Emits>();

const useQuestionToggles = useQuestionTogglesStore();
const { imageOrVideo } = storeToRefs(useQuestionToggles);
</script>

<template>
  <div class="sharedBuild_toggle_input_row_wrapper sharedBuild_ltr">
    <div class="addImageOrVideo_wrapper">
      <div>
        <div class="toggleButton_wrapper">
          <span class="toggleButton_title toggleButton_bold">
            Image or Videos
          </span>
          <label class="toggleButton_switch">
            <input
              v-model="imageOrVideo.on"
              name="Image or Video"
              class="toggleButton_toggle_button_checkbox"
              type="checkbox"
            />
            <div class="toggleButton_slider_round"></div>
          </label>
        </div>
      </div>
      <div v-if="imageOrVideo.on">
        <div
          class="addImageOrVideo_image_or_video_selector addImageOrVideo_ltr"
        >
          <div class="addImageOrVideo_item addImageOrVideo_active">Image</div>
          <div class="addImageOrVideo_item false">Video</div>
        </div>
        <div class="addImageOrVideo_file_upload_wrapper">
          <div>
            <div class="addImageOrVideo_upload_box null" role="presentation">
              <div class="">
                <button type="button" class="buttons_button buttons_primary">
                  Choose
                </button>
              </div>
              <span class="addImageOrVideo_max_size_text">
                Maximum Size: 2 MB
              </span>
              <input type="file" class="addImageOrVideo_file_input" />
            </div>
          </div>
        </div>
        <div class="addImageOrVideo_image_error">
          <div class="notifications_notification notifications_error">
            <div class="notifications_icon">
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
                          transform="translate(-361.000000, -324.000000) translate(73.000000, 320.000000) translate(288.000000, 4.000000)"
                        ></path>
                        <path
                          fill="#BC0007"
                          fill-rule="nonzero"
                          d="M3.867 22c-.48 0-.962-.1-1.442-.398-1.346-.796-1.827-2.687-1.058-4.08L9.54 3.393c.192-.398.576-.796.961-.995.673-.398 1.442-.498 2.211-.298.77.199 1.346.696 1.827 1.393l8.076 14.03c.289.497.385.994.385 1.492 0 .796-.288 1.592-.865 2.09-.481.596-1.154.895-1.923.895H3.867z"
                          transform="translate(-361.000000, -324.000000) translate(73.000000, 320.000000) translate(288.000000, 4.000000)"
                        ></path>
                        <path
                          fill="#FFF"
                          fill-rule="nonzero"
                          d="M12 16c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-8c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1z"
                          transform="translate(-361.000000, -324.000000) translate(73.000000, 320.000000) translate(288.000000, 4.000000)"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class="notifications_title">
              Choose a picture or disable this feature.
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
/*! CSS Used from: Embedded */
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_toggle_input_row_wrapper {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 0.875rem 0;
}
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_toggle_input_row_wrapper.sharedBuild_ltr {
  direction: ltr;
}
body :focus-visible {
  outline: none;
}
/*! CSS Used from: Embedded */
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
  -webkit-opacity: 1;
}
/*! CSS Used from: Embedded */
.toggleButton_wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.toggleButton_wrapper > * {
  flex-shrink: 0;
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
.addImageOrVideo_wrapper .addImageOrVideo_image_or_video_selector {
  margin: 1rem 0 0.75rem;
  display: flex;
  width: -moz-max-content;
  width: max-content;
}
.addImageOrVideo_wrapper
  .addImageOrVideo_image_or_video_selector
  .addImageOrVideo_item {
  height: 2rem;
  min-width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
}
.addImageOrVideo_wrapper
  .addImageOrVideo_image_or_video_selector
  .addImageOrVideo_item:first-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.addImageOrVideo_wrapper
  .addImageOrVideo_image_or_video_selector
  .addImageOrVideo_item:last-child {
  border-radius: 0.25rem 0 0 0.25rem;
}
.addImageOrVideo_wrapper
  .addImageOrVideo_image_or_video_selector
  .addImageOrVideo_item.addImageOrVideo_active {
  background-color: #d8dbe0;
}
.addImageOrVideo_wrapper
  .addImageOrVideo_image_or_video_selector
  .addImageOrVideo_item:hover {
  cursor: pointer;
}
.addImageOrVideo_wrapper
  .addImageOrVideo_image_or_video_selector.addImageOrVideo_ltr
  .addImageOrVideo_item:first-child {
  border-radius: 0.25rem 0 0 0.25rem;
}
.addImageOrVideo_wrapper
  .addImageOrVideo_image_or_video_selector.addImageOrVideo_ltr
  .addImageOrVideo_item:last-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.addImageOrVideo_file_upload_wrapper .addImageOrVideo_upload_box {
  max-width: 21.25rem;
  height: 5.4375rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.addImageOrVideo_file_upload_wrapper .addImageOrVideo_upload_box:hover {
  cursor: pointer;
}
.addImageOrVideo_file_upload_wrapper
  .addImageOrVideo_upload_box
  .addImageOrVideo_file_input {
  display: none;
}
.addImageOrVideo_file_upload_wrapper
  .addImageOrVideo_upload_box
  .addImageOrVideo_max_size_text {
  font-size: 12px;
  margin-top: 0.375rem;
  color: #6b7079;
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
  .sharedBuild_toggle_input_row_wrapper.sharedBuild_ltr {
  direction: ltr;
}
</style>
