<script setup lang="ts">
import { useWorkspaceStore } from "@/stores/workspace.ts";
import { useSurveyStore } from "@/stores/survey.ts";
import UserDropdown from "@/components/UserDropdown.vue";
import UpdateSurvey from "@/views/survey/components/build/UpdateSurvey.vue";

const useWorkspace = useWorkspaceStore();
const useSurvey = useSurveyStore();
const navLinks = [
  {
    title: "Create",
    name: "Survey.Build",
  },
  {
    title: "Design",
    name: "Survey.Design",
  },
  {
    title: "Settings",
    name: "Survey.Settings",
  },
  {
    title: "Share",
    name: "Survey.Share",
  },
  {
    title: "Results",
    name: "Survey.Results",
  },
];

useSurvey.hydrate();
</script>

<template>
  <div class="surveyLayout_survey_layout_background">
    <main
      class="surveyLayout_survey_layout surveyLayout_ltr surveyLayout_english"
    >
      <div class="surveyNavbar_wrapper surveyNavbar_ltr">
        <div class="surveyNavbar_survey_info_wrapper surveyNavbar_ltr">
          <router-link v-slot="{ navigate }" custom :to="{ name: 'Dashboard' }">
            <div class="surveyNavbar_back_icon" @click="navigate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M0 0H48V48H0z"
                    transform="translate(-304.000000, -100.000000) translate(0.000000, 96.000000) translate(304.000000, 4.000000)"
                  ></path>
                  <path
                    stroke="#3E434D"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 24.5L33 24.5M25 16L33 24.5 25 33"
                    transform="translate(-304.000000, -100.000000) translate(0.000000, 96.000000) translate(304.000000, 4.000000)"
                  ></path>
                </g>
              </svg>
            </div>
          </router-link>
          <div class="surveyNavbar_survey_info">
            <router-link
              v-slot="{ navigate }"
              custom
              :to="{ name: 'Dashboard' }"
            >
              <div
                class="surveyNavbar_folder_name"
                :class="{
                  'skeleton w-20':
                    useWorkspace.hydrating || !useWorkspace.selected,
                }"
                @click="navigate"
              >
                {{ useWorkspace.selected?.name }}
              </div>
            </router-link>
            <span class="surveyNavbar_separator">/</span>
            <div
              class="surveyNavbar_survey_name"
              :class="{ 'skeleton w-20': useSurvey.hydrating }"
              @click="useSurvey.open('update')"
            >
              {{ useSurvey.selected?.name }}
            </div>
          </div>
        </div>
        <div class="surveyNavbar_desktop_phases">
          <div class="surveyNavbar_phases_wrapper surveyNavbar_ltr">
            <div
              v-for="(nav, i) in navLinks"
              :key="i"
              class="surveyNavbar_phase"
              :class="{ surveyNavbar_active: nav.name == $route.name }"
            >
              <div>
                <router-link
                  v-slot="{ navigate }"
                  custom
                  :to="{ name: nav.name }"
                >
                  <div @click="navigate">{{ nav.title }}</div>
                </router-link>
                <div
                  v-if="nav.name == $route.name"
                  class="surveyNavbar_active_line"
                ></div>
              </div>
              <span
                v-if="!(navLinks.length - 1 == i)"
                class="surveyNavbar_seperator_icon"
                :class="{ surveyNavbar_active: nav.name == $route.name }"
              >
                <svg width="8" height="8" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h8v8H0z"></path>
                    <path
                      stroke="#3B368E"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m5.5 7-3-3 3-3"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="surveyNavbar_buttons_wrapper surveyNavbar_ltr">
          <router-link
            v-if="useSurvey.selected"
            v-slot="{ navigate }"
            custom
            :to="{
              name: 'Survey.Viewer',
              params: { surveyLink: useSurvey.selected.link },
            }"
          >
            <div
              class="surveyNavbar_button surveyNavbar_preview"
              @click="navigate"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"></path>
                  <path
                    d="M3 12s3.273-7 9-7 9 7 9 7-3.273 7-9 7-9-7-9-7z"
                    stroke="#3E434D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <ellipse
                    fill="#3E434D"
                    cx="12"
                    cy="12"
                    rx="2.455"
                    ry="3.5"
                  ></ellipse>
                </g>
              </svg>
            </div>
          </router-link>
          <div class="surveyNavbar_button surveyNavbar_survey_activation">
            <div class="surveyNavbar_survey_deactive">Inactive</div>
          </div>
          <div class="surveyNavbar_divider"></div>
          <UserDropdown style="margin-left: 0.5rem" />
        </div>
      </div>
      <div class="surveyNavbar_second_row">
        <div class="surveyNavbar_phases_wrapper surveyNavbar_ltr">
          <div
            v-for="(nav, i) in navLinks"
            :key="i"
            class="surveyNavbar_phase"
            :class="{ surveyNavbar_active: nav.name == $route.name }"
          >
            <div>
              <router-link
                v-slot="{ navigate }"
                custom
                :to="{ name: nav.name }"
              >
                <div @click="navigate">{{ nav.title }}</div>
              </router-link>
              <div
                v-if="nav.name == $route.name"
                class="surveyNavbar_active_line"
              ></div>
            </div>
            <span
              v-if="!(navLinks.length - 1 == i)"
              class="surveyNavbar_seperator_icon"
              :class="{ surveyNavbar_active: nav.name == $route.name }"
            >
              <svg width="8" height="8" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h8v8H0z"></path>
                  <path
                    stroke="#3B368E"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m5.5 7-3-3 3-3"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <router-view :key="$route.path"></router-view>
    </main>
  </div>

  <UpdateSurvey v-if="useSurvey.selected" />
