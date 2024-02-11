<script setup lang="ts">
import QuestionHeader from "@/views/survey/components/build/question/QuestionHeader.vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";
import { convertSize } from "@/utils";

const useQuestionToggles = useQuestionTogglesStore();
// @ts-ignore
const { fileSizeUnit, customFileMaxSize, customFileExtensions } =
  storeToRefs(useQuestionToggles);
</script>

<template>
  <div class="fileupload_wrapper fileupload_ltr false">
    <QuestionHeader sub-description="" />
    <div>
      <div
        class="fileupload_file_upload_div fileupload_file_upload_div_classic"
      >
        <div>
          <div
            class="fileupload_low_opacity_div fileupload_selectable"
            role="presentation"
          >
            <div dir="ltr" class="fileupload_select_file_button">Browse</div>
            <span class="fileupload_max_size_text">
              (Maximum size:
              {{
                `${convertSize(
                  customFileMaxSize.size,
                  "KB",
                  customFileMaxSize.unit,
                )} ${customFileMaxSize.unit}`
              }})
            </span>
            <input type="file" accept="." class="fileupload_file_input" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}

.fileupload_wrapper.fileupload_ltr {
  direction: ltr !important;
}
.fileupload_file_upload_div_classic {
  height: 15.875rem !important;
}
.fileupload_selectable {
  cursor: pointer;
}
.fileupload_low_opacity_div {
  max-width: 18.4375rem;
  height: 7.5rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid var(--preview-theme-answer-color-light);
  background-color: var(--preview-theme-answer-color-lightest);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
}

.fileupload_max_size_text {
  font-size: small;
  margin-top: 0.75rem;
  color: var(--preview-theme-answer-color);
}

.fileupload_select_file_button {
  padding: 0.5em 1.3em;
  border-radius: 0.5rem;
  background-color: var(--preview-theme-answer-color);
  border: none;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--preview-theme-answer-color-contrast);
  font-size: 1.125em;
  font-weight: 700;
}
.fileupload_file_input {
  display: none;
}
</style>
