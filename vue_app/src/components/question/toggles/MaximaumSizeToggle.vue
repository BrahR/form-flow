<script setup lang="ts">
import { convertSize } from "@/utils";
import { inject, computed } from "vue";
import type { QuestionStore } from "@/store/question";

const useQuestion = inject("question") as QuestionStore;

const displayedSize = computed(() => {
  return convertSize(useQuestion.getMaxFileSize, "KB", useQuestion.getFileUnit);
});
</script>

<template>
  <div class="fileupload_file_unit_div__2ubra fileupload_ltr__e03wd">
    <span>Maximum Size:</span>
    <div class="fileupload_file_unit_wrapper__5UzWg">
      <div
        class="selectionButtonGroup_buttons_wrapper__jbKNI selectionButtonGroup_ltr__V3WKz selectionButtonGroup_default__ePF4M"
      >
        <button
          type="button"
          v-for="unit in useQuestion.getUnits"
          :class="{
            selectionButtonGroup_selected_tab__BT9Pz:
              unit === useQuestion.getFileUnit,
          }"
          @click="useQuestion.getFileUnit = unit"
        >
          <span>{{ unit }}</span>
        </button>
      </div>
      <input
        type="number"
        min="0"
        :value="displayedSize"
        @input="
          useQuestion.getMaxFileSize = convertSize(
            ($event.target as HTMLInputElement).value as unknown as number,
            useQuestion.getFileUnit,
            'KB'
          )
        "
      />
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: content-box;
}
.selectionButtonGroup_buttons_wrapper__jbKNI {
  display: flex;
  width: 100%;
}
.selectionButtonGroup_buttons_wrapper__jbKNI button {
  margin: 0;
  flex-grow: 1;
  width: 0;
  cursor: pointer;
  padding: 0.25rem 0;
  font-family: unset;
  font-size: 14px;
  border-radius: 0;
  scrollbar-width: none;
}
.selectionButtonGroup_buttons_wrapper__jbKNI button:focus {
  outline: none;
}
.selectionButtonGroup_buttons_wrapper__jbKNI button:first-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.selectionButtonGroup_buttons_wrapper__jbKNI button:last-child,
.selectionButtonGroup_buttons_wrapper__jbKNI.selectionButtonGroup_ltr__V3WKz
  button:first-child {
  border-radius: 0.25rem 0 0 0.25rem;
}
.selectionButtonGroup_buttons_wrapper__jbKNI.selectionButtonGroup_ltr__V3WKz
  button:last-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.selectionButtonGroup_buttons_wrapper__jbKNI.selectionButtonGroup_default__ePF4M
  button {
  border: none;
  color: #6b7079;
  background-color: #f0f2f5;
}
.selectionButtonGroup_buttons_wrapper__jbKNI.selectionButtonGroup_default__ePF4M
  .selectionButtonGroup_selected_tab__BT9Pz {
  color: #3e434d;
  background-color: #d8dbe0;
}
@media (max-width: 1024px) {
  .selectionButtonGroup_buttons_wrapper__jbKNI button {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .selectionButtonGroup_buttons_wrapper__jbKNI button:focus {
    outline: none;
  }
}
.fileupload_file_unit_div__2ubra {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 0.875rem 0;
}
.fileupload_file_unit_div__2ubra span {
  font-weight: 700;
}
.fileupload_file_unit_div__2ubra .fileupload_file_unit_wrapper__5UzWg {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.fileupload_file_unit_div__2ubra .fileupload_file_unit_wrapper__5UzWg div {
  width: 8rem;
}
.fileupload_file_unit_div__2ubra .fileupload_file_unit_wrapper__5UzWg input {
  max-width: 4rem;
  font-family: unset;
  border: 1px solid #bbbcc0;
  height: 1.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  direction: ltr;
}
.fileupload_file_unit_div__2ubra.fileupload_ltr__e03wd {
  direction: ltr;
}
</style>
