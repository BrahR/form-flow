type GeneralText = {
  id: number;
  type: "GeneralText";
  text_type: string;
  min: number;
  max: number;
  format: string | null;
  error_message: string | null;
  placeholder: string | null;
  hide_question_number: boolean;
  created_at: string /* Date */;
  updated_at: string /* Date */;
};
