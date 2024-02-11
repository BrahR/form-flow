<script setup lang="ts"></script>

<template>
  <div class="appreciation_buttons_wrapper">
    <span class="appreciation_label">After submit:</span>
    <div class="appreciation_appreciation_type_buttons appreciation_ltr">
      <div class="appreciation_button_wrapper">
        <div class="">
          <button
            type="button"
            class="buttons_button buttons_primary undefined undefined"
          >
            End page
          </button>
        </div>
      </div>
      <div class="appreciation_button_wrapper">
        <div class="">
          <button
            type="button"
            class="buttons_button buttons_secondary undefined undefined"
          >
            Redirect to URL
          </button>
        </div>
        <div class="appreciation_new_feature_label appreciation_ltr">
          <div class="newFeatureLabel_container newFeatureLabel_ltr">New</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: content-box;
}
.sharedBuild_toggle_input_row_wrapper {
  font-size: 14px;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  padding: 0.875rem 0;
}
.buttons_button {
  all: unset;
  min-width: 4rem;
  min-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.875rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
}
.buttons_button:focus {
  background-color: inherit;
}
.buttons_button.buttons_primary {
  background-color: #3b368e;
  color: #fff;
  -webkit-text-fill-color: #fff;
  -webkit-opacity: 1;
}
.buttons_button.buttons_secondary {
  background-color: rgba(59, 54, 142, 0.15);
  color: #3b368e;
  -webkit-text-fill-color: #3b368e;
  -webkit-opacity: 1;
}
/*! CSS Used from: Embedded */
.newFeatureLabel_container {
  width: fit-content;
  height: 1rem;
  color: #fff;
  font-size: 10px;
  font-weight: 400;
  padding: 0 0.5rem 0.125rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: #f14499;
  display: flex;
  justify-content: center;
  align-items: center;
}
.newFeatureLabel_container.newFeatureLabel_ltr {
  padding: 0 0.5rem;
}
.appreciation_buttons_wrapper {
  width: 100%;
  padding: 1.5rem 0;
}
.appreciation_buttons_wrapper .appreciation_label {
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 0.5rem;
  display: block;
}
.appreciation_buttons_wrapper .appreciation_new_feature_label {
  position: absolute;
  left: -0.5rem;
  top: -0.5rem;
}
.appreciation_buttons_wrapper .appreciation_new_feature_label.appreciation_ltr {
  right: -0.5rem;
  left: unset;
  top: -0.5rem;
}
.appreciation_buttons_wrapper .appreciation_appreciation_type_buttons {
  display: flex;
  border-radius: 0.25rem;
  margin: auto;
  box-sizing: border-box;
  white-space: nowrap;
}
.appreciation_buttons_wrapper
  .appreciation_appreciation_type_buttons
  .appreciation_button_wrapper {
  width: 50%;
  height: auto;
  position: relative;
}
.appreciation_buttons_wrapper
  .appreciation_appreciation_type_buttons
  .appreciation_button_wrapper
  .appreciation_new_feature_label {
  position: absolute;
  left: -0.5rem;
  top: -0.5rem;
  z-index: 1;
}
.appreciation_buttons_wrapper
  .appreciation_appreciation_type_buttons
  .appreciation_button_wrapper
  .appreciation_new_feature_label.appreciation_ltr {
  left: unset;
  right: -0.5rem;
}
.appreciation_buttons_wrapper
  .appreciation_appreciation_type_buttons
  .appreciation_button_wrapper
  > div {
  height: 100%;
}
.appreciation_buttons_wrapper
  .appreciation_appreciation_type_buttons
  .appreciation_button_wrapper
  button {
  white-space: break-spaces;
  width: 100% !important;
  height: 100%;
  text-align: center;
  border: 1px solid #3b368e;
  border-radius: 0;
  padding: 0.25rem 0.5rem;
}
.appreciation_buttons_wrapper
  .appreciation_appreciation_type_buttons
  .appreciation_button_wrapper:first-child
  button {
  border-radius: 0 0.25rem 0.25rem 0;
  border-left: none;
}
.appreciation_buttons_wrapper
  .appreciation_appreciation_type_buttons
  .appreciation_button_wrapper:last-child
  button {
  border-radius: 0.25rem 0 0 0.25rem;
  border-right: none;
}
.appreciation_buttons_wrapper
  .appreciation_appreciation_type_buttons.appreciation_ltr
  .appreciation_button_wrapper:first-child
  button {
  border-radius: 0.25rem 0 0 0.25rem;
  border-left: 1px solid;
  border-right: none;
}
.appreciation_buttons_wrapper
  .appreciation_appreciation_type_buttons.appreciation_ltr
  .appreciation_button_wrapper:last-child
  button {
  border-radius: 0 0.25rem 0.25rem 0;
  border-right: 1px solid;
  border-left: none;
}
</style>
