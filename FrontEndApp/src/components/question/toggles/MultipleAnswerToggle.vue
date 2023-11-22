<script setup lang="ts">
import { useQuestionStore } from "@/store/question";

const useQuestion = useQuestionStore();
</script>

<template>
  <div class="sharedBuild_toggle_wrapper__R5w_y">
    <div class="toggleButton_wrapper__dOusd">
      <span class="toggleButton_title__zP_tP toggleButton_bold__huFoE"
        >Multiple Selection</span
      >
      <label class="toggleButton_switch__EF_q8">
        <input
          v-model="useQuestion.getMultipleAnswers.on"
          class="toggleButton_toggle_button_checkbox__a2Pr8"
          type="checkbox"
        />
        <div class="toggleButton_slider_round__QN633"></div>
      </label>
    </div>
  </div>
  <div
    v-if="useQuestion.getMultipleAnswers.on"
    class="buildMinMaxChoice_min_max_choices_wrapper__WvAKM"
  >
    <div class="buildMinMaxChoice_title__Nv3yz">Range</div>
    <div class="buildMinMaxChoice_min_max_wrapper__5S8Wi">
      <div class="buildMinMaxChoice_wrapper__Kmwsk">
        <div class="buildMinMaxChoice_min_wrapper__8oipe">
          <div
            class="buildMinMaxChoice_description__kycW8 buildMinMaxChoice_ltr__rNhi8"
          >
            Min
          </div>
          <input
            v-model="useQuestion.getMultipleAnswers.min"
            class="buildMinMaxChoice_input__29wsq"
            type="number"
            inputmode="decimal"
          />
        </div>
      </div>
      <div class="buildMinMaxChoice_wrapper__Kmwsk">
        <div class="buildMinMaxChoice_max_wrapper__zI1rG">
          <div
            class="buildMinMaxChoice_description__kycW8 buildMinMaxChoice_ltr__rNhi8"
          >
            Max
          </div>
          <input
            v-model="useQuestion.getMultipleAnswers.max"
            class="buildMinMaxChoice_input__29wsq"
            type="number"
            inputmode="decimal"
          />
        </div>
      </div>
    </div>
  </div>
</template>
