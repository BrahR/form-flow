// this can be done in a better way but i got lazy
import type {} from "vite";
import { acceptHMRUpdate, defineStore } from "pinia";
import { ref } from "vue";
import axiosInstance from "@/axios";

export const _useQuestionStore = defineStore("question", () => {
  const data = ref<Question[]>([]);
  const loading = ref(false);
  const hydrated = ref(false);

  const hydrate = async (surveyId: number | null): Promise<void> => {
    // dehydrate();
    // if (hydrated.value && selected.value?.id === surveyId) return;
    if (!surveyId) return;
    console.log("HYDRATING QUESTIONS WITH SURVEY ID: ", surveyId);
    loading.value = true;
    data.value = await getQuestions(surveyId);
    loading.value = false;
    hydrated.value = true;
  };

  const dehydrate = (): void => {
    // selected.value = null;
    hydrated.value = false;
    loading.value = false;
  };

  const getQuestions = async (surveyId: number | null) => {
    if (!surveyId) return;

    const response = await axiosInstance.get(`/survey/${surveyId}/question`);
    console.log(response.data.data);
    return response.data.data;
  };

  return {
    data,

    getQuestions,

    hydrate,
    dehydrate,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(_useQuestionStore, import.meta.hot));
}
