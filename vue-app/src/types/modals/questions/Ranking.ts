type Ranking = {
  id: number;
  type: "Ranking";
  choices: {
    id: number;
    value: string;
  }[];
  randomize: boolean;
  fix_numbers: boolean;
  hide_question_number: boolean;
  created_at: string /* Date */;
  updated_at: string /* Date */;
};
