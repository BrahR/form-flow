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
  button: {
    value: string;
  };
  hideQuestionNumber: {
    on: boolean;
  };
  components: Component[];
};

export default QuestionGroup;
