type QuestionGroup = GenericQuestion & {
  required: {
    on: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
  randomize: {
    on: boolean;
    selected: {
      id: number;
      name: string;
      value: number;
    };
  };
  button: {
    on: boolean;
    value: string;
    error: boolean;
  };
};
