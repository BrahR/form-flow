<script setup lang="ts">
import Dialog from "@/components/Dialog.vue";

// import { ConfigEditor  }
import { EditorConfig } from "@ckeditor/ckeditor5-core"
import {ClassicEditor} from "@ckeditor/ckeditor5-editor-classic"
import {Essentials} from "@ckeditor/ckeditor5-essentials"
import {Bold, Italic, Underline } from "@ckeditor/ckeditor5-basic-styles"
import {Link} from "@ckeditor/ckeditor5-link"
import {Paragraph} from "@ckeditor/ckeditor5-paragraph";
import {ref} from "vue";

const editorData = ref("")
const editor = ClassicEditor
const editorConfig: EditorConfig = {
  plugins: [
      Essentials,
      Bold,
      Italic,
      Link,
      Paragraph,
      Underline
  ],
  toolbar: {
    items: [
      'bold',
      'italic',
      'underline',
      'link',
      'undo',
      'redo',
    ]
  },
  placeholder: "Enter a label",
  link: {
    decorators: {
      toggleDownloadable: {
        mode: 'manual',
        label: 'Downloadable',
        attributes: {
          download: 'file'
        }
      },
      openInNewTab: {
        mode: 'manual',
        label: 'Open in a new tab',
        defaultValue: true,
        attributes: {
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      },
    },
    defaultProtocol: 'https://',

  }
}

</script>

<template>
  <Dialog :show="true" :full="true" @close="() => console.log('E')">
    <div class="ReactModalPortal">
      <div class="ReactModal__Overlay ReactModal__Overlay--after-open addOrEditQuestionModal_modal_overlay__rgQs8">
        <div
            class="ReactModal__Content ReactModal__Content--after-open addOrEditQuestionModal_modal_wrapper__KK2G8 undefined"
            tabindex="-1" role="dialog" aria-modal="true">
          <div class="sharedIndex_content__3SCeJ sharedIndex_ltr__mCCAr">
            <div class="sharedIndex_sidebar__DMD9M sharedIndex_ltr__mCCAr">
              <div class="questionHeader_header__KdSai">
                <div class="questionHeader_title__f0ZQh">
                  <div class="questionHeader_close_icon__NxbEt false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                      <g fill="none" fill-rule="evenodd">
                        <path stroke="#3E434D" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M30 18L18 30M18 18L30 30"
                              transform="translate(-1152.000000, -306.000000) translate(232.000000, 302.000000) translate(920.000000, 4.000000)"></path>
                      </g>
                    </svg>
                  </div>
                  <div class="questionHeader_question_header_wrapper__44dEG questionHeader_ltr__T3Sam">
                    <div
                        class="questionNumber_question_number_wrapper__eCXI_ questionNumber_multiple_choice_question__Qb_fe false questionNumber_ltr__n8kqK">
                      <div class="questionNumber_icon__nsjC6">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M20 13a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4zm-8.5 3a.5.5 0 1 1 0 1h-8a.5.5 0 1 1 0-1h8zM18 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11.5 8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1 0-1h8z"
                              fill="#3E434D" fill-rule="nonzero"></path>
                        </svg>
                      </div>
                      <div class="questionNumber_question_number_text__MJfAs">1</div>
                    </div>
                    <div class="questionHeader_name__Znclc questionHeader_ltr__T3Sam">Multiple Choice</div>
                  </div>
                </div>
                <div class="questionHeader_mobile_navbar__G6_dM">
                  <div class="questionHeader_navbar_item__2K8Sa questionHeader_active__X_qz1">Create</div>
                  <div class="questionHeader_navbar_item__2K8Sa false">Preview</div>
                </div>
              </div>
              <div class="sharedIndex_content__3SCeJ">
                <div class="sharedIndex_questions_content__TPf69">
                  <div>
                    <div class="sharedBuild_questions_content__brpUH">
                      <div class="sharedBuild_build_content__A2KQg">
                        <div class="sharedBuild_title_row_wrapper__y3pqQ sharedBuild_ltr__BELlV">
                          <div class="questionTitle_title_wrapper__8jrx0">
                            <div class="questionTitle_editor_wrapper__0lxhw">
                              <div class="ck-show-toolbar-wrapper">
                                <div class="newPipedTextInput_label__djMbi newPipedTextInput_bold__KtKEN">Label</div>
                                <ckeditor
                                    :editor="editor"
                                    v-model="editorData"
                                    :config="editorConfig"
                                ></ckeditor>
                                <!--                                <div class="newPipedTextInput_pipe_with_dropdown_toggle__lqrEA"-->
                                <!--                                     id="downshift-293-toggle-button" aria-haspopup="listbox" aria-expanded="false"-->
                                <!--                                     aria-labelledby="downshift-293-label downshift-293-toggle-button">-->
                                <!--                                  <div class="newPipedTextInput_piping_helper_text__SzvxU undefined">Use @ to recall-->
                                <!--                                    information from ...-->
                                <!--                                  </div>-->
                                <!--                                  <div class="newPipedTextInput_icon__yOCYK undefined undefined">-->
                                <!--                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">-->
                                <!--                                      <g fill="none" fill-rule="evenodd">-->
                                <!--                                        <g>-->
                                <!--                                          <g>-->
                                <!--                                            <g>-->
                                <!--                                              <path d="M0 0H24V24H0z"-->
                                <!--                                                    transform="translate(-651.000000, -290.000000) translate(647.000000, 286.000000) translate(4.000000, 4.000000)"></path>-->
                                <!--                                              <path stroke="#3B368E" stroke-linecap="round" stroke-linejoin="round"-->
                                <!--                                                    stroke-width="2" d="M6 10L12 16 18 10"-->
                                <!--                                                    transform="translate(-651.000000, -290.000000) translate(647.000000, 286.000000) translate(4.000000, 4.000000)"></path>-->
                                <!--                                            </g>-->
                                <!--                                          </g>-->
                                <!--                                        </g>-->
                                <!--                                      </g>-->
                                <!--                                    </svg>-->
                                <!--                                  </div>-->
                                <!--                                </div>-->
                                <!--                                <ul id="downshift-293-menu" role="listbox" aria-labelledby="downshift-293-label"-->
                                <!--                                    tabindex="-1" class="newPipedTextInput_dropdown_wrapper__8nWQk"></ul>-->
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV">
                          <div class="questionDescription_description_Wrapper__auABf">
                            <div>
                              <div class="toggleButton_wrapper__dOusd undefined false">
																<span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">Description</span>
                                <label class="toggleButton_switch__EF_q8">
                                  <input name="description_text_active" class="toggleButton_toggle_button_checkbox__a2Pr8"
                                      type="checkbox"/>
                                  <div class="toggleButton_slider_round__QN633 undefined undefined"></div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV">
                          <div class="build_choices_mode_wrapper__IYDOB build_ltr__VPOnA">
                            <div class="build_active__3KD8k build_mode__Erlww">
                              <div>
                                Choices
                                <div class="build_active_line__LrOS_"></div>
                              </div>
                            </div>
                            <div class="false build_mode__Erlww">
                              <div>Ready-made choices</div>
                            </div>
                          </div>
                          <div data-rbd-droppable-id="droppable" data-rbd-droppable-context-id="1">
                            <div class="buildChoice_choice_row__T3p8q" data-rbd-draggable-context-id="1"
                                 data-rbd-draggable-id="39d26a13-c473-4ff3-8c07-428dae22d63a">
                              <div class="buildChoice_input_wrapper__j2HKG false buildChoice_ltr__k8APe false">
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
                                  <div class="buildChoice_index__uOXsJ">1</div>
                                </div>
                                <input class="buildChoice_input__pLH_h buildChoice_ltr__k8APe" type="text" value="c"/>
                              </div>
                              <div class="buildChoice_actions_wrapper__OzcvQ buildChoice_ltr__k8APe">
                                <div class="buildChoice_choice_actions__Nufet">
                                  <div class="buildChoice_action_right__5Cgii buildChoice_ltr__k8APe false">
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
                                  <div class="buildChoice_action_middle__etyfo">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
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
                                      class="buildChoice_action_left__0V4PE buildChoice_ltr__k8APe buildChoice_disable__w99rm">
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
                            <div class="buildChoice_choice_row__T3p8q" data-rbd-draggable-context-id="1"
                                 data-rbd-draggable-id="65a0adda-c590-482f-bc33-b3b6e6b05ea1">
                              <div class="buildChoice_input_wrapper__j2HKG false buildChoice_ltr__k8APe false">
                                <div class="buildChoice_index_wrapper__2__aG" tabindex="-1" role="button"
                                     aria-describedby="rbd-hidden-text-1-hidden-text-6"
                                     data-rbd-drag-handle-draggable-id="65a0adda-c590-482f-bc33-b3b6e6b05ea1"
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
                                  <div class="buildChoice_index__uOXsJ">2</div>
                                </div>
                                <input class="buildChoice_input__pLH_h buildChoice_ltr__k8APe" type="text" value="cas"/>
                              </div>
                              <div class="buildChoice_actions_wrapper__OzcvQ buildChoice_ltr__k8APe">
                                <div class="buildChoice_choice_actions__Nufet">
                                  <div class="buildChoice_action_right__5Cgii buildChoice_ltr__k8APe false">
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
                                  <div class="buildChoice_action_middle__etyfo">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
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
                                      class="buildChoice_action_left__0V4PE buildChoice_ltr__k8APe buildChoice_disable__w99rm">
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
                          </div>
                        </div>
                        <div class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV">
                          <div class="sharedBuild_toggle_wrapper__R5w_y">
                            <div class="toggleButton_wrapper__dOusd undefined false">
															<span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">Other, N/A, etc options</span>
                              <label class="toggleButton_switch__EF_q8">
                                <input name="special_options" class="toggleButton_toggle_button_checkbox__a2Pr8"
                                    type="checkbox"/>
                                <div class="toggleButton_slider_round__QN633 undefined undefined"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV">
                          <div class="sharedBuild_toggle_wrapper__R5w_y">
                            <div class="toggleButton_wrapper__dOusd undefined false">
															<span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">Required</span>
                              <label class="toggleButton_switch__EF_q8">
                                <input name="answer_required" class="toggleButton_toggle_button_checkbox__a2Pr8"
                                    type="checkbox"/>
                                <div class="toggleButton_slider_round__QN633 undefined undefined"></div>
                            </label>
                            </div>
                          </div>
                        </div>
                        <div class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV">
                          <div class="addImageOrVideo_wrapper__7Q3RW">
                            <div>
                              <div class="toggleButton_wrapper__dOusd undefined false">
																<span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">Image or Video</span>
                                sharedIndex_question__ROyXE false<label class="toggleButton_switch__EF_q8">
                                  <input name="Image or Video" class="toggleButton_toggle_button_checkbox__a2Pr8"
                                      type="checkbox"/>
                                  <div class="toggleButton_slider_round__QN633 undefined undefined"></div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV">
                          <div class="sharedBuild_toggle_wrapper__R5w_y">
                            <div class="toggleButton_wrapper__dOusd undefined false">
															<span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">
                                Add secondary label to choices
																<div class="tooltip_tooltip_wrapper__EBmhu">
																	<div class="tooltip_tooltip_icon__P7bFI tooltip_ltr__gBssJ"
                                       data-tooltip-id="1857acb9-f97d-4551-9ee0-d902d46639fb">
																		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
																			<g fill="none" fill-rule="evenodd">
																				<path d="M0 0h24v24H0z"></path>
																				<rect fill="#F0F2F5" x="4" y="4" width="16" height="16" rx="8"></rect>
																				<path
                                            d="M9.5 9.955c0-.494.12-.924.362-1.293.241-.369.555-.655.942-.858.387-.203.8-.304 1.238-.304.865 0 1.489.235 1.871.704.383.469.578 1.146.587 2.032h-1.278c-.008-.432-.091-.756-.247-.972-.157-.216-.444-.324-.86-.324-.366 0-.653.092-.861.275-.209.183-.313.45-.313.798 0 .21.074.399.221.567.148.168.33.337.548.507.217.17.435.363.652.58.217.215.4.475.55.778.15.303.228.671.232 1.103h-1.467c-.004-.406-.081-.728-.231-.965a2.132 2.132 0 0 0-.548-.593l-.642-.471a2.053 2.053 0 0 1-.538-.596c-.145-.24-.218-.563-.218-.968zm1.91 5.544c0-.275.098-.512.293-.71a.953.953 0 0 1 .704-.298c.274 0 .509.099.704.297a.977.977 0 0 1 .294.71c0 .275-.098.511-.294.707a.958.958 0 0 1-.704.295.97.97 0 0 1-.704-.288.96.96 0 0 1-.293-.713z"
                                            fill="#3E434D" fill-rule="nonzero"></path>
																			</g>
																		</svg>
																	</div>
																	<div id="1857acb9-f97d-4551-9ee0-d902d46639fb" role="tooltip"
                                       class="react-tooltip core-styles-module_tooltip__3vRRp styles-module_tooltip__mnnfp styles-module_dark__xNqje react-tooltip__place-top core-styles-module_closing__sGnxF react-tooltip__closing"
                                       style="background-color: rgb(62, 67, 77); color: rgb(255, 255, 255); z-index: 1000; max-width: 17.5rem; box-sizing: border-box; white-space: pre-wrap; left: 120.281px; top: 385.969px">
																		Activate this feature if you prefer numerical codes or different labels in the CSV/XLXS export file.
																		<div
                                        class="react-tooltip-arrow core-styles-module_arrow__cvMwQ styles-module_arrow__K0L3T"
                                        style="left: 136px; bottom: -4px">
                                    </div>
																	</div>
                                </div>
                              </span>
                              <label class="toggleButton_switch__EF_q8">
                                <input name="" class="toggleButton_toggle_button_checkbox__a2Pr8" type="checkbox"/>
                                <div class="toggleButton_slider_round__QN633 undefined undefined"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV">
                          <div class="sharedBuild_toggle_wrapper__R5w_y">
                            <div class="toggleButton_wrapper__dOusd undefined false">
															<span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">Choice Randomization</span>
                              <label class="toggleButton_switch__EF_q8">
                                <input name="randomize" class="toggleButton_toggle_button_checkbox__a2Pr8"
                                      type="checkbox"/>
                                <div class="toggleButton_slider_round__QN633 undefined undefined"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV">
                          <div class="sharedBuild_toggle_wrapper__R5w_y">
                            <div class="toggleButton_wrapper__dOusd undefined false">
															<span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">Vertical Display</span>
                              <label class="toggleButton_switch__EF_q8">
                                <input name="vertical_choices" class="toggleButton_toggle_button_checkbox__a2Pr8"
                                    type="checkbox"/>
                                <div class="toggleButton_slider_round__QN633 undefined undefined"></div>
                            </label>
                            </div>
                          </div>
                        </div>
                        <div class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV">
                          <div class="sharedBuild_toggle_wrapper__R5w_y">
                            <div class="toggleButton_wrapper__dOusd undefined false">
															<span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">Multiple Selection</span>
                              <label class="toggleButton_switch__EF_q8">
                                <input name="" class="toggleButton_toggle_button_checkbox__a2Pr8" type="checkbox"/>
                                <div class="toggleButton_slider_round__QN633 undefined undefined"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV">
                          <div class="sharedBuild_toggle_wrapper__R5w_y">
                            <div class="toggleButton_wrapper__dOusd undefined false">
															<span class="toggleButton_title__zP_tP toggleButton_bold__huFoE">Hide question number</span>
                              <label class="toggleButton_switch__EF_q8">
                                <input name="question_number_is_hidden" class="toggleButton_toggle_button_checkbox__a2Pr8"
                                    type="checkbox"/>
                                <div class="toggleButton_slider_round__QN633 undefined undefined"></div>
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
                <button type="button" class="footer_save_button__NO8M2 false">Save</button>
                <button type="button" class="footer_cancel_button__XTxje false">Cancel</button>
              </div>
            </div>
            <div class="sharedIndex_preview__HrJbC sharedIndex_ltr__mCCAr">
              <div class="sharedIndex_preview_buttons__S_Qr_">
                <div class="previewButtonGroup_preview_button_group__3ggkH">
                  <div
                      class="selectionButtonGroup_buttons_wrapper__jbKNI selectionButtonGroup_ltr__V3WKz selectionButtonGroup_white__LXFXJ">
                    <button type="button" class="selectionButtonGroup_selected_tab__BT9Pz undefined">
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
                    <button type="button" class="selectionButtonGroup_selected_tab__BT9Pz undefined">
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
              <div class="sharedIndex_background__565mZ sharedIndex_animation__KSN1B false sharedIndex_ltr__mCCAr"></div>
              <div class="sharedIndex_question__ROyXE false">
                <div class="preview_multiplechoice_question_wrapper__RatfO preview_ltr__Yc2N7 false" style="opacity: 1">
                  <div class="questionIntro_question_intro_wrapper__93qE0">
                    <div class="questionIntro_question_intro_title__soL_1">
                      <div class="questionIntro_question_intro_title_text_wrapper__FjDMC">
                        <div class="questionIntro_question_number_wrapper__4lzy7">
                          <span class="questionIntro_question_number___M7ip">1</span>
                          <div class="questionIntro_question_number_indicator_icon__SdB_o questionIntro_ltr__PbYmc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="2" viewBox="0 0 8 2">
                              <g fill="none" fill-rule="evenodd">
                                <g fill="#FFF">
                                  <path d="M848 133H856V135H848z"
                                        transform="translate(-848.000000, -133.000000)"></path>
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <span class="questionIntro_question_intro_title_text__YurZo" v-html="editorData"></span>
                      </div>
                    </div>
                  </div>
                  <div class="preview_multiplechoice_question_choices_wrapper__9pZyU undefined preview_ltr__Yc2N7"
                       style="grid-template-columns: repeat(4, 150px)">
                    <div class="preview_multichoice_item__im8xB preview_ltr__Yc2N7 false false false false"
                         style="width: auto">
                      <div class="preview_question_number_and_label_wrapper__Bj0ev">
                        <div><p class="preview_question_number__VUiY4 preview_ltr__Yc2N7">1</p></div>
                        <div class="preview_choice_label__41CYt">c</div>
                      </div>
                      <div class="preview_selected_choice_icon_wrapper__7VOl3"></div>
                    </div>
                    <div class="preview_multichoice_item__im8xB preview_ltr__Yc2N7 false false false false"
                         style="width: auto">
                      <div class="preview_question_number_and_label_wrapper__Bj0ev">
                        <div><p class="preview_question_number__VUiY4 preview_ltr__Yc2N7">2</p></div>
                        <div class="preview_choice_label__41CYt">cas</div>
                      </div>
                      <div class="preview_selected_choice_icon_wrapper__7VOl3"></div>
                    </div>
                  </div>
                  <div class="preview_multi_choice_error_wrapper__iXsW3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<style scoped>
/*! CSS Used from: https://canarycdn.porsline.com/static/panel/v2/_next/static/css/f419cc97160b5e33.css */
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



.core-styles-module_tooltip__3vRRp {
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  will-change: opacity;
}

.core-styles-module_arrow__cvMwQ {
  background: inherit;
  position: absolute;
}

.core-styles-module_closing__sGnxF {
  opacity: 0;
  transition: opacity var(--rt-transition-closing-delay) ease-in;
}

.styles-module_tooltip__mnnfp {
  border-radius: 3px;
  font-size: 90%;
  padding: 8px 16px;
  width: max-content;
}

.styles-module_arrow__K0L3T {
  height: 8px;
  width: 8px;
}

[class*=react-tooltip__place-top] > .styles-module_arrow__K0L3T {
  transform: rotate(45deg);
}

.styles-module_dark__xNqje {
  background: var(--rt-color-dark);
  color: var(--rt-color-white);
}

/*! CSS Used from: Embedded */
.questionNumber_question_number_wrapper__eCXI_ {
  display: flex;
  justify-content: center;
  padding: 0 .25rem 0 .5rem;
  height: 2rem;
  grid-gap: .125rem;
  align-items: center;
  font-weight: 700;
  border-radius: .25rem;
}

.questionNumber_question_number_wrapper__eCXI_ .questionNumber_icon__nsjC6 {
  display: flex;
}

.questionNumber_question_number_wrapper__eCXI_ .questionNumber_icon__nsjC6 svg {
  vertical-align: middle;
}

.questionNumber_question_number_wrapper__eCXI_ .questionNumber_question_number_text__MJfAs {
  margin: 0 .125rem;
}

.questionNumber_question_number_wrapper__eCXI_.questionNumber_ltr__n8kqK {
  padding: 0 .5rem 0 .25rem;
}

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

.questionIntro_question_intro_wrapper__93qE0 {
  padding: 0 0 1em;
  transition: .4s;
}

.questionIntro_question_intro_wrapper__93qE0 .questionIntro_question_intro_title__soL_1 {
  font-size: 1.25em;
  word-break: break-word;
  white-space: pre-line;
}

.questionIntro_question_intro_wrapper__93qE0 .questionIntro_question_intro_title__soL_1 .questionIntro_question_intro_title_text_wrapper__FjDMC {
  display: flex;
}

.questionIntro_question_intro_wrapper__93qE0 .questionIntro_question_intro_title__soL_1 .questionIntro_question_intro_title_text_wrapper__FjDMC .questionIntro_question_number_wrapper__4lzy7 {
  display: flex;
  color: var(--preview-theme-question-color);
}

.questionIntro_question_intro_wrapper__93qE0 .questionIntro_question_intro_title__soL_1 .questionIntro_question_intro_title_text_wrapper__FjDMC .questionIntro_question_number_wrapper__4lzy7 .questionIntro_question_number___M7ip {
  word-break: normal;
}

.questionIntro_question_intro_wrapper__93qE0 .questionIntro_question_intro_title__soL_1 .questionIntro_question_intro_title_text_wrapper__FjDMC .questionIntro_question_number_wrapper__4lzy7 .questionIntro_question_number_indicator_icon__SdB_o {
  display: flex;
  align-items: center;
  padding: 0 .125rem 0 .25rem;
  height: 1.875rem;
}

.questionIntro_question_intro_wrapper__93qE0 .questionIntro_question_intro_title__soL_1 .questionIntro_question_intro_title_text_wrapper__FjDMC .questionIntro_question_number_wrapper__4lzy7 .questionIntro_question_number_indicator_icon__SdB_o svg g {
  fill: var(--preview-theme-question-color);
}

.questionIntro_question_intro_wrapper__93qE0 .questionIntro_question_intro_title__soL_1 .questionIntro_question_intro_title_text_wrapper__FjDMC .questionIntro_question_number_wrapper__4lzy7 .questionIntro_question_number_indicator_icon__SdB_o.questionIntro_ltr__PbYmc {
  padding: 0 .25rem 0 .125rem;
}

.questionIntro_question_intro_wrapper__93qE0 .questionIntro_question_intro_title__soL_1 .questionIntro_question_intro_title_text_wrapper__FjDMC .questionIntro_question_intro_title_text__YurZo {
  color: var(--preview-theme-question-color);
}

.preview_multiplechoice_question_wrapper__RatfO {
  padding: 1rem 0;
}

.preview_multiplechoice_question_wrapper__RatfO.preview_ltr__Yc2N7 {
  direction: ltr !important;
}

.preview_multiplechoice_question_wrapper__RatfO .preview_multiplechoice_question_choices_wrapper__9pZyU {
  display: grid;
  grid-gap: .75rem;
  padding-bottom: 1.5rem;
}

.preview_multiplechoice_question_wrapper__RatfO .preview_multiplechoice_question_choices_wrapper__9pZyU .preview_multichoice_item__im8xB {
  height: 100%;
  all: unset;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: flex-start;
  border-radius: .5rem;
  padding: .3125rem .25rem .25rem;
  border: .0625rem solid;
  min-height: 1.8125rem;
  color: var(--preview-theme-answer-color);
  -webkit-text-fill-color: var(--preview-theme-answer-color);
  background-color: var(--preview-theme-answer-color-lightest);
  transition: all .1s ease-in-out;
}

.preview_multiplechoice_question_wrapper__RatfO .preview_multiplechoice_question_choices_wrapper__9pZyU .preview_multichoice_item__im8xB p {
  margin: 0;
}

.preview_multiplechoice_question_wrapper__RatfO .preview_multiplechoice_question_choices_wrapper__9pZyU .preview_multichoice_item__im8xB .preview_question_number_and_label_wrapper__Bj0ev {
  display: flex;
  width: calc(100% - 2.25rem);
}

.preview_multiplechoice_question_wrapper__RatfO .preview_multiplechoice_question_choices_wrapper__9pZyU .preview_multichoice_item__im8xB .preview_question_number_and_label_wrapper__Bj0ev .preview_choice_label__41CYt {
  margin: 0;
  font-size: 1.0625em;
  overflow-wrap: anywhere;
}

.preview_multiplechoice_question_wrapper__RatfO .preview_multiplechoice_question_choices_wrapper__9pZyU .preview_multichoice_item__im8xB .preview_question_number_and_label_wrapper__Bj0ev .preview_question_number__VUiY4 {
  height: 1.75rem;
  min-width: 1.75rem;
  font-size: 1em;
  margin-left: .5rem;
  border-radius: .25rem;
  background-color: var(--preview-theme-answer-color);
  color: var(--preview-theme-answer-color-contrast);
  -webkit-text-fill-color: var(--preview-theme-answer-color-contrast);
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview_multiplechoice_question_wrapper__RatfO .preview_multiplechoice_question_choices_wrapper__9pZyU .preview_multichoice_item__im8xB .preview_question_number_and_label_wrapper__Bj0ev .preview_question_number__VUiY4.preview_ltr__Yc2N7 {
  margin-left: 0;
  margin-right: .5rem;
}

.preview_multiplechoice_question_wrapper__RatfO .preview_multiplechoice_question_choices_wrapper__9pZyU .preview_multichoice_item__im8xB .preview_selected_choice_icon_wrapper__7VOl3 {
  width: 2rem;
  margin-right: .5rem;
}

.preview_multiplechoice_question_wrapper__RatfO .preview_multiplechoice_question_choices_wrapper__9pZyU .preview_multichoice_item__im8xB.preview_ltr__Yc2N7 {
  padding: .3125rem .25rem .25rem;
}

.preview_multiplechoice_question_wrapper__RatfO .preview_multiplechoice_question_choices_wrapper__9pZyU .preview_multichoice_item__im8xB.preview_ltr__Yc2N7 .preview_selected_choice_icon_wrapper__7VOl3 {
  margin-left: .5rem;
  margin-right: 0;
}

.preview_multiplechoice_question_wrapper__RatfO .preview_multiplechoice_question_choices_wrapper__9pZyU .preview_multichoice_item__im8xB:hover {
  cursor: pointer;
  border-color: var(--preview-theme-accent-color);
  box-shadow: 0 0 0 .1875rem var(--preview-theme-accent-color);
}

.preview_multiplechoice_question_wrapper__RatfO .preview_multi_choice_error_wrapper__iXsW3 {
  height: 1.75rem;
}

@media (max-width: 1024px) {
  .preview_multiplechoice_question_wrapper__RatfO .preview_multiplechoice_question_choices_wrapper__9pZyU .preview_multichoice_item__im8xB:hover {
    cursor: pointer;
    border-color: var(--preview-theme-accent-color);
    box-shadow: 0 0 0 .1875rem var(--preview-theme-accent-color);
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
  width: calc(100% - 8rem);
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
</style>
