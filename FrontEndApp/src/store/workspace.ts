import {acceptHMRUpdate, defineStore} from "pinia";
import type {} from "vite";
import {reactive} from "vue";
import axiosInstance from "@/axios.ts";
import {WorkspaceStore} from "@/types/store/WorkspaceStore";
import {useUserStore} from "@/store/user.ts";
import { pushToArray } from "@/utils/index.ts"

export const useWorkspaceStore = defineStore("workspace", () => {
    const userStore = useUserStore()

    const workspaces: WorkspaceStore = reactive({
            data: [] as Workspace[],
            selected: {} as Workspace,
            loading: false,
            hydrated: false
        }
    )

    const hydrate = () => {
        workspaces.loading = true

        axiosInstance.get("/dashboard").then((r) => {
            workspaces.data = r.data.workspaces;
            workspaces.selected = workspaces.data[0]
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
        workspaces.data = [] as Workspace[]
        workspaces.selected = {} as Workspace
    }

    // GETTERS
    const getWorkspaces = () => workspaces.data
    const getSelected = () => workspaces.selected
    const isLoading = () => workspaces.loading
    const isHydrated = () => workspaces.hydrated

    // SETTERS
    const setSelected = (workspace: Workspace): void => {
      workspaces.selected = workspace
    }

    async function createWorkspace(workspace: Workspace): Promise<void> {
        return axiosInstance.post("/workspace/create", workspace).then((r) => {
            workspaces.data = pushToArray(workspaces.data, r.data.workspace)
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

        hydrate,
        dehydrate
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useWorkspaceStore, import.meta.hot))
}
