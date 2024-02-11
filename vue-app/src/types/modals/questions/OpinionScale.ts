type OpinionScale = {
  id: number;
  type: "OpinionScale";
  steps: number;
  labels: {
    left: string;
    right: string;
    center: string;
  };
  start_at_zero: boolean;
  hide_question_number: boolean;
  created_at: string /* Date */;
  updated_at: string /* Date */;
};
