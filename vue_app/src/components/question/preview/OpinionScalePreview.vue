<script setup lang="ts">
import QuestionHeader from "@/components/question/preview/QuestionHeader.vue";
import { inject, computed, ref } from "vue";
import type { QuestionBuilderStore } from "@/store/questionBuilder";

const useQuestionBuilder = inject("question") as QuestionBuilderStore;
const labels: ["right", "center", "left"] = ["right", "center", "left"];

const activeScale = ref<number | null>(null);
const active = computed({
  get() {
    return activeScale.value;
  },
  set(val) {
    if (val == activeScale.value) {
      activeScale.value = null;
      return;
    }
    activeScale.value = val;
  },
});
const sliderVals = computed(() => {
  return Array.from(
    {
      length:
        useQuestionBuilder.getScaleParameters.value +
        (!useQuestionBuilder.getIsStartZero ? 0 : 1),
    },
    (_, i) => i + (useQuestionBuilder.getIsStartZero ? 0 : 1)
  );
});

const getPosition = (val: number) => {
  const length = sliderVals.value.length - 1;
  if (val === 0) return 0;
  if (val === length) return 2;
  if ((val * 2) % length === 0) return 1;

  return NaN;
};
</script>

<template>
  <div
    class="opinionScaleQuestion_main_wrapper__G02jI opinionScaleQuestion_ltr__Rt0Kw false"
    style="padding-bottom: 54px"
  >
    <QuestionHeader :description="''" />
    <div class="opinionScaleQuestion_opinion_scale_wrapper__Qsn2k">
      <div
        role="presentation"
        class="opinionScaleQuestion_opinion_scale_item__BRHiH"
        :class="{ opinionScaleQuestion_selected_choice___C24j: active == i }"
        v-for="(i, key) in sliderVals"
        :key="key"
        @click="active = i"
      >
        {{ i }}

        <div
          v-if="[0, 1, 2].includes(getPosition(key))"
          class="opinionScaleQuestion_label__xX1Vc"
        >
          {{ useQuestionBuilder.getScaleLabels[labels[getPosition(key)]] }}
        </div>
      </div>
      <!-- pinionScaleQuestion_fade__igYFL -->
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
.opinionScaleQuestion_main_wrapper__G02jI.opinionScaleQuestion_ltr__Rt0Kw {
  direction: ltr !important;
}
.opinionScaleQuestion_main_wrapper__G02jI
  .opinionScaleQuestion_opinion_scale_wrapper__Qsn2k {
  direction: ltr;
  width: 24rem;
  display: flex;
  background-color: var(--preview-theme-answer-color);
  color: var(--preview-theme-answer-color-contrast);
  border-radius: 0.5rem;
  position: relative;
}
.opinionScaleQuestion_main_wrapper__G02jI
  .opinionScaleQuestion_opinion_scale_wrapper__Qsn2k
  .opinionScaleQuestion_opinion_scale_item__BRHiH {
  flex: 1 1;
  font-size: 1.125em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.25rem;
  height: 1.75rem;
  position: relative;
  border-radius: 0.625rem;
  transition: all 0.1s ease-in-out;
  box-shadow: 0 0 0 0.1875rem transparent;
}
.opinionScaleQuestion_main_wrapper__G02jI
  .opinionScaleQuestion_opinion_scale_wrapper__Qsn2k
  .opinionScaleQuestion_opinion_scale_item__BRHiH:hover {
  box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
  cursor: pointer;
}
.opinionScaleQuestion_main_wrapper__G02jI
  .opinionScaleQuestion_opinion_scale_wrapper__Qsn2k
  .opinionScaleQuestion_opinion_scale_item__BRHiH.opinionScaleQuestion_selected_choice___C24j {
  background-color: var(--preview-theme-accent-color);
  position: relative;
  text-shadow: 0 0 0.5rem var(--preview-theme-button-color-light);
  color: var(--preview-theme-accent-color-contrast);
  box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
  border-radius: 0.625rem;
}
.opinionScaleQuestion_main_wrapper__G02jI
  .opinionScaleQuestion_opinion_scale_wrapper__Qsn2k
  .opinionScaleQuestion_opinion_scale_item__BRHiH.opinionScaleQuestion_fade__igYFL {
  animation: opinionScaleQuestion_fade__igYFL 0.1s 4 alternate;
  background-color: var(--preview-theme-accent-color);
  position: relative;
  text-shadow: 0 0 0.5rem var(--preview-theme-button-color-light);
  box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
}
.opinionScaleQuestion_main_wrapper__G02jI
  .opinionScaleQuestion_opinion_scale_wrapper__Qsn2k
  .opinionScaleQuestion_opinion_scale_item__BRHiH
  .opinionScaleQuestion_label__xX1Vc {
  position: absolute !important;
  color: var(--preview-theme-answer-color);
  top: 3rem;
  font-size: 0.8125rem;
  pointer-events: none;
  width: 8.333rem;
  text-align: center;
  word-wrap: break-word;
}
.opinionScaleQuestion_main_wrapper__G02jI
  .opinionScaleQuestion_opinion_scale_wrapper__Qsn2k
  .opinionScaleQuestion_opinion_scale_item__BRHiH
  .opinionScaleQuestion_label__xX1Vc:before {
  content: "";
  background-color: var(--preview-theme-answer-color);
  width: 0.125rem;
  height: 0.5rem;
  display: inline-block;
  right: 50%;
  position: absolute;
}
@media (max-width: 1024px) {
  .opinionScaleQuestion_main_wrapper__G02jI
    .opinionScaleQuestion_opinion_scale_wrapper__Qsn2k {
    width: 100%;
    max-width: 25rem;
  }
  .opinionScaleQuestion_label__xX1Vc {
    width: 100% !important;
    left: 0 !important;
    display: flex;
    justify-content: center;
  }
}
/*! CSS Used keyframes */
@keyframes opinionScaleQuestion_fade__igYFL {
  0% {
    -webkit-opacity: 0;
  }
  to {
    -webkit-opacity: 1;
  }
}
</style>
