import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type Endings = {
  name: string;
  preview: Component;
  icon: Component;
  action: boolean;
  afterSubmit: {
    type: string;
  };
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
  required: {
    shown: boolean;
    on: boolean;
  };
  shareButtons: {
    on: boolean;
  };
  defaultEndings: {
    on: boolean;
  };
  reloadRedirectButton: {
    on: boolean;
    label: string;
    type: number;
  };
  label: {
    on: boolean;
    value: string;
  };
  autoReload: {
    on: boolean;
    timer: number;
  };
  components: Component[];
};

export default Endings;