</template>

<style scoped>
.surveyLayout_survey_layout {
  position: relative;
  z-index: 0;
  height: inherit;
  font-family: Vazirmatn, sans-serif;
  font-size: 14px !important;
}

.surveyLayout_survey_layout_background {
  position: fixed;
  height: calc(100 * 1vh);
  width: 100%;
  left: 0;
  background-color: #eef0f5;
}

.surveyNavbar_wrapper {
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 0.375rem;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  z-index: 5;
  position: relative;
}

.surveyNavbar_wrapper .surveyNavbar_survey_info_wrapper {
  width: 33%;
  padding: 0.125rem;
  display: flex;
  align-items: center;
}

.surveyNavbar_wrapper
  .surveyNavbar_survey_info_wrapper
  .surveyNavbar_survey_info {
  display: flex;
  width: 100%;
  margin: 0 0.25rem;
  padding: 0 0.25rem;
  align-items: center;
}

.surveyNavbar_wrapper
  .surveyNavbar_survey_info_wrapper
  .surveyNavbar_survey_info
  .surveyNavbar_folder_name {
  cursor: pointer;
  color: #6b7079;
  margin-left: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 10rem;
  border-radius: 0.25rem;
  padding-right: 0.125rem;
  padding-left: 0.125rem;
  height: 2rem;
  display: flex;
  align-items: center;
}

.surveyNavbar_wrapper
  .surveyNavbar_survey_info_wrapper
  .surveyNavbar_survey_info
  .surveyNavbar_folder_name:hover {
  background-color: #f0f2f5;
}

.surveyNavbar_wrapper
  .surveyNavbar_survey_info_wrapper
  .surveyNavbar_survey_info
  .surveyNavbar_separator {
  color: #6b7079;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.surveyNavbar_wrapper
  .surveyNavbar_survey_info_wrapper
  .surveyNavbar_survey_info
  .surveyNavbar_survey_name {
  border-radius: 0.25rem;
  padding: 0 0.125rem;
  height: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 10rem;
}

.surveyNavbar_wrapper
  .surveyNavbar_survey_info_wrapper
  .surveyNavbar_survey_info
  .surveyNavbar_survey_name:hover {
  background-color: #f0f2f5;
}

.surveyNavbar_wrapper
  .surveyNavbar_survey_info_wrapper
  .surveyNavbar_back_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
}

.surveyNavbar_wrapper
  .surveyNavbar_survey_info_wrapper
  .surveyNavbar_back_icon
  svg {
  height: 2rem;
  width: 2rem;
  color: #3e434d;
}

