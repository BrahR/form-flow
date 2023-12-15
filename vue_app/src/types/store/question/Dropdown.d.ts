import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type Dropdown = {
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
  answerOptions: {
    value: string;
    checked: boolean;
  }[];
  imageOrVideo: {
    on: boolean;
  };
  required: {
    on: boolean;
  };
  randomize: {
    on: boolean;
  };
  sort: {
    on: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
  components: Component[];
};

export default Dropdown;
