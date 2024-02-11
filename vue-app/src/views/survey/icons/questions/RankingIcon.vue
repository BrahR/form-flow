<script setup lang="ts">
defineProps<{
  number?: number | null;
}>();
</script>

<template>
  <div
    class="questionNumber_question_number_wrapper questionNumber_ranking_question questionNumber_ltr"
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
          d="m15.62 4.215.087.078 4.95 4.95a1 1 0 0 1-1.327 1.492l-.088-.078L16 7.414 16 18.45a1 1 0 0 1-2 0l-.001-11.036-3.242 3.243a1 1 0 0 1-1.327.078l-.087-.078a1 1 0 0 1-.078-1.327l.078-.087 4.95-4.95a1 1 0 0 1 1.327-.078zM6.478 11.45a.5.5 0 0 1 .5.5v5.749l1.975-1.974.07-.058a.5.5 0 0 1 .695.695l-.058.07-2.828 2.828-.07.058a.5.5 0 0 1-.568 0l-.07-.058-2.828-2.828-.057-.07a.5.5 0 0 1 0-.568l.057-.07.07-.057a.5.5 0 0 1 .568 0l.07.058 1.974 1.974v-5.75a.5.5 0 0 1 .5-.5z"
          fill="#3E434D"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
    <div v-if="number" class="questionNumber_question_number_text">
      {{ number }}
    </div>
  </div>
</template>
