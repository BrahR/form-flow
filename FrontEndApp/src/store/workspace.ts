import {acceptHMRUpdate, defineStore} from "pinia";
import type {} from "vite";
import {computed, reactive} from "vue";
import axiosInstance from "@/axios.ts";
import {WorkspaceStore} from "@/types/store/WorkspaceStore";
import {pushToArray} from "@/utils/index.ts"

export const useWorkspaceStore = defineStore("workspace", () => {

  const workspaces: WorkspaceStore = reactive({
      data: [],
      selected: null,
      loading: false,
      hydrated: false
    }
  )

  const hydrate = () => {
    workspaces.loading = true
    console.log("started")
    console.log(workspaces.selected)


    axiosInstance.get("/dashboard").then((r) => {
      workspaces.data = r.data.workspaces;
      workspaces.selected = workspaces.data[0]
    }).catch(() => {
      //     later
    }).finally(() => {
      workspaces.loading = false
      workspaces.hydrated = true
      console.log(workspaces.selected)
    })
  }

  const dehydrate = () => {
    workspaces.hydrated = false
    workspaces.loading = false
    workspaces.data = []
    workspaces.selected = null
  }

  const find = (id: number): number => {
    return workspaces.data.findIndex((i: Workspace) => i.id == id)
  }

  // GETTERS
  const getWorkspaces = () => workspaces.data
  const getSelected = computed(() => workspaces.selected)
  const isLoading = () => workspaces.loading
  const isHydrated = () => workspaces.hydrated

  // SETTERS
  const setSelected = (workspace: Workspace): void => {
    workspaces.selected = workspace
  }

  const createWorkspace = async (workspace: Workspace): Promise<void> => {
    return axiosInstance.post("/workspace/create", workspace).then((r) => {
      workspaces.data = pushToArray(workspaces.data, r.data.workspace)
      if (!getSelected.value) workspaces.selected = r.data.workspace
    })
  }

  const update = async (workspace: Workspace): Promise<void> => {
    return axiosInstance.post(`/workspace/update/${workspace.id}`, workspace).then(r => {
      workspaces.data[find(workspace.id)].name = r.data.workspace.name
      workspaces.selected!.name = r.data.workspace.name
    })
  }

  const delete_ = async (workspace: Workspace | null): Promise<void> => {
    if (!workspace) return
    return axiosInstance.delete(`/workspace/delete/${workspace.id}`).then(() => {
      delete workspaces.data[find(workspace.id)]
    })
  }

  return {
    workspaces,

    getWorkspaces,
    getSelected,
    isLoading,
    isHydrated,

    setSelected,

    createWorkspace,
    update,
    delete_,

    hydrate,
    dehydrate
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWorkspaceStore, import.meta.hot))
}
