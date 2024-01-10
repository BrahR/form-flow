import type { Component } from "vue";

type Rating = GenericQuestion & {
  rating: {
    type: number;
    value: number;
  };
  parameters: {
    value: number;
    min: number;
    max: number;
  };
  required: {
    on: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
};
