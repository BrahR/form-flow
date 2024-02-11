<script setup lang="ts">
import QuestionHeader from "@/views/survey/components/build/question/QuestionHeader.vue";
import { computed, ref, Ref } from "vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { scaleParams, scaleLabels, startAtZero } =
  storeToRefs(useQuestionToggles);
const labels = ["right", "center", "left"] as const;

const activeScale: Ref<number | null> = ref(null);
const active = computed({
  get: () => activeScale.value,
  set: (val) => {
    if (val == activeScale.value) {
      activeScale.value = null;
      return;
    }
    activeScale.value = val;
  },
});
const sliderValues = computed(() => {
  return Array.from(
    {
      length: scaleParams.value.value /* i *cri* */ + Number(startAtZero.value),
    },
    (_, i) => i + Number(startAtZero.value),
  );
});

const getPosition = (val: number) => {
  const length = sliderValues.value.length - 1;
  if (val === 0) return 0;
  if (val === length) return 2;
  if ((val * 2) % length === 0) return 1;

  return NaN;
};
</script>

<template>
  <div
    class="opinionScaleQuestion_main_wrapper opinionScaleQuestion_ltr false"
    style="padding-bottom: 54px"
  >
    <QuestionHeader :sub-description="''" />
    <div class="opinionScaleQuestion_opinion_scale_wrapper">
      <div
        role="presentation"
        class="opinionScaleQuestion_opinion_scale_item"
        :class="{ opinionScaleQuestion_selected_choice: active == i }"
        v-for="(i, key) in sliderValues"
        :key="key"
        @click="active = i"
      >
        {{ i }}

        <div
          v-if="
            [0, 1, 2].includes(getPosition(key)) &&
            scaleLabels[labels[getPosition(key)]]
          "
          class="opinionScaleQuestion_label"
        >
          {{ scaleLabels[labels[getPosition(key)]] }}
        </div>
      </div>
      <!-- pinionScaleQuestion_fade -->
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
.opinionScaleQuestion_main_wrapper.opinionScaleQuestion_ltr {
  direction: ltr !important;
}
.opinionScaleQuestion_main_wrapper .opinionScaleQuestion_opinion_scale_wrapper {
  direction: ltr;
  width: 24rem;
  display: flex;
  background-color: var(--preview-theme-answer-color);
  color: var(--preview-theme-answer-color-contrast);
  border-radius: 0.5rem;
  position: relative;
}
.opinionScaleQuestion_main_wrapper
  .opinionScaleQuestion_opinion_scale_wrapper
  .opinionScaleQuestion_opinion_scale_item {
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
.opinionScaleQuestion_main_wrapper
  .opinionScaleQuestion_opinion_scale_wrapper
  .opinionScaleQuestion_opinion_scale_item:hover {
  box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
  cursor: pointer;
}
.opinionScaleQuestion_main_wrapper
  .opinionScaleQuestion_opinion_scale_wrapper
  .opinionScaleQuestion_opinion_scale_item.opinionScaleQuestion_selected_choice {
  background-color: var(--preview-theme-accent-color);
  position: relative;
  text-shadow: 0 0 0.5rem var(--preview-theme-button-color-light);
  color: var(--preview-theme-accent-color-contrast);
  box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
  border-radius: 0.625rem;
}
.opinionScaleQuestion_main_wrapper
  .opinionScaleQuestion_opinion_scale_wrapper
  .opinionScaleQuestion_opinion_scale_item.opinionScaleQuestion_fade {
  animation: opinionScaleQuestion_fade 0.1s 4 alternate;
  background-color: var(--preview-theme-accent-color);
  position: relative;
  text-shadow: 0 0 0.5rem var(--preview-theme-button-color-light);
  box-shadow: 0 0 0 0.1875rem var(--preview-theme-accent-color);
}
.opinionScaleQuestion_main_wrapper
  .opinionScaleQuestion_opinion_scale_wrapper
  .opinionScaleQuestion_opinion_scale_item
  .opinionScaleQuestion_label {
  position: absolute !important;
  color: var(--preview-theme-answer-color);
  top: 3rem;
  font-size: 0.8125rem;
  pointer-events: none;
  width: 8.333rem;
  text-align: center;
  word-wrap: break-word;
}
.opinionScaleQuestion_main_wrapper
  .opinionScaleQuestion_opinion_scale_wrapper
  .opinionScaleQuestion_opinion_scale_item
  .opinionScaleQuestion_label:before {
  content: "";
  background-color: var(--preview-theme-answer-color);
  width: 0.125rem;
  height: 0.5rem;
  display: inline-block;
  right: 50%;
  position: absolute;
}
@media (max-width: 1024px) {
  .opinionScaleQuestion_main_wrapper
    .opinionScaleQuestion_opinion_scale_wrapper {
    width: 100%;
    max-width: 25rem;
  }
  .opinionScaleQuestion_label {
    width: 100% !important;
    left: 0 !important;
    display: flex;
    justify-content: center;
  }
}
@keyframes opinionScaleQuestion_fade {
  0% {
    -webkit-opacity: 0;
  }
  to {
    -webkit-opacity: 1;
  }
}
</style>
