<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import { ref, inject } from "vue";
import { useDraggable } from "vue-draggable-plus";
import type { QuestionBuilderStore } from "@/store/questionBuilder";

const useQuestionBuilder = inject("question") as QuestionBuilderStore;
const el = ref(null as unknown as HTMLElement);

// @ts-ignore
useDraggable(el, useQuestionBuilder.getMultipleChoices, {
  handle: ".dragable",
});
</script>

<template>
  <div
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
    <transition-group ref="el" type="transition" tag="div" name="fade">
      <div
        v-for="(element, index) in useQuestionBuilder.getMultipleChoices"
        :key="element.id"
        class="buildChoice_choice_row__T3p8q"
      >
        <div
          :class="{
            buildChoice_hidden__ITdK4: element.hidden,
            buildChoice_error__87vPk:
              useQuestionBuilder.getMultipleChoices.filter(
                (choice) =>
                  choice.value === element.value &&
                  !choice.hidden &&
                  choice.value !== ''
              ).length > 1,
          }"
          class="buildChoice_input_wrapper__j2HKG buildChoice_ltr__k8APe"
        >
          <div
            class="buildChoice_index_wrapper__2__aG dragable"
            tabindex="-1"
            role="button"
            aria-describedby="rbd-hidden-text-1-hidden-text-6"
            draggable="false"
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
            <div class="buildChoice_index__uOXsJ">
              {{ index + 1 }}
            </div>
          </div>
          <input
            v-model="element.value"
            class="buildChoice_input__pLH_h buildChoice_ltr__k8APe"
            type="text"
          />
        </div>
        <div class="buildChoice_actions_wrapper__OzcvQ buildChoice_ltr__k8APe">
          <div class="buildChoice_choice_actions__Nufet">
            <div
              class="buildChoice_action_right__5Cgii buildChoice_ltr__k8APe"
              @click="
                useQuestionBuilder.appendChoice(
                  index,
                  useQuestionBuilder.getMultipleChoices,
                  {
                    hidden: false,
                    value: '',
                    checked: false,
                  }
                )
              "
            >
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
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
              :class="{
                buildChoice_disable__w99rm:
                  useQuestionBuilder.getMultipleChoices.length <= 2,
              }"
              class="buildChoice_action_middle__etyfo"
              @click="element.hidden = !element.hidden"
            >
              <svg
                v-if="element.hidden"
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
                    stroke-width="1.5"
                  >
                    <path
                      d="M16.32 16.32A7.324 7.324 0 0 1 12 17.818C6.91 17.818 4 12 4 12a13.418 13.418 0 0 1 3.68-4.32m2.793-1.324A6.634 6.634 0 0 1 12 6.182c5.09 0 8 5.818 8 5.818a13.455 13.455 0 0 1-1.57 2.32m-4.888-.778a2.182 2.182 0 1 1-3.084-3.084M4 4l16 16"
                    ></path>
                  </g>
                </g>
              </svg>
              <svg
                v-else
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
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
              :class="{
                buildChoice_disable__w99rm:
                  useQuestionBuilder.getMultipleChoices.length <= 2,
              }"
              class="buildChoice_action_left__0V4PE buildChoice_ltr__k8APe"
              @click="
                useQuestionBuilder.deleteChoice(
                  index,
                  useQuestionBuilder.getMultipleChoices
                )
              "
            >
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
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
    </transition-group>
    <InputError
      :show="
        useQuestionBuilder.getMultipleChoices.some(
          (choice, i) =>
            useQuestionBuilder.getMultipleChoices
              .map((val) => val.value)
              .indexOf(choice.value) !== i &&
            !choice.hidden &&
            !!choice.value
        )
      "
      error="Multiple choices with the same value are not allowed"
    />
    <InputError
      :show="
        useQuestionBuilder.getMultipleChoices.filter(
          (choice) => choice.value !== '' && !choice.hidden
        ).length < 2
      "
      error="At least 2 choices must be shown"
    />
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
/*! CSS Used from: Embedded */
.buildChoice_choice_row__T3p8q {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.buildChoice_actions_wrapper__OzcvQ {
  display: flex;
  margin-right: 0.5rem;
}
.buildChoice_actions_wrapper__OzcvQ.buildChoice_ltr__k8APe {
  margin-right: 0;
  margin-left: 0.5rem;
}
.buildChoice_actions_wrapper__OzcvQ .buildChoice_choice_actions__Nufet {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  border-radius: 0.25rem;
}
.buildChoice_actions_wrapper__OzcvQ
  .buildChoice_choice_actions__Nufet
  .buildChoice_action_middle__etyfo {
  height: 2rem;
  flex-grow: 1;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.buildChoice_actions_wrapper__OzcvQ
  .buildChoice_choice_actions__Nufet
  .buildChoice_action_middle__etyfo:hover {
  background-color: #d8dbe0;
}
.buildChoice_actions_wrapper__OzcvQ
  .buildChoice_choice_actions__Nufet
  .buildChoice_action_middle__etyfo:hover
  svg {
  path-stroke: #3e434d;
}
.buildChoice_actions_wrapper__OzcvQ
  .buildChoice_choice_actions__Nufet
  .buildChoice_action_right__5Cgii {
  height: 2rem;
  flex-grow: 1;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.buildChoice_actions_wrapper__OzcvQ
  .buildChoice_choice_actions__Nufet
  .buildChoice_action_right__5Cgii.buildChoice_ltr__k8APe {
  border-radius: 0.25rem 0 0 0.25rem;
}
.buildChoice_actions_wrapper__OzcvQ
  .buildChoice_choice_actions__Nufet
  .buildChoice_action_right__5Cgii:hover {
  background-color: #d8dbe0;
}
.buildChoice_actions_wrapper__OzcvQ
  .buildChoice_choice_actions__Nufet
  .buildChoice_action_right__5Cgii:hover
  svg
  path:last-child {
  stroke: #3e434d;
}
.buildChoice_actions_wrapper__OzcvQ
  .buildChoice_choice_actions__Nufet
  .buildChoice_action_left__0V4PE {
  height: 2rem;
  flex-grow: 1;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.buildChoice_actions_wrapper__OzcvQ
  .buildChoice_choice_actions__Nufet
  .buildChoice_action_left__0V4PE.buildChoice_disable__w99rm {
  cursor: not-allowed;
}
.buildChoice_actions_wrapper__OzcvQ
  .buildChoice_choice_actions__Nufet
  .buildChoice_action_left__0V4PE:hover {
  background-color: #d8dbe0;
}
.buildChoice_actions_wrapper__OzcvQ
  .buildChoice_choice_actions__Nufet
  .buildChoice_action_left__0V4PE.buildChoice_ltr__k8APe {
  border-radius: 0 0.25rem 0.25rem 0;
}
.buildChoice_actions_wrapper__OzcvQ
  .buildChoice_choice_actions__Nufet
  .buildChoice_action_left__0V4PE:hover {
  background-color: #e3324f;
}
.buildChoice_actions_wrapper__OzcvQ
  .buildChoice_choice_actions__Nufet
  .buildChoice_action_left__0V4PE:hover
  svg
  path:last-child {
  stroke: #fff;
}
.buildChoice_input_wrapper__j2HKG {
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
.buildChoice_input_wrapper__j2HKG:hover {
  border-color: #3b368e;
}
.buildChoice_input_wrapper__j2HKG .buildChoice_index_wrapper__2__aG {
  background-color: #f0f2f5;
  color: #6b7079;
  display: flex;
  align-items: center;
  padding: 0.25rem 0 0.25rem 0.25rem;
  border-radius: 0.125rem;
  min-width: 2.25rem;
  box-sizing: border-box;
}
.buildChoice_input_wrapper__j2HKG .buildChoice_index_wrapper__2__aG {
  cursor: move;
}
.buildChoice_input_wrapper__j2HKG
  .buildChoice_index_wrapper__2__aG
  .buildChoice_index__uOXsJ {
  margin-right: 0.5rem;
}
.buildChoice_input_wrapper__j2HKG .buildChoice_input__pLH_h {
  all: unset;
  border: none;
  padding: 0 0.5rem;
  width: 100%;
}
.buildChoice_input_wrapper__j2HKG .buildChoice_input__pLH_h:hover {
  border-color: #3b368e;
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

.buildChoice_input_wrapper__j2HKG.buildChoice_error__87vPk {
  border: 0.063rem solid #e3324f !important;
}

.build_choices_mode_wrapper__IYDOB {
  display: flex;
  width: -moz-max-content;
  width: max-content;
  height: 100%;
  border-bottom: 0.125rem solid #f0f2f5;
  padding-bottom: 0.125rem;
  margin-bottom: 1rem !important;
}
.build_choices_mode_wrapper__IYDOB .build_mode__Erlww {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3e434d;
}
.build_choices_mode_wrapper__IYDOB .build_mode__Erlww:first-child {
  margin-left: 0.5rem;
}
.build_choices_mode_wrapper__IYDOB .build_mode__Erlww > div {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  border-radius: 0.125rem;
}
.build_choices_mode_wrapper__IYDOB .build_mode__Erlww > div:hover {
  cursor: pointer;
}
.build_choices_mode_wrapper__IYDOB
  .build_mode__Erlww
  .build_active_line__LrOS_ {
  position: absolute;
  bottom: 0;
  padding: 0;
  width: 100%;
  height: 0.125rem;
  border-top-right-radius: 5rem;
  border-top-left-radius: 5rem;
  background-color: #3b368e;
}
.build_choices_mode_wrapper__IYDOB .build_mode__Erlww.build_active__3KD8k {
  color: #3b368e;
  font-weight: 700;
}
.build_choices_mode_wrapper__IYDOB.build_ltr__VPOnA
  .build_mode__Erlww:first-child {
  margin-left: 0;
  margin-right: 0.5rem;
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
