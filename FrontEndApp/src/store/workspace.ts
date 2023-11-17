import {acceptHMRUpdate, defineStore} from "pinia";
import type {} from "vite";
import {computed, reactive} from "vue";
import axiosInstance from "@/axios.ts";
import {WorkspaceStore} from "@/types/store/WorkspaceStore";
import {find, pushToArray} from "@/utils/index.ts"

export const useWorkspaceStore = defineStore("workspace", () => {

  const workspaces: WorkspaceStore = reactive({
      data: null,
      selected: null,
      loading: false,
      hydrated: false
    }
  )

  const hydrate = async () => {
    console.log(workspaces.selected)
    if (workspaces.hydrated) return
    workspaces.loading = true

    axiosInstance.get("/dashboard").then((r) => {
      workspaces.data = r.data.workspaces;
      if (!workspaces.selected) workspaces.selected = workspaces?.data![0] ?? null
    }).catch(() => {
      //     later
    }).finally(() => {
      workspaces.loading = false
      workspaces.hydrated = true
    })
  }

  const dehydrate = () => {
    workspaces.hydrated = false
    workspaces.loading = false
    workspaces.data = null
    workspaces.selected = null
  }

  // GETTERS
  const getWorkspaces = computed(() => workspaces.data)
  const getSelected = computed(() => workspaces.selected)
  const isLoading = computed(() => workspaces.loading)
  const isHydrated = computed(() => workspaces.hydrated)

  // SETTERS
  const setSelected = (workspace: Workspace): void => {
    workspaces.selected = workspace
  }

  const fetchWorkspace = async (id: number | string) => {
    if (workspaces.selected?.id == id || workspaces.hydrated) return
    return axiosInstance.get(`/workspace/${id}`).then(r => {
      workspaces.selected = r.data.workspace
    })
  }

  const createWorkspace = async (workspace: Workspace): Promise<void> => {
    return axiosInstance.post("/workspace/create", workspace).then((r) => {
      workspaces.data = pushToArray(workspaces.data, r.data.workspace)
      if (!getSelected.value) workspaces.selected = r.data.workspace
    })
  }

  const update = async (workspace: Workspace): Promise<void> => {
    return axiosInstance.post(`/workspace/update/${workspace.id}`, workspace).then(async r => {
      // if (!workspaces.data || !workspaces.selected) {
      //   await hydrate()
      // }
      workspaces.data![find(workspace.id, workspaces!.data as Workspace[])] = r.data.workspace
      workspaces!.selected = r.data.workspace
    })
  }

  const delete_ = async (workspace: Workspace | null): Promise<void> => {
    if (!workspace) return
    return axiosInstance.delete(`/workspace/delete/${workspace.id}`).then(() => {
      workspaces?.data?.splice(find(workspace.id, workspaces?.data), 1)
      workspaces.selected = workspaces?.data![0] ?? null
    })
  }

  return {
    workspaces,

    getWorkspaces,
    getSelected,
    isLoading,
    isHydrated,

    setSelected,

    fetchWorkspace,

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
