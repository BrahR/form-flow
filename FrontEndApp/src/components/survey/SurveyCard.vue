<script setup lang="ts">
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";

defineProps<{
  survey: Survey
}>()

</script>

<template>
  <div class="mySurveyItem_card_view_survey__AFsFL">
    <router-link class="mySurveyItem_name_wrapper__FtsrP" :to="{ }"
           style="background-color: rgb(234, 235, 252); color: rgb(121, 73, 151);">
        <div>{{ survey.name }}</div>
    </router-link>
    <div class="mySurveyItem_details__S0THf">
      <div style="opacity: 1;">
        <div class="action-buttons">
          <div class="survey-action-buttons">Preview</div>
          <div class="survey-action-buttons">Results</div>
          <div class="survey-action-buttons">Charts</div>
          <div class="survey-action-buttons">Activate</div>
        </div>
        <div class="survey-card-information">
          <div class="mySurveyItem_detail_item__dsEGA">
            <div class="mySurveyItem_detail_title__oNnFR">Views</div>
            <div class="mySurveyItem_detail_value__Fio0G">0</div>
          </div>
          <div class="mySurveyItem_detail_item__dsEGA">
            <div class="mySurveyItem_detail_title__oNnFR">Answers</div>
            <div class="mySurveyItem_detail_value__Fio0G">0</div>
          </div>
          <div class="mySurveyItem_detail_item__dsEGA">
            <div class="mySurveyItem_detail_title__oNnFR mySurveyItem_inactive__GkX8M">
              <div class="mySurveyItem_activation__Dfafy">Inactive</div>
            </div>
          </div>
        </div>
      </div>
      <Menu as="div" class="mySurveyItem_detail_item__dsEGA">
        <div>
          <MenuButton
              class="relative flex items-center text-sm">
            <div class="moreDropDown_wrapper__3ZqgO">
              <div
                  class="moreDropDown_button__3GhWA mySurveyItem_more_dropdown_button__DZPmc moreDropDown_bordered__H7rK2"
                  id="downshift-30-toggle-button" aria-haspopup="listbox" aria-expanded="false"
                  aria-labelledby="downshift-30-label downshift-30-toggle-button">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h16v16H0z"></path>
                    <path
                        d="M8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM2 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                        stroke="#3E434D" fill="#3E434D" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                </svg>
              </div>
              <ul
                  class="moreDropDown_list__6nQ41 moreDropDown_top__wVKAf moreDropDown_not_show__HjTwn"
                  id="downshift-30-menu" role="listbox" aria-labelledby="downshift-30-label" tabindex="-1"></ul>
            </div>
          </MenuButton>
        </div>
        <transition enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <MenuItems
              class="absolute z-10 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              style="margin-top: 2rem"
          >
            <MenuItem key="Sign-out" v-slot="{ active }">
              <a href="" @click.prevent="console.log(1)"
                 :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Rename</a>
            </MenuItem>

            <MenuItem key="Sign-out" v-slot="{ active }">
              <a href="" @click.prevent="console.log(1)"
                 :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Move to another
                workspace</a>
            </MenuItem>
            <MenuItem key="Sign-out" v-slot="{ active }">
              <a href="" @click.prevent="console.log(1)"
                 :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Duplicate</a>
            </MenuItem>
            <MenuItem key="Sign-out" v-slot="{ active }">
              <a href="" @click.prevent="console.log(1)"
                 class="text-red-600"
                 :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Delete</a>
            </MenuItem>

          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<style scoped>

.mySurveyItem_card_view_survey__AFsFL {
  background-color: #fff;
  width: 18.25rem;
  height: 13.25rem;
  border-radius: 0.5rem;
  display: flex;
  box-sizing: border-box;
  box-shadow: 0 0.125rem 0.5rem -0.125rem rgba(0, 0, 0, .15);
}

.mySurveyItem_ltr__tZFi6 {
  border-left: unset;
  border-right: 1px solid #eef0f5;
  width: 18.25rem;
  height: 13.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-left: 1px solid #eef0f5;
  word-break: break-word;
  text-align: center;
}

.mySurveyItem_name_wrapper__FtsrP {
  border-radius: 0.5rem 0 0 0.5rem;
  border-left: unset;
  border-right: 1px solid #eef0f5;
  width: 64.6%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  border-left: 1px solid #eef0f5;
  word-break: break-word;
  text-align: center;
}

.mySurveyItem_name_wrapper__FtsrP div {
  overflow-wrap: anywhere;
  padding: 1.25rem;
  background-color: rgb(234, 235, 252);
  color: rgb(121, 73, 151);
}

.mySurveyItem_details__S0THf {
  width: 35.3%;
  height: 100%;
  border-radius: 0.5rem 0 0 0.5rem;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mySurveyItem_detail_item__dsEGA {
  display: flex;
  flex-direction: column;
  margin: 0.125rem 0.5rem 0.5rem 0.125rem;
  color: #6b7079;
  text-align: start;
}

.mySurveyItem_detail_item__dsEGA:last-child {
  margin-bottom: 0;
}

.mySurveyItem_detail_title__oNnFR {
  font-size: 12px;
  color: #6b7079;
}

.mySurveyItem_detail_value__Fio0G {
  font-weight: 700;
  color: #3e434d;
  line-height: 1rem;

}

.mySurveyItem_inactive__GkX8M {
  color: #e3324f;
  display: flex;
  flex-direction: row;
}

.survey-action-buttons {
  color: #6b7079;
  height: calc(180px / 5);
  display: flex;
  justify-content: center;
  align-items: center;

}

.survey-action-buttons:hover {
  background-color: #f0f2f5;
  border-radius: 0.25rem;

}

.moreDropDown_wrapper__3ZqgO {
  position: relative;
  color: #6b7079;
}

.moreDropDown_button__3GhWA {
  border: 0.0625rem solid #d8dbe0;
  background-color: #fff;
  width: 2rem;
  min-height: 1.5rem;
  height: calc(100% - 0.125rem);
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.action-buttons {
  opacity: 0;
  display: none;
  transition: 0.5s ease-in-out;
}

.survey-card-information {
  transition: 0.5s ease-in-out;
}

.mySurveyItem_details__S0THf:hover .action-buttons {
  cursor: pointer;
  opacity: 1;
  display: unset;
}

.mySurveyItem_details__S0THf:hover .survey-card-information {
  opacity: 0;
  display: none;
}

</style>
