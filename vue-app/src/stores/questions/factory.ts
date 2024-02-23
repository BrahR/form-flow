import { acceptHMRUpdate, defineStore } from "pinia";
import { useModal } from "@/composables/useModal.ts";
import { useWelcomeQuestionStore } from "@/stores/questions/welcome.ts";
import { computed, ref, Ref } from "vue";
import { useGeneralTextQuestionStore } from "@/stores/questions/generalText.ts";
import { useMultipleChoiceQuestionStore } from "@/stores/questions/multipleChoice.ts";
import { usePictureChoiceQuestionStore } from "@/stores/questions/pictureChoice.ts";
import { useGroupQuestionStore } from "@/stores/questions/group.ts";
import { useOpinionScaleQuestionStore } from "@/stores/questions/opinionScale.ts";
import { useRatingQuestionStore } from "@/stores/questions/rating.ts";
import { useRankingQuestionStore } from "@/stores/questions/ranking.ts";
import { useStatementQuestionStore } from "@/stores/questions/statement.ts";
import { useFileUploadQuestionStore } from "@/stores/questions/fileUpload.ts";
import { useEndingQuestionStore } from "@/stores/questions/ending.ts";

const questionTypes = [
  "welcome",
  "generalText",
  "multipleChoice",
  "pictureChoice",
  "questionGroup",
  "opinionScale",
  "rating",
  "ranking",
  "statement",
  "fileUpload",
  "ending",
];

const isQuestionType = (type: string | null): type is QuestionType => {
  return questionTypes.includes(type ?? "");
};

const stores = {
  welcome: useWelcomeQuestionStore(),
  generalText: useGeneralTextQuestionStore(),
  multipleChoice: useMultipleChoiceQuestionStore(),
  pictureChoice: usePictureChoiceQuestionStore(),
  questionGroup: useGroupQuestionStore(),
  opinionScale: useOpinionScaleQuestionStore(),
  rating: useRatingQuestionStore(),
  ranking: useRankingQuestionStore(),
  statement: useStatementQuestionStore(),
  fileUpload: useFileUploadQuestionStore(),
  ending: useEndingQuestionStore(),
} as const;

export const useQuestionFactoryStore = defineStore("question_factory", () => {
  const modals = useModal();
  const type: Ref<QuestionType | null> = ref(null);
  const hydrating = ref(false);
  const hydrated = ref(false);

  const hydrate = (questionType: string | null, question: Question | null) => {
    if (!questionType) return;
    console.log("Hydrating question factory");
    dehydrate();
    hydrating.value = true;
    if (isQuestionType(questionType)) {
      type.value = questionType;
      store.value!.hydrate(question);
      hydrated.value = true;
    } else
      console.error(
        "Caught an invalid question type while hydrating QuestionStore, most likely due to a typo in the question type. " +
          questionType,
      );
    hydrating.value = false;
  };

  const dehydrate = () => {
    hydrating.value = false;
    hydrated.value = false;
    type.value = null;
  };

  const store = computed(() => {
    console.log("called");
    if (!isQuestionType(type.value)) return null;
    return stores[type.value];
  });

  return {
    ...modals,
    hydrating,
    hydrated,
    hydrate,
    dehydrate,
    store,
  };
});

export type QuestionFactoryStore = PiniaStore<typeof useQuestionFactoryStore>;

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useQuestionFactoryStore, import.meta.hot),
  );
}
