type PictureChoice = {
  id: number;
  type: "PictureChoice";
  choices: {
    id: number;
    hidden: boolean;
    value: string;
    checked: boolean;
    image: string;
  }[];
  multiple_answers: boolean;
  min_answers: number;
  max_answers: number;
  hide_label: boolean;
  double_display_size: boolean;
  hide_question_number: boolean;
  randomize: boolean;
  created_at: string /* Date */;
  updated_at: string /* Date */;
};
