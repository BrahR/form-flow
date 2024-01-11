type Statement = GenericQuestion & {
  hideQuestionNumber: {
    on: boolean;
  };
  button: {
    value: string;
    error: boolean;
  };
};
