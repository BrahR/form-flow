<script setup lang="ts">
defineProps<{
  number?: number;
}>();
</script>

<template>
  <div
    class="questionNumber_question_number_wrapper__eCXI_ questionNumber_matrix_question__cW0YF questionNumber_ltr__n8kqK"
    :class="{
      questionNumber_without_number__wzBhB: !number,
    }"
  >
    <div class="questionNumber_icon__nsjC6">
      <img
        width="24"
        height="24"
        alt="chrome"
        src="https://canarycdn.porsline.com/static/panel/v2/matrix@2x.png"
      />
    </div>
    <div v-if="number" class="questionNumber_question_number_text__MJfAs">
      {{ number }}
    </div>
  </div>
</template>
