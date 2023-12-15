import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type Welcome = {
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
  imageOrVideo: {
    on: boolean;
  };
  startButton: {
    value: string;
  };
  components: Component[];
};

export default Welcome;
