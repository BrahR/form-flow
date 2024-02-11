<script setup lang="ts">
import CalculationsIcon from "@/views/survey/icons/questions/CalculationsIcon.vue";
import LogicIcon from "@/views/survey/icons/build/LogicIcon.vue";
import { defineAsyncComponent } from "vue";

type Props = {
  question: Question;
  number?: number;
};

const { question, number } = defineProps<Props>();
const icon = defineAsyncComponent(
  () => import(`../../icons/questions/${question.questionable.type}Icon.vue`),
);
</script>

<template>
  <div
    class="questionsList_question questionsList_ltr"
    tabindex="0"
    aria-roledescription="Draggable item. Press space bar to lift"
  >
    <div class="0 0 false questionsList_ltr">
      <div class="questionComponent_wrapper questionComponent_ltr false">
        <div class="questionComponent_title_wrapper false">
          <div class="questionComponent_question_number">
            <component :is="icon" :number />
          </div>
          <div class="questionComponent_title">
            <div
              class="styled-question-title questionComponent_styled_title"
              v-html="question.html_label"
            ></div>
          </div>
        </div>
        <div class="questionComponent_actions_wrapper questionComponent_ltr">
          <div class="questionComponent_action_button">
            <CalculationsIcon />
            Calculations
          </div>
          <div class="questionComponent_action_button">
            <LogicIcon />
            Logic
          </div>
          <div class="questionComponent_more_dropdown_button">
            <div class="moreDropDown_wrapper">
              <div
                class="moreDropDown_button undefined moreDropDown_bordered"
                id="downshift-15-toggle-button"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-labelledby="downshift-15-label downshift-15-toggle-button"
              >
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h16v16H0z"></path>
                    <path
                      d="M8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM2 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      stroke="#3E434D"
                      fill="#3E434D"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <ul
                class="moreDropDown_list moreDropDown_bottom undefined moreDropDown_not_show undefined"
                id="downshift-15-menu"
                role="listbox"
                aria-labelledby="downshift-15-label"
                tabindex="-1"
              ></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
