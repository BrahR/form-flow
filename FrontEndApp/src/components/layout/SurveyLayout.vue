<script setup lang="ts">
import UserDropdown from "@/components/UserDropdown.vue";
import UpdateSurveyForm from "@/components/survey/UpdateSurveyForm.vue";

import { ref } from "vue"

const isUpdateSurveyModalOpen = ref(false)
const openUpdateSurvey = async () => {
  isUpdateSurveyModalOpen.value = true
}
const closeUpdateSurvey = () => {
  isUpdateSurveyModalOpen.value = false
}

const navLinks = [
  {
    text: "Create",
    name: "Survey.Build",
  },
  {
    text: "Design",
    name: "Survey.Design",
  },
  {
    text: "Settings",
    name: "Survey.Settings",
  },
  {
    text: "Share",
    name: "Survey.Share",
  },
  {
    text: "Results",
    name: "Survey.Results",
  },
]
</script>

<template>
  <div class="surveyLayout_survey_layout_background__NQ7XF">
    <main class="surveyLayout_survey_layout__dvLUs surveyLayout_ltr__gKavG surveyLayout_english__Q6s_6">
      <div class="surveyNavbar_wrapper__sDoyH surveyNavbar_ltr__Z0ZPQ">
        <div class="surveyNavbar_survey_info_wrapper__t5fNn surveyNavbar_ltr__Z0ZPQ">
          <div class="surveyNavbar_back_icon__EzM4s" href="/n/">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0H48V48H0z"
                      transform="translate(-304.000000, -100.000000) translate(0.000000, 96.000000) translate(304.000000, 4.000000)"></path>
                <path stroke="#3E434D" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 24.5L33 24.5M25 16L33 24.5 25 33"
                      transform="translate(-304.000000, -100.000000) translate(0.000000, 96.000000) translate(304.000000, 4.000000)"></path>
              </g>
            </svg>
          </div>
          <div class="surveyNavbar_survey_info__UXpg3">
            <router-link v-slot="{ navigate }" custom :to="{ name: 'Dashboard' }">
              <div class="surveyNavbar_folder_name__rrU8k" @click="navigate">My workspace</div>
            </router-link>
            <span class="surveyNavbar_seperator__N_q4E"> / </span>
            <div class="surveyNavbar_survey_name__Vlkqx" @click="openUpdateSurvey">Nam corporis quae vo</div>
          </div>
        </div>
        <div class="surveyNavbar_desktop_phases__U9fPD">
          <div class="surveyNavbar_phases_wrapper__jRKBG surveyNavbar_ltr__Z0ZPQ">
            <div
              v-for="(nav, i) in navLinks" :key="i"
              class=" surveyNavbar_phase__dogY0"
              :class="{ 'surveyNavbar_active__RsZZe': nav.name == $route.name }"
            >
              <div>
                  <router-link v-slot="{ navigate }" custom :to="{ name: nav.name }">
                    <div @click="navigate">{{ nav.text }}</div>
                  </router-link>
                <div v-if="nav.name == $route.name" class="surveyNavbar_active_line__176cX"></div>
              </div>
              <span
                v-if="!(navLinks.length - 1 == i)"
                class="surveyNavbar_seperator_icon__u0F57"
                :class="{ 'surveyNavbar_active__RsZZe': nav.name == $route.name}"
              >
                <svg width="8" height="8" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h8v8H0z"></path>
                    <path stroke="#3B368E" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"
                          d="m5.5 7-3-3 3-3"></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="surveyNavbar_buttons_wrapper__FjtKQ surveyNavbar_ltr__Z0ZPQ">
          <div class="surveyNavbar_button__iMgk2 surveyNavbar_preview__WxOVd" data-tooltip-id="preview">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <path d="M3 12s3.273-7 9-7 9 7 9 7-3.273 7-9 7-9-7-9-7z" stroke="#3E434D" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"></path>
                <ellipse fill="#3E434D" cx="12" cy="12" rx="2.455" ry="3.5"></ellipse>
              </g>
            </svg>
          </div>
          <div class="surveyNavbar_button__iMgk2 surveyNavbar_survey_activation__odSFw">
            <div class="surveyNavbar_survey_deactive__0f0hz">Inactive</div>
          </div>
          <div class="surveyNavbar_divider__TQq57"></div>
          <UserDropdown style="margin-left: 0.5rem"/>
        </div>
      </div>
      <div class="surveyNavbar_second_row__U7Brq">
        <div class="surveyNavbar_phases_wrapper__jRKBG surveyNavbar_ltr__Z0ZPQ">
          <div
            v-for="(nav, i) in navLinks" :key="i"
            class=" surveyNavbar_phase__dogY0"
            :class="{ 'surveyNavbar_active__RsZZe': nav.name == $route.name }"
          >
            <div>
              <router-link v-slot="{ navigate }" custom :to="{ name: nav.name }">
                <div @click="navigate">{{ nav.text }}</div>
              </router-link>
              <div v-if="nav.name == $route.name" class="surveyNavbar_active_line__176cX"></div>
            </div>
            <span
              v-if="!(navLinks.length - 1 == i)"
              class="surveyNavbar_seperator_icon__u0F57"
              :class="{ 'surveyNavbar_active__RsZZe': nav.name == $route.name}"
            >
                <svg width="8" height="8" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h8v8H0z"></path>
                    <path stroke="#3B368E" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"
                          d="m5.5 7-3-3 3-3"></path>
                  </g>
                </svg>
              </span>
          </div>

        </div>
      </div>
      <router-view :key="$route.path"></router-view>
    </main>
  </div>

  <UpdateSurveyForm
    :is-open="isUpdateSurveyModalOpen"
    @open="openUpdateSurvey"
    @close="closeUpdateSurvey"
  />