.surveyNavbar_wrapper
  .surveyNavbar_survey_info_wrapper
  .surveyNavbar_back_icon:hover {
  cursor: pointer;
  background-color: #f0f2f5;
}

.surveyNavbar_wrapper
  .surveyNavbar_survey_info_wrapper.surveyNavbar_ltr
  .surveyNavbar_back_icon {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
}

.surveyNavbar_wrapper
  .surveyNavbar_survey_info_wrapper.surveyNavbar_ltr
  .surveyNavbar_survey_info {
  direction: ltr;
}

.surveyNavbar_wrapper .surveyNavbar_desktop_phases {
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.surveyNavbar_help_dropdown_wrapper {
  padding: 0;
}

.surveyNavbar_buttons_wrapper {
  width: 33%;
  display: flex;
  justify-content: flex-end;
}

.surveyNavbar_buttons_wrapper .surveyNavbar_divider {
  width: 0.0625rem;
  height: 2rem;
  background-color: #d8dbe0;
  margin: 0 0.375rem;
}

.surveyNavbar_buttons_wrapper .surveyNavbar_button {
  height: 2rem;
  width: 2rem;
  text-align: center;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  margin: 0 0.125rem;
}

.surveyNavbar_buttons_wrapper .surveyNavbar_button.surveyNavbar_icon {
  flex-shrink: 0;
}

.surveyNavbar_buttons_wrapper .surveyNavbar_button:hover {
  cursor: pointer;
  background-color: #f0f2f5;
}

.surveyNavbar_buttons_wrapper .surveyNavbar_survey_activation {
  width: auto;
  padding: 0 0.5rem;
}

.surveyNavbar_buttons_wrapper
  .surveyNavbar_survey_activation
  .surveyNavbar_survey_deactive {
  border-bottom: 0.125rem solid #e3324f;
}

.surveyNavbar_buttons_wrapper .surveyNavbar_upgrade {
  background-color: #ecc572;
  color: #3e434d;
  width: auto;
  padding: 0 0.5rem;
  margin: 0 0.375rem 0 0.125rem;
}

.surveyNavbar_buttons_wrapper .surveyNavbar_upgrade:hover {
  background-color: #ecc572;
}

.surveyNavbar_buttons_wrapper.surveyNavbar_ltr .surveyNavbar_upgrade {
  margin: 0 0.125rem 0 0.375rem;
}

.surveyNavbar_buttons_wrapper .surveyNavbar_help,
.surveyNavbar_buttons_wrapper .surveyNavbar_preview {
  flex-shrink: 0;
  color: #3e434d;
  background-color: transparent;
}

.surveyNavbar_buttons_wrapper .surveyNavbar_preview svg g {
  fill: transparent;
}

.surveyNavbar_phases_wrapper {
  display: flex;
  height: 100%;
}

.surveyNavbar_phases_wrapper .surveyNavbar_phase {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3e434d;
}

.surveyNavbar_phases_wrapper .surveyNavbar_phase > div {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.surveyNavbar_phases_wrapper .surveyNavbar_phase > div > div {
  padding: 0.25rem;
  border-radius: 0.125rem;
}

.surveyNavbar_phases_wrapper .surveyNavbar_phase > div > div:hover {
  cursor: pointer;
  background-color: #f0f2f5;
}

.surveyNavbar_phases_wrapper .surveyNavbar_phase .surveyNavbar_active_line {
  position: absolute;
  bottom: 0;
  padding: 0;
  width: 100%;
  height: 0.125rem;
  border-radius: 5rem;
  background-color: #3b368e;
}

.surveyNavbar_phases_wrapper .surveyNavbar_phase.surveyNavbar_active {
  color: #3b368e;
  font-weight: 700;
}

.surveyNavbar_phases_wrapper .surveyNavbar_phase .surveyNavbar_seperator_icon {
  margin: 0 0.25rem;
}

.surveyNavbar_phases_wrapper
  .surveyNavbar_phase
  .surveyNavbar_seperator_icon
  svg
  path:last-child {
  stroke: #6b7079;
}

.surveyNavbar_phases_wrapper
  .surveyNavbar_phase
  .surveyNavbar_seperator_icon.surveyNavbar_active
  svg
  path:last-child {
  stroke: #3b368e;
}

.surveyNavbar_phases_wrapper.surveyNavbar_ltr .surveyNavbar_seperator_icon {
  padding-top: 0;
  padding-bottom: 0.125rem;
  transform: rotate(180deg);
}

.surveyNavbar_phases_wrapper.surveyNavbar_ltr
  .surveyNavbar_phase
  .surveyNavbar_seperator_icon {
  right: unset;
  left: calc(100% - 0.25rem);
}

@media (max-width: 900px) {
  .surveyNavbar_wrapper {
    padding: 0 0.5rem;
  }

  .surveyNavbar_wrapper .surveyNavbar_survey_info_wrapper {
    width: 75%;
  }

  .surveyNavbar_wrapper
    .surveyNavbar_survey_info_wrapper
    .surveyNavbar_survey_info
    .surveyNavbar_folder_name,
  .surveyNavbar_wrapper
    .surveyNavbar_survey_info_wrapper
    .surveyNavbar_survey_info
    .surveyNavbar_seperator {
    display: none;
  }

  .surveyNavbar_wrapper
    .surveyNavbar_survey_info_wrapper
    .surveyNavbar_survey_info
    .surveyNavbar_survey_name {
    max-width: calc(100% - 7.5rem);
  }

  .surveyNavbar_wrapper .surveyNavbar_desktop_phases {
    display: none;
  }

  .surveyNavbar_wrapper .surveyNavbar_buttons_wrapper {
    width: 25%;
  }

  .surveyNavbar_wrapper .surveyNavbar_buttons_wrapper .surveyNavbar_account,
  .surveyNavbar_wrapper .surveyNavbar_buttons_wrapper .surveyNavbar_divider,
  .surveyNavbar_wrapper .surveyNavbar_buttons_wrapper .surveyNavbar_help {
    display: none;
  }
}

.surveyNavbar_second_row {
  display: none;
}

.surveyNavbar_phases_wrapper {
  display: flex;
  height: 100%;
}

.surveyNavbar_phases_wrapper .surveyNavbar_phase {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3e434d;
}

.surveyNavbar_phases_wrapper .surveyNavbar_phase > div {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.surveyNavbar_phases_wrapper .surveyNavbar_phase > div > div {
  padding: 0.25rem;
  border-radius: 0.125rem;
}

.surveyNavbar_phases_wrapper .surveyNavbar_phase > div > div:hover {
  cursor: pointer;
  background-color: #f0f2f5;
}

.surveyNavbar_phases_wrapper .surveyNavbar_phase .surveyNavbar_active_line {
  position: absolute;
  bottom: 0;
  padding: 0;
  width: 100%;
  height: 0.125rem;
  border-radius: 5rem;
  background-color: #3b368e;
}

.surveyNavbar_phases_wrapper .surveyNavbar_phase.surveyNavbar_active {
  color: #3b368e;
  font-weight: 700;
}

.surveyNavbar_phases_wrapper .surveyNavbar_phase .surveyNavbar_seperator_icon {
  margin: 0 0.25rem;
}

.surveyNavbar_phases_wrapper
  .surveyNavbar_phase
  .surveyNavbar_seperator_icon
  svg
  path:last-child {
  stroke: #6b7079;
}

.surveyNavbar_phases_wrapper
  .surveyNavbar_phase
  .surveyNavbar_seperator_icon.surveyNavbar_active
  svg
  path:last-child {
  stroke: #3b368e;
}

.surveyNavbar_phases_wrapper.surveyNavbar_ltr .surveyNavbar_seperator_icon {
  padding-top: 0;
  padding-bottom: 0.125rem;
  transform: rotate(180deg);
}

.surveyNavbar_phases_wrapper.surveyNavbar_ltr
  .surveyNavbar_phase
  .surveyNavbar_seperator_icon {
  right: unset;
  left: calc(100% - 0.25rem);
}

@media (max-width: 900px) {
  .surveyNavbar_second_row {
    display: flex;
    justify-content: center;
    height: 3rem;
    background-color: #fff;
    box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  }

  .surveyNavbar_second_row .surveyNavbar_phases_wrapper .surveyNavbar_phase {
    min-width: 3rem;
  }
}
</style>
