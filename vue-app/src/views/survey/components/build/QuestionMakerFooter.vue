<script setup lang="ts">
import { useQuestionFactoryStore } from "@/stores/questions/factory.ts";
import { useQuestionStore } from "@/stores/question.ts";
import { storeToRefs } from "pinia";
// import { useSurveyStore } from "@/stores/survey.ts";

const { surveyId } = defineProps<{
  surveyId: number | null;
}>();
const emits = defineEmits<{
  (event: "close"): void;
}>();

const useQuestionFactory = useQuestionFactoryStore();
const useQuestion = useQuestionStore();
const { store } = storeToRefs(useQuestionFactory);
// const useSurvey = useSurveyStore();

const postQuestion = () => {
  const result = useQuestion.create(surveyId ?? 0, store.value?.getData());

  if (result) {
    result
      .then(() => {
        emits("close");
      })
      .catch((error) => {
        console.error("Error creating question: ", error);
      });
  }
};
</script>

<template>
  <div class="footer_footer_wrapper">
    <button
      type="button"
      class="footer_save_button"
      :disabled="store?.hydrating || !store?.canSubmit || useQuestion.loading"
      @click="postQuestion"
    >
      <span
        :class="{ hidden: !useQuestion.loading }"
        class="loading loading-spinner loading-md ml-1 absolute"
      ></span>
      Save
    </button>
    <button type="button" class="footer_cancel_button" @click="$emit('close')">
      Cancel
    </button>
  </div>
</template>

<style scoped>
.footer_footer_wrapper {
  display: flex;
  padding: 0.75rem 1rem;
  align-items: center;
  height: 2rem;
  box-shadow: inset 0 0.125rem 0 0 #f0f2f5;
  direction: ltr;
  background-color: #fff;
  border-radius: 0 0 0.5rem 0.5rem;
}
.footer_footer_wrapper button {
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  min-width: 4rem;
  height: 2rem;
  background-color: #9ee3ff;
  font-family: inherit;
}
.footer_footer_wrapper button:focus {
  outline: none;
}
.footer_footer_wrapper .footer_save_button {
  color: #fff;
  background-color: #3b368e;
  margin-right: 1rem;
}

.footer_footer_wrapper .footer_save_button[disabled] {
  background-color: rgba(59, 54, 142, 0.7);
}

.footer_footer_wrapper .footer_save_button:hover:not([disabled]) {
  background-color: rgba(59, 54, 142, 0.8);
}

.footer_footer_wrapper .footer_cancel_button {
  color: #3b368e;
  background-color: rgba(59, 54, 142, 0.15);
}
.footer_footer_wrapper .footer_cancel_button:hover {
  background-color: #d8dbe0;
}
@media (max-width: 1024px) {
  .footer_footer_wrapper {
    border-radius: 0;
  }
}
</style>
