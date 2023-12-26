import type { EditorType } from "./EditorType";
import type { GenericQuestion } from "./GenericQuestion";
import type { Component } from "vue";

type QuestionGroup = GenericQuestion & {
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
    error?: string;
  };
};

export default QuestionGroup;
