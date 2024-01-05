import type { Units } from "@/types";
import type { GenericQuestion } from "./GenericQuestion";
import type { EditorType } from "./EditorType";
import type { Component } from "vue";

type FileUpload = GenericQuestion & {
  required: {
    on: boolean;
  };
  customExtension: {
    on: boolean;
    value: {
      name: string;
      value: string;
    }[];
    error: string;
  };
  maxFileSize: {
    on: boolean;
    type: Units;
    value: number;
  };
  possible: {
    sizeUnit: Units[];
  };
  hideQuestionNumber: {
    on: boolean;
  };
};

export default FileUpload;
