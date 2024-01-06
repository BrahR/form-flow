<script setup lang="ts">
defineProps<{
  number?: number;
}>();
</script>

<template>
  <div
    class="questionNumber_question_number_wrapper__eCXI_ questionNumber_rating_question__WxdYy questionNumber_ltr__n8kqK"
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
          d="m11.049 3.892-1.656 5.1-5.362-.001a1 1 0 0 0-.81.412l-.067.106a1 1 0 0 0 .289 1.29l4.34 3.15-1.66 5.101a1 1 0 0 0 .143.898l.08.097a1 1 0 0 0 1.317.123L12 17.014l4.337 3.154a1 1 0 0 0 .898.142l.109-.042a1 1 0 0 0 .532-1.218l-1.66-5.1 4.341-3.15a1 1 0 0 0 .413-.81l-.007-.116a1 1 0 0 0-.994-.883l-5.363.001-1.655-5.1a1 1 0 0 0-1.902 0zm-.816 5.755L12 4.202l1.767 5.445a.5.5 0 0 0 .476.346l5.727-.002-4.635 3.364a.5.5 0 0 0-.181.559l1.772 5.446-4.632-3.368a.5.5 0 0 0-.588 0L7.074 19.36l1.772-5.446a.5.5 0 0 0-.181-.56L4.03 9.992l5.727.002a.5.5 0 0 0 .476-.346z"
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
