import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type Statement = {
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
  imageOrVideo: {
    on: boolean;
  };
  label: {
    on: boolean;
    value: string;
  };
  components: Component[];
};

export default Statement;
