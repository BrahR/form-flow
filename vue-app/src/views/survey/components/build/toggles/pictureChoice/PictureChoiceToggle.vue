<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import { useDraggable } from "vue-draggable-plus";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const useQuestionToggles = useQuestionTogglesStore();
const { appendChoice, deleteChoice } = useQuestionToggles;
const { pictureChoices } = storeToRefs(useQuestionToggles);
const el = ref(null as never as HTMLElement);

// @ts-ignore
useDraggable(el, pictureChoices.value, {
  handle: ".draggable",
});
</script>

<template>
  <div
    class="sharedBuild_toggle_input_row_wrapper sharedBuild_ltr picturechoice_choices_wrapper"
  >
    <div class="picturechoice_choices_mode_wrapper picturechoice_ltr">
      <div class="picturechoice_active picturechoice_mode">
        <div>
          Choices
          <div class="picturechoice_active_line"></div>
        </div>
      </div>
      <div class="false picturechoice_mode">
        <div>Ready-made choices</div>
      </div>
    </div>
    <transition-group ref="el" type="transition" tag="div" name="fade">
      <div
        v-for="(choice, index) in pictureChoices"
        :key="choice.id"
        class="picturechoice_row_wrapper"
      >
        <div>
          <div class="picturechoice_choice_wrapper">
            <div class="picturechoice_input_wrapper false">
              <div
                class="picturechoice_index_wrapper draggable"
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
                <div class="picturechoice_index picturechoice_ltr">
                  {{ index + 1 }}
                </div>
              </div>
              <input
                v-model="choice.value"
                class="picturechoice_input"
                type="text"
                placeholder="Label"
              />
            </div>
            <div class="picturechoice_actions_wrapper picturechoice_ltr">
              <input type="file" class="picturechoice_file_input" />
              <div class="picturechoice_upload_icon false">
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
              <div class="picturechoice_choice_actions picturechoice_ltr">
                <div
                  class="picturechoice_action false"
                  @click="
                    appendChoice(index, pictureChoices, {
                      label: '',
                      image:
                        'https://i.ebayimg.com/images/g/Dv0AAOSwl9BWL6v9/s-l1200.webp',
                      checked: false,
                    })
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
                  class="picturechoice_action false"
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
                  class="picturechoice_action"
                  :class="{
                    picturechoice_disabled: pictureChoices.length <= 2,
                  }"
                  @click="deleteChoice(index, pictureChoices)"
                >
                  <!-- @click="useQuestionBuilder.deletePictureChoice(index)" -->
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
    <InputError
      :show="
        pictureChoices.filter((choice) => choice.image !== '' && !choice.hidden)
          .length < 2
      "
      error="At least 2 choices must be shown"
    />
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
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

.picturechoice_choices_mode_wrapper {
  display: flex;
  width: max-content;
  height: 100%;
  border-bottom: 2px solid #f0f2f5;
  padding-bottom: 2px;
  margin-bottom: 1rem !important;
}

.picturechoice_choices_mode_wrapper .picturechoice_mode {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3e434d;
}

.picturechoice_choices_mode_wrapper .picturechoice_mode:first-child {
  margin-left: 1rem;
}

.picturechoice_choices_mode_wrapper .picturechoice_mode > div {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  border-radius: 0.125rem;
}

.picturechoice_choices_mode_wrapper .picturechoice_mode > div:hover {
  cursor: pointer;
}

.picturechoice_choices_mode_wrapper
  .picturechoice_mode
  .picturechoice_active_line {
  position: absolute;
  bottom: 0;
  padding: 0;
  width: 100%;
  height: 0.125rem;
  border-top-right-radius: 5rem;
  border-top-left-radius: 5rem;
  background-color: #3b368e;
}

.picturechoice_choices_mode_wrapper .picturechoice_mode.picturechoice_active {
  color: #3b368e;
  font-weight: 700;
}

.picturechoice_choices_mode_wrapper.picturechoice_ltr
  .picturechoice_mode:first-child {
  margin-left: 0;
  margin-right: 1rem;
}

.picturechoice_choices_wrapper .picturechoice_row_wrapper {
  display: flex;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper {
  display: flex;
  margin-bottom: 1rem;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_input_wrapper {
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

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_input_wrapper
  .picturechoice_index_wrapper {
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

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_input_wrapper
  .picturechoice_index_wrapper
  .picturechoice_index {
  margin-right: 0.5rem;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_input_wrapper
  .picturechoice_index_wrapper
  .picturechoice_index.picturechoice_ltr {
  margin-right: 0;
  margin-left: 0.5rem;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_input_wrapper
  .picturechoice_input {
  border: none;
  outline: none;
  padding: 0 0.5rem;
  width: 100%;
  font: unset;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_input_wrapper:hover {
  border-color: #3b368e;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_input_wrapper:focus {
  box-shadow: 0 0 0 2px rgba(59, 54, 142, 0.15);
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper {
  display: flex;
  margin-right: 0.5rem;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper.picturechoice_ltr {
  margin-right: 0;
  margin-left: 0.5rem;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper
  .picturechoice_upload_icon {
  background-color: #3b368e;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  cursor: pointer;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper
  .picturechoice_file_input {
  display: none;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper
  .picturechoice_choice_actions {
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper
  .picturechoice_choice_actions
  .picturechoice_action {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  cursor: pointer;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper
  .picturechoice_choice_actions
  .picturechoice_action:hover {
  background-color: #d8dbe0;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper
  .picturechoice_choice_actions
  .picturechoice_action:first-child {
  border-radius: 0 0.25rem 0.25rem 0;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper
  .picturechoice_choice_actions
  .picturechoice_action:last-child {
  border-radius: 0.25rem 0 0 0.25rem;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper
  .picturechoice_choice_actions
  .picturechoice_action:last-child:hover {
  background-color: #e3324f;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper
  .picturechoice_choice_actions
  .picturechoice_action:last-child:hover
  svg
  g
  g {
  stroke: #fff;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper
  .picturechoice_choice_actions
  .picturechoice_action.picturechoice_disabled {
  cursor: not-allowed;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper
  .picturechoice_choice_actions.picturechoice_ltr {
  margin-right: 0;
  margin-left: 0.5rem;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper
  .picturechoice_choice_actions.picturechoice_ltr
  .picturechoice_action:first-child {
  border-radius: 0.25rem 0 0 0.25rem;
}

.picturechoice_choices_wrapper
  .picturechoice_row_wrapper
  .picturechoice_choice_wrapper
  .picturechoice_actions_wrapper
  .picturechoice_choice_actions.picturechoice_ltr
  .picturechoice_action:last-child {
  border-radius: 0 0.25rem 0.25rem 0;
}

@media (max-width: 1024px) {
  .picturechoice_choices_wrapper .picturechoice_row_wrapper {
    display: unset;
  }

  .picturechoice_choices_wrapper
    .picturechoice_choice_wrapper
    .picturechoice_input_wrapper {
    width: 100%;
  }

  .picturechoice_choices_wrapper
    .picturechoice_choice_wrapper
    .picturechoice_input_wrapper
    .picturechoice_input {
    outline: none;
    width: 100%;
  }
}

.draggable {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  touch-action: manipulation;
  cursor: grab;
  overflow-anchor: none;
}
</style>
