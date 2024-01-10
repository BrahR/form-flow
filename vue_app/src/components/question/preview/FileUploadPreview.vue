<script setup lang="ts">
import QuestionHeader from "@/components/question/preview/QuestionHeader.vue";
import { convertSize } from "@/utils";
import { inject } from "vue";
import type { QuestionBuilderStore } from "@/store/questionBuilder";

const useQuestionBuilder = inject("question") as QuestionBuilderStore;
</script>

<template>
  <div class="fileupload_wrapper__orfyc fileupload_ltr__e03wd false">
    <QuestionHeader description="" />
    <div>
      <div
        class="fileupload_file_upload_div___8E9L fileupload_file_upload_div_classic__PG_AK"
      >
        <div>
          <div
            class="fileupload_low_opacity_div__4vMNB fileupload_selectable__gsMnk"
            role="presentation"
          >
            <div dir="ltr" class="fileupload_select_file_button__9pXkC">
              Browse
            </div>
            <span class="fileupload_max_size_text__gMnO8">
              (Maximum size:
              {{
                `${convertSize(
                  useQuestionBuilder.getMaxFileSize,
                  "KB",
                  useQuestionBuilder.getFileUnit
                )} ${useQuestionBuilder.getFileUnit}`
              }})
            </span>
            <input
              type="file"
              accept="."
              class="fileupload_file_input__cqjHM"
            />
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

.fileupload_wrapper__orfyc.fileupload_ltr__e03wd {
  direction: ltr !important;
}
.fileupload_file_upload_div_classic__PG_AK {
  height: 15.875rem !important;
}
.fileupload_file_upload_div___8E9L .fileupload_selectable__gsMnk {
  cursor: pointer;
}
.fileupload_file_upload_div___8E9L .fileupload_low_opacity_div__4vMNB {
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
.fileupload_file_upload_div___8E9L
  .fileupload_low_opacity_div__4vMNB
  .fileupload_max_size_text__gMnO8 {
  font-size: small;
  margin-top: 0.75rem;
  color: var(--preview-theme-answer-color);
}
.fileupload_file_upload_div___8E9L
  .fileupload_low_opacity_div__4vMNB
  .fileupload_select_file_button__9pXkC {
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
.fileupload_file_upload_div___8E9L .fileupload_file_input__cqjHM {
  display: none;
}
</style>
