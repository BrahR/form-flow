type QuestionBase<T extends Questions> = {
  id: number;
  survey_id: number;
  html_label: string;
  description_label: string | null;
  attachment: string | null;
  required: boolean;
  questionable: T;
  created_at: string /* Date */;
  updated_at: string /* Date */;
};
