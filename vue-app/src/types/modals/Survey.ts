type Survey = {
  id: number;
  name: string;
  link: string;
  is_active: boolean;
  questions?: Question[];
  workspace_id: number;
  created_at: string /* Date */;
  updated_at: string /* Date */;
};
