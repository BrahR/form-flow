import type { EditorType } from "./EditorType";
import type { GenericQuestion } from "./GenericQuestion";
import type { Component } from "vue";

type OpinionScale = GenericQuestion & {
  scaleType: {
    number: {
      on: boolean;
    };
    stars: {
      on: boolean;
    };
    slider: {
      on: boolean;
    };
  };
  parameters: {
    value: number;
    min: number;
    max: number;
  };
  labels: {
    left: string;
    right: string;
    center: string;
  };
  required: {
    on: boolean;
  };
  startAtZero: {
    on: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
};

export default OpinionScale;
