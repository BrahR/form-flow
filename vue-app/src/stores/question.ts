import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, ref, Ref } from "vue";
import axiosInstance from "@/axios.ts";
import { pushToArray } from "@/utils";

export const useQuestionStore = defineStore("question", () => {
  const data: Ref<Question[] | null> = ref(null);
  const loading = ref(false);
  const hydrating = ref(false);
  const hydrated = ref(false);

  const hydrate = (surveyId: number) => {
    console.log("Hydrating question store");
    if (hydrating.value) return;
    hydrating.value = true;
    hydrated.value = false;
    fetch(surveyId)
      .then((questions) => {
        data.value = questions;
        hydrated.value = true;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        hydrating.value = false;
      });
    hydrating.value = false;
  };

  const dehydrate = () => {
    console.log("Dehydrating question store");
    hydrating.value = false;
    data.value = null;
    hydrated.value = false;
  };

  const welcome = computed(() => {
    return data.value?.find(
      (question): question is Question<Welcome> =>
        question.questionable.type === "Welcome",
    );
  });

  const questions = computed(() => {
    return data.value?.filter(
      (question) => !["Welcome", "Ending"].includes(question.questionable.type),
    );
  });

  const ending = computed(() => {
    return data.value?.find(
      (question): question is Question<Ending> =>
        question.questionable.type === "Ending",
    );
  });

  const fetch = async (surveyId: number) => {
    return axiosInstance
      .get<ApiResponse<Question[]>>(`/surveys/${surveyId}/questions`)
      .then((res) => res.data.data);
  };

  const create = (surveyId: number, payload: unknown) => {
    if (!surveyId || !payload) return;
    console.log(payload);
    loading.value = true;
    const result = axiosInstance
      .post<ApiResponse<Question>>(`surveys/${surveyId}/questions`, payload)
      .then((res) => {
        data.value = pushToArray(data.value, res.data.data);
        console.log("Question created", res.data.data);
      });
    loading.value = false;

    return result;
  };

  const update = () => {};

  const remove = async (surveyId: number, questionId: number) => {
    if (!surveyId || !questionId) return;

    return axiosInstance
      .delete(`surveys/${surveyId}/questions/${questionId}`)
      .then(() => {
        if (!data.value) return;
        data.value = data.value.filter(
          (question) => question.id !== questionId,
        );
      });
  };

  return {
    data,
    loading,
    hydrating,
    hydrated,
    welcome,
    questions,
    ending,

    hydrate,
    dehydrate,
    create,
    update,
    remove,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQuestionStore, import.meta.hot));
}
