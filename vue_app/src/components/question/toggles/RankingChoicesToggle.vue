<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import { ref, inject } from "vue";
import { useDraggable } from "vue-draggable-plus";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;
const el = ref(null as unknown as HTMLElement);

// @ts-ignore
useDraggable(el, useQuestion.getRankingChoices, {
  animation: 150,
  handle: ".dragable",
  easing: "ease-in-out",
});
</script>

<template>
  <div
    class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
  >
    <div class="ranking_choices_title__yJMQX sharedBuild_ltr__BELlV">
      Choices
    </div>
    <transition-group ref="el" type="transition" tag="div" name="fade">
      <div
        v-for="(element, index) in useQuestion.getRankingChoices"
        :key="element.id"
        class="ranking_choice_row__X3rte ranking_ltr__Z1q0z"
      >
        <div
          :class="{
            buildChoice_error__87vPk:
              useQuestion.getRankingChoices.filter(
                (choice) =>
                  choice.value === element.value && choice.value !== ''
              ).length > 1,
          }"
          class="ranking_input_wrapper__LzrTN ranking_ltr__Z1q0z"
        >
          <div
            class="ranking_index_wrapper__d1lI6 dragable"
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
            <div class="ranking_index__Ioo3w">{{ index + 1 }}</div>
          </div>
          <input
            class="ranking_input__NpVvO ranking_ltr__Z1q0z"
            type="text"
            v-model="element.value"
          />
        </div>
        <div class="ranking_actions_wrapper__m6M6j ranking_ltr__Z1q0z">
          <div class="ranking_choice_actions__I4Akn">
            <div
              class="ranking_action_right__0_oWe ranking_ltr__Z1q0z"
              @click="
                useQuestion.appendChoice(index, useQuestion.getRankingChoices, {
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
                ranking_disable__h_fAK:
                  useQuestion.getRankingChoices.length <= 2,
              }"
              class="ranking_action_left__ITc0l ranking_ltr__Z1q0z"
              @click="
                useQuestion.deleteChoice(index, useQuestion.getRankingChoices)
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
        useQuestion.getRankingChoices.some(
          (choice, i) =>
            useQuestion.getRankingChoices
              .map((val) => val.value)
              .indexOf(choice.value) !== i && !!choice.value
        )
      "
      error="Ranking choices with the same value are not allowed"
    />
    <InputError
      :show="
        useQuestion.getRankingChoices.filter((choice) => choice.value !== '')
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
.ranking_choices_title__yJMQX {
  color: #3e434d;
  margin-bottom: 0.75rem;
  font-weight: 700;
}
.ranking_choice_row__X3rte {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.ranking_choice_row__X3rte .ranking_input_wrapper__LzrTN {
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
.ranking_choice_row__X3rte .ranking_input_wrapper__LzrTN:hover {
  border-color: #3b368e;
}
.ranking_choice_row__X3rte
  .ranking_input_wrapper__LzrTN
  .ranking_index_wrapper__d1lI6 {
  background-color: #f0f2f5;
  color: #6b7079;
  display: flex;
  align-items: center;
  padding: 0.25rem 0 0.25rem 0.25rem;
  border-radius: 0.125rem;
  min-width: 2.25rem;
  box-sizing: border-box;
}
.ranking_input_wrapper__LzrTN.buildChoice_error__87vPk {
  border: 0.063rem solid #e3324f !important;
}
.ranking_choice_row__X3rte
  .ranking_input_wrapper__LzrTN
  .ranking_index_wrapper__d1lI6
  .ranking_index__Ioo3w {
  margin-right: 0.5rem;
}
.ranking_choice_row__X3rte .ranking_input_wrapper__LzrTN .ranking_input__NpVvO {
  all: unset;
  border: none;
  padding: 0 0.5rem;
  width: 100%;
}
.ranking_choice_row__X3rte
  .ranking_input_wrapper__LzrTN
  .ranking_input__NpVvO:hover {
  border-color: #3b368e;
}
.ranking_choice_row__X3rte .ranking_actions_wrapper__m6M6j {
  display: flex;
  margin-right: 0.5rem;
}
.ranking_choice_row__X3rte .ranking_actions_wrapper__m6M6j.ranking_ltr__Z1q0z {
  margin-right: 0;
  margin-left: 0.5rem;
}
.ranking_choice_row__X3rte
  .ranking_actions_wrapper__m6M6j
  .ranking_choice_actions__I4Akn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  border-radius: 0.25rem;
}
.ranking_choice_row__X3rte
  .ranking_actions_wrapper__m6M6j
  .ranking_choice_actions__I4Akn
  .ranking_action_right__0_oWe {
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
.ranking_choice_row__X3rte
  .ranking_actions_wrapper__m6M6j
  .ranking_choice_actions__I4Akn
  .ranking_action_right__0_oWe.ranking_ltr__Z1q0z {
  border-radius: 0.25rem 0 0 0.25rem;
}
.ranking_choice_row__X3rte
  .ranking_actions_wrapper__m6M6j
  .ranking_choice_actions__I4Akn
  .ranking_action_right__0_oWe:hover {
  background-color: #d8dbe0;
}
.ranking_choice_row__X3rte
  .ranking_actions_wrapper__m6M6j
  .ranking_choice_actions__I4Akn
  .ranking_action_right__0_oWe:hover
  svg
  path:last-child {
  stroke: #3e434d;
}
.ranking_choice_row__X3rte
  .ranking_actions_wrapper__m6M6j
  .ranking_choice_actions__I4Akn
  .ranking_action_left__ITc0l {
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
.ranking_choice_row__X3rte
  .ranking_actions_wrapper__m6M6j
  .ranking_choice_actions__I4Akn
  .ranking_action_left__ITc0l.ranking_disable__h_fAK {
  cursor: not-allowed;
}
.ranking_choice_row__X3rte
  .ranking_actions_wrapper__m6M6j
  .ranking_choice_actions__I4Akn
  .ranking_action_left__ITc0l:hover {
  background-color: #d8dbe0;
}
.ranking_choice_row__X3rte
  .ranking_actions_wrapper__m6M6j
  .ranking_choice_actions__I4Akn
  .ranking_action_left__ITc0l.ranking_ltr__Z1q0z {
  border-radius: 0 0.25rem 0.25rem 0;
}
.ranking_choice_row__X3rte
  .ranking_actions_wrapper__m6M6j
  .ranking_choice_actions__I4Akn
  .ranking_action_left__ITc0l:hover {
  background-color: #e3324f;
}
.ranking_choice_row__X3rte
  .ranking_actions_wrapper__m6M6j
  .ranking_choice_actions__I4Akn
  .ranking_action_left__ITc0l:hover
  svg
  path:last-child {
  stroke: #fff;
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
