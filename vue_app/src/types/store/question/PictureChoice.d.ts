import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type PictureChoice = {
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
    label: string;
    image: string;
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
  hiddenLabel: {
    on: boolean;
  };
  doubleDisplaySize: {
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

export default PictureChoice;
