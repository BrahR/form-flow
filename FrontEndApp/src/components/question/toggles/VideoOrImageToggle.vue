<script setup lang="ts">
import { useQuestionStore } from "@/store/question";

const useQuestion = useQuestionStore();
</script>

<template>
  <div class="addImageOrVideo_wrapper__7Q3RW">
    <div>
      <div class="toggleButton_wrapper__dOusd">
        <span class="toggleButton_title__zP_tP toggleButton_bold__huFoE"
          >Image or Video</span
        >
        <label class="toggleButton_switch__EF_q8">
          <input
            v-model="useQuestion.getVideoOrImage.on"
            name="Image or Video"
            class="toggleButton_toggle_button_checkbox__a2Pr8"
            type="checkbox"
          />
          <div class="toggleButton_slider_round__QN633"></div>
        </label>
      </div>
    </div>
    <div v-if="useQuestion.getVideoOrImage.on">
      <div
        class="addImageOrVideo_image_or_video_selector__uGhVz addImageOrVideo_ltr__oPv_8"
      >
        <div class="addImageOrVideo_item__LUNc5 addImageOrVideo_active__Ddfda">
          Image
        </div>
        <div class="addImageOrVideo_item__LUNc5 false">Video</div>
      </div>
      <div class="addImageOrVideo_file_upload_wrapper__1vjoC">
        <div>
          <div
            class="addImageOrVideo_upload_box__haTNH null"
            role="presentation"
          >
            <div class="">
              <button
                type="button"
                class="buttons_button__PUTxb buttons_primary__RmNyQ"
              >
                Choose
              </button>
            </div>
            <span class="addImageOrVideo_max_size_text__vJw3Y"
              >Maximum Size: 2 MB</span
            >
            <input type="file" class="addImageOrVideo_file_input__FukCL" />
          </div>
        </div>
      </div>
      <div class="addImageOrVideo_image_error__7obvg">
        <div
          class="notifications_notification__WCzEr notifications_error__olN0I"
        >
          <div class="notifications_icon__XSCRe">
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
          <div class="notifications_title__AVo77">
            Choose a picture or disable this feature.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
