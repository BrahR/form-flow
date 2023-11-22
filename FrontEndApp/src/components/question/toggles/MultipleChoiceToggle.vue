<script setup lang="ts">
import { useQuestionStore } from "@/store/question";

const useQuestion = useQuestionStore();
</script>

<template>
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
      <div
        class="buildChoice_choice_row__T3p8q"
        data-rbd-draggable-context-id="1"
        data-rbd-draggable-id="39d26a13-c473-4ff3-8c07-428dae22d63a"
      >
        <div
          :class="{
            buildChoice_hidden__ITdK4: choice.hidden,
          }"
          class="buildChoice_input_wrapper__j2HKG buildChoice_ltr__k8APe"
        >
          <div
            class="buildChoice_index_wrapper__2__aG"
            tabindex="-1"
            role="button"
            aria-describedby="rbd-hidden-text-1-hidden-text-6"
            data-rbd-drag-handle-draggable-id="39d26a13-c473-4ff3-8c07-428dae22d63a"
            data-rbd-drag-handle-context-id="1"
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
            v-model="choice.value"
            class="buildChoice_input__pLH_h buildChoice_ltr__k8APe"
            type="text"
          />
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
              class="buildChoice_action_middle__etyfo"
              @click="choice.hidden = !choice.hidden"
            >
              <svg
                v-if="choice.hidden"
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
                buildChoice_disable__w99rm: useQuestion.getChoices.length <= 2,
              }"
              class="buildChoice_action_left__0V4PE buildChoice_ltr__k8APe"
              @click="useQuestion.deleteChoice(index)"
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
    </template>
  </div>
</template>
