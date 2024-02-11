<script setup lang="ts">
defineProps<{
  number?: number | null;
}>();
</script>

<template>
  <div
    class="questionNumber_question_number_wrapper questionNumber_matrix_question questionNumber_ltr"
    :class="{
      questionNumber_without_number: !number,
    }"
  >
    <div class="questionNumber_icon">
      <img
        width="24"
        height="24"
        alt="chrome"
        src="https://canarycdn.porsline.com/static/panel/v2/matrix@2x.png"
      />
    </div>
    <div v-if="number" class="questionNumber_question_number_text">
      {{ number }}
    </div>
  </div>
</template>
