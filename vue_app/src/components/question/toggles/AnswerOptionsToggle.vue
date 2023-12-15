<script setup lang="ts"></script>

<template>
  <div
    class="sharedBuild_toggle_input_row_wrapper__1KFOE sharedBuild_ltr__BELlV"
  >
    <div class="dropdown_label__FR99X">
      Answer Options
      <div class="tooltip_tooltip_wrapper__EBmhu">
        <div
          class="tooltip_tooltip_icon__P7bFI tooltip_ltr__gBssJ"
          data-tooltip-id="03eb2e5e-025b-4f5e-9ec8-8a28a5a864bc"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h24v24H0z"></path>
              <rect
                fill="#F0F2F5"
                x="4"
                y="4"
                width="16"
                height="16"
                rx="8"
              ></rect>
              <path
                d="M9.5 9.955c0-.494.12-.924.362-1.293.241-.369.555-.655.942-.858.387-.203.8-.304 1.238-.304.865 0 1.489.235 1.871.704.383.469.578 1.146.587 2.032h-1.278c-.008-.432-.091-.756-.247-.972-.157-.216-.444-.324-.86-.324-.366 0-.653.092-.861.275-.209.183-.313.45-.313.798 0 .21.074.399.221.567.148.168.33.337.548.507.217.17.435.363.652.58.217.215.4.475.55.778.15.303.228.671.232 1.103h-1.467c-.004-.406-.081-.728-.231-.965a2.132 2.132 0 0 0-.548-.593l-.642-.471a2.053 2.053 0 0 1-.538-.596c-.145-.24-.218-.563-.218-.968zm1.91 5.544c0-.275.098-.512.293-.71a.953.953 0 0 1 .704-.298c.274 0 .509.099.704.297a.977.977 0 0 1 .294.71c0 .275-.098.511-.294.707a.958.958 0 0 1-.704.295.97.97 0 0 1-.704-.288.96.96 0 0 1-.293-.713z"
                fill="#3E434D"
                fill-rule="nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div>
      <div class="tags-input">
        <tags
          class="tagify dropdown_custom_tagify__DAFHM dropdown_ltr__q6b1r tagify--noTags tagify--empty"
          tabindex="-1"
        >
          <span
            tabindex="0"
            data-placeholder="Type oprions here..."
            aria-placeholder="Type oprions here..."
            class="tagify__input"
            role="textbox"
            aria-autocomplete="both"
            aria-multiline="false"
          ></span>
          &ZeroWidthSpace; </tags
        ><input
          class="dropdown_custom_tagify__DAFHM dropdown_ltr__q6b1r"
          placeholder="Type oprions here..."
          value="[]"
          tabindex="-1"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
.tagify {
  --tags-disabled-bg: #f1f1f1;
  --tags-border-color: #ddd;
  --tags-hover-border-color: #ccc;
  --tags-focus-border-color: #3595f6;
  --tag-border-radius: 3px;
  --tag-bg: #e5e5e5;
  --tag-hover: #d3e2e2;
  --tag-text-color: #000;
  --tag-text-color--edit: #000;
  --tag-pad: 0.3em 0.5em;
  --tag-inset-shadow-size: 1.1em;
  --tag-invalid-color: #d39494;
  --tag-invalid-bg: hsla(0, 42%, 70%, 0.5);
  --tag-remove-bg: hsla(0, 42%, 70%, 0.3);
  --tag-remove-btn-color: #000;
  --tag-remove-btn-bg: none;
  --tag-remove-btn-bg--hover: #c77777;
  --input-color: inherit;
  --tag--min-width: 1ch;
  --tag--max-width: auto;
  --tag-hide-transition: 0.3s;
  --placeholder-color: rgba(0, 0, 0, 0.4);
  --placeholder-color-focus: rgba(0, 0, 0, 0.25);
  --loader-size: 0.8em;
  --readonly-striped: 1;
  display: inline-flex;
  align-items: flex-start;
  flex-wrap: wrap;
  border: 1px solid var(--tags-border-color);
  padding: 0;
  line-height: 0;
  cursor: text;
  outline: 0;
  position: relative;
  box-sizing: border-box;
  transition: 0.1s;
}
.tagify:hover:not(.tagify--focus):not(.tagify--invalid) {
  --tags-border-color: var(--tags-hover-border-color);
}
.tagify + input {
  position: absolute !important;
  left: -9999em !important;
  transform: scale(0) !important;
}
.tagify__input {
  flex-grow: 1;
  display: inline-block;
  min-width: 110px;
  margin: 5px;
  padding: var(--tag-pad);
  line-height: normal;
  position: relative;
  white-space: pre-wrap;
  color: var(--input-color);
  box-sizing: inherit;
}
.tagify__input:empty:before {
  position: static;
}
.tagify__input:focus {
  outline: 0;
}
.tagify__input:focus:before {
  transition: 0.2s ease-out;
  opacity: 0;
  transform: translatex(6px);
}
.tagify__input:focus:empty:before {
  transition: 0.2s ease-out;
  opacity: 1;
  transform: none;
  color: rgba(0, 0, 0, 0.25);
  color: var(--placeholder-color-focus);
}
.tagify__input:before {
  content: attr(data-placeholder);
  height: 1em;
  line-height: 1em;
  margin: auto 0;
  z-index: 1;
  color: var(--placeholder-color);
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  position: absolute;
}
.tagify__input:after {
  content: attr(data-suggest);
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  min-width: calc(100% - 1.5em);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
  color: var(--tag-text-color);
  opacity: 0.3;
  pointer-events: none;
  max-width: 100px;
}
.tagify--empty .tagify__input:before {
  transition: 0.2s ease-out;
  opacity: 1;
  transform: none;
  display: inline-block;
  width: auto;
}
body :focus-visible {
  outline: none;
}
body .tagify {
  width: 100%;
  height: 7.5rem;
  border-radius: 0.25rem;
  border: 0.063rem solid #bbbdc0;
  padding: 0.5rem !important;
  overflow-y: auto;
  color: #3e434d;
  --tag-bg: rgba(59, 54, 142, 0.15);
  --tag-text-color: #3b368e;
  --tag-text-color--edit: #3e434d;
  --tag-hover: rgba(59, 54, 142, 0.15);
  --tag-remove-btn-color: #3b368e;
}
body .tagify::-webkit-scrollbar {
  width: 1.5rem;
}
body .tagify::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem 0.5rem transparent;
}
body .tagify::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.5rem 0.5rem #f0f2f5;
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  min-height: 2rem;
}
body .tagify.tagify:hover {
  border-color: #3b368e;
}
body .tagify__input {
  margin: 0.25rem -0.25rem;
}
/*! CSS Used from: Embedded */
.tooltip_tooltip_wrapper__EBmhu {
  display: inline-block;
  vertical-align: middle;
}
.tooltip_tooltip_icon__P7bFI {
  cursor: pointer;
}
.tooltip_tooltip_icon__P7bFI svg {
  display: block;
}
.tooltip_tooltip_icon__P7bFI.tooltip_ltr__gBssJ {
  transform: scaleX(-1);
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
.dropdown_label__FR99X {
  color: #3e434d;
  margin-bottom: 0.25rem;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.dropdown_custom_tagify__DAFHM.dropdown_ltr__q6b1r {
  direction: ltr !important;
}
</style>
