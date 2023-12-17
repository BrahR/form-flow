import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type Statement = {
  name: string;
  preview: Component;
  icon: Component;
  action: boolean;
  labeled: {
    on: boolean;
    editor: EditorType;
  };
  described: {
    shown: boolean;
    on: boolean;
    editor: EditorType;
  };
  required: {
    on: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
  imageOrVideo: {
    on: boolean;
  };
  button: {
    on: boolean;
    value: string;
    error?: string;
  };
  components: Component[];
};

export default Statement;
