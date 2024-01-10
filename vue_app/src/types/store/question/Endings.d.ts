import type { Component } from "vue";

type Endings = GenericQuestion & {
  afterSubmit: {
    type: string;
  };
  imageOrVideo: {
    on: boolean;
  };
  required: {
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
};
