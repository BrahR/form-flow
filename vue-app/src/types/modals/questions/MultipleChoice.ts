type MultipleChoice = {
  id: number;
  type: "MultipleChoice";
  choices: {
    id: number;
    checked: boolean;
    value: string;
    hidden: boolean;
  }[];
  randomize: boolean;
  vertical_display: boolean;
  multiple_answers: boolean;
  min_answers: number;
  max_answers: number;
  hide_question_number: boolean;
  created_at: string /* Date */;
  updated_at: string /* Date */;
};
