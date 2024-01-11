type PictureChoice = GenericQuestion & {
  choices: {
    id: number;
    hidden: boolean;
    label: string;
    image: string;
    checked: boolean;
  }[];
  required: {
    on: boolean;
  };
  randomize: {
    on: boolean;
  };
  hiddenLabel: {
    on: boolean;
  };
  doubleDisplaySize: {
    on: boolean;
  };
  multipleAnswers: {
    on: boolean;
    min: number;
    max: number;
    error: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
};
