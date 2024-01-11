import axiosInstance from "@/axios.ts";
import type {} from "vite";
import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, reactive } from "vue";
import { useWorkspaceStore } from "@/store/workspace.ts";
import { find, pushToArray } from "@/utils";
import { useRoute } from "vue-router";

export const useSurveyStore = defineStore("survey", () => {
  const useWorkspace = useWorkspaceStore();
  const route = useRoute();

  const surveys: SurveyStore = reactive({
    data: [],
    selected: null,
    creating: false,
    loading: false,
    hydrated: false,
  });

  const hydrate = async (): Promise<void> => {
    dehydrate();
    // @ts-ignore
    if (surveys.hydrated && surveys.selected?.id === route.params.surveyId)
      return;
    surveys.loading = true;

    // @ts-ignore
    await useWorkspace.fetchWorkspace(route.params.workspaceId);
    surveys.data = useWorkspace.getSelected?.surveys ?? [];
    // @ts-ignore
    const index = find(route.params.surveyId, surveys.data);
    surveys.selected = surveys.data[index];

    surveys.loading = false;
    surveys.hydrated = true;
  };

  const dehydrate = (): void => {
    surveys.data = [];
    surveys.selected = null;
    surveys.hydrated = false;
    surveys.loading = false;
    surveys.creating = false;
  };

  // GETTERS
  const getSurveys = computed(() => surveys.data);
  const getSelected = computed(() => surveys.selected);
  const isLoading = computed(() => surveys.loading);
  const isHydrated = computed(() => surveys.hydrated);
  const isCreating = computed(() => surveys.creating);

  const fetchSurvey = async (link: string) => {
    return axiosInstance.get(`/survey/${link}`).then((r) => {
      surveys.selected = r.data.survey;
    });
  };

  const createSurvey = async (survey: Survey): Promise<void> => {
    if (surveys.creating) return;
    surveys.creating = true;

    const selected: Workspace = useWorkspace.getSelected as Workspace;

    return axiosInstance
      .post(`/workspace/${selected.id}/survey/create`, survey)
      .then((r) => {
        selected.surveys = pushToArray(selected.surveys, r.data.survey);
        surveys.creating = false;
      });
  };

  const update = async (survey: Survey): Promise<void> => {
    return axiosInstance.put(`/survey/${survey.id}`, survey).then((r) => {
      const index = find(survey.id, surveys.data);
      surveys.data[index] = r.data.survey;
      surveys.selected = r.data.survey;
    });
  };

  return {
    surveys,

    getSurveys,
    getSelected,
    isLoading,
    isHydrated,
    isCreating,

    fetchSurvey,
    createSurvey,
    update,

    hydrate,
    dehydrate,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSurveyStore, import.meta.hot));
}
