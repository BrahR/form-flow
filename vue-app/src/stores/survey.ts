import axiosInstance from "@/axios.ts";
import type { Ref } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useModal } from "@/composables/useModal.ts";
import { acceptHMRUpdate, defineStore } from "pinia";
import { useWorkspaceStore } from "@/stores/workspace.ts";
import { find, pushToArray } from "@/utils";
import type { AxiosResponse } from "axios";

type Response<T> = AxiosResponse<ApiResponse<T>>;

export const useSurveyStore = defineStore("survey", () => {
  const useWorkspace = useWorkspaceStore();
  const route = useRoute();
  const modals = useModal();

  const data: Ref<Survey[] | null> = ref(null);
  const selected: Ref<Survey | null> = ref(null);
  const hydrating: Ref<boolean> = ref(false);
  const hydrated: Ref<boolean> = ref(false);
  const creating: Ref<boolean> = ref(false);

  const hydrate = async () => {
    dehydrate();

    const surveyId = parseInt(route.params.surveyId as string);
    const workspaceId = parseInt(route.params.workspaceId as string);
    if (hydrated.value && selected.value?.id === surveyId) return;

    hydrating.value = true;
    await useWorkspace.fetch(workspaceId);
    data.value = useWorkspace.selected?.surveys ?? [];
    selected.value = data.value[find(surveyId, data.value)];
    hydrating.value = false;
    hydrated.value = true;
  };

  const dehydrate = () => {
    data.value = null;
    selected.value = null;
    hydrated.value = false;
    hydrating.value = false;
    creating.value = false;
  };

  const create = async (name: string) => {
    if (creating.value) return;

    creating.value = true;
    const workspace = useWorkspace.selected;
    if (!workspace) return;

    return axiosInstance
      .post(`/workspaces/${workspace?.id ?? 0}/surveys`, { name })
      .then((res: Response<Survey>) => {
        workspace.surveys = pushToArray(workspace.surveys, res.data.data);
      })
      .finally(() => {
        creating.value = false;
      });
  };

  const update = async (survey: Partial<Survey>) => {
    return axiosInstance
      .put(`/surveys/${survey.id}`, survey)
      .then((res: Response<Survey>) => {
        if (!data.value) return;
        const index = find(survey.id!, data.value);
        data.value[index] = { ...data.value[index], ...res.data.data };
        selected.value = data.value[index];
      });
  };

  return {
    data,
    selected,
    hydrating,
    hydrated,
    creating,

    hydrate,
    dehydrate,

    create,
    update,

    ...modals,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSurveyStore, import.meta.hot));
}
