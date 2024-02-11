<script setup lang="ts">
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

type Emits = {
  submit?: void;
};

defineEmits<Emits>();

const useQuestionToggles = useQuestionTogglesStore();
const { label, description } = useQuestionToggles;
const { welcomeButton } = storeToRefs(useQuestionToggles);
</script>

<template>
  <div class="welcome_welcome_page_wrapper welcome_centered welcome_ltr">
    <div class="welcome_welcome_page_detail false false">
      <div class="welcome_welcome_page_detail_text">
        <p class="welcome_welcome_page_detail_title" v-html="label.model"></p>
        <p
          v-if="description.on && description.model !== ''"
          class="welcome_welcome_page_detail_description welcome_ltr"
          v-html="description.model"
        ></p>
      </div>
    </div>
    <div class="welcome_welcome_button_wrapper" style="max-width: 1063px">
      <button
        v-if="welcomeButton.value !== ''"
        type="button"
        @click="$emit('submit')"
      >
        {{ welcomeButton.value }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.welcome_welcome_page_wrapper {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.welcome_welcome_page_wrapper.welcome_ltr {
  direction: ltr !important;
}

.welcome_welcome_page_wrapper.welcome_centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.welcome_welcome_page_wrapper .welcome_welcome_page_detail {
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.welcome_welcome_page_wrapper .welcome_welcome_page_detail p {
  margin: 0;
}

.welcome_welcome_page_wrapper
  .welcome_welcome_page_detail
  .welcome_welcome_page_detail_text {
  max-width: 30rem;
  text-align: center;
  padding: 0 2.5rem;
  color: var(--preview-theme-question-color);
}

.welcome_welcome_page_wrapper
  .welcome_welcome_page_detail
  .welcome_welcome_page_detail_text
  .welcome_welcome_page_detail_title {
  font-size: 1.25em;
  font-weight: 700;
  word-break: break-word;
  white-space: pre-line;
  margin-bottom: 0.25rem;
}

.welcome_welcome_button_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 0 2.5rem 5rem;
  width: 100%;
  box-sizing: border-box;
}

.welcome_welcome_button_wrapper button {
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

.welcome_welcome_button_wrapper button:hover {
  cursor: pointer;
  box-shadow: 0 0 0 0.125rem var(--preview-theme-accent-color);
}

.welcome_welcome_button_wrapper button:focus {
  box-shadow: 0 0 0 0.0625rem var(--preview-theme-accent-color);
}
</style>
