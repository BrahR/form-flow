<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";

import { useDraggable } from "vue-draggable-plus";
import { ref, computed, inject } from "vue";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;
const el = ref(null as never as HTMLElement);

const shownChoices = computed(() => {
  return useQuestion.getPictureChoices.filter((choice) => {
    if (choice.hidden) return;
    return choice;
  });
});

const shownChoicesMessage = computed(() => {
  return shownChoices.value.length < 2
    ? "At least 2 choices must be shown"
    : "";
});

// @ts-ignore
useDraggable(el, useQuestion.getPictureChoices, {
  handle: ".dragable",
});
</script>

<template>
  <div
    class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV picturechoice_choices_wrapper__gn85O"
  >
    <div
      class="picturechoice_choices_mode_wrapper__kDFFr picturechoice_ltr__zJCqm"
    >
      <div class="picturechoice_active__iGeaR picturechoice_mode___m3BW">
        <div>
          Choices
          <div class="picturechoice_active_line__5QMXX"></div>
        </div>
      </div>
      <div class="false picturechoice_mode___m3BW">
        <div>Ready-made choices</div>
      </div>
    </div>
    <transition-group ref="el" type="transition" tag="div" name="fade">
      <div
        v-for="(choice, index) in useQuestion.getPictureChoices"
        :key="choice.id"
        class="picturechoice_row_wrapper__Yq_6C"
      >
        <div>
          <div class="picturechoice_choice_wrapper__k76ET">
            <div class="picturechoice_input_wrapper__4egU6 false">
              <div
                class="picturechoice_index_wrapper__gM4gd dragable"
                tabindex="-1"
                role="button"
                aria-describedby="rbd-hidden-text-1-hidden-text-4"
              >
                <svg width="12" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h12v24H0z"></path>
                    <g
                      stroke="#6B7079"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <path d="m1 8 2-2 2 2M5 17l-2 2-2-2M3 7.5v10"></path>
                    </g>
                  </g>
                </svg>
                <div
                  class="picturechoice_index__LZhsa picturechoice_ltr__zJCqm"
                >
                  {{ index + 1 }}
                </div>
              </div>
              <input
                v-model="choice.label"
                class="picturechoice_input__6zLhL"
                type="text"
                placeholder="Label"
              />
            </div>
            <div
              class="picturechoice_actions_wrapper__dvXYL picturechoice_ltr__zJCqm"
            >
              <input type="file" class="picturechoice_file_input__HNw5l" />
              <div class="picturechoice_upload_icon__qHrti false">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h24v24H0z"></path>
                    <g
                      stroke="#FFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <path
                        d="m15.276 14.833-3.273-3.334-3.272 3.334M12.003 11.499V19"
                      ></path>
                      <path
                        d="M18.867 16.825c1.642-.912 2.467-2.841 2.006-4.687-.46-1.846-2.092-3.138-3.961-3.14h-1.03c-.679-2.671-2.903-4.642-5.595-4.955C7.596 3.73 4.993 5.14 3.741 7.587a6.766 6.766 0 0 0 .9 7.496"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div
                class="picturechoice_choice_actions__5GhpG picturechoice_ltr__zJCqm"
              >
                <div
                  class="picturechoice_action__1eDy0 false"
                  @click="
                    useQuestion.appendChoice(
                      index,
                      useQuestion.getPictureChoices,
                      {
                        label: '',
                        image:
                          'https://i.ebayimg.com/images/g/Dv0AAOSwl9BWL6v9/s-l1200.webp',
                        checked: false,
                      }
                    )
                  "
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h24v24H0z"></path>
                      <g
                        stroke="#6B7079"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M12 7v10M7 12h10"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  class="picturechoice_action__1eDy0 false"
                  @click="choice.hidden = !choice.hidden"
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g v-if="choice.hidden" fill="none" fill-rule="evenodd">
                      <path d="M0 0h24v24H0z"></path>
                      <g
                        stroke="#6B7079"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      >
                        <path
                          d="M16.32 16.32A7.324 7.324 0 0 1 12 17.818C6.91 17.818 4 12 4 12a13.418 13.418 0 0 1 3.68-4.32m2.793-1.324A6.634 6.634 0 0 1 12 6.182c5.09 0 8 5.818 8 5.818a13.455 13.455 0 0 1-1.57 2.32m-4.888-.778a2.182 2.182 0 1 1-3.084-3.084M4 4l16 16"
                        ></path>
                      </g>
                    </g>
                    <g v-else fill="none" fill-rule="evenodd">
                      <path d="M0 0h24v24H0z"></path>
                      <g
                        transform="translate(4 6)"
                        stroke="#6B7079"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      >
                        <path
                          d="M0 6s2.91-6 8-6 8 6 8 6-2.91 6-8 6-8-6-8-6z"
                        ></path>
                        <ellipse cx="8" cy="6" rx="2.182" ry="2.25"></ellipse>
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  class="picturechoice_action__1eDy0"
                  :class="{
                    picturechoice_disabled__7LaWA:
                      useQuestion.getPictureChoices.length <= 2,
                  }"
                  @click="
                    useQuestion.deleteChoice(
                      index,
                      useQuestion.getPictureChoices
                    )
                  "
                >
                  <!-- @click="useQuestion.deletePictureChoice(index)" -->
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h24v24H0z"></path>
                      <g
                        stroke="#6B7079"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.939"
                      >
                        <path
                          d="m8.353 15.211 6.858-6.857M8.353 8.353l6.858 6.858"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
    <InputError :error="shownChoicesMessage" />
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
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
  .sharedBuild_toggle_input_row_wrapper__1KFOE.sharedBuild_ltr__BELlV {
  direction: ltr;
}
.picturechoice_choices_mode_wrapper__kDFFr {
  display: flex;
  width: -moz-max-content;
  width: max-content;
  height: 100%;
  border-bottom: 2px solid #f0f2f5;
  padding-bottom: 2px;
  margin-bottom: 1rem !important;
}
.picturechoice_choices_mode_wrapper__kDFFr .picturechoice_mode___m3BW {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3e434d;
}
.picturechoice_choices_mode_wrapper__kDFFr
  .picturechoice_mode___m3BW:first-child {
  margin-left: 1rem;
}
.picturechoice_choices_mode_wrapper__kDFFr .picturechoice_mode___m3BW > div {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  border-radius: 0.125rem;
}
.picturechoice_choices_mode_wrapper__kDFFr
  .picturechoice_mode___m3BW
  > div:hover {
  cursor: pointer;
}
.picturechoice_choices_mode_wrapper__kDFFr
  .picturechoice_mode___m3BW
  .picturechoice_active_line__5QMXX {
  position: absolute;
  bottom: 0;
  padding: 0;
  width: 100%;
  height: 0.125rem;
  border-top-right-radius: 5rem;
  border-top-left-radius: 5rem;
  background-color: #3b368e;
}
.picturechoice_choices_mode_wrapper__kDFFr
  .picturechoice_mode___m3BW.picturechoice_active__iGeaR {
  color: #3b368e;
  font-weight: 700;
}
.picturechoice_choices_mode_wrapper__kDFFr.picturechoice_ltr__zJCqm
  .picturechoice_mode___m3BW:first-child {
  margin-left: 0;
  margin-right: 1rem;
}
.picturechoice_choices_wrapper__gn85O .picturechoice_row_wrapper__Yq_6C {
  display: flex;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET {
  display: flex;
  margin-bottom: 1rem;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_input_wrapper__4egU6 {
  display: flex;
  outline: none;
  height: 2rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  border: 0.063rem solid #bbbdc0;
  background-color: #fff;
  color: #3e434d;
  box-sizing: border-box;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_input_wrapper__4egU6
  .picturechoice_index_wrapper__gM4gd {
  background-color: #f0f2f5;
  color: #6b7079;
  display: flex;
  align-items: center;
  padding: 0.25rem 0 0.25rem 0.25rem;
  border-radius: 0.125rem;
  min-width: 2.25rem;
  box-sizing: border-box;
  cursor: move;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_input_wrapper__4egU6
  .picturechoice_index_wrapper__gM4gd
  .picturechoice_index__LZhsa {
  margin-right: 0.5rem;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_input_wrapper__4egU6
  .picturechoice_index_wrapper__gM4gd
  .picturechoice_index__LZhsa.picturechoice_ltr__zJCqm {
  margin-right: 0;
  margin-left: 0.5rem;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_input_wrapper__4egU6
  .picturechoice_input__6zLhL {
  border: none;
  outline: none;
  padding: 0 0.5rem;
  width: 100%;
  font: unset;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_input_wrapper__4egU6:hover {
  border-color: #3b368e;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_input_wrapper__4egU6:focus {
  box-shadow: 0 0 0 2px rgba(59, 54, 142, 0.15);
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL {
  display: flex;
  margin-right: 0.5rem;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL.picturechoice_ltr__zJCqm {
  margin-right: 0;
  margin-left: 0.5rem;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL
  .picturechoice_upload_icon__qHrti {
  background-color: #3b368e;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  cursor: pointer;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL
  .picturechoice_file_input__HNw5l {
  display: none;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL
  .picturechoice_choice_actions__5GhpG {
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL
  .picturechoice_choice_actions__5GhpG
  .picturechoice_action__1eDy0 {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  cursor: pointer;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL
  .picturechoice_choice_actions__5GhpG
  .picturechoice_action__1eDy0:hover {
  background-color: #d8dbe0;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL
  .picturechoice_choice_actions__5GhpG
  .picturechoice_action__1eDy0:first-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL
  .picturechoice_choice_actions__5GhpG
  .picturechoice_action__1eDy0:last-child {
  border-radius: 0.25rem 0 0 0.25rem;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL
  .picturechoice_choice_actions__5GhpG
  .picturechoice_action__1eDy0:last-child:hover {
  background-color: #e3324f;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL
  .picturechoice_choice_actions__5GhpG
  .picturechoice_action__1eDy0:last-child:hover
  svg
  g
  g {
  stroke: #fff;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL
  .picturechoice_choice_actions__5GhpG
  .picturechoice_action__1eDy0.picturechoice_disabled__7LaWA {
  cursor: not-allowed;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL
  .picturechoice_choice_actions__5GhpG.picturechoice_ltr__zJCqm {
  margin-right: 0;
  margin-left: 0.5rem;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL
  .picturechoice_choice_actions__5GhpG.picturechoice_ltr__zJCqm
  .picturechoice_action__1eDy0:first-child {
  border-radius: 0.25rem 0 0 0.25rem;
}
.picturechoice_choices_wrapper__gn85O
  .picturechoice_row_wrapper__Yq_6C
  .picturechoice_choice_wrapper__k76ET
  .picturechoice_actions_wrapper__dvXYL
  .picturechoice_choice_actions__5GhpG.picturechoice_ltr__zJCqm
  .picturechoice_action__1eDy0:last-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
@media (max-width: 1024px) {
  .picturechoice_choices_wrapper__gn85O .picturechoice_row_wrapper__Yq_6C {
    display: unset;
  }
  .picturechoice_choices_wrapper__gn85O
    .picturechoice_choice_wrapper__k76ET
    .picturechoice_input_wrapper__4egU6 {
    width: 100%;
  }
  .picturechoice_choices_wrapper__gn85O
    .picturechoice_choice_wrapper__k76ET
    .picturechoice_input_wrapper__4egU6
    .picturechoice_input__6zLhL {
    outline: none;
    width: 100%;
  }
}
.dragable {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  touch-action: manipulation;
  cursor: -webkit-grab;
  cursor: grab;
  overflow-anchor: none;
}
</style>
