type Survey = {
  id: number;
  name: string;
  link: string;
  is_active: boolean;
  questions: {
    data: Question<never>[];
    question_count: number;
  };
  workspace_id: number;
  created_at: string /* Date */;
  updated_at: string /* Date */;
};
