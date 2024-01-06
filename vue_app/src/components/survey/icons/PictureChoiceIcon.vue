<script setup lang="ts">
defineProps<{
  number?: number;
}>();
</script>

<template>
  <div
    class="questionNumber_question_number_wrapper__eCXI_ questionNumber_picture_choice_question___LZMh questionNumber_ltr__n8kqK"
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
          d="M21 4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h18zm0 1H3a1 1 0 0 0-.993.883L2 6v11a1 1 0 0 0 .714.959l4.768-4.33a.5.5 0 0 1 .656-.013l2.524 2.108 5.827-5.1a.5.5 0 0 1 .601-.043l.075.06L22 15.304V6a1 1 0 0 0-.883-.993L21 5zM8.44 6.183A2.5 2.5 0 1 1 5.183 9.44a2.75 2.75 0 0 0 3.273-3.184l-.016-.073z"
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
