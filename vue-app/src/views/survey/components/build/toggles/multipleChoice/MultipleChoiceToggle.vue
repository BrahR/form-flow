<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import { ref } from "vue";
import { useDraggable } from "vue-draggable-plus";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { appendChoice, deleteChoice } = useQuestionToggles;
const { multipleChoices, isMultiCDuplicate, isMultiCEmpty } =
  storeToRefs(useQuestionToggles);
const el = ref(null as unknown as HTMLElement);

useDraggable(el, multipleChoices, {
  animation: 150,
  handle: ".draggable",
  easing: "ease-in-out",
});
</script>

<template>
  <div class="sharedBuild_toggle_input_row_wrapper sharedBuild_ltr">
    <div class="build_choices_mode_wrapper build_ltr">
      <div class="build_active build_mode">
        <div>
          Choices
          <div class="build_active_line"></div>
        </div>
      </div>
    </div>
    <transition-group ref="el" type="transition" tag="div" name="fade">
      <div
        v-for="(element, index) in multipleChoices"
        :key="element.id"
        class="buildChoice_choice_row"
      >
        <div
          :class="{
            buildChoice_hidden: element.hidden,
            buildChoice_error:
              multipleChoices.filter(
                (choice) =>
                  choice.value === element.value &&
                  !choice.hidden &&
                  choice.value !== '',
              ).length > 1,
          }"
          class="buildChoice_input_wrapper buildChoice_ltr"
        >
          <div
            class="buildChoice_index_wrapper draggable"
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
            <div class="buildChoice_index">
              {{ index + 1 }}
            </div>
          </div>
          <input
            v-model="element.value"
            class="buildChoice_input buildChoice_ltr"
            type="text"
          />
        </div>
        <div class="buildChoice_actions_wrapper buildChoice_ltr">
          <div class="buildChoice_choice_actions">
            <div
              class="buildChoice_action_right buildChoice_ltr"
              @click="
                appendChoice(index, multipleChoices, {
                  hidden: false,
                  value: '',
                  checked: false,
                })
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
                buildChoice_disable: multipleChoices.length <= 2,
              }"
              class="buildChoice_action_middle"
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
                buildChoice_disable: multipleChoices.length <= 2,
              }"
              class="buildChoice_action_left buildChoice_ltr"
              @click="deleteChoice(index, multipleChoices)"
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
      :show="isMultiCDuplicate"
      error="Multiple choices with the same value are not allowed"
    />
    <InputError
      :show="isMultiCEmpty"
      error="At least 2 choices must be shown"
    />
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
.buildChoice_choice_row {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.buildChoice_actions_wrapper {
  display: flex;
  margin-right: 0.5rem;
}
.buildChoice_actions_wrapper.buildChoice_ltr {
  margin-right: 0;
  margin-left: 0.5rem;
}
.buildChoice_actions_wrapper .buildChoice_choice_actions {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  border-radius: 0.25rem;
}
.buildChoice_actions_wrapper
  .buildChoice_choice_actions
  .buildChoice_action_middle {
  height: 2rem;
  flex-grow: 1;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.buildChoice_actions_wrapper
  .buildChoice_choice_actions
  .buildChoice_action_middle:hover {
  background-color: #d8dbe0;
}
.buildChoice_actions_wrapper
  .buildChoice_choice_actions
  .buildChoice_action_middle:hover
  svg {
  path-stroke: #3e434d;
}
.buildChoice_actions_wrapper
  .buildChoice_choice_actions
  .buildChoice_action_right {
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
.buildChoice_actions_wrapper
  .buildChoice_choice_actions
  .buildChoice_action_right.buildChoice_ltr {
  border-radius: 0.25rem 0 0 0.25rem;
}
.buildChoice_actions_wrapper
  .buildChoice_choice_actions
  .buildChoice_action_right:hover {
  background-color: #d8dbe0;
}
.buildChoice_actions_wrapper
  .buildChoice_choice_actions
  .buildChoice_action_right:hover
  svg
  path:last-child {
  stroke: #3e434d;
}
.buildChoice_actions_wrapper
  .buildChoice_choice_actions
  .buildChoice_action_left {
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
.buildChoice_actions_wrapper
  .buildChoice_choice_actions
  .buildChoice_action_left.buildChoice_disable {
  cursor: not-allowed;
}
.buildChoice_actions_wrapper
  .buildChoice_choice_actions
  .buildChoice_action_left:hover {
  background-color: #d8dbe0;
}
.buildChoice_actions_wrapper
  .buildChoice_choice_actions
  .buildChoice_action_left.buildChoice_ltr {
  border-radius: 0 0.25rem 0.25rem 0;
}
.buildChoice_actions_wrapper
  .buildChoice_choice_actions
  .buildChoice_action_left:hover {
  background-color: #e3324f;
}
.buildChoice_actions_wrapper
  .buildChoice_choice_actions
  .buildChoice_action_left:hover
  svg
  path:last-child {
  stroke: #fff;
}
.buildChoice_input_wrapper {
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
.buildChoice_input_wrapper:hover {
  border-color: #3b368e;
}
.buildChoice_input_wrapper .buildChoice_index_wrapper {
  background-color: #f0f2f5;
  color: #6b7079;
  display: flex;
  align-items: center;
  padding: 0.25rem 0 0.25rem 0.25rem;
  border-radius: 0.125rem;
  min-width: 2.25rem;
  box-sizing: border-box;
}
.buildChoice_input_wrapper .buildChoice_index_wrapper {
  cursor: move;
}
.buildChoice_input_wrapper .buildChoice_index_wrapper .buildChoice_index {
  margin-right: 0.5rem;
}
.buildChoice_input_wrapper .buildChoice_input {
  all: unset;
  border: none;
  padding: 0 0.5rem;
  width: 100%;
}
.buildChoice_input_wrapper .buildChoice_input:hover {
  border-color: #3b368e;
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

.buildChoice_input_wrapper.buildChoice_error {
  border: 0.063rem solid #e3324f !important;
}

.build_choices_mode_wrapper {
  display: flex;
  width: max-content;
  height: 100%;
  border-bottom: 0.125rem solid #f0f2f5;
  padding-bottom: 0.125rem;
  margin-bottom: 1rem !important;
}
.build_choices_mode_wrapper .build_mode {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3e434d;
}
.build_choices_mode_wrapper .build_mode:first-child {
  margin-left: 0.5rem;
}
.build_choices_mode_wrapper .build_mode > div {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  border-radius: 0.125rem;
}
.build_choices_mode_wrapper .build_mode > div:hover {
  cursor: pointer;
}
.build_choices_mode_wrapper .build_mode .build_active_line {
  position: absolute;
  bottom: 0;
  padding: 0;
  width: 100%;
  height: 0.125rem;
  border-top-right-radius: 5rem;
  border-top-left-radius: 5rem;
  background-color: #3b368e;
}
.build_choices_mode_wrapper .build_mode.build_active {
  color: #3b368e;
  font-weight: 700;
}
.build_choices_mode_wrapper.build_ltr .build_mode:first-child {
  margin-left: 0;
  margin-right: 0.5rem;
}
.draggable {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  touch-action: manipulation;
  cursor: grab;
  overflow-anchor: none;
}
</style>
