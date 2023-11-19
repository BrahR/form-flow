<script setup lang="ts">
import Dialog from "@/components/Dialog.vue";

import {useQuestionStore} from "@/store/question.ts";
import {QuestionType} from "@/types/store/question";
import {watch} from "vue";

const props = defineProps<{
  open: boolean
  type: QuestionType
}>()


const useQuestion = useQuestionStore()
useQuestion.hydrate(props.type)

watch(() => props.type, () => {
  useQuestion.hydrate(props.type)
})

</script>

<template>
  <Dialog v-if="useQuestion.isHydrated" :show="open" :full="true" @close="() => console.log('E')">
    <div class="ReactModalPortal">
      <div class="ReactModal__Overlay ReactModal__Overlay--after-open addOrEditQuestionModal_modal_overlay__rgQs8">
        <div
          class="ReactModal__Content ReactModal__Content--after-open addOrEditQuestionModal_modal_wrapper__KK2G8"
          tabindex="-1" role="dialog" aria-modal="true">
          <div class="sharedIndex_content__3SCeJ sharedIndex_ltr__mCCAr">
            <div class="sharedIndex_sidebar__DMD9M sharedIndex_ltr__mCCAr">
              <div class="questionHeader_header__KdSai">
                <div class="questionHeader_title__f0ZQh">
                  <router-link :to="{ name: 'Survey.Build', params: $route.params }" v-slot="{ navigate }" custom>
                    <div class="questionHeader_close_icon__NxbEt" @click="navigate">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                        <g fill="none" fill-rule="evenodd">
                          <path stroke="#3E434D" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M30 18L18 30M18 18L30 30"
                                transform="translate(-1152.000000, -306.000000) translate(232.000000, 302.000000) translate(920.000000, 4.000000)"></path>
                        </g>
                      </svg>
                    </div>
                  </router-link>
                  <div class="questionHeader_question_header_wrapper__44dEG questionHeader_ltr__T3Sam">
                    <component :is="{...useQuestion.getIcon}" :number="1"></component>
