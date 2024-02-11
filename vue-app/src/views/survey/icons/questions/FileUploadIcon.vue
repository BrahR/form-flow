<script setup lang="ts">
defineProps<{
  number?: number | null;
}>();
</script>

<template>
  <div
    class="questionNumber_question_number_wrapper questionNumber_file_upload_question questionNumber_ltr"
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
          d="m12 4 6.926 6.214.074.066V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5zm-.592.999L7 5a1 1 0 0 0-.993.883L6 6v12a1 1 0 0 0 .883.993L7 19h10a1 1 0 0 0 .993-.883L18 18v-6.221h-4.096a2.5 2.5 0 0 1-2.494-2.335l-.006-.164.004-4.281z"
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
