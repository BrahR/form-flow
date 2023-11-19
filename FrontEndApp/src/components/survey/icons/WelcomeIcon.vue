<script setup lang="ts">

defineProps<{
  number?: number
}>()

</script>

<template>
  <div class="questionNumber_question_number_wrapper__eCXI_ questionNumber_welcome__AtnYQ questionNumber_without_number__wzBhB questionNumber_ltr__n8kqK">
    <div class="questionNumber_icon__nsjC6">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path d="M0 0h24v24H0z"></path>
          <path d="M5 4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1zm10.53 2.47a.75.75 0 0 1 .073.976l-.073.084-3.72 3.72H22a.75.75 0 0 1 .102 1.493L22 12.75H11.812l3.718 3.72a.75.75 0 0 1 .073.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073-5-5-.063-.072-.034-.047a.77.77 0 0 1-.09-.193.747.747 0 0 1 .187-.748l5-5a.75.75 0 0 1 1.06 0z" fill="#3E434D" fill-rule="nonzero"></path>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.questionNumber_welcome__AtnYQ {
  background: #d8dbe0;
}
.questionNumber_question_number_wrapper__eCXI_ {
  display: flex;
  justify-content: center;
  padding: 0 .25rem 0 .5rem;
  height: 2rem;
  grid-gap: .125rem;
  align-items: center;
  font-weight: 700;
  border-radius: .25rem;
}

.questionNumber_question_number_wrapper__eCXI_ .questionNumber_icon__nsjC6 {
  display: flex;
}

.questionNumber_question_number_wrapper__eCXI_ .questionNumber_icon__nsjC6 svg {
  vertical-align: middle;
}

.questionNumber_question_number_wrapper__eCXI_ .questionNumber_question_number_text__MJfAs {
  margin: 0 .125rem;
}

.questionNumber_question_number_wrapper__eCXI_.questionNumber_ltr__n8kqK {
  padding: 0 .5rem 0 .25rem;
}
</style>
