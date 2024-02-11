<script setup lang="ts">
import CalculatedVariablesIcon from "@/views/survey/icons/questions/CalculatedVariablesIcon.vue";
import CustomVariablesIcon from "@/views/survey/icons/questions/CustomVariablesIcon.vue";
import ChevronIcon from "@/views/survey/icons/questions/ChevronIcon.vue";
</script>

<template>
  <div class="questionsTypesList_variables_and_in_app_message_wrapper">
    <div class="questionsTypesList_variables">
      <div class="questionsTypesList_variable questionsTypesList_ltr false">
        <div class="questionsTypesList_icon_and_title">
          <CustomVariablesIcon />
          Custom Variables
        </div>
        <ChevronIcon />
      </div>
      <div class="questionsTypesList_variable questionsTypesList_ltr">
        <div class="questionsTypesList_icon_and_title">
          <CalculatedVariablesIcon />
          Calculated Variables
        </div>
        <ChevronIcon />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
