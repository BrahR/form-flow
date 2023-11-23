<script setup lang="ts">
import { useQuestionStore } from "@/store/question.ts";

const useQuestion = useQuestionStore();
</script>

<template>
  <div
    class="welcome_welcome_page_wrapper__aE5tS welcome_centered__sKsdH welcome_ltr___Sfvu"
  >
    <div class="welcome_welcome_page_detail___nEtY false false">
      <div class="welcome_welcome_page_detail_text__Vt6Fe">
        <p
          class="welcome_welcome_page_detail_title__YCOka"
          v-html="useQuestion.getLabel"
        ></p>
        <p
          v-if="useQuestion.getDescribed.on && useQuestion.getDesc"
          class="welcome_welcome_page_detail_description__Csczl welcome_ltr___Sfvu"
          v-html="useQuestion.getDesc"
        ></p>
      </div>
    </div>
    <div
      class="welcome_welcome_button_wrapper__ujW1l"
      style="max-width: 1063px"
    >
      <button v-if="useQuestion.getStartButton.value !== ''" type="button">
        {{ useQuestion.getStartButton.value }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/2a2e4efde05c354a.css */
.welcome_welcome_page_wrapper__aE5tS {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.welcome_welcome_page_wrapper__aE5tS.welcome_ltr___Sfvu {
  direction: ltr !important;
}

.welcome_welcome_page_wrapper__aE5tS.welcome_centered__sKsdH {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.welcome_welcome_page_wrapper__aE5tS .welcome_welcome_page_detail___nEtY {
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.welcome_welcome_page_wrapper__aE5tS .welcome_welcome_page_detail___nEtY p {
  margin: 0;
}

.welcome_welcome_page_wrapper__aE5tS
  .welcome_welcome_page_detail___nEtY
  .welcome_welcome_page_detail_text__Vt6Fe {
  max-width: 30rem;
  text-align: center;
  padding: 0 2.5rem;
  color: var(--preview-theme-question-color);
}

.welcome_welcome_page_wrapper__aE5tS
  .welcome_welcome_page_detail___nEtY
  .welcome_welcome_page_detail_text__Vt6Fe
  .welcome_welcome_page_detail_title__YCOka {
  font-size: 1.25em;
  font-weight: 700;
  word-break: break-word;
  white-space: pre-line;
  margin-bottom: 0.25rem;
}

.welcome_welcome_button_wrapper__ujW1l {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 0 2.5rem 5rem;
  width: 100%;
  box-sizing: border-box;
}

.welcome_welcome_button_wrapper__ujW1l button {
  all: unset;
  min-height: 2.25rem;
  width: -moz-fit-content;
  width: fit-content;
  min-width: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--preview-theme-button-color);
  color: var(--preview-theme-button-color-contrast) !important;
  overflow-wrap: anywhere;
  font-weight: 700;
  font-size: 1.25em;
}

.welcome_welcome_button_wrapper__ujW1l button:hover {
  cursor: pointer;
  box-shadow: 0 0 0 0.125rem var(--preview-theme-accent-color);
}

.welcome_welcome_button_wrapper__ujW1l button:focus {
  box-shadow: 0 0 0 0.0625rem var(--preview-theme-accent-color);
}
</style>
