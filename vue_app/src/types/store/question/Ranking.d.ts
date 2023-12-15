import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type Ranking = {
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
  choices: {
    id: number;
    value: string;
  }[];
  imageOrVideo: {
    on: boolean;
  };
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
  components: Component[];
};

export default Ranking;
