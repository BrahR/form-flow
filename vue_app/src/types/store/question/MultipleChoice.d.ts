import type { Component } from "vue";

type MultipleChoice = GenericQuestion & {
  choices: {
    id: number;
    hidden: boolean;
    value: string;
    checked: boolean;
  }[];
  required: {
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
    error: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
};
