<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import { ref } from "vue";
import { useDraggable } from "vue-draggable-plus";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { appendChoice, deleteChoice } = useQuestionToggles;
const { rankingChoices, isRankingDuplicate, isRankingEmpty } =
  storeToRefs(useQuestionToggles);
const el = ref(null as unknown as HTMLElement);

useDraggable(el, rankingChoices, {
  animation: 150,
  handle: ".draggable",
  easing: "ease-in-out",
});
</script>

<template>
  <div class="sharedBuild_toggle_input_row_wrapper sharedBuild_ltr">
    <div class="ranking_choices_title sharedBuild_ltr">Choices</div>
    <transition-group ref="el" type="transition" tag="div" name="fade">
      <div
        v-for="(element, index) in rankingChoices"
        :key="element.id"
        class="ranking_choice_row ranking_ltr"
      >
        <div
          :class="{
            buildChoice_error:
              rankingChoices.filter(
                (choice) =>
                  choice.value === element.value && choice.value !== '',
              ).length > 1,
          }"
          class="ranking_input_wrapper ranking_ltr"
        >
          <div
            class="ranking_index_wrapper draggable"
            tabindex="-1"
            role="button"
            aria-describedby="rbd-hidden-text-2-hidden-text-8"
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
            <div class="ranking_index">{{ index + 1 }}</div>
          </div>
          <input
            class="ranking_input ranking_ltr"
            type="text"
            v-model="element.value"
          />
        </div>
        <div class="ranking_actions_wrapper ranking_ltr">
          <div class="ranking_choice_actions">
            <div
              class="ranking_action_right ranking_ltr"
              @click="
                appendChoice(index, rankingChoices, {
                  value: '',
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
                ranking_disable: rankingChoices.length <= 2,
              }"
              class="ranking_action_left ranking_ltr"
              @click="deleteChoice(index, rankingChoices)"
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
      :show="isRankingDuplicate"
      error="Ranking choices with the same value are not allowed"
    />
    <InputError :show="isRankingEmpty" error="All choices must have a value" />
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
.ranking_choices_title {
  color: #3e434d;
  margin-bottom: 0.75rem;
  font-weight: 700;
}
.ranking_choice_row {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.ranking_choice_row .ranking_input_wrapper {
  display: flex;
  outline: none;
  height: 2rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  border: 0.063rem solid #bbbdc0;
  background-color: #fff;
  color: #3e434d;
  box-sizing: border-box;
  width: 100%;
}
.ranking_choice_row .ranking_input_wrapper:hover {
  border-color: #3b368e;
}
.ranking_choice_row .ranking_input_wrapper .ranking_index_wrapper {
  background-color: #f0f2f5;
  color: #6b7079;
  display: flex;
  align-items: center;
  padding: 0.25rem 0 0.25rem 0.25rem;
  border-radius: 0.125rem;
  min-width: 2.25rem;
  box-sizing: border-box;
}
.ranking_input_wrapper.buildChoice_error {
  border: 0.063rem solid #e3324f !important;
}
.ranking_choice_row
  .ranking_input_wrapper
  .ranking_index_wrapper
  .ranking_index {
  margin-right: 0.5rem;
}
.ranking_choice_row .ranking_input_wrapper .ranking_input {
  all: unset;
  border: none;
  padding: 0 0.5rem;
  width: 100%;
}
.ranking_choice_row .ranking_input_wrapper .ranking_input:hover {
  border-color: #3b368e;
}
.ranking_choice_row .ranking_actions_wrapper {
  display: flex;
  margin-right: 0.5rem;
}
.ranking_choice_row .ranking_actions_wrapper.ranking_ltr {
  margin-right: 0;
  margin-left: 0.5rem;
}
.ranking_choice_row .ranking_actions_wrapper .ranking_choice_actions {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  border-radius: 0.25rem;
}
.ranking_choice_row
  .ranking_actions_wrapper
  .ranking_choice_actions
  .ranking_action_right {
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
.ranking_choice_row
  .ranking_actions_wrapper
  .ranking_choice_actions
  .ranking_action_right.ranking_ltr {
  border-radius: 0.25rem 0 0 0.25rem;
}
.ranking_choice_row
  .ranking_actions_wrapper
  .ranking_choice_actions
  .ranking_action_right:hover {
  background-color: #d8dbe0;
}
.ranking_choice_row
  .ranking_actions_wrapper
  .ranking_choice_actions
  .ranking_action_right:hover
  svg
  path:last-child {
  stroke: #3e434d;
}
.ranking_choice_row
  .ranking_actions_wrapper
  .ranking_choice_actions
  .ranking_action_left {
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
.ranking_choice_row
  .ranking_actions_wrapper
  .ranking_choice_actions
  .ranking_action_left.ranking_disable {
  cursor: not-allowed;
}
.ranking_choice_row
  .ranking_actions_wrapper
  .ranking_choice_actions
  .ranking_action_left:hover {
  background-color: #d8dbe0;
}
.ranking_choice_row
  .ranking_actions_wrapper
  .ranking_choice_actions
  .ranking_action_left.ranking_ltr {
  border-radius: 0 0.25rem 0.25rem 0;
}
.ranking_choice_row
  .ranking_actions_wrapper
  .ranking_choice_actions
  .ranking_action_left:hover {
  background-color: #e3324f;
}
.ranking_choice_row
  .ranking_actions_wrapper
  .ranking_choice_actions
  .ranking_action_left:hover
  svg
  path:last-child {
  stroke: #fff;
}
.draggable {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  touch-action: manipulation;
  cursor: grab;
  overflow-anchor: none;
}
</style>
