import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type FileUpload = {
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
  required: {
    on: boolean;
  };
  customExtension: {
    on: boolean;
    value: string[];
    error: string;
  };
  maxFileSize: {
    on: boolean;
    type: string;
    value: number;
  };
  hideQuestionNumber: {
    on: boolean;
  };
  components: Component[];
};

export default FileUpload;
