import type { Component } from "vue";

type Statement = GenericQuestion & {
  hideQuestionNumber: {
    on: boolean;
  };
  button: {
    value: string;
    error: boolean;
  };
};
