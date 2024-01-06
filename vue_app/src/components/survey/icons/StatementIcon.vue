<script setup lang="ts">
defineProps<{
  number?: number;
}>();
</script>

<template>
  <div
    class="questionNumber_question_number_wrapper__eCXI_ questionNumber_statement_question__pm5ku questionNumber_ltr__n8kqK"
    :class="{
      questionNumber_without_number__wzBhB: !number,
    }"
  >
    <div class="questionNumber_icon__nsjC6">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5 16a.5.5 0 1 1 0 1h-6a.5.5 0 1 1 0-1h6zm0-4a.5.5 0 1 1 0 1h-13a.5.5 0 1 1 0-1h13zm0-4a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1h13z"
          fill="#3E434D"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
    <div v-if="number" class="questionNumber_question_number_text__MJfAs">
      {{ number }}
    </div>
  </div>
</template>
