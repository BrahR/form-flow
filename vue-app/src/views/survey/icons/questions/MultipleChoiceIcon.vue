<script setup lang="ts">
defineProps<{
  number?: number | null;
}>();
</script>

<template>
  <div
    class="questionNumber_question_number_wrapper questionNumber_multiple_choice_question questionNumber_ltr"
    :class="{
      questionNumber_without_number: !number,
    }"
  >
    <div class="questionNumber_icon" style="transform: scaleX(-1)">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 13a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4zm-8.5 3a.5.5 0 1 1 0 1h-8a.5.5 0 1 1 0-1h8zM18 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11.5 8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1 0-1h8z"
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
