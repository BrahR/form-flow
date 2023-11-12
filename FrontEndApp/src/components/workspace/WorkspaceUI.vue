<script setup lang="ts">

import {useDataStore} from "@/store";
import {useWorkspaceStore} from "@/store/workspace.ts";

const workspaceStore = useWorkspaceStore()
</script>

<template>
  <div class="mySurveys_container__9lxhC">
    <div class="mySurveys_container_wrapper__87EPU">
      <div class="mySurveys_header__5IXQb">
        <div class="mySurveys_folder_name_wrapper__R94N2">
          <div class="mySurveys_folder_name__D7f9W">{{ workspaceStore.workspaces.selected.name }}</div>
          <div class="mySurveys_more_icon_wrapper__oYNt_">
            <div class="moreDropDown_wrapper__3ZqgO">
              <div class="moreDropDown_button__3GhWA undefined undefined" id="downshift-12-toggle-button"
                   aria-haspopup="listbox" aria-expanded="false"
                   aria-labelledby="downshift-12-label downshift-12-toggle-button">
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
                class="moreDropDown_list__6nQ41 moreDropDown_right__hZmc7 undefined moreDropDown_not_show__HjTwn undefined"
                id="downshift-12-menu" role="listbox" aria-labelledby="downshift-12-label" tabindex="-1"></ul>
            </div>
          </div>
        </div>
        <div class="mySurveys_header_menubar_wrapper__zjJ4M">
          <button class="mySurveys_share_folder_button__VUV9N">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <g transform="translate(2 3)" stroke="#3E434D" stroke-linecap="round" stroke-linejoin="round"
                   stroke-width="1.5">
                  <path
                    d="M8.727 10V8.889c0-1.227-.977-2.222-2.182-2.222H2.182C.977 6.667 0 7.662 0 8.889V10"></path>
                  <ellipse cx="4.364" cy="2.222" rx="2.182" ry="2.222"></ellipse>
                  <path
                    d="M12 10V8.889a2.215 2.215 0 0 0-1.636-2.15M8.182.072a2.215 2.215 0 0 1 1.64 2.153 2.215 2.215 0 0 1-1.64 2.153"></path>
                </g>
              </g>
            </svg>
            <span>Share</span></button>
        </div>
      </div>
      <div class="mySurveys_surveys_list__21dmw">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>


.ptr, .ptr__children {
  height: 100%;
  width: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
}

.mySurveys_pull_to_refresh__HUjP3 {
  width: calc(100% - 17.5rem) !important;
}

.ptr__pull-down {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  visibility: hidden;
}

.ptr__children, .ptr__pull-down {
  transition: transform 0.2s cubic-bezier(0, 0, 0.31, 1);
}

.ptr, .ptr__children {
  height: 100%;
  width: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
}

.ptr__pull-down > div {
  display: none;
}

.ptr__loader {
  margin: 0 auto;
  text-align: center;
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}


.ptr__children, .ptr__pull-down {
  transition: transform 0.2s cubic-bezier(0, 0, 0.31, 1);
}

.ptr, .ptr__children {
  height: 100%;
  width: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
}

.mySurveys_pull_to_refresh__HUjP3 {
  width: calc(100% - 17.5rem) !important;
}

.mySurveys_container__9lxhC {
  height: 100%;
  overflow-x: hidden;
  padding: 1.5rem 2.5rem 5.5rem 0.6rem;
  width: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

.mySurveys_container_wrapper__87EPU {
  width: 100%;
}

.mySurveys_header__5IXQb {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}

.mySurveys_folder_name_wrapper__R94N2 {
  display: flex;
  align-items: center;
}

.mySurveys_folder_name__D7f9W {
  margin-right: 1rem;
  font-size: 20px;
  color: #3e434d;
  font-weight: 700;
  margin-left: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 11.25rem);
}

.mySurveys_more_icon_wrapper__oYNt_ {
  margin-top: 0 !important;
}

.moreDropDown_wrapper__3ZqgO {
  position: relative;
}

.moreDropDown_button__3GhWA {
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

.mySurveys_header_menubar_wrapper__zjJ4M {
  margin: 1rem 0 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.mySurveys_share_folder_button__VUV9N {
  position: relative;
  font-family: unset;
  border: 0.0625rem solid #d8dbe0;
  color: #3e434d;
  background-color: #fff;
  width: -moz-fit-content;
  width: fit-content;
  border-radius: 0.25rem;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
}

.mySurveys_surveys_list__21dmw {
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  box-sizing: border-box;
  margin-top: 1.25rem;
  width: 100%;
  gap: 2rem;
  margin-left: 2rem;
}

.mySurveys_share_folder_button__VUV9N span {
  margin-right: 0;
  margin-left: 0.5rem;
}
</style>
