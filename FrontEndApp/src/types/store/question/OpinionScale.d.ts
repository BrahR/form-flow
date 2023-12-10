import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type OpinionScale = {
  name: string;
  preview: Component;
  icon: Component;
  action: boolean;
  labeled: {
    on: boolean;
    editor: EditorType;
  };
  described: {
    shown: boolean;
    on: boolean;
    editor: EditorType;
  };
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
    on: boolean;
    left: string;
    right: string;
    center: string;
  };
  imageOrVideo: {
    on: boolean;
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
  components: Component[];
};

export default OpinionScale;
