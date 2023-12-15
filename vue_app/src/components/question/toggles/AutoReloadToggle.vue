<script setup lang="ts"></script>

<template>
  <div
    class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
  >
    <div class="appreciation_auto_reload_wrapper__fi26N">
      <div class="appreciation_toggle_wrapper__VOg6p">
        <div class="toggleButton_wrapper__dOusd undefined false">
          <span class="toggleButton_title__zP_tP toggleButton_bold__huFoE"
            >Auto Reload</span
          ><label class="toggleButton_switch__EF_q8"
            ><input
              name="reload_active"
              class="toggleButton_toggle_button_checkbox__a2Pr8"
              type="checkbox" />
            <div
              class="toggleButton_slider_round__QN633 undefined undefined"
            ></div
          ></label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*! CSS Used from: https://cdn.porsline.com/static/panel/v2/_next/static/css/f419cc97160b5e33.css */
body :focus-visible {
  outline: none;
}
/*! CSS Used from: Embedded */
.toggleButton_wrapper__dOusd {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.toggleButton_wrapper__dOusd > * {
  flex-shrink: 0;
}
.toggleButton_wrapper__dOusd .toggleButton_title__zP_tP {
  max-width: 16.75rem;
  color: #3e434d;
}
.toggleButton_wrapper__dOusd
  .toggleButton_title__zP_tP.toggleButton_bold__huFoE {
  font-weight: 700;
}
.toggleButton_wrapper__dOusd .toggleButton_switch__EF_q8 {
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1.25rem;
  max-width: 100%;
  font-weight: 700;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  .toggleButton_toggle_button_checkbox__a2Pr8 {
  display: none;
  margin: 0.25rem 0 0;
  line-height: normal;
  box-sizing: border-box;
  padding: 0;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  .toggleButton_slider_round__QN633 {
  border-radius: 1rem;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #bbbdc0;
  transition: 0.4s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  .toggleButton_slider_round__QN633:before {
  position: absolute;
  content: "";
  height: 1rem;
  width: 1rem;
  left: 0.125rem;
  bottom: 0.125rem;
  background-color: #fff;
  transition: 0.4s;
  border-radius: 50%;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  input:checked
  + .toggleButton_slider_round__QN633 {
  background-color: #3b368e;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  input:focus
  + .toggleButton_slider_round__QN633 {
  box-shadow: 0 0 0.0625rem #3b368e;
}
.toggleButton_wrapper__dOusd
  .toggleButton_switch__EF_q8
  input:checked
  + .toggleButton_slider_round__QN633:before {
  transform: translateX(1.25rem);
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
.appreciation_auto_reload_wrapper__fi26N {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  font-size: 14px;
}
.appreciation_auto_reload_wrapper__fi26N .appreciation_toggle_wrapper__VOg6p {
  height: 1.25rem;
}
</style>