<!--                    <div-->
<!--                      class="questionNumber_question_number_wrapper__eCXI_ questionNumber_multiple_choice_question__Qb_fe questionNumber_ltr__n8kqK">-->
<!--                      <div class="questionNumber_icon__nsjC6">-->
<!--                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--                          <path-->
<!--                            d="M20 13a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4zm-8.5 3a.5.5 0 1 1 0 1h-8a.5.5 0 1 1 0-1h8zM18 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11.5 8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1 0-1h8z"-->
<!--                            fill="#3E434D" fill-rule="nonzero"></path>-->
<!--                        </svg>-->
<!--                      </div>-->
<!--                      <div class="questionNumber_question_number_text__MJfAs">1</div>-->
<!--                    </div>-->
                    <div class="questionHeader_name__Znclc questionHeader_ltr__T3Sam">Multiple Choice</div>
                  </div>
                </div>
                <div class="questionHeader_mobile_navbar__G6_dM">
                  <div class="questionHeader_navbar_item__2K8Sa questionHeader_active__X_qz1">Create</div>
                  <div class="questionHeader_navbar_item__2K8Sa">Preview</div>
                </div>
              </div>
              <div class="sharedIndex_content__3SCeJ">
                <div
                  :class="{ skeleton: useQuestion.question.loading }"
                  class="sharedIndex_questions_content__TPf69"
                >
                  <div v-if="!useQuestion.question.loading">
                    <div class="sharedBuild_questions_content__brpUH">
                      <div class="sharedBuild_build_content__A2KQg">
                        <div class="sharedBuild_title_row_wrapper__y3pqQ sharedBuild_ltr__BELlV">
                          <div class="questionTitle_title_wrapper__8jrx0">
                            <div class="questionTitle_editor_wrapper__0lxhw">
                              <div class="ck-show-toolbar-wrapper">
                                <div class="newPipedTextInput_label__djMbi newPipedTextInput_bold__KtKEN">Label</div>
                                <ckeditor
                                  :editor="useQuestion.getLabelEditor"
                                  :config="useQuestion.getLabelConfig"

                                  @ready="useQuestion.getLabelReady"
                                ></ckeditor>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          v-if="useQuestion.getDescribed?.shown"
                          class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
                        >
                          <div class="questionDescription_description_Wrapper__auABf">
                            <div>
                              <div class="toggleButton_wrapper__dOusd">
                                <span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">Description</span>
                                <label class="toggleButton_switch__EF_q8">
                                  <input v-model="useQuestion.getDescribed.on"
                                         class="toggleButton_toggle_button_checkbox__a2Pr8" type="checkbox"/>
                                  <div class="toggleButton_slider_round__QN633"></div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div v-show="useQuestion.getDescribed.on" class="ck-show-toolbar-wrapper mt-3">
                            <ckeditor
                              :editor="useQuestion.getDescEditor"
                              :config="useQuestion.getDescConfig"

                              @ready="useQuestion.getDescReady"
                            ></ckeditor>
                          </div>
                        </div>
                        <div
                          v-if="useQuestion.getStartButton?.shown"
                          class="sharedBuild_title_row_wrapper__y3pqQ sharedBuild_ltr__BELlV"
                        >
                          <div class="inlineInput_wrapper__7HOFO inlineInput_ltr__IdP5R">
                            <p class="inlineInput_label__gJoig">Button</p>
                            <div class="inlineInput_input_wrapper__8ZUU7">
                              <input
                                v-model="useQuestion.getStartButton.value"
                                class="inlineInput_input__S084b undefined"
                                type="text">
                            </div>
                          </div>
                        </div>
                        <div
                          v-if="useQuestion.getChoices"
                          class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
                        >
                          <div class="build_choices_mode_wrapper__IYDOB build_ltr__VPOnA">
                            <div class="build_active__3KD8k build_mode__Erlww">
                              <div>
                                Choices
                                <div class="build_active_line__LrOS_"></div>
                              </div>
                            </div>
                          </div>
                          <div data-rbd-droppable-id="droppable" data-rbd-droppable-context-id="1">
                            <template v-for="(choice, index) in useQuestion.getChoices" :key="index">
                              <div class="buildChoice_choice_row__T3p8q" data-rbd-draggable-context-id="1"
                                   data-rbd-draggable-id="39d26a13-c473-4ff3-8c07-428dae22d63a">
                                <div
                                  :class="{ buildChoice_hidden__ITdK4: choice.hidden }"
                                  class="buildChoice_input_wrapper__j2HKG buildChoice_ltr__k8APe"
                                >
                                  <div class="buildChoice_index_wrapper__2__aG" tabindex="-1" role="button"
                                       aria-describedby="rbd-hidden-text-1-hidden-text-6"
                                       data-rbd-drag-handle-draggable-id="39d26a13-c473-4ff3-8c07-428dae22d63a"
                                       data-rbd-drag-handle-context-id="1" draggable="false">
                                    <svg width="12" height="24" xmlns="http://www.w3.org/2000/svg">
                                      <g fill="none" fill-rule="evenodd">
                                        <path d="M0 0h12v24H0z"></path>
                                        <g stroke="#6B7079" stroke-linecap="round" stroke-linejoin="round"
                                           stroke-width="1.5">
                                          <path d="m1 8 2-2 2 2M5 17l-2 2-2-2M3 7.5v10"></path>
                                        </g>
                                      </g>
                                    </svg>
                                    <div class="buildChoice_index__uOXsJ">{{ index + 1 }}</div>
                                  </div>
                                  <input v-model="choice.value" class="buildChoice_input__pLH_h buildChoice_ltr__k8APe"
                                         type="text"/>
                                </div>
                                <div class="buildChoice_actions_wrapper__OzcvQ buildChoice_ltr__k8APe">
                                  <div class="buildChoice_choice_actions__Nufet">
                                    <div
                                      class="buildChoice_action_right__5Cgii buildChoice_ltr__k8APe"
                                      @click="useQuestion.appendChoice(index)"
                                    >
                                      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fill-rule="evenodd">
                                          <path d="M0 0h24v24H0z"></path>
                                          <g stroke="#6B7079" stroke-linecap="round" stroke-linejoin="round"
                                             stroke-width="2">
                                            <path d="M12 7v10M7 12h10"></path>
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                    <div
                                      class="buildChoice_action_middle__etyfo"
                                      @click="choice.hidden = !choice.hidden"
                                    >
                                      <svg v-if="choice.hidden" width="24" height="24"
                                           xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fill-rule="evenodd">
                                          <path d="M0 0h24v24H0z"></path>
                                          <g stroke="#6B7079" stroke-linecap="round" stroke-linejoin="round"
                                             stroke-width="1.5">
                                            <path
                                              d="M16.32 16.32A7.324 7.324 0 0 1 12 17.818C6.91 17.818 4 12 4 12a13.418 13.418 0 0 1 3.68-4.32m2.793-1.324A6.634 6.634 0 0 1 12 6.182c5.09 0 8 5.818 8 5.818a13.455 13.455 0 0 1-1.57 2.32m-4.888-.778a2.182 2.182 0 1 1-3.084-3.084M4 4l16 16"></path>
                                          </g>
                                        </g>
                                      </svg>
                                      <svg v-else width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fill-rule="evenodd">
                                          <path d="M0 0h24v24H0z"></path>
                                          <g transform="translate(4 6)" stroke="#6B7079" stroke-linecap="round"
                                             stroke-linejoin="round" stroke-width="1.5">
                                            <path d="M0 6s2.91-6 8-6 8 6 8 6-2.91 6-8 6-8-6-8-6z"></path>
                                            <ellipse cx="8" cy="6" rx="2.182" ry="2.25"></ellipse>
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                    <div
                                      :class="{ buildChoice_disable__w99rm: useQuestion.getChoices.length <= 2 }"
                                      class="buildChoice_action_left__0V4PE buildChoice_ltr__k8APe"
                                      @click="useQuestion.deleteChoice(index)"
                                    >
                                      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fill-rule="evenodd">
                                          <path d="M0 0h24v24H0z"></path>
                                          <g stroke="#6B7079" stroke-linecap="round" stroke-linejoin="round"
                                             stroke-width="1.939">
                                            <path d="m8.353 15.211 6.858-6.857M8.353 8.353l6.858 6.858"></path>
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </template>
                          </div>
                        </div>
                        <div
                          v-if="useQuestion.getRequired?.shown"
                          class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
                        >
                          <div class="sharedBuild_toggle_wrapper__R5w_y">
                            <div class="toggleButton_wrapper__dOusd">
                              <span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">Required</span>
                              <label class="toggleButton_switch__EF_q8">
                                <input v-model="useQuestion.getRequired.on"
                                       class="toggleButton_toggle_button_checkbox__a2Pr8"
                                       type="checkbox"/>
                                <div class="toggleButton_slider_round__QN633"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div
                          v-if="useQuestion.getVideoOrImage?.shown"
                          class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
                        >
                          <div class="addImageOrVideo_wrapper__7Q3RW">
                            <div>
                              <div class="toggleButton_wrapper__dOusd">
                                <span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">Image or Video</span>
                                <label class="toggleButton_switch__EF_q8">
                                  <input
                                    v-model="useQuestion.getVideoOrImage.on"
                                    name="Image or Video" class="toggleButton_toggle_button_checkbox__a2Pr8"
                                    type="checkbox"/>
                                  <div class="toggleButton_slider_round__QN633"></div>
                                </label>
                              </div>
                            </div>
                            <div v-if="useQuestion.getVideoOrImage.on">
                              <div class="addImageOrVideo_image_or_video_selector__uGhVz addImageOrVideo_ltr__oPv_8">
                                <div class="addImageOrVideo_item__LUNc5 addImageOrVideo_active__Ddfda">Image</div>
                                <div class="addImageOrVideo_item__LUNc5 false">Video</div>
                              </div>
                              <div class="addImageOrVideo_file_upload_wrapper__1vjoC">
                                <div>
                                  <div class="addImageOrVideo_upload_box__haTNH null" role="presentation">
                                    <div class="">
                                      <button type="button"
                                              class="buttons_button__PUTxb buttons_primary__RmNyQ">
                                        Choose
                                      </button>
                                    </div>
                                    <span class="addImageOrVideo_max_size_text__vJw3Y">Maximum Size: 2 MB</span>
                                    <input type="file" class="addImageOrVideo_file_input__FukCL">
                                  </div>
                                </div>
                              </div>
                              <div class="addImageOrVideo_image_error__7obvg">
                                <div class="notifications_notification__WCzEr notifications_error__olN0I">
                                  <div class="notifications_icon__XSCRe">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                      <g fill="none" fill-rule="evenodd">
                                        <g>
                                          <g>
                                            <g>
                                              <path d="M0 0H24V24H0z"
                                                    transform="translate(-361.000000, -324.000000) translate(73.000000, 320.000000) translate(288.000000, 4.000000)"></path>
                                              <path fill="#BC0007" fill-rule="nonzero"
                                                    d="M3.867 22c-.48 0-.962-.1-1.442-.398-1.346-.796-1.827-2.687-1.058-4.08L9.54 3.393c.192-.398.576-.796.961-.995.673-.398 1.442-.498 2.211-.298.77.199 1.346.696 1.827 1.393l8.076 14.03c.289.497.385.994.385 1.492 0 .796-.288 1.592-.865 2.09-.481.596-1.154.895-1.923.895H3.867z"
                                                    transform="translate(-361.000000, -324.000000) translate(73.000000, 320.000000) translate(288.000000, 4.000000)"></path>
                                              <path fill="#FFF" fill-rule="nonzero"
                                                    d="M12 16c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-8c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1z"
                                                    transform="translate(-361.000000, -324.000000) translate(73.000000, 320.000000) translate(288.000000, 4.000000)"></path>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                  <div class="notifications_title__AVo77">Choose a picture or disable this feature.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          v-if="useQuestion.getVerticalDisplay?.shown"
                          class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
                        >
                          <div class="sharedBuild_toggle_wrapper__R5w_y">
                            <div class="toggleButton_wrapper__dOusd">
                              <span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">Vertical Display</span>
                              <label class="toggleButton_switch__EF_q8">
                                <input
                                  v-model="useQuestion.getVerticalDisplay.on"
                                  class="toggleButton_toggle_button_checkbox__a2Pr8"
                                  type="checkbox"/>
                                <div class="toggleButton_slider_round__QN633"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div
                          v-if="useQuestion.getMultipleAnswers?.shown"
                          class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
                        >
                          <div class="sharedBuild_toggle_wrapper__R5w_y">
                            <div class="toggleButton_wrapper__dOusd">
                              <span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">Multiple Selection</span>
                              <label class="toggleButton_switch__EF_q8">
                                <input v-model="useQuestion.getMultipleAnswers.on"
                                       class="toggleButton_toggle_button_checkbox__a2Pr8" type="checkbox"/>
                                <div class="toggleButton_slider_round__QN633"></div>
                              </label>
                            </div>
                          </div>
                          <div
                            v-if="useQuestion.getMultipleAnswers.on"
                            class="buildMinMaxChoice_min_max_choices_wrapper__WvAKM"
                          >
                            <div class="buildMinMaxChoice_title__Nv3yz">Range</div>
                            <div class="buildMinMaxChoice_min_max_wrapper__5S8Wi">
                              <div class="buildMinMaxChoice_wrapper__Kmwsk">
                                <div class="buildMinMaxChoice_min_wrapper__8oipe">
                                  <div class="buildMinMaxChoice_description__kycW8 buildMinMaxChoice_ltr__rNhi8">Min
                                  </div>
                                  <input
                                    v-model="useQuestion.getMultipleAnswers.min"
                                    class="buildMinMaxChoice_input__29wsq"
                                    type="number"
                                    inputmode="decimal"
                                  >
                                </div>
                              </div>
                              <div class="buildMinMaxChoice_wrapper__Kmwsk">
                                <div class="buildMinMaxChoice_max_wrapper__zI1rG">
                                  <div class="buildMinMaxChoice_description__kycW8 buildMinMaxChoice_ltr__rNhi8">Max
                                  </div>
                                  <input
                                    v-model="useQuestion.getMultipleAnswers.max"
                                    class="buildMinMaxChoice_input__29wsq"
                                    type="number"
                                    inputmode="decimal"
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-if="useQuestion.getHideQuestionNumber?.shown"
                             class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV">
                          <div class="sharedBuild_toggle_wrapper__R5w_y">
                            <div class="toggleButton_wrapper__dOusd">
                              <span
                                class="toggleButton_title__zP_tP toggleButton_bold__huFoE">Hide question number</span>
                              <label class="toggleButton_switch__EF_q8">
                                <input
                                  v-model="useQuestion.getHideQuestionNumber.on"
                                  class="toggleButton_toggle_button_checkbox__a2Pr8"
                                  type="checkbox"
                                />
                                <div class="toggleButton_slider_round__QN633"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer_footer_wrapper__CrUvK">
                <button type="button" class="footer_save_button__NO8M2">Save</button>
                <button type="button" class="footer_cancel_button__XTxje">Cancel</button>
              </div>
            </div>
            <div class="sharedIndex_preview__HrJbC sharedIndex_ltr__mCCAr">
              <div class="sharedIndex_preview_buttons__S_Qr_">
                <div class="previewButtonGroup_preview_button_group__3ggkH">
                  <div
                    class="selectionButtonGroup_buttons_wrapper__jbKNI selectionButtonGroup_ltr__V3WKz selectionButtonGroup_white__LXFXJ">
                    <button type="button" class="selectionButtonGroup_selected_tab__BT9Pz">
                      <div class="previewButtonGroup_svg_on__34F_H">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <g transform="translate(3.429 4)" stroke="#3E434D" stroke-linejoin="round">
                              <rect stroke-linecap="round" width="17.143" height="12" rx="2"></rect>
                              <path stroke-linecap="round" d="M4.571 16h8"></path>
                              <path stroke-linecap="square" d="M8.571 13v3"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </button>
                    <button type="button" class="selectionButtonGroup_selected_tab__BT9Pz">
                      <div class="false">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <g transform="translate(7 5)">
                              <rect stroke="#3E434D" stroke-linecap="round" stroke-linejoin="round" width="10"
                                    height="15" rx="2"></rect>
                              <rect fill="#3E434D" x="3" y="12" width="4" height="1" rx=".5"></rect>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="sharedIndex_background__565mZ sharedIndex_animation__KSN1B sharedIndex_ltr__mCCAr"></div>
              <div class="sharedIndex_question__ROyXE">
                <component :is="{...useQuestion.getPreview}"></component>
              </div>
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

