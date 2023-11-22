<script setup lang="ts">
import { useQuestionStore } from "@/store/question";

const useQuestion = useQuestionStore();
</script>

<template>
  <div class="inlineInput_wrapper__7HOFO inlineInput_ltr__IdP5R">
    <p class="inlineInput_label__gJoig">Button</p>
    <div class="inlineInput_input_wrapper__8ZUU7">
      <input
        v-model="useQuestion.getStartButton.value"
        class="inlineInput_input__S084b undefined"
        type="text"
      />
    </div>
  </div>
</template>
