type Workspace = {
  id: number;
  name: string;
  owner?: User;
  surveys?: Survey[];
  created_at: string /* Date */;
  updated_at: string /* Date */;
};