.ReactModal__Overlay {
  opacity: 0;
  transition: opacity .4s ease-in-out;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
}

/*! CSS Used from: Embedded */


.questionNumber_multiple_choice_question__Qb_fe {
  background: #f4bbe1;
}

.footer_footer_wrapper__CrUvK {
  display: flex;
  padding: .75rem 1rem;
  align-items: center;
  height: 2rem;
  box-shadow: inset 0 .125rem 0 0 #f0f2f5;
  direction: ltr;
  background-color: #fff;
  border-radius: 0 0 .5rem .5rem;
}

.footer_footer_wrapper__CrUvK button {
  border: none;
  border-radius: .25rem;
  padding: .25rem .75rem;
  cursor: pointer;
  min-width: 4rem;
  height: 2rem;
  background-color: #9ee3ff;
  font-family: inherit;
}

.footer_footer_wrapper__CrUvK button:focus {
  outline: none;
}

.footer_footer_wrapper__CrUvK .footer_save_button__NO8M2 {
  color: #fff;
  background-color: #3b368e;
  margin-right: 1rem;
}

.footer_footer_wrapper__CrUvK .footer_save_button__NO8M2:hover {
  background-color: rgba(59, 54, 142, .8);
}

.footer_footer_wrapper__CrUvK .footer_cancel_button__XTxje {
  color: #3b368e;
  background-color: rgba(59, 54, 142, .15);
}

