<script setup lang="ts">
defineProps<{
  number?: number | null;
}>();
</script>

<template>
  <div
    class="questionNumber_question_number_wrapper questionNumber_opinion_scale_question questionNumber_ltr"
    :class="{
      questionNumber_without_number: !number,
    }"
  >
    <div class="questionNumber_icon">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 5a1 1 0 0 1 1 1v1h4a2 2 0 0 1 1.995 1.85L23 9v6a2 2 0 0 1-2 2h-4v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H3a2 2 0 0 1-1.995-1.85L1 15V9a2 2 0 0 1 2-2h10V6a1 1 0 0 1 1-1h2zm-3 3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10V8zm8 0h-4v8h4a1 1 0 0 0 .993-.883L22 15V9a1 1 0 0 0-1-1z"
          fill="#3E434D"
          fill-rule="nonzero"
        ></path>
      </svg>
    </div>
    <div v-if="number" class="questionNumber_question_number_text">
      {{ number }}
    </div>
  </div>
</template>
