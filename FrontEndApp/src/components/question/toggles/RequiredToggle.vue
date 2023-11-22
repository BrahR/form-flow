<script setup lang="ts">
import { useQuestionStore } from "@/store/question";

const useQuestion = useQuestionStore();
</script>

<template>
  <div class="sharedBuild_toggle_wrapper__R5w_y">
    <div class="toggleButton_wrapper__dOusd">
      <span class="toggleButton_title__zP_tP toggleButton_bold__huFoE"
        >Required</span
      >
      <label class="toggleButton_switch__EF_q8">
        <input
          v-model="useQuestion.getRequired.on"
          class="toggleButton_toggle_button_checkbox__a2Pr8"
          type="checkbox"
        />
        <div class="toggleButton_slider_round__QN633"></div>
      </label>
    </div>
  </div>
</template>
