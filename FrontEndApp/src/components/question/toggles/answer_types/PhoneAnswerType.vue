<script setup lang="ts">
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import { ref, computed } from "vue";
import { useQuestionStore } from "@/store/question";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const useQuestion = useQuestionStore();
const selected = useQuestion.getAnswerFormat.selected;
const formats = selected.rules.formats;
const query = ref("");

const filteredFormats = computed(() =>
  query.value === ""
    ? formats
    : formats.filter((format: { pattern: string; tokens: string[] }) =>
        format.pattern
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);
</script>

<template>
  <div class="textQuestion_text_inputs__Hciae">
    <div class="textInput_input_wrapper__bZOVy">
      <div class="textInput_input_title__ssXRr undefined">Example</div>
      <Combobox v-model="selected.rules.selectedFormat">
        <div class="relative mt-1">
          <div
            class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
          >
            <ComboboxInput
              class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 outline-none"
              :displayValue="(format) => format.pattern /* @ts-ignore */"
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
                v-if="filteredFormats.length === 0 && query !== ''"
                class="relative cursor-default select-none px-4 py-2 text-gray-700"
              >
                Nothing found.
              </div>

              <ComboboxOption
                v-for="(format, index) in filteredFormats"
                as="template"
                :key="index"
                :value="format"
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
                    {{ format.pattern }}
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
      <!-- <input
        class="textInput_input__YzEWk false undefined false"
        type="text"
        value="447537155495"
      /> -->
    </div>
  </div>
  <div class="textQuestion_text_inputs__Hciae">
    <div class="textInput_input_wrapper__bZOVy">
      <div class="textInput_input_title__ssXRr undefined">
        Message to display when answer does not pass RegEx
      </div>
      <input
        class="textInput_input__YzEWk false undefined false"
        type="text"
        :value="selected.errorMessage"
      />
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/2a2e4efde05c354a.css */
.textInput_input_wrapper__bZOVy {
  display: flex;
  flex-direction: column;
}
.textInput_input_wrapper__bZOVy .textInput_input_title__ssXRr {
  height: -moz-fit-content;
  height: fit-content;
  color: #3e434d;
  margin-bottom: 0.6rem;
}
.textInput_input_wrapper__bZOVy .textInput_input__YzEWk {
  font: unset;
  min-width: inherit;
  outline: none;
  height: 1.563rem;
  padding: 0.188rem 0.5rem 0.25rem;
  border-radius: 0.25rem;
  border: 0.063rem solid #bbbdc0;
  background-color: #fff;
  color: #3e434d;
}
.textInput_input_wrapper__bZOVy .textInput_input__YzEWk:hover {
  border-color: #3b368e;
}
.textInput_input_wrapper__bZOVy .textInput_input__YzEWk:focus {
  box-shadow: 0 0 0 2px rgba(59, 54, 142, 0.15);
}
.textQuestion_text_inputs__Hciae {
  width: 100%;
  margin-bottom: 0.75rem;
}
</style>
