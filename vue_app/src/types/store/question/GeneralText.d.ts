type KeyTypes =
  | "text"
  | "long-text"
  | "date"
  | "phone-number"
  | "numeric"
  | "english-letters"
  | "time"
  | "custom";

type GeneralTextFormat = {
  pattern: string;
  tokens: string[];
  regex: RegExp;
};

type GeneralTextType = {
  value: KeyTypes;
  label: string;
  toggle: Component;
  input: Component;
  model: string;
  defaultCountry?: string;
  errorMessage: string;
  rules: {
    min?: number;
    max?: number;
    format?: string;
    error?: boolean;
    formats?: GeneralTextFormat[];
    selectedFormat?: GeneralTextFormat;
    placeholder?: string;
    displayError?: string;
    regex?: RegExp;
  };
};

type GeneralText = GenericQuestion & {
  answerFormat: {
    on: boolean;
    types: GeneralTextType[];
    selected: GeneralTextType;
    error: Record<KeyTypes, boolean>;
  };
  required: {
    on: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
};
