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
