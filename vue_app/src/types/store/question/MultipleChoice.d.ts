import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type MultipleChoice = {
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
  choices: {
    id: number;
    hidden: boolean;
    value: string;
    checked: boolean;
  }[];
  required: {
    on: boolean;
  };
  imageOrVideo: {
    on: boolean;
  };
  randomize: {
    on: boolean;
  };
  verticalDisplay: {
    on: boolean;
  };
  multipleAnswers: {
    on: boolean;
    min: number;
    max: number;
  };
  hideQuestionNumber: {
    on: boolean;
  };
  components: Component[];
};

export default MultipleChoice;
