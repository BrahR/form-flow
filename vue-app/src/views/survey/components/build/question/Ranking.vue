<script setup lang="ts">
import QuestionHeader from "@/views/survey/components/build/question/QuestionHeader.vue";
import { computed, ref, watch } from "vue";
import { useDraggable } from "vue-draggable-plus";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { rankingChoices: _rankingChoices, fixRankingNumbers } =
  storeToRefs(useQuestionToggles);
const el = ref(null as unknown as HTMLElement);
const rankingChoices = ref([..._rankingChoices.value]);

const validChoices = computed(() => {
  return rankingChoices.value.filter((element) =>
    fixRankingNumbers.value ? element.value : element.id,
  );
});

useDraggable(el, rankingChoices, {
  animation: 150,
  handle: ".draggable",
  easing: "ease-in-out",
});

watch(_rankingChoices.value, (newValue) => {
  if (newValue.length == rankingChoices.value.length) {
    const newElement = newValue.filter(
      (element) => !rankingChoices.value.includes(element),
    )[0];

    const index = newValue.indexOf(newElement);

    rankingChoices.value[index] = newElement;
    return;
  }

  if (newValue.length > rankingChoices.value.length) {
    const index = newValue.findIndex(
      (element) => !rankingChoices.value.includes(element),
    );

    rankingChoices.value.splice(index, 0, newValue[index]);
    return;
  }

  if (newValue.length < rankingChoices.value.length) {
    const index = rankingChoices.value.findIndex(
      (element) => !newValue.includes(element),
    );

    rankingChoices.value.splice(index, 1);
  }
});
</script>

<template>
  <div class="ranking_main_wrapper ranking_ltr false">
    <QuestionHeader
      sub-description="(Drag and drop to reorder and then press ok)"
    />
    <div class="ranking_ranking_question_wrapper false">
      <transition-group ref="el" type="transition" tag="div" name="fade">
        <template v-for="(element, index) in validChoices">
          <div
            tabindex="0"
            role="button"
            aria-describedby="rbd-hidden-text-1-hidden-text-4"
            class="ranking_ranking_question_item false ranking_ltr draggable"
            v-if="element.value"
            :key="element.id"
          >
            <p class="ranking_item_number">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m15.62 4.215.087.078 4.95 4.95a1 1 0 0 1-1.327 1.492l-.088-.078L16 7.414 16 18.45a1 1 0 0 1-2 0l-.001-11.036-3.242 3.243a1 1 0 0 1-1.327.078l-.087-.078a1 1 0 0 1-.078-1.327l.078-.087 4.95-4.95a1 1 0 0 1 1.327-.078zM6.478 11.45a.5.5 0 0 1 .5.5v5.749l1.975-1.974.07-.058a.5.5 0 0 1 .695.695l-.058.07-2.828 2.828-.07.058a.5.5 0 0 1-.568 0l-.07-.058-2.828-2.828-.057-.07a.5.5 0 0 1 0-.568l.057-.07.07-.057a.5.5 0 0 1 .568 0l.07.058 1.974 1.974v-5.75a.5.5 0 0 1 .5-.5z"
                  fill="#3E434D"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span>{{ index + 1 }}</span>
            </p>
            <p class="ranking_item_label">{{ element.value }}</p>
          </div>
        </template>
      </transition-group>
    </div>
    <div class="ranking_ranking_question_buttons_wrapper">
      <button
        class="ranking_confirm_button ranking_ranking_question_confirm_button"
        type="button"
      >
        OK
      </button>
      <button
        v-if="
          JSON.stringify(rankingChoices) !== JSON.stringify(_rankingChoices)
        "
        class="ranking_confirm_button ranking_ranking_question_reset_button ranking_ltr"
        type="button"
        @click="
          rankingChoices.splice(0, rankingChoices.length, ..._rankingChoices)
        "
      >
        Default order
      </button>
    </div>
  </div>
</template>

<style scoped>
.ranking_main_wrapper.ranking_ltr {
  direction: ltr !important;
}
.questionIntro_question_intro_wrapper {
  padding: 0 0 1em;
  transition: 0.4s;
}
.questionIntro_question_intro_wrapper p {
  margin: 0;
  word-break: break-word;
  white-space: pre-line;
  color: var(--preview-theme-question-color);
}
.questionIntro_question_intro_title {
  font-size: 1.25em;
  word-break: break-word;
  white-space: pre-line;
}

.questionIntro_question_intro_title_text_wrapper {
  display: flex;
}

.questionIntro_answer_required_icon {
  color: var(--preview-theme-button-color);
  margin-right: -0.563rem;
  vertical-align: super;
}

.questionIntro_answer_required_icon.questionIntro_ltr {
  margin-right: 0;
  margin-left: -0.563rem;
}

