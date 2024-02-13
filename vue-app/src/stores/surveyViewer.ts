import type {} from "vite";
import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, Ref, ref } from "vue";
import { useQuestionStore } from "@/stores/question.ts";
import axiosInstance from "@/axios.ts";

export const useSurveyViewerStore = defineStore("survey_viewer", () => {
  const useQuestions = useQuestionStore();
  const survey: Ref<Survey | null> = ref(null);
  const welcome: Ref<Question<Welcome> | null> = ref(null);
  const questions: Ref<Question[]> = ref([]);
  const ending: Ref<Question<Ending> | null> = ref(null);
  const index = ref(0);
  const hydrated = ref(false);
  const hydrating = ref(false);
  const status: Ref<"not started" | "started" | "ending"> = ref("not started");
  let link: string | null = null;

  const hydrate = async (_link: string) => {
    console.log("Hydrating survey viewer store");
    hydrating.value = true;
    link = _link;
    survey.value = await fetch(link);
    welcome.value =
      survey.value.questions?.find(
        (question): question is Question<Welcome> =>
          question.questionable.type === "Welcome",
      ) ?? null;
    questions.value =
      survey.value.questions?.filter(
        (question) =>
          !["Welcome", "Ending"].includes(question.questionable.type),
      ) ?? [];
    console.log(questions.value);
    ending.value =
      survey.value.questions?.find(
        (question): question is Question<Ending> =>
          question.questionable.type === "Ending",
      ) ?? null;
  };

  const dehydrate = () => {
    hydrating.value = false;
    hydrated.value = false;
    useQuestions.dehydrate();
    welcome.value = null;
    questions.value = [];
    ending.value = null;
    index.value = 0;
    status.value = "not started";
    link = null;
  };

  const progress = computed(() => {
    return Math.ceil((index.value / questions.value.length) * 100);
  });

  const question = computed<Question | undefined>(() => {
    return questions.value[index.value];
  });

  const fetch = async (link: string) => {
    return axiosInstance
      .get<ApiResponse<Survey>>(`/viewer/${link}`)
      .then((res) => {
        return res.data.data;
      });
  };

  const nextQuestion = () => {
    console.log("Next question");
    console.log(questions.value.length);
    if (index.value < questions.value.length - 1) {
      index.value++;
    } else {
      status.value = "ending";
    }
  };

  const previousQuestion = () => {
    console.log("Previous question ");
    if (index.value > 0) {
      index.value--;
    }
  };

  return {
    welcome,
    questions,
    ending,
    hydrated,
    hydrating,
    status,
    index,
    progress,

    hydrate,
    dehydrate,
    question,
    nextQuestion,
    previousQuestion,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useSurveyViewerStore, import.meta.hot),
  );
}
