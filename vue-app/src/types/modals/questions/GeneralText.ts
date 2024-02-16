type GeneralText = {
  id: number;
  type: "GeneralText";
  text_type:
    | "text"
    | "longText"
    | "date"
    | "phoneNumber"
    | "numeric"
    | "englishLetters"
    | "time"
    | "custom";
  min: number;
  max: number;
  format: string | null;
  error_message: string | null;
  placeholder: string | null;
  hide_question_number: boolean;
  created_at: string /* Date */;
  updated_at: string /* Date */;
};
