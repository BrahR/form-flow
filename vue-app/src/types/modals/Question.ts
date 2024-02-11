type Question<T extends Questionable = Questionable> = {
  id: number;
  html_label: string;
  description_label: string;
  attachment: string | null;
  required: boolean;
  questionable: T;
  survey_id: number;
  created_at: string /* Date */;
  updated_at: string /* Date */;
};