.footer_footer_wrapper__CrUvK .footer_cancel_button__XTxje:hover {
  background-color: #d8dbe0;
}

@media (max-width: 1024px) {
  .footer_footer_wrapper__CrUvK {
    border-radius: 0;
  }
}

.questionHeader_header__KdSai .questionHeader_title__f0ZQh {
  display: flex;
  justify-content: flex-start;
  box-shadow: inset 0 -.125rem 0 0 #f0f2f5;
  position: relative;
  height: 3.5rem;
  align-items: center;
}

.questionHeader_header__KdSai .questionHeader_title__f0ZQh .questionHeader_close_icon__NxbEt {
  display: flex;
  cursor: pointer;
}

.questionHeader_header__KdSai .questionHeader_mobile_navbar__G6_dM {
  display: none;
}

.questionHeader_header__KdSai .questionHeader_question_header_wrapper__44dEG {
  align-items: center;
  display: flex;
  padding: 0 .25rem;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
}

.questionHeader_header__KdSai .questionHeader_question_header_wrapper__44dEG .questionHeader_name__Znclc {
  align-items: center;
  display: flex;
  margin-right: .5rem;
}

.questionHeader_header__KdSai .questionHeader_question_header_wrapper__44dEG .questionHeader_name__Znclc.questionHeader_ltr__T3Sam {
  margin-right: 0;
  margin-left: .5rem;
}

.questionHeader_header__KdSai .questionHeader_question_header_wrapper__44dEG.questionHeader_ltr__T3Sam {
  direction: ltr;
}

