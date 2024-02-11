<script setup lang="ts">
import { convertSize } from "@/utils";
import { computed } from "vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

const useQuestionToggles = useQuestionTogglesStore();
const { allowedSizeUnits } = useQuestionToggles;
const { customFileMaxSize } = storeToRefs(useQuestionToggles);

// TODO might need a rework

const displayedSize = computed(() => {
  return convertSize(
    customFileMaxSize.value.size,
    "KB",
    customFileMaxSize.value.unit,
  );
});
</script>

<template>
  <div class="fileupload_file_unit_div fileupload_ltr">
    <span>Maximum Size:</span>
    <div class="fileupload_file_unit_wrapper">
      <div
        class="selectionButtonGroup_buttons_wrapper selectionButtonGroup_ltr selectionButtonGroup_default"
      >
        <button
          type="button"
          v-for="unit in allowedSizeUnits"
          :class="{
            selectionButtonGroup_selected_tab: unit === customFileMaxSize.unit,
          }"
          @click="customFileMaxSize.unit = unit"
        >
          <span>{{ unit }}</span>
        </button>
      </div>
      <input
        type="number"
        min="0"
        :value="displayedSize"
        @input="
          customFileMaxSize.size = convertSize(
            Number(($event.target as HTMLInputElement).value),
            customFileMaxSize.unit,
            'KB',
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
.selectionButtonGroup_buttons_wrapper {
  display: flex;
  width: 100%;
}
.selectionButtonGroup_buttons_wrapper button {
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
.selectionButtonGroup_buttons_wrapper button:focus {
  outline: none;
}
.selectionButtonGroup_buttons_wrapper button:first-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.selectionButtonGroup_buttons_wrapper button:last-child,
.selectionButtonGroup_buttons_wrapper.selectionButtonGroup_ltr
  button:first-child {
  border-radius: 0.25rem 0 0 0.25rem;
}
.selectionButtonGroup_buttons_wrapper.selectionButtonGroup_ltr
  button:last-child {
  border-radius: 0 0.25rem 0.25rem 0;
}
.selectionButtonGroup_buttons_wrapper.selectionButtonGroup_default button {
  border: none;
  color: #6b7079;
  background-color: #f0f2f5;
}
.selectionButtonGroup_buttons_wrapper.selectionButtonGroup_default
  .selectionButtonGroup_selected_tab {
  color: #3e434d;
  background-color: #d8dbe0;
}
@media (max-width: 1024px) {
  .selectionButtonGroup_buttons_wrapper button {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .selectionButtonGroup_buttons_wrapper button:focus {
    outline: none;
  }
}
.fileupload_file_unit_div {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 0.875rem 0;
}
.fileupload_file_unit_div span {
  font-weight: 700;
}
.fileupload_file_unit_div .fileupload_file_unit_wrapper {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.fileupload_file_unit_div .fileupload_file_unit_wrapper div {
  width: 8rem;
}
.fileupload_file_unit_div .fileupload_file_unit_wrapper input {
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
.fileupload_file_unit_div.fileupload_ltr {
  direction: ltr;
}
</style>
