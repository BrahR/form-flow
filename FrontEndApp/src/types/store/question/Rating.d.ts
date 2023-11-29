import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type Rating = {
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
    number: boolean;
    stars: boolean;
    slider: boolean;
  };
  minMax: {
    min: number;
    max: number;
  };
  imageOrVideo: {
    on: boolean;
  };
  required: {
    on: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
  components: Component[];
};

export default Rating;
