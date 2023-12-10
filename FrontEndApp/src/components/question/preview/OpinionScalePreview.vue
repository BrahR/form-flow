<script setup lang="ts">
import QuestionHeader from "./QuestionHeader.vue";

// import { useQuestionStore } from "@/store/question.ts";

// const useQuestion = useQuestionStore();
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
        class="opinionScaleQuestion_opinion_scale_item__BRHiH false false"
      >
        1
        <div class="opinionScaleQuestion_label__xX1Vc"><p>low</p></div>
      </div>
      <div
        role="presentation"
        class="opinionScaleQuestion_opinion_scale_item__BRHiH false false"
      >
        2
      </div>
      <div
        role="presentation"
        class="opinionScaleQuestion_opinion_scale_item__BRHiH false false"
      >
        3
      </div>
      <div
        role="presentation"
        class="opinionScaleQuestion_opinion_scale_item__BRHiH false false"
      >
        4
      </div>
      <div
        role="presentation"
        class="opinionScaleQuestion_opinion_scale_item__BRHiH false false"
      >
        5
      </div>
      <div
        role="presentation"
        class="opinionScaleQuestion_opinion_scale_item__BRHiH false false"
      >
        6
        <div class="opinionScaleQuestion_label__xX1Vc"><p>mid</p></div>
      </div>
      <div
        role="presentation"
        class="opinionScaleQuestion_opinion_scale_item__BRHiH false false"
      >
        7
      </div>
      <div
        role="presentation"
        class="opinionScaleQuestion_opinion_scale_item__BRHiH false false"
      >
        8
      </div>
      <div
        role="presentation"
        class="opinionScaleQuestion_opinion_scale_item__BRHiH false false"
      >
        9
      </div>
      <div
        role="presentation"
        class="opinionScaleQuestion_opinion_scale_item__BRHiH opinionScaleQuestion_selected_choice___C24j opinionScaleQuestion_fade__igYFL"
      >
        10
      </div>
      <div
        role="presentation"
        class="opinionScaleQuestion_opinion_scale_item__BRHiH false false"
      >
        11
        <div class="opinionScaleQuestion_label__xX1Vc"><p>high</p></div>
      </div>
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
