export type WorkspaceStore = {
    data: Workspace[] | []
    selected: Workspace | null
    loading: boolean
    hydrated: boolean
}