.questionIntro_question_number_wrapper {
  display: flex;
  color: var(--preview-theme-question-color);
}

.questionIntro_question_number {
  word-break: normal;
}

.questionIntro_question_number_indicator_icon {
  display: flex;
  align-items: center;
  padding: 0 0.125rem 0 0.25rem;
  height: 1.875rem;
}

.questionIntro_question_number_indicator_icon svg g {
  fill: var(--preview-theme-question-color);
}

.questionIntro_question_number_indicator_icon.questionIntro_ltr {
  padding: 0 0.25rem 0 0.125rem;
}

.questionIntro_question_intro_title_text {
  color: var(--preview-theme-question-color);
}
.questionIntro_question_intro_porsline_description {
  padding-top: 1.23em;
  font-size: 0.8125em;
  color: var(--preview-theme-answer-color);
}
.ranking_main_wrapper.ranking_ltr {
  direction: ltr !important;
}
.ranking_confirm_button {
  all: unset;
  min-height: 2.5em;
  width: fit-content;
  min-width: 7.5rem;
  max-width: 18.4375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  color: var(--theme-button-color-contrast);
  background-color: var(--preview-theme-button-color);
  -webkit-text-fill-color: var(--preview-theme-button-color-contrast);
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;
  overflow-wrap: anywhere;
  cursor: pointer;
}
.ranking_confirm_button:hover {
  box-shadow: 0 0 0 0.125rem var(--preview-theme-accent-color);
}
.ranking_confirm_button:focus {
  box-shadow: 0 0 0 0.0625rem var(--preview-theme-accent-color);
}
.ranking_ranking_question_wrapper {
  display: grid;
  position: relative;
  grid-auto-columns: max-content;
}
.ranking_ranking_question_item {
  display: flex;
  flex: 1 1 auto;
  border: 0.0625rem solid var(--preview-theme-answer-color-lighter);
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  padding-right: 0.25rem;
  padding-left: 0.75rem;
  color: var(--preview-theme-answer-color);
  background-color: var(--preview-theme-answer-color-lightest);
  max-width: min(43.875rem, 100vw - 19rem);
  min-width: 16rem;
}
.ranking_ranking_question_item p {
  margin: 0.25rem 0;
  font-size: 1.125em;
}
.ranking_item_label {
  overflow-wrap: anywhere;
}
.ranking_item_number {
  margin: 0.3125rem 0 0.3125rem 0.75rem;
  font-size: 1em;
  width: 2.625rem;
  height: 1.75rem;
  padding-right: 0.25rem;
  padding-left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.25rem;
  background-color: var(--preview-theme-answer-color);
  border: none;
  color: var(--preview-theme-answer-color-contrast);
}
.ranking_item_number span {
  width: 1.25rem;
  text-align: center;
}
.ranking_item_number svg {
  width: 1.375rem;
}
.ranking_item_number svg path:first-child {
  fill: var(--preview-theme-answer-color-contrast);
}
.ranking_ranking_question_item.ranking_ltr {
  padding-right: 0.75rem;
  padding-left: 0.25rem;
}
.ranking_ranking_question_item.ranking_ltr .ranking_item_number {
  margin: 0.3125rem 0.75rem 0.3125rem 0;
  padding-right: 0.75rem;
  padding-left: 0.25rem;
}
.ranking_ranking_question_item:hover {
  cursor: grabbing;
}
.ranking_ranking_question_buttons_wrapper {
  display: flex;
  background-color: transparent;
}
.ranking_ranking_question_reset_button {
  border: 0.0625rem solid var(--preview-theme-button-color);
  height: 2.5em;
  min-width: 6.4375rem;
  color: var(--preview-theme-button-color);
  -webkit-text-fill-color: var(--preview-theme-button-color);
  margin-right: 0.75rem;
  background-color: transparent;
  line-height: normal;
  text-align: center;
  margin-top: 0.75rem;
}
.ranking_ranking_question_reset_button.ranking_ltr {
  margin-left: 0.75rem;
  margin-right: 0;
}

.ranking_ranking_question_confirm_button {
  background-color: var(--preview-theme-button-color);
  border: 0.0625rem solid var(--preview-theme-button-color);
  height: 2.5em;
  width: 6.4375rem;
  min-width: unset;
  color: var(--preview-theme-button-color-contrast);
  margin-bottom: 2rem;
  margin-top: 0.75rem;
}
@media (max-width: 1024px) {
  .ranking_ranking_question_wrapper .ranking_ranking_question_item {
    max-width: calc(100vw - 4.125rem);
  }
  .ranking_ranking_question_confirm_button:hover,
  .ranking_ranking_question_reset_button:hover {
    box-shadow: none;
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
