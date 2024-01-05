import type { EditorType } from "./EditorType";
import type { GenericQuestion } from "./GenericQuestion";
import type { Component } from "vue";

type Statement = GenericQuestion & {
  imageOrVideo: {
    on: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
  button: {
    value: string;
    error: boolean;
  };
};

export default Statement;
