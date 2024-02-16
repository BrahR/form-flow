<script setup lang="ts">
import CalculationsIcon from "@/views/survey/icons/questions/CalculationsIcon.vue";
import LogicIcon from "@/views/survey/icons/build/LogicIcon.vue";
import QuestionItemDropdown from "@/views/survey/components/build/QuestionItemDropdown.vue";
import { defineAsyncComponent } from "vue";

type Props = {
  question: Question;
  number?: number;
};

type Emits = {
  (event: "duplicate"): void;
};

const { question, number } = defineProps<Props>();
defineEmits<Emits>();

const icon = defineAsyncComponent(
  () => import(`../../icons/questions/${question.questionable.type}Icon.vue`),
);

const canDuplicate = !["Welcome", "Ending"].includes(
  question.questionable.type,
);
</script>

<template>
  <div
    class="questionsList_question questionsList_ltr"
    tabindex="0"
    aria-roledescription="Draggable item. Press space bar to lift"
  >
    <div class="questionsList_ltr">
      <div class="questionComponent_wrapper questionComponent_ltr">
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
              <QuestionItemDropdown
                :questionId="question.id"
                :duplicate="canDuplicate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
