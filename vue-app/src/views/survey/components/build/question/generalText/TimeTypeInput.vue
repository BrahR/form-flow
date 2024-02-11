<template>
  <span class="textQuestion_hotkey_wrapper">
    <input placeholder="11:11:11" inputmode="text" class="false" />
  </span>
  <div
    class="textQuestion_continue_button_wrapper textQuestion_text_question_error"
  >
    <div class="textQuestion_question_error">Enter a valid time.</div>
  </div>
</template>

<style scoped>
body :focus-visible {
  outline: none;
}
.textQuestion_text_question_wrapper .textQuestion_hotkey_wrapper {
  position: relative;
  display: inline-flex;
}
.textQuestion_text_question_wrapper .textQuestion_hotkey_wrapper:focus {
  outline: none;
}
.textQuestion_text_question_wrapper input {
  all: unset;
  width: 23.375rem;
  height: 1.875rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  color: var(--preview-theme-answer-color);
  -webkit-text-fill-color: var(--preview-theme-answer-color);
  border: 0.0625rem solid var(--preview-theme-answer-color);
  background-color: var(--preview-theme-answer-color-lightest);
  transition: all 0.1s ease-in-out;
  caret-color: var(--preview-theme-answer-color);
}
.textQuestion_text_question_wrapper input:focus {
  background-color: transparent;
}
.textQuestion_text_question_wrapper input:focus,
.textQuestion_text_question_wrapper input:hover {
  box-shadow: inset 0 0 0 0.125rem var(--preview-theme-accent-color);
  border-color: var(--preview-theme-accent-color);
}
.textQuestion_text_question_wrapper input::placeholder {
  color: var(--preview-theme-answer-color-light);
  -webkit-text-fill-color: var(--preview-theme-answer-color-light);
}
.textQuestion_text_question_wrapper input.textQuestion_not_empty {
  background-color: transparent;
}
.textQuestion_text_question_wrapper input.textQuestion_hasError {
  border-color: #d9426e;
  animation: textQuestion_shake 0.4s linear 1;
}
.textQuestion_text_question_wrapper input.textQuestion_hasError:hover {
  box-shadow: inset 0 0 0 0.125rem #d9426e;
  background-color: var(--preview-theme-answer-color-lightest);
}
.textQuestion_text_question_wrapper input.textQuestion_hasError:focus {
  box-shadow: inset 0 0 0 0.125rem #d9426e;
}
@media (max-width: 1024px) {
  .textQuestion_text_question_wrapper input {
    width: 16.8125rem;
  }
}
/*! CSS Used keyframes */
@keyframes textQuestion_shake {
  0% {
    transform: translate(15px);
  }
  20% {
    transform: translate(-15px);
  }
  40% {
    transform: translate(7px);
  }
  60% {
    transform: translate(-7px);
  }
  80% {
    transform: translate(4px);
  }
  to {
    transform: translate(0);
  }
}
body :focus-visible {
  outline: none;
}
.textQuestion_text_question_wrapper .textQuestion_continue_button_wrapper {
  height: 2.5rem;
  margin-top: 1.5rem;
}
.textQuestion_text_question_wrapper
  .textQuestion_continue_button_wrapper.textQuestion_text_question_error {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
.textQuestion_question_error {
  font-size: 0.8125rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25em;
  min-height: 1.125rem;
  background-color: #d9426e;
  color: #fff;
  display: table;
  line-height: 1.25rem !important;
  animation: textQuestion_fade 0.3s linear 1;
}
/*! CSS Used keyframes */
@keyframes textQuestion_fade {
  0% {
    -webkit-opacity: 0;
  }
  to {
    -webkit-opacity: 1;
  }
}
</style>
