import axiosInstance from "@/axios.ts";
import { acceptHMRUpdate, defineStore } from "pinia";
import { find, pushToArray } from "@/utils";
import { useModal } from "@/composables/useModal.ts";
import type { Ref } from "vue";
import { ref } from "vue";
import type { AxiosResponse } from "axios";

type Response<T> = AxiosResponse<ApiResponse<T>>;

export const useWorkspaceStore = defineStore("workspace", () => {
  const modals = useModal();

  const data: Ref<Workspace[] | null> = ref(null);
  const selected: Ref<Workspace | null> = ref(null);
  const hydrating: Ref<boolean> = ref(false);
  const hydrated: Ref<boolean> = ref(false);

  const hydrate = async () => {
    console.log("Hydrating workspaces");
    if (hydrated.value) return;
    hydrating.value = true;

    axiosInstance
      .get("/workspaces")
      .then((res: Response<Workspace[]>) => {
        data.value = res.data.data;
        if (!selected.value) selected.value = res.data.data[0];
      })
      .catch((err) => console.error(err))
      .finally(() => {
        hydrating.value = false;
        hydrated.value = true;
      });
  };

  const dehydrate = () => {
    console.log("Dehydrating workspaces");
    data.value = null;
    selected.value = null;
    hydrated.value = false;
    hydrating.value = false;
  };

  const fetch = async (id: number) => {
    if (selected.value?.id == id || hydrated.value) return;
    return axiosInstance
      .get(`/workspaces/${id}`)
      .then((res: Response<Workspace>) => {
        selected.value = res.data.data;
      });
  };

  const create = async (name: string) => {
    return axiosInstance
      .post("/workspaces", { name })
      .then((res: Response<Workspace>) => {
        data.value = pushToArray(data.value, res.data.data);
        if (!selected.value) selected.value = res.data.data;
      });
  };

  const update = async (workspace: Partial<Workspace>) => {
    return axiosInstance
      .put(`/workspaces/${workspace.id}`, workspace)
      .then((res: Response<Workspace>) => {
        if (!data.value) return;
        const index = find(workspace.id!, data.value);
        data.value[index] = { ...data.value[index], ...res.data.data };
        selected.value = data.value[index];
      });
  };

  const remove = async (id: number) => {
    return axiosInstance.delete(`/workspaces/${id}`).then(() => {
      if (!data.value) return;
      data.value = data.value.filter((workspace) => workspace.id !== id);
      if (selected.value?.id === id) selected.value = data.value[0] || null;
    });
  };

  return {
    data,
    selected,
    hydrating,
    hydrated,

    hydrate,
    dehydrate,

    fetch,
    create,
    update,
    remove,

    ...modals,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWorkspaceStore, import.meta.hot));
}
