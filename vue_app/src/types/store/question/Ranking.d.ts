import type { EditorType } from "./EditorType";
import type { GenericQuestion } from "./GenericQuestion";
import type { Component } from "vue";

type Ranking = GenericQuestion & {
  choices: {
    id: number;
    value: string;
  }[];
  required: {
    on: boolean;
  };
  fixNumbers: {
    on: boolean;
  };
  randomize: {
    on: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
};

export default Ranking;
