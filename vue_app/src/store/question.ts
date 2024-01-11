// this can be done in a better way but i got lazy
import type {} from "vite";
import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, ref, Ref } from "vue";
import axiosInstance from "@/axios";

export const useQuestionStore = defineStore("question", () => {
  const data: Ref<QuestionBase<Questions>[]> = ref([]);
  const loading = ref(false);
  const hydrated = ref(false);

  const hydrate = async (surveyId: number | null): Promise<void> => {
    // dehydrate();
    // if (hydrated.value && selected.value?.id === surveyId) return;
    if (!surveyId) return;
    console.log("HYDRATING QUESTIONS WITH SURVEY ID: ", surveyId);
    loading.value = true;
    data.value = await fetchQuestions(surveyId);
    loading.value = false;
    hydrated.value = true;
  };

  const dehydrate = (): void => {
    // selected.value = null;
    hydrated.value = false;
    loading.value = false;
  };

  const fetchQuestions = async (surveyId: number | null) => {
    if (!surveyId) return;

    const response = await axiosInstance.get(`/survey/${surveyId}/question`);
    console.log(response.data.data);
    return response.data.data;
  };

  const getWelcome = computed((): QuestionBase<Welcome> | undefined => {
    return data.value.find(
      (q) => q.questionable.type === "Welcome"
    ) as unknown as QuestionBase<Welcome>;
  });

  const getListableQuestions = computed((): QuestionBase<Questions>[] => {
    return data.value.filter(
      (q) =>
        q.questionable.type !== "Welcome" && q.questionable.type !== "Endings"
    );
  });

  const getEndings = computed((): QuestionBase<Endings> | undefined => {
    return data.value.find(
      (q) => q.questionable.type === "Endings"
    ) as unknown as QuestionBase<Endings>;
  });

  return {
    data,

    fetchQuestions,
    getWelcome,
    getListableQuestions,
    getEndings,

    hydrate,
    dehydrate,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQuestionStore, import.meta.hot));
}
