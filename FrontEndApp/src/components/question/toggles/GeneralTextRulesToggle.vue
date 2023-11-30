<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import { useQuestionStore } from "@/store/question.ts";

const useQuestion = useQuestionStore();
const types = useQuestion.getAnswerFormat.types;
const query = ref("");

const filteredTypes = computed(() =>
  query.value === ""
    ? types
    : types.filter((type: { value: string; label: string }) =>
        type.label
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);
</script>

<template>
  <div
    class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
  >
    <div class="textQuestion_regex_dropdown__hNwY7">
      <div class="textQuestion_title__nhwHB">Answer Format</div>
      <div
        id="downshift-606-menu"
        role="listbox"
        aria-labelledby="downshift-606-label"
        tabindex="-1"
        class="dropDownInput_main_wrapper__Nhc3q undefined"
      >
        <div>
          <Combobox v-model="useQuestion.getAnswerFormat.selected">
            <div class="relative mt-1">
              <div
                class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
              >
                <ComboboxInput
                  class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 outline-none"
                  :displayValue="(type) => type.label /* @ts-ignore */"
                  @change="query = $event.target.value"
                />
                <ComboboxButton
                  class="absolute inset-y-0 right-0 flex items-center pr-2"
                >
                  <ChevronUpDownIcon
                    class="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </ComboboxButton>
              </div>
              <TransitionRoot
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                @after-leave="query = ''"
              >
                <ComboboxOptions
                  class="absolute mt-1 max-h-80 z-10 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                >
                  <div
                    v-if="filteredTypes.length === 0 && query !== ''"
                    class="relative cursor-default select-none px-4 py-2 text-gray-700"
                  >
                    Nothing found.
                  </div>

                  <ComboboxOption
                    v-for="(type, index) in filteredTypes"
                    as="template"
                    :key="index"
                    :value="type"
                    v-slot="{ selected, active }"
                  >
                    <li
                      class="relative cursor-default select-none py-2 pl-10 pr-4"
                      :class="{
                        'bg-teal-600 text-white': active,
                        'text-gray-900': !active,
                      }"
                    >
                      <span
                        class="block truncate"
                        :class="{
                          'font-medium': selected,
                          'font-normal': !selected,
                        }"
                      >
                        {{ type.label }}
                      </span>
                      <span
                        v-if="selected"
                        class="absolute inset-y-0 left-0 flex items-center pl-3"
                        :class="{
                          'text-white': active,
                          'text-teal-600': !active,
                        }"
                      >
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ComboboxOption>
                </ComboboxOptions>
              </TransitionRoot>
            </div>
          </Combobox>
        </div>
      </div>
    </div>
    <component
      :is="{ ...useQuestion.getAnswerFormat.selected.toggle }"
    ></component>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
/*! CSS Used from: Embedded */
.dropDownInput_main_wrapper__Nhc3q {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 14px;
  outline: none;
  width: 100%;
}
.dropDownInput_main_wrapper__Nhc3q > div {
  width: 100%;
  position: relative;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_wrapper__XAy_y {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
  margin-top: 0.5rem;
  border: 0.063rem solid #bbbdc0;
  border-radius: 0.25rem;
  width: 100%;
  box-sizing: border-box;
  color: #3e434d;
  cursor: pointer;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_wrapper__XAy_y span {
  white-space: nowrap;
  padding: 0 0.25rem;
  border: none;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_wrapper__XAy_y input {
  display: none;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_wrapper__XAy_y:hover {
  border-color: #3b368e;
}
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_toggle_input_row_wrapper__1KFOE {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 0.875rem 0;
}
.sharedBuild_questions_content__brpUH
  .sharedBuild_build_content__A2KQg
  .sharedBuild_toggle_input_row_wrapper__1KFOE.sharedBuild_ltr__BELlV {
  direction: ltr;
}
.textQuestion_regex_dropdown__hNwY7 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.textQuestion_regex_dropdown__hNwY7 .textQuestion_title__nhwHB {
  margin-top: 0.5rem;
  font-weight: 700;
  width: 30%;
}
.textQuestion_number_input_wrapper__rsaFR {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 0.25rem;
}
.textQuestion_number_input_wrapper__rsaFR p {
  width: -moz-fit-content;
  width: fit-content;
  font-weight: 700;
  margin-left: 0.5rem;
}
.textQuestion_number_input_wrapper__rsaFR.textQuestion_ltr__E3pny p {
  margin-left: 0 !important;
  margin-right: 0.5rem;
}
.textQuestion_number_input_wrapper__rsaFR input {
  width: 6.25rem !important;
}
.numberInput_input_wrapper___GMei {
  display: flex;
  flex-direction: column;
}
.numberInput_input_wrapper___GMei .numberInput_input__a2e6l {
  outline: none;
  height: 1.563rem;
  margin-top: 0.25rem;
  padding: 0.188rem 0.5rem 0.25rem;
  border-radius: 0.25rem;
  border: 0.063rem solid #bbbdc0;
  background-color: #fff;
  width: 2.25rem;
  direction: ltr;
  padding-right: 0.25rem !important;
  color: #3e434d;
}
</style>
