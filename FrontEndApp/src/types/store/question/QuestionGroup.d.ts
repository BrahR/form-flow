import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type QuestionGroup = {
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
  required: {
    on: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
  randomize: {
    on: boolean;
    selected: {
      id: number;
      name: string;
      value: number;
    };
  };
  button: {
    on: boolean;
    value: string;
  };
  components: Component[];
};

export default QuestionGroup;