</template>

<style scoped>
.surveyLayout_survey_layout__dvLUs {
  position: relative;
  z-index: 0;
  height: inherit;
  font-family: Vazirmatn;
  font-size: 14px!important;
}

.surveyLayout_survey_layout_background__NQ7XF {
  position: fixed;
  height: calc(100 * 1vh);
  width: 100%;
  left: 0;
  background-color: #eef0f5;
}

.surveyNavbar_wrapper__sDoyH {
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 .375rem;
  box-shadow: inset 0 -.0625rem 0 0 #f0f2f5;
}

.surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn {
  width: 33%;
  padding: .125rem;
  display: flex;
  align-items: center;
}

.surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn .surveyNavbar_survey_info__UXpg3 {
  display: flex;
  width: 100%;
  margin: 0 .25rem;
  padding: 0 .25rem;
  align-items: center;
}

.surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn .surveyNavbar_survey_info__UXpg3 .surveyNavbar_folder_name__rrU8k {
  cursor: pointer;
  color: #6b7079;
  margin-left: .125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 10rem;
  border-radius: .25rem;
  padding-right: .125rem;
  padding-left: .125rem;
  height: 2rem;
  display: flex;
  align-items: center;
}

.surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn .surveyNavbar_survey_info__UXpg3 .surveyNavbar_folder_name__rrU8k:hover {
  background-color: #f0f2f5;
}

.surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn .surveyNavbar_survey_info__UXpg3 .surveyNavbar_seperator__N_q4E {
  color: #6b7079;
  margin-left: .25rem;
  margin-right: .25rem;
}

.surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn .surveyNavbar_survey_info__UXpg3 .surveyNavbar_survey_name__Vlkqx {
  border-radius: .25rem;
  padding: 0 .125rem;
  height: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 10rem;
}

.surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn .surveyNavbar_survey_info__UXpg3 .surveyNavbar_survey_name__Vlkqx:hover {
  background-color: #f0f2f5;
}

.surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn .surveyNavbar_back_icon__EzM4s {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .25rem;
}

.surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn .surveyNavbar_back_icon__EzM4s svg {
  height: 2rem;
  width: 2rem;
  color: #3e434d;
}

.surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn .surveyNavbar_back_icon__EzM4s:hover {
  cursor: pointer;
  background-color: #f0f2f5;
}

.surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn.surveyNavbar_ltr__Z0ZPQ .surveyNavbar_back_icon__EzM4s {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
}

.surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn.surveyNavbar_ltr__Z0ZPQ .surveyNavbar_survey_info__UXpg3 {
  direction: ltr;
}

.surveyNavbar_wrapper__sDoyH .surveyNavbar_desktop_phases__U9fPD {
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.surveyNavbar_help_dropdown_wrapper__T39gx {
  padding: 0;
}

.surveyNavbar_buttons_wrapper__FjtKQ {
  width: 33%;
  display: flex;
  justify-content: flex-end;
}

.surveyNavbar_buttons_wrapper__FjtKQ .surveyNavbar_divider__TQq57 {
  width: .0625rem;
  height: 2rem;
  background-color: #d8dbe0;
  margin: 0 .375rem;
}

.surveyNavbar_buttons_wrapper__FjtKQ .surveyNavbar_button__iMgk2 {
  height: 2rem;
  width: 2rem;
  text-align: center;
  border-radius: .25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  margin: 0 .125rem;
}

.surveyNavbar_buttons_wrapper__FjtKQ .surveyNavbar_button__iMgk2.surveyNavbar_icon__uVmNM {
  flex-shrink: 0;
}

.surveyNavbar_buttons_wrapper__FjtKQ .surveyNavbar_button__iMgk2:hover {
  cursor: pointer;
  background-color: #f0f2f5;
}

.surveyNavbar_buttons_wrapper__FjtKQ .surveyNavbar_survey_activation__odSFw {
  width: auto;
  padding: 0 .5rem;
}

.surveyNavbar_buttons_wrapper__FjtKQ .surveyNavbar_survey_activation__odSFw .surveyNavbar_survey_deactive__0f0hz {
  border-bottom: .125rem solid #e3324f;
}

.surveyNavbar_buttons_wrapper__FjtKQ .surveyNavbar_upgrade__yYDhY {
  background-color: #ecc572;
  color: #3e434d;
  width: auto;
  padding: 0 .5rem;
  margin: 0 .375rem 0 .125rem;
}

.surveyNavbar_buttons_wrapper__FjtKQ .surveyNavbar_upgrade__yYDhY:hover {
  background-color: #ecc572;
}

.surveyNavbar_buttons_wrapper__FjtKQ.surveyNavbar_ltr__Z0ZPQ .surveyNavbar_upgrade__yYDhY {
  margin: 0 .125rem 0 .375rem;
}

.surveyNavbar_buttons_wrapper__FjtKQ .surveyNavbar_help__w2X_4, .surveyNavbar_buttons_wrapper__FjtKQ .surveyNavbar_preview__WxOVd {
  flex-shrink: 0;
  color: #3e434d;
  background-color: transparent;
}

.surveyNavbar_buttons_wrapper__FjtKQ .surveyNavbar_preview__WxOVd svg g {
  fill: transparent;
}

.surveyNavbar_phases_wrapper__jRKBG {
  display: flex;
  height: 100%;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3e434d;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 > div {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 > div > div {
  padding: .25rem;
  border-radius: .125rem;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 > div > div:hover {
  cursor: pointer;
  background-color: #f0f2f5;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 .surveyNavbar_active_line__176cX {
  position: absolute;
  bottom: 0;
  padding: 0;
  width: 100%;
  height: .125rem;
  border-radius: 5rem;
  background-color: #3b368e;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0.surveyNavbar_active__RsZZe {
  color: #3b368e;
  font-weight: 700;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 .surveyNavbar_seperator_icon__u0F57 {
  margin: 0 .25rem;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 .surveyNavbar_seperator_icon__u0F57 svg path:last-child {
  stroke: #6b7079;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 .surveyNavbar_seperator_icon__u0F57.surveyNavbar_active__RsZZe svg path:last-child {
  stroke: #3b368e;
}

.surveyNavbar_phases_wrapper__jRKBG.surveyNavbar_ltr__Z0ZPQ .surveyNavbar_seperator_icon__u0F57 {
  padding-top: 0;
  padding-bottom: .125rem;
  transform: rotate(180deg);
}

.surveyNavbar_phases_wrapper__jRKBG.surveyNavbar_ltr__Z0ZPQ .surveyNavbar_phase__dogY0 .surveyNavbar_seperator_icon__u0F57 {
  right: unset;
  left: calc(100% - .25rem);
}

@media (max-width: 900px) {
  .surveyNavbar_wrapper__sDoyH {
    padding: 0 .5rem;
  }

  .surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn {
    width: 75%;
  }

  .surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn .surveyNavbar_survey_info__UXpg3 .surveyNavbar_folder_name__rrU8k, .surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn .surveyNavbar_survey_info__UXpg3 .surveyNavbar_seperator__N_q4E {
    display: none;
  }

  .surveyNavbar_wrapper__sDoyH .surveyNavbar_survey_info_wrapper__t5fNn .surveyNavbar_survey_info__UXpg3 .surveyNavbar_survey_name__Vlkqx {
    max-width: calc(100% - 7.5rem);
  }

  .surveyNavbar_wrapper__sDoyH .surveyNavbar_desktop_phases__U9fPD {
    display: none;
  }

  .surveyNavbar_wrapper__sDoyH .surveyNavbar_buttons_wrapper__FjtKQ {
    width: 25%;
  }

  .surveyNavbar_wrapper__sDoyH .surveyNavbar_buttons_wrapper__FjtKQ .surveyNavbar_account__ELAUQ, .surveyNavbar_wrapper__sDoyH .surveyNavbar_buttons_wrapper__FjtKQ .surveyNavbar_divider__TQq57, .surveyNavbar_wrapper__sDoyH .surveyNavbar_buttons_wrapper__FjtKQ .surveyNavbar_help__w2X_4 {
    display: none;
  }
}

.surveyNavbar_second_row__U7Brq {
  display: none;
}

.surveyNavbar_phases_wrapper__jRKBG {
  display: flex;
  height: 100%;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3e434d;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 > div {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 > div > div {
  padding: .25rem;
  border-radius: .125rem;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 > div > div:hover {
  cursor: pointer;
  background-color: #f0f2f5;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 .surveyNavbar_active_line__176cX {
  position: absolute;
  bottom: 0;
  padding: 0;
  width: 100%;
  height: .125rem;
  border-radius: 5rem;
  background-color: #3b368e;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0.surveyNavbar_active__RsZZe {
  color: #3b368e;
  font-weight: 700;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 .surveyNavbar_seperator_icon__u0F57 {
  margin: 0 .25rem;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 .surveyNavbar_seperator_icon__u0F57 svg path:last-child {
  stroke: #6b7079;
}

.surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 .surveyNavbar_seperator_icon__u0F57.surveyNavbar_active__RsZZe svg path:last-child {
  stroke: #3b368e;
}

.surveyNavbar_phases_wrapper__jRKBG.surveyNavbar_ltr__Z0ZPQ .surveyNavbar_seperator_icon__u0F57 {
  padding-top: 0;
  padding-bottom: .125rem;
  transform: rotate(180deg);
}

.surveyNavbar_phases_wrapper__jRKBG.surveyNavbar_ltr__Z0ZPQ .surveyNavbar_phase__dogY0 .surveyNavbar_seperator_icon__u0F57 {
  right: unset;
  left: calc(100% - .25rem);
}

@media (max-width: 900px) {
  .surveyNavbar_second_row__U7Brq {
    display: flex;
    justify-content: center;
    height: 3rem;
    background-color: #fff;
    box-shadow: inset 0 -.0625rem 0 0 #f0f2f5;
  }

  .surveyNavbar_second_row__U7Brq .surveyNavbar_phases_wrapper__jRKBG .surveyNavbar_phase__dogY0 {
    min-width: 3rem;
  }
}
</style>
