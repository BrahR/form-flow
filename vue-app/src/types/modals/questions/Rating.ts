type Rating = {
  id: number;
  type: "Rating";
  rating_type: number;
  rating_value: 0 | 1 | 2;
  hide_question_number: boolean;
  created_at: string /* Date */;
  updated_at: string /* Date */;
};
