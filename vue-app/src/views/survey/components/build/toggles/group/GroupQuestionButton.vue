<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { watch } from "vue";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { questionGroupButton } = storeToRefs(useQuestionToggles);

watch(
  () => questionGroupButton.value.value, // i *cri*
  (value) => {
    console.log(value);
    if (!value) {
      questionGroupButton.value.error = true;
      return;
    }
    questionGroupButton.value.error = false;
  },
);
</script>

<template>
  <div class="sharedBuild_title_row_wrapper sharedBuild_ltr">
    <div class="inlineInput_wrapper inlineInput_ltr">
      <p class="inlineInput_label">Button</p>
      <div class="inlineInput_input_wrapper">
        <input
          v-model="questionGroupButton.value"
          class="inlineInput_input undefined"
          type="text"
        />
      </div>
    </div>

    <InputError
      :show="questionGroupButton.error"
      error="Button value is required."
    />
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
/*! CSS Used from: Embedded */
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_title_row_wrapper {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 1.5rem 0 0.65rem;
}
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_title_row_wrapper.sharedBuild_ltr {
  direction: ltr;
}
.sharedBuild_questions_content
  .sharedBuild_build_content
  .sharedBuild_title_row_wrapper:last-child {
  box-shadow: none;
}
.inlineInput_wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.inlineInput_wrapper .inlineInput_label {
  margin: 0.5rem 0 0.5rem 0.5rem;
  white-space: nowrap;
  align-self: flex-start;
}
.inlineInput_wrapper .inlineInput_input_wrapper {
  position: relative;
}
.inlineInput_wrapper .inlineInput_input_wrapper .inlineInput_input {
  font-family: unset;
  border: 1px solid #bbbcc0;
  height: 1.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
}
.inlineInput_wrapper.inlineInput_ltr .inlineInput_label {
  margin: 0.5rem 0.5rem 0.5rem 0;
}
</style>
