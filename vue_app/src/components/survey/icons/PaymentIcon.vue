<script setup lang="ts">
defineProps<{
  number?: number;
}>();
</script>

<template>
  <div
    class="questionNumber_question_number_wrapper__eCXI_ questionNumber_payment_question__QWN7s questionNumber_ltr__n8kqK"
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
        <defs>
          <clipPath id="71nyhihroa">
            <path d="M907 0v837H0V0h907z"></path>
          </clipPath>
          <clipPath id="0lmn7a3v5b">
            <path
              d="M20 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h18zm1 8H1v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8zm-1-7H2a1 1 0 0 0-1 1v2h20V2a1 1 0 0 0-1-1z"
            ></path>
          </clipPath>
        </defs>
        <g clip-path="url(#71nyhihroa)" transform="translate(-198 -516)">
          <g clip-path="url(#0lmn7a3v5b)" transform="translate(199 520)">
            <path fill="#3D424D" d="M0 0h22v16H0V0z"></path>
          </g>
        </g>
      </svg>
    </div>
        <div v-if="number" class="questionNumber_question_number_text__MJfAs">
      {{ number }}
    </div>
  </div>
</template>
