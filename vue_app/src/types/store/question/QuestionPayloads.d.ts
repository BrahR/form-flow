type WelcomePayload = {
  button: string;
};

type GeneralTextPayload = {
  text_type: string;
  min: number | undefined;
  max: number | undefined;
  format: string | undefined;
  error_message: string;
  placeholder: string | undefined;
  hide_question_number: boolean;
};

type MultipleChoicePayload = {
  choices: {
    id: number;
    hidden: boolean;
    value: string;
    checked: boolean;
  }[];
  randomize: boolean;
  vertical_display: boolean;
  multiple_answers: boolean;
  min_answers: number | undefined;
  max_answers: number | undefined;
  hide_question_number: boolean;
};

type PictureChoicePayload = {
  choices: {
    id: number;
    hidden: boolean;
    value: string;
    checked: boolean;
    image: string;
  }[];
  multiple_answers: boolean;
  min_answers: number | undefined;
  max_answers: number | undefined;
  hide_label: boolean;
  double_display_size: boolean;
  hide_question_number: boolean;
  randomize: boolean;
};

type QuestionGroupPayload = {
  // TODO: add QuestionGroupPayload
};

type OpinionScalePayload = {
  steps: number;
  labels: ScaleLabels;
  start_at_zero: boolean;
  hide_question_number: boolean;
};

type RatingPayload = {
  rating_type: number;
  rating_value: 0 | 1 | 2;
  hide_question_number: boolean;
};

type RankingPayload = {
  choices: {
    id: number;
    value: string;
  }[];
  randomize: boolean;
  fix_numbers: boolean;
  hide_question_number: boolean;
};

type StatementPayload = {
  button_text: string;
  hide_question_number: boolean;
};

type FileUploadPayload = {
  // TODO: add FileUploadPayload
};

type EndingsPayload = {
  // TODO: add EndingsPayload
};

type QuestionPayloads =
  | WelcomePayload
  | MultipleChoicePayload
  | PictureChoicePayload
  | QuestionGroupPayload
  | OpinionScalePayload
  | RatingPayload
  | RankingPayload
  | StatementPayload
  | FileUploadPayload
  | EndingsPayload;

type QuestionPayload<T extends QuestionPayloads> = {
  type: string;
  question: {
    html_label: string;
    html_description: string;
    required: boolean;
    attachment: string; // this.imageOrVideo,
  };
  questionable: T;
};