@media (max-width: 1024px) {
  .questionHeader_header__KdSai .questionHeader_mobile_navbar__G6_dM {
    display: flex;
    box-shadow: inset 0 -.125rem 0 0 #f0f2f5;
    width: 100%;
    height: 3rem;
    padding: 0 2rem;
  }

  .questionHeader_header__KdSai .questionHeader_mobile_navbar__G6_dM .questionHeader_navbar_item__2K8Sa {
    justify-content: flex-start;
    align-items: center;
    padding: .75rem;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    cursor: pointer;
    position: relative;
    font-size: 14px;
  }

  .questionHeader_header__KdSai .questionHeader_mobile_navbar__G6_dM .questionHeader_navbar_item__2K8Sa.questionHeader_active__X_qz1 {
    color: #3b368e;
    position: relative;
  }

  .questionHeader_header__KdSai .questionHeader_mobile_navbar__G6_dM .questionHeader_navbar_item__2K8Sa.questionHeader_active__X_qz1:before {
    position: absolute;
    content: "";
    width: 100%;
    height: .2rem;
    bottom: 0;
    left: 0;
    background-color: #3b368e;
    border-radius: 1rem 1rem 0 0;
  }
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

.toggleButton_wrapper__dOusd .toggleButton_title__zP_tP {
  max-width: 16.75rem;
  color: #3e434d;
}

.toggleButton_wrapper__dOusd .toggleButton_title__zP_tP.toggleButton_bold__huFoE {
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

.toggleButton_wrapper__dOusd .toggleButton_switch__EF_q8 .toggleButton_toggle_button_checkbox__a2Pr8 {
  display: none;
  margin: .25rem 0 0;
  line-height: normal;
  box-sizing: border-box;
  padding: 0;
}

.toggleButton_wrapper__dOusd .toggleButton_switch__EF_q8 .toggleButton_slider_round__QN633 {
  border-radius: 1rem;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #bbbdc0;
  transition: .4s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.toggleButton_wrapper__dOusd .toggleButton_switch__EF_q8 .toggleButton_slider_round__QN633:before {
  position: absolute;
  content: "";
  height: 1rem;
  width: 1rem;
  left: .125rem;
  bottom: .125rem;
  background-color: #fff;
  transition: .4s;
  border-radius: 50%;
}

.toggleButton_wrapper__dOusd .toggleButton_switch__EF_q8 input:checked + .toggleButton_slider_round__QN633 {
  background-color: #3b368e;
}

.toggleButton_wrapper__dOusd .toggleButton_switch__EF_q8 input:focus + .toggleButton_slider_round__QN633 {
  box-shadow: 0 0 .0625rem #3b368e;
}

.toggleButton_wrapper__dOusd .toggleButton_switch__EF_q8 input:checked + .toggleButton_slider_round__QN633:before {
  transform: translateX(1.25rem);
}

.questionDescription_description_Wrapper__auABf {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  font-size: 14px;
}

.questionTitle_editor_wrapper__0lxhw, .questionTitle_title_wrapper__8jrx0 {
  width: 100%;
}

.buildChoice_choice_row__T3p8q {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.buildChoice_actions_wrapper__OzcvQ {
  display: flex;
  margin-right: .5rem;
}

.buildChoice_actions_wrapper__OzcvQ.buildChoice_ltr__k8APe {
  margin-right: 0;
  margin-left: .5rem;
}

.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  border-radius: .25rem;
}

.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet .buildChoice_action_middle__etyfo {
  height: 2rem;
  flex-grow: 1;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet .buildChoice_action_middle__etyfo:hover {
  background-color: #d8dbe0;
}

.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet .buildChoice_action_middle__etyfo:hover svg {
  path-stroke: #3e434d;
}

.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet .buildChoice_action_right__5Cgii {
  height: 2rem;
  flex-grow: 1;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem;
}

.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet .buildChoice_action_right__5Cgii.buildChoice_ltr__k8APe {
  border-radius: .25rem 0 0 .25rem;
}

.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet .buildChoice_action_right__5Cgii:hover {
  background-color: #d8dbe0;
}

.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet .buildChoice_action_right__5Cgii:hover svg path:last-child {
  stroke: #3e434d;
}

.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet .buildChoice_action_left__0V4PE {
  height: 2rem;
  flex-grow: 1;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
}

.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet .buildChoice_action_left__0V4PE.buildChoice_disable__w99rm {
  cursor: not-allowed;
}

.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet .buildChoice_action_left__0V4PE:hover {
  background-color: #d8dbe0;
}

.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet .buildChoice_action_left__0V4PE.buildChoice_ltr__k8APe {
  border-radius: 0 .25rem .25rem 0;
}

.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet .buildChoice_action_left__0V4PE:hover {
  background-color: #e3324f;
}

.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet .buildChoice_action_left__0V4PE:hover svg path:last-child {
  stroke: #fff;
}

.buildChoice_input_wrapper__j2HKG {
  display: flex;
  outline: none;
  height: 2rem;
  padding: .25rem;
  border-radius: .25rem;
  border: .063rem solid #bbbdc0;
  background-color: #fff;
  color: #3e434d;
  box-sizing: border-box;
}

.buildChoice_input_wrapper__j2HKG:hover {
  border-color: #3b368e;
}

.buildChoice_input_wrapper__j2HKG .buildChoice_index_wrapper__2__aG {
  background-color: #f0f2f5;
  color: #6b7079;
  display: flex;
  align-items: center;
  padding: .25rem 0 .25rem .25rem;
  border-radius: .125rem;
  min-width: 2.25rem;
  box-sizing: border-box;
}

.buildChoice_input_wrapper__j2HKG .buildChoice_index_wrapper__2__aG {
  cursor: move;
}

.buildChoice_input_wrapper__j2HKG .buildChoice_index_wrapper__2__aG .buildChoice_index__uOXsJ {
  margin-right: .5rem;
}

.buildChoice_input_wrapper__j2HKG .buildChoice_input__pLH_h {
  all: unset;
  border: none;
  padding: 0 .5rem;
  width: 100%;
}

.buildChoice_input_wrapper__j2HKG .buildChoice_input__pLH_h:hover {
  border-color: #3b368e;
}

.tooltip_tooltip_wrapper__EBmhu {
  display: inline-block;
  vertical-align: middle;
}

.tooltip_tooltip_icon__P7bFI {
  cursor: pointer;
}

.tooltip_tooltip_icon__P7bFI svg {
  display: block;
}

.tooltip_tooltip_icon__P7bFI.tooltip_ltr__gBssJ {
  transform: scaleX(-1);
}

.sharedBuild_questions_content__brpUH {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sharedBuild_questions_content__brpUH .sharedBuild_build_content__A2KQg .sharedBuild_title_row_wrapper__y3pqQ {
  font-size: 14px;
  box-shadow: inset 0 -.0625rem 0 0 #f0f2f5;
  padding: 1.5rem 0 .65rem;
}

.sharedBuild_questions_content__brpUH .sharedBuild_build_content__A2KQg .sharedBuild_title_row_wrapper__y3pqQ.sharedBuild_ltr__BELlV {
  direction: ltr;
}

.sharedBuild_questions_content__brpUH .sharedBuild_build_content__A2KQg .sharedBuild_toggle_input_row_wrapper__1KFOE {
  font-size: 14px;
  box-shadow: inset 0 -.0625rem 0 0 #f0f2f5;
  padding: .875rem 0;
}

.sharedBuild_questions_content__brpUH .sharedBuild_build_content__A2KQg .sharedBuild_toggle_input_row_wrapper__1KFOE .sharedBuild_toggle_wrapper__R5w_y {
  min-height: 1.25rem;
}

.sharedBuild_questions_content__brpUH .sharedBuild_build_content__A2KQg .sharedBuild_toggle_input_row_wrapper__1KFOE .sharedBuild_toggle_wrapper__R5w_y span {
  max-width: 15rem !important;
}

.sharedBuild_questions_content__brpUH .sharedBuild_build_content__A2KQg .sharedBuild_toggle_input_row_wrapper__1KFOE.sharedBuild_ltr__BELlV {
  direction: ltr;
}

.build_choices_mode_wrapper__IYDOB {
  display: flex;
  width: -moz-max-content;
  width: max-content;
  height: 100%;
  border-bottom: .125rem solid #f0f2f5;
  padding-bottom: .125rem;
  margin-bottom: 1rem !important;
}

.build_choices_mode_wrapper__IYDOB .build_mode__Erlww {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3e434d;
}

.build_choices_mode_wrapper__IYDOB .build_mode__Erlww:first-child {
  margin-left: .5rem;
}

.build_choices_mode_wrapper__IYDOB .build_mode__Erlww > div {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .25rem;
  border-radius: .125rem;
}

.build_choices_mode_wrapper__IYDOB .build_mode__Erlww > div:hover {
  cursor: pointer;
}

.build_choices_mode_wrapper__IYDOB .build_mode__Erlww .build_active_line__LrOS_ {
  position: absolute;
  bottom: 0;
  padding: 0;
  width: 100%;
  height: .125rem;
  border-top-right-radius: 5rem;
  border-top-left-radius: 5rem;
  background-color: #3b368e;
}

.build_choices_mode_wrapper__IYDOB .build_mode__Erlww.build_active__3KD8k {
  color: #3b368e;
  font-weight: 700;
}

.build_choices_mode_wrapper__IYDOB.build_ltr__VPOnA .build_mode__Erlww:first-child {
  margin-left: 0;
  margin-right: .5rem;
}

.selectionButtonGroup_buttons_wrapper__jbKNI {
  display: flex;
  width: 100%;
}

.selectionButtonGroup_buttons_wrapper__jbKNI button {
  margin: 0;
  flex-grow: 1;
  width: 0;
  cursor: pointer;
  padding: .25rem 0;
  font-family: unset;
  font-size: 14px;
  border-radius: 0;
  scrollbar-width: none;
}

.selectionButtonGroup_buttons_wrapper__jbKNI button:focus {
  outline: none;
}

.selectionButtonGroup_buttons_wrapper__jbKNI button:first-child {
  border-radius: 0 .25rem .25rem 0;
}

.selectionButtonGroup_buttons_wrapper__jbKNI button:last-child, .selectionButtonGroup_buttons_wrapper__jbKNI.selectionButtonGroup_ltr__V3WKz button:first-child {
  border-radius: .25rem 0 0 .25rem;
}

.selectionButtonGroup_buttons_wrapper__jbKNI.selectionButtonGroup_ltr__V3WKz button:last-child {
  border-radius: 0 .25rem .25rem 0;
}

.selectionButtonGroup_buttons_wrapper__jbKNI.selectionButtonGroup_white__LXFXJ button {
  border: none;
  background-color: #fff;
}

@media (max-width: 1024px) {
  .selectionButtonGroup_buttons_wrapper__jbKNI button {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .selectionButtonGroup_buttons_wrapper__jbKNI button:focus {
    outline: none;
  }
}

.previewButtonGroup_preview_button_group__3ggkH {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 5rem;
}

.previewButtonGroup_preview_button_group__3ggkH button {
  background-color: #fff;
  width: 2rem;
  height: 2rem;
  padding: .25rem;
  border: none;
  border-radius: .25rem;
  cursor: pointer;
}

.previewButtonGroup_preview_button_group__3ggkH button .previewButtonGroup_svg_on__34F_H svg g g {
  stroke: #3b368e;
}

.previewButtonGroup_preview_button_group__3ggkH button .previewButtonGroup_svg_on__34F_H svg g g rect:first-child {
  fill: #3b368e;
  fill-opacity: .15;
}

.previewButtonGroup_preview_button_group__3ggkH button:focus {
  outline: none;
}

.sharedIndex_content__3SCeJ {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: .5rem;
}

.sharedIndex_content__3SCeJ.sharedIndex_ltr__mCCAr {
  direction: ltr;
}

.sharedIndex_content__3SCeJ .sharedIndex_sidebar__DMD9M {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 22.5rem;
  height: 100%;
  border-radius: 0 .5rem .5rem 0;
  background-color: #fff;
  justify-content: stretch;
  border-left: .0625rem solid #f0f2f5;
}

.sharedIndex_content__3SCeJ .sharedIndex_sidebar__DMD9M.sharedIndex_ltr__mCCAr {
  border-radius: .5rem 0 0 .5rem;
  border-left: none;
  border-right: .0625rem solid #f0f2f5;
}

.sharedIndex_content__3SCeJ .sharedIndex_sidebar__DMD9M .sharedIndex_content__3SCeJ {
  overflow-y: auto;
  flex-grow: 1;
  padding: 0 1rem;
  box-sizing: border-box !important;
  scrollbar-gutter: stable both-edges;
}

.sharedIndex_content__3SCeJ .sharedIndex_sidebar__DMD9M .sharedIndex_content__3SCeJ::-webkit-scrollbar {
  width: 1.5rem;
}

.sharedIndex_content__3SCeJ .sharedIndex_sidebar__DMD9M .sharedIndex_content__3SCeJ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 .5rem .5rem transparent;
}

.sharedIndex_content__3SCeJ .sharedIndex_sidebar__DMD9M .sharedIndex_content__3SCeJ::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 .5rem .5rem #f0f2f5;
  border: .5rem solid transparent;
  border-radius: 1rem;
  min-height: 2rem;
}

.sharedIndex_content__3SCeJ .sharedIndex_sidebar__DMD9M .sharedIndex_content__3SCeJ::-webkit-scrollbar {
  width: .75rem !important;
}

.sharedIndex_content__3SCeJ .sharedIndex_sidebar__DMD9M .sharedIndex_content__3SCeJ::-webkit-scrollbar-thumb {
  border: .2rem solid transparent !important;
}

.sharedIndex_content__3SCeJ .sharedIndex_sidebar__DMD9M .sharedIndex_questions_content__TPf69 {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.sharedIndex_content__3SCeJ .sharedIndex_preview__HrJbC {
  border-radius: .5rem 0 0 .5rem;
  background-color: #eef0f5;
  display: flex;
  height: 100%;
  width: calc(100% - 22.5625rem);
  align-items: center;
  line-height: var(--preview-line-height);
  position: relative;
}

.sharedIndex_content__3SCeJ .sharedIndex_preview__HrJbC.sharedIndex_ltr__mCCAr {
  border-radius: 0 .5rem .5rem 0;
}

.sharedIndex_content__3SCeJ .sharedIndex_preview__HrJbC .sharedIndex_preview_buttons__S_Qr_ {
  z-index: 99;
  position: absolute;
  top: 0;
  left: calc(50% - 2.5rem);
  margin-top: .75rem;
}

.sharedIndex_content__3SCeJ .sharedIndex_preview__HrJbC .sharedIndex_background__565mZ {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  border-radius: .5rem 0 0 .5rem;
  background-color: var(--preview-theme-background-color);
  background-image: var(--preview-theme-background-image);
  background-position: var(--preview-theme-background-position);
  background-size: var(--preview-theme-background-size);
  background-repeat: var(--preview-theme-background-repeat);
  opacity: var(--preview-theme-background-opacity);
}

.sharedIndex_content__3SCeJ .sharedIndex_preview__HrJbC .sharedIndex_background__565mZ.sharedIndex_animation__KSN1B {
  transition: .4s;
}

.sharedIndex_content__3SCeJ .sharedIndex_preview__HrJbC .sharedIndex_background__565mZ.sharedIndex_ltr__mCCAr {
  border-radius: 0 .5rem .5rem 0;
}

.sharedIndex_content__3SCeJ .sharedIndex_preview__HrJbC .sharedIndex_question__ROyXE {
  position: absolute;
  padding: 2rem 4rem;
  box-sizing: border-box;
  width: 100%;
  overflow-y: auto;
  max-height: calc(100% - 4rem);
  scrollbar-width: none;
  font-family: var(--preview-theme-font-family) !important;
  font-size: var(--preview-theme-font-size) !important;
  direction: rtl;
}

.sharedIndex_content__3SCeJ .sharedIndex_preview__HrJbC .sharedIndex_question__ROyXE::-webkit-scrollbar {
  width: 0;
}

@media (max-width: 1024px) {
  .sharedIndex_content__3SCeJ {
    border-radius: 0;
    flex-wrap: wrap;
  }

  .sharedIndex_content__3SCeJ .sharedIndex_sidebar__DMD9M {
    width: 100%;
    height: 100%;
    border-radius: 0 !important;
  }
}

.addOrEditQuestionModal_modal_overlay__rgQs8 {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  padding: .5rem;
}

.addOrEditQuestionModal_modal_overlay__rgQs8 .addOrEditQuestionModal_modal_wrapper__KK2G8 {
  border-radius: .5rem;
  width: 100%;
  height: 100%;
  color: #3e434d;
}

@media (max-width: 1024px) {
  .addOrEditQuestionModal_modal_overlay__rgQs8 {
    padding: 0;
  }

  .addOrEditQuestionModal_modal_overlay__rgQs8 .addOrEditQuestionModal_modal_wrapper__KK2G8 {
    flex-direction: column;
    border-radius: 0;
    height: 100%;
    width: 100%;
  }
}

/*! CSS Used from: https://canarycdn.porsline.com/static/panel/v2/_next/static/css/fae0d74cb8e16e53.css */
.newPipedTextInput_label__djMbi {
  color: #3e434d;
  margin-bottom: .25rem;
}

.newPipedTextInput_label__djMbi.newPipedTextInput_bold__KtKEN {
  font-weight: 700;
}

.newPipedTextInput_pipe_with_dropdown_toggle__lqrEA {
  display: flex;
  align-items: center;
}

.newPipedTextInput_pipe_with_dropdown_toggle__lqrEA .newPipedTextInput_piping_helper_text__SzvxU {
  font-size: 12px;
  color: #6b7079;
  margin-top: .25rem;
}

.newPipedTextInput_pipe_with_dropdown_toggle__lqrEA .newPipedTextInput_piping_helper_text__SzvxU:hover {
  cursor: pointer;
}

.newPipedTextInput_pipe_with_dropdown_toggle__lqrEA .newPipedTextInput_icon__yOCYK {
  display: flex;
  align-items: center;
  padding-top: .25rem;
  cursor: pointer;
}

.newPipedTextInput_pipe_with_dropdown_toggle__lqrEA .newPipedTextInput_icon__yOCYK svg {
  height: 1.25rem;
}

.newPipedTextInput_dropdown_wrapper__8nWQk {
  position: relative;
  list-style: none;
}

@media (max-width: 1024px) {
  .newPipedTextInput_dropdown_wrapper__8nWQk, .newPipedTextInput_dropdown_wrapper__8nWQk:focus {
    outline: none;
  }
}

/*! CSS Used from: Embedded */
.core-styles-module_tooltip__3vRRp {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  will-change: opacity;
}

.core-styles-module_arrow__cvMwQ {
  position: absolute;
  background: inherit;
}

.core-styles-module_closing__sGnxF {
  opacity: 0;
  transition: opacity var(--rt-transition-closing-delay) ease-in;
}

/*! CSS Used from: Embedded */
.styles-module_tooltip__mnnfp {
  padding: 8px 16px;
  border-radius: 3px;
  font-size: 90%;
  width: max-content;
}

.styles-module_arrow__K0L3T {
  width: 8px;
  height: 8px;
}

[class*='react-tooltip__place-top'] > .styles-module_arrow__K0L3T {
  transform: rotate(45deg);
}

.styles-module_dark__xNqje {
  background: var(--rt-color-dark);
  color: var(--rt-color-white);
}

/*! CSS Used from: Embedded */
[data-rbd-drag-handle-context-id="1"] {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  touch-action: manipulation;
}

[data-rbd-droppable-context-id="1"] {
  overflow-anchor: none;
}

/*! CSS Used from: Embedded */
[data-rbd-drag-handle-context-id="1"] {
  cursor: -webkit-grab;
  cursor: grab;
}

/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/440849882e57e464.css */
.buttons_button__PUTxb {
  all: unset;
  min-width: 4rem;
  min-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .25rem .875rem;
  border-radius: .25rem;
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
  -webkit-opacity: 1;
}

/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/2a2e4efde05c354a.css */
.notifications_notification__WCzEr {
  width: -moz-fit-content;
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: .5rem;
  border-radius: .25rem;
  padding: .25rem;
  flex-wrap: nowrap;
}

.notifications_notification__WCzEr .notifications_icon__XSCRe {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
}

.notifications_notification__WCzEr .notifications_title__AVo77 {
  display: inherit;
  align-items: center;
  overflow-wrap: anywhere;
  margin: 0;
}

.notifications_notification__WCzEr.notifications_error__olN0I {
  background-color: #ffd0d6 !important;
  color: #bc0007;
}

.addImageOrVideo_wrapper__7Q3RW .addImageOrVideo_image_or_video_selector__uGhVz {
  margin: 1rem 0 .75rem;
  display: flex;
  width: -moz-max-content;
  width: max-content;
}

.addImageOrVideo_wrapper__7Q3RW .addImageOrVideo_image_or_video_selector__uGhVz .addImageOrVideo_item__LUNc5 {
  height: 2rem;
  min-width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
}

.addImageOrVideo_wrapper__7Q3RW .addImageOrVideo_image_or_video_selector__uGhVz .addImageOrVideo_item__LUNc5:first-child {
  border-radius: 0 .25rem .25rem 0;
}

.addImageOrVideo_wrapper__7Q3RW .addImageOrVideo_image_or_video_selector__uGhVz .addImageOrVideo_item__LUNc5:last-child {
  border-radius: .25rem 0 0 .25rem;
}

.addImageOrVideo_wrapper__7Q3RW .addImageOrVideo_image_or_video_selector__uGhVz .addImageOrVideo_item__LUNc5.addImageOrVideo_active__Ddfda {
  background-color: #d8dbe0;
}

.addImageOrVideo_wrapper__7Q3RW .addImageOrVideo_image_or_video_selector__uGhVz .addImageOrVideo_item__LUNc5:hover {
  cursor: pointer;
}

.addImageOrVideo_wrapper__7Q3RW .addImageOrVideo_image_or_video_selector__uGhVz.addImageOrVideo_ltr__oPv_8 .addImageOrVideo_item__LUNc5:first-child {
  border-radius: .25rem 0 0 .25rem;
}

.addImageOrVideo_wrapper__7Q3RW .addImageOrVideo_image_or_video_selector__uGhVz.addImageOrVideo_ltr__oPv_8 .addImageOrVideo_item__LUNc5:last-child {
  border-radius: 0 .25rem .25rem 0;
}

.addImageOrVideo_wrapper__7Q3RW .addImageOrVideo_image_error__7obvg {
  margin-top: 1rem;
}

.addImageOrVideo_file_upload_wrapper__1vjoC .addImageOrVideo_upload_box__haTNH {
  max-width: 21.25rem;
  height: 5.4375rem;
  border-radius: .25rem;
  border: none;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.addImageOrVideo_file_upload_wrapper__1vjoC .addImageOrVideo_upload_box__haTNH:hover {
  cursor: pointer;
}

.addImageOrVideo_file_upload_wrapper__1vjoC .addImageOrVideo_upload_box__haTNH .addImageOrVideo_file_input__FukCL {
  display: none;
}

.addImageOrVideo_file_upload_wrapper__1vjoC .addImageOrVideo_upload_box__haTNH .addImageOrVideo_max_size_text__vJw3Y {
  font-size: 12px;
  margin-top: .375rem;
  color: #6b7079;
}

/*! CSS Used from: Embedded */
.buildMinMaxChoice_min_max_choices_wrapper__WvAKM .buildMinMaxChoice_title__Nv3yz {
  margin-top: 1rem;
  color: #6b7079;
}

.buildMinMaxChoice_min_max_choices_wrapper__WvAKM .buildMinMaxChoice_min_max_wrapper__5S8Wi .buildMinMaxChoice_wrapper__Kmwsk .buildMinMaxChoice_max_wrapper__zI1rG, .buildMinMaxChoice_min_max_choices_wrapper__WvAKM .buildMinMaxChoice_min_max_wrapper__5S8Wi .buildMinMaxChoice_wrapper__Kmwsk .buildMinMaxChoice_min_wrapper__8oipe {
  display: flex;
  align-items: center;
  margin-top: .75rem;
  color: #6b7079;
}

.buildMinMaxChoice_min_max_choices_wrapper__WvAKM .buildMinMaxChoice_min_max_wrapper__5S8Wi .buildMinMaxChoice_wrapper__Kmwsk .buildMinMaxChoice_max_wrapper__zI1rG .buildMinMaxChoice_description__kycW8, .buildMinMaxChoice_min_max_choices_wrapper__WvAKM .buildMinMaxChoice_min_max_wrapper__5S8Wi .buildMinMaxChoice_wrapper__Kmwsk .buildMinMaxChoice_min_wrapper__8oipe .buildMinMaxChoice_description__kycW8 {
  margin-left: .5rem;
}

.buildMinMaxChoice_min_max_choices_wrapper__WvAKM .buildMinMaxChoice_min_max_wrapper__5S8Wi .buildMinMaxChoice_wrapper__Kmwsk .buildMinMaxChoice_max_wrapper__zI1rG .buildMinMaxChoice_description__kycW8.buildMinMaxChoice_ltr__rNhi8, .buildMinMaxChoice_min_max_choices_wrapper__WvAKM .buildMinMaxChoice_min_max_wrapper__5S8Wi .buildMinMaxChoice_wrapper__Kmwsk .buildMinMaxChoice_min_wrapper__8oipe .buildMinMaxChoice_description__kycW8.buildMinMaxChoice_ltr__rNhi8 {
  margin-right: .5rem;
  margin-left: 0;
}

.buildMinMaxChoice_min_max_choices_wrapper__WvAKM .buildMinMaxChoice_min_max_wrapper__5S8Wi .buildMinMaxChoice_wrapper__Kmwsk .buildMinMaxChoice_max_wrapper__zI1rG .buildMinMaxChoice_input__29wsq, .buildMinMaxChoice_min_max_choices_wrapper__WvAKM .buildMinMaxChoice_min_max_wrapper__5S8Wi .buildMinMaxChoice_wrapper__Kmwsk .buildMinMaxChoice_min_wrapper__8oipe .buildMinMaxChoice_input__29wsq {
  outline: none;
  height: 2rem;
  margin-top: .25rem;
  padding: .188rem .5rem .25rem;
  border-radius: .25rem;
  border: .063rem solid #bbbdc0;
  background-color: #fff;
  width: 5rem;
  direction: ltr;
  padding-right: .25rem !important;
  color: #3e434d;
  box-sizing: border-box;
}

/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/f419cc97160b5e33.css */
body :focus-visible {
  outline: none;
}

/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/2a2e4efde05c354a.css */
.sharedBuild_questions_content__brpUH .sharedBuild_build_content__A2KQg .sharedBuild_title_row_wrapper__y3pqQ {
  font-size: 14px;
  box-shadow: inset 0 -.0625rem 0 0 #f0f2f5;
  padding: 1.5rem 0 .65rem;
}

.sharedBuild_questions_content__brpUH .sharedBuild_build_content__A2KQg .sharedBuild_title_row_wrapper__y3pqQ.sharedBuild_ltr__BELlV {
  direction: ltr;
}

.sharedBuild_questions_content__brpUH .sharedBuild_build_content__A2KQg .sharedBuild_title_row_wrapper__y3pqQ:last-child {
  box-shadow: none;
}

.inlineInput_wrapper__7HOFO {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.inlineInput_wrapper__7HOFO .inlineInput_label__gJoig {
  margin: .5rem 0 .5rem .5rem;
  white-space: nowrap;
  align-self: flex-start;
}

.inlineInput_wrapper__7HOFO .inlineInput_input_wrapper__8ZUU7 {
  position: relative;
}

.inlineInput_wrapper__7HOFO .inlineInput_input_wrapper__8ZUU7 .inlineInput_input__S084b {
  font-family: unset;
  border: 1px solid #bbbcc0;
  height: 1.5rem;
  padding: .25rem .75rem;
  border-radius: .25rem;
  margin-bottom: .25rem;
}

.inlineInput_wrapper__7HOFO.inlineInput_ltr__IdP5R .inlineInput_label__gJoig {
  margin: .5rem .5rem .5rem 0;
}


</style>
