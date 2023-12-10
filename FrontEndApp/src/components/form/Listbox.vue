<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { ref } from "vue";

defineProps<{
  items: Object[];
  selectedItem: Object;
}>();
</script>

<template>
  <Listbox
    class="group_group_question_option_wrapper__P2vy4 z-10"
    v-model="selectedItem"
  >
    <div>
      <div class="dropDownInput_main_wrapper__Nhc3q">
        <div>
          <ListboxButton class="dropDownInput_wrapper__XAy_y">
            <span class="text-start">{{ selectedPerson.name }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd">
                <g>
                  <g>
                    <g>
                      <path
                        d="M0 0H24V24H0z"
                        transform="translate(-651.000000, -290.000000) translate(647.000000, 286.000000) translate(4.000000, 4.000000)"
                      ></path>
                      <path
                        stroke="#3B368E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 10L12 16 18 10"
                        transform="translate(-651.000000, -290.000000) translate(647.000000, 286.000000) translate(4.000000, 4.000000)"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions class="dropDownInput_ul__DPvAW" as="ul">
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="item in items"
                :key="item.name"
                :value="item"
                as="template"
              >
                <li
                  :class="[
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ item.name }}</span
                  >

                  <svg
                    v-if="selected"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <g>
                        <g>
                          <g>
                            <path
                              d="M0 0H16V16H0z"
                              transform="translate(-78.000000, -514.000000) translate(70.000000, 506.000000) translate(8.000000, 8.000000)"
                            ></path>
                            <path
                              stroke="#3B368E"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 9.2L5.846 11 12 5"
                              transform="translate(-78.000000, -514.000000) translate(70.000000, 506.000000) translate(8.000000, 8.000000)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </div>
    </div>
  </Listbox>
  <!-- <div class="group_group_question_option_wrapper__P2vy4">
    <div
      id="downshift-1082-menu"
      role="listbox"
      aria-labelledby="downshift-1082-label"
      tabindex="-1"
      class="dropDownInput_main_wrapper__Nhc3q undefined"
    >
      <div>
        <div
          class="dropDownInput_wrapper__XAy_y undefined"
          :class="{
            dropDownInput_wrapper_open_ul__xpG2L: false,
          }"
          @click="isDropdownOpen = false"
        >
          <span>Randomize part of questions</span>
          <input name="" value="true" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <g>
                <g>
                  <g>
                    <path
                      d="M0 0H24V24H0z"
                      transform="translate(-651.000000, -290.000000) translate(647.000000, 286.000000) translate(4.000000, 4.000000)"
                    ></path>
                    <path
                      stroke="#3B368E"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 10L12 16 18 10"
                      transform="translate(-651.000000, -290.000000) translate(647.000000, 286.000000) translate(4.000000, 4.000000)"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <ul
          id="downshift-1082-menu"
          role="listbox"
          aria-labelledby="downshift-1082-label"
          tabindex="-1"
          class="dropDownInput_ul__DPvAW closed-dropdown"
        >
          <li
            class=""
            role="option"
            aria-selected="false"
            id="downshift-1082-item-0"
          >
            <span>Randomize all questions</span>
          </li>
          <li
            class=""
            role="option"
            aria-selected="false"
            id="downshift-1082-item-1"
          >
            <span>Randomize part of questions</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g fill="none" fill-rule="evenodd">
                <g>
                  <g>
                    <g>
                      <path
                        d="M0 0H16V16H0z"
                        transform="translate(-78.000000, -514.000000) translate(70.000000, 506.000000) translate(8.000000, 8.000000)"
                      ></path>
                      <path
                        stroke="#3B368E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 9.2L5.846 11 12 5"
                        transform="translate(-78.000000, -514.000000) translate(70.000000, 506.000000) translate(8.000000, 8.000000)"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </div> -->
</template>

<style scoped>
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
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_wrapper_open_ul__xpG2L {
  border-color: rgba(59, 54, 142, 0.15) !important;
  box-shadow: 0 0 0 2px rgba(59, 54, 142, 0.15) !important;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_ul__DPvAW {
  max-height: 12rem;
  overflow-y: auto;
  list-style-type: none;
  margin-top: 0.0625rem;
  padding: 0.5rem;
  border: 0.00625rem solid #d8dbe0;
  box-shadow: 0 2px 4px 0 rgba(151, 160, 179, 0.5);
  border-radius: 0.25rem;
  position: absolute;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
}

.dropDownInput_main_wrapper__Nhc3q .dropDownInput_ul__DPvAW.closed-dropdown {
  display: none;
}

.dropDownInput_main_wrapper__Nhc3q .dropDownInput_ul__DPvAW::-webkit-scrollbar {
  width: 1.5rem;
}
.dropDownInput_main_wrapper__Nhc3q
  .dropDownInput_ul__DPvAW::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem 0.5rem transparent;
}
.dropDownInput_main_wrapper__Nhc3q
  .dropDownInput_ul__DPvAW::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem 0.5rem #f0f2f5;
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  min-height: 2rem;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_ul__DPvAW li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
  color: #3e434d;
  min-height: 1.5rem;
  align-items: center;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_ul__DPvAW li svg {
  margin-top: 0.25rem;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_ul__DPvAW li span {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dropDownInput_main_wrapper__Nhc3q .dropDownInput_ul__DPvAW:focus {
  outline: none;
}
</style>
