<script setup lang="ts">
import { useQuestionStore } from "@/store/question.ts";

const useQuestion = useQuestionStore();
</script>

<template>
  <div class="questionDescription_description_Wrapper__auABf">
    <div>
      <div class="toggleButton_wrapper__dOusd">
        <span class="toggleButton_title__zP_tP toggleButton_bold__huFoE"
          >Description</span
        >
        <label class="toggleButton_switch__EF_q8">
          <input
            v-model="useQuestion.getDescribed.on"
            class="toggleButton_toggle_button_checkbox__a2Pr8"
            type="checkbox"
          />
          <div class="toggleButton_slider_round__QN633"></div>
        </label>
      </div>
    </div>
  </div>
  <div
    v-show="useQuestion.getDescribed.on"
    class="ck-show-toolbar-wrapper mt-3"
  >
    <ckeditor
      :editor="useQuestion.getDescEditor"
      :config="useQuestion.getDescConfig"
      @ready="useQuestion.getDescReady"
    ></ckeditor>
  </div>
</template>
