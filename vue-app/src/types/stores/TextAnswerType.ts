import type { Component } from "vue";

export type TextAnswerType = {
  type:
    | "text"
    | "longText"
    | "date"
    | "phoneNumber"
    | "numeric"
    | "englishLetters"
    | "time"
    | "custom";
  label: string;
  toggle: null | Component;
  input: null | Component;
  model: string;
  errorMessage: string;
  defaultCountry?: string;
  rules: {
    min?: number;
    max?: number;
    error: boolean;
    format?: string;
    placeholder?: string;
    validationError?: string;
  };
};
