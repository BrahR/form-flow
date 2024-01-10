type WorkspaceStore = {
  data: Workspace[] | null;
  selected: Workspace | null;
  loading: boolean;
  hydrated: boolean;
};
