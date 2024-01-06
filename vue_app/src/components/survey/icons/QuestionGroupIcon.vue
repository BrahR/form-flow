<script setup lang="ts">
defineProps<{
  number?: number;
}>();
</script>

<template>
  <div
    class="questionNumber_question_number_wrapper__eCXI_ questionNumber_group_question__W9Tij questionNumber_ltr__n8kqK"
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
          d="M18 4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1zm-6 11a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h6zm0-4a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h6zm0-4a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2h6z"
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
