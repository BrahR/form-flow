import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type GeneralTextFormat = {
  pattern: string;
  tokens: string[];
  regex: RegExp;
};

type GeneralTextType = {
  value: string;
  label: string;
  toggle: Component;
  input: Component;
  model: string;
  defaultCountry?: string;
  errorMessage: string;
  rules: {
    min?: number;
    max?: number;
    format?: string;
    error?: boolean;
    formats?: GeneralTextFormat[];
    selectedFormat?: GeneralTextFormat;
    placeholder?: string;
    displayError?: string;
    regex?: RegExp;
  };
};

type GeneralText = {
  name: string;
  preview: Component;
  icon: Component;
  action: boolean;
  labeled: {
    on: boolean;
    editor: EditorType;
  };
  described: {
    on: boolean;
    editor: EditorType;
  };
  answerFormat: {
    on: boolean;
    types: GeneralTextType[];
    selected: GeneralTextType;
  };
  imageOrVideo: {
    on: boolean;
  };
  required: {
    on: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
  components: Component[];
};

export default GeneralText;
export { GeneralTextType, GeneralTextFormat };
