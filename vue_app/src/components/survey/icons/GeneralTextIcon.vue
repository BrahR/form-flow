<script setup lang="ts">
defineProps<{
  number?: number;
}>();
</script>

<template>
  <div
    class="questionNumber_question_number_wrapper__eCXI_ questionNumber_short_text_question___ITk5 questionNumber_ltr__n8kqK"
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
          d="M17 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h10zm0 1H7a1 1 0 0 0-.993.883L6 8v8a1 1 0 0 0 .883.993L7 17h10a1 1 0 0 0 .993-.883L18 16V8a1 1 0 0 0-.883-.993L17 7zm-1.5 6a.5.5 0 1 1 0 1h-3a.5.5 0 1 1 0-1h3zm0-3a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1h7z"
          fill="#3E434D"
          fill-rule="nonzero"
        ></path>
      </svg>
    </div>
        <div v-if="number" class="questionNumber_question_number_text__MJfAs">
      {{ number }}
    </div>
  </div>
</template>
