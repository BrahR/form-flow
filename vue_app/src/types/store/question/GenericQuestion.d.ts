import type { EditorType } from "./EditorType";
import type { Component } from "vue";

export default interface GenericQuestion {
  type: string;
  name: string;
  preview: Component;
  icon: Component;
  action: boolean;
  labeled: {
    on: boolean;
    editor: EditorType;
    error: string | null;
  };
  described: {
    on: boolean;
    editor: EditorType;
    error?: string;
  };
  imageOrVideo: {
    on: boolean;
  };
  components: Component[];
  canSubmit: boolean;
  getData: object | null;
}