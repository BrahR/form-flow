type Ranking = GenericQuestion & {
  choices: {
    id: number;
    value: string;
  }[];
  required: {
    on: boolean;
  };
  fixNumbers: {
    on: boolean;
  };
  randomize: {
    on: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
};
