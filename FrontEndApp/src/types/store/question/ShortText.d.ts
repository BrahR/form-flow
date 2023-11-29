import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type ShortTextFormat = {
  pattern: string;
  tokens: string[];
  regex: RegExp;
};

type ShortTextType = {
  value: string;
  label: string;
  toggle: Component;
  input: Component;
  model: string;
  defaultCountry?: string;
  errorMessage: string;
  rules?: {
    min?: number;
    max?: number;
    format?: string;
    error?: boolean;
    formats?: ShortTextFormat[];
    selectedFormat?: ShortTextFormat;
  };
};

type ShortText = {
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
    types: ShortTextType[];
    selected: ShortTextType;
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

export default ShortText;
export { ShortTextType, ShortTextFormat };
