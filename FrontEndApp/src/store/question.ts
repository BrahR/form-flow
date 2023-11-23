import { acceptHMRUpdate, defineStore } from "pinia";
import type {} from "vite";
import { computed, ref } from "vue";
import { QuestionType } from "@/types/store/question";
import { defaultQuestionTypes } from "@/utils";

export const useQuestionStore = defineStore("question", () => {
  const question = ref({
    data: {} as any,
    selected: null,
    loading: false,
    hydrated: false,
  });

  const hydrate = async (type: QuestionType) => {
    if (type == null) return;
    question.value.loading = true;
    question.value.data = defaultQuestionTypes[type];
    question.value.loading = false;
    question.value.hydrated = true;
  };

  const dehydrate = () => {};

  const isLoading = computed(() => question.value.loading);
  const isHydrated = computed(() => question.value.hydrated);
  const getPreview = computed(() => question.value.data.preview);
  const getIcon = computed(() => question.value.data.icon);
  const getName = computed(() => question.value.data.name);
  const getComponents = computed(() => question.value.data.components);
  const getLabeled = computed(() => question.value.data.labeled);
  const getRandomize = computed(() => question.value.data.randomize);
  const getAnswerFormat = computed(() => question.value.data.answerFormat);
  // WELCOME
  const getStartButton = computed(() => question.value.data.startButton);
  // WELCOME

  // MULTIPLE CHOICE
  const getDescribed = computed(() => question.value.data.described);
  const getChoices = computed(() => question.value.data.choices);
  const getRequired = computed(() => question.value.data.required);
  const getVideoOrImage = computed(() => question.value.data.imageOrVideo);
  const getVerticalDisplay = computed(
    () => question.value.data.verticalDisplay
  );
  const getMultipleAnswers = computed(
    () => question.value.data.multipleAnswers
  );
  const getMultipleAnswersText = computed(() => {
    const multipleAnswers = getMultipleAnswers.value;

    if (!multipleAnswers.on) return "Choose one answer";
    return `${multipleAnswers.min} - ${multipleAnswers.max}`;
  });
  const getHideQuestionNumber = computed(
    () => question.value.data.hideQuestionNumber
  );
  // MULTIPLE CHOICE

  // had to be done xd
  const getLabelEditor = computed(
    () => question.value.data.labeled.editor.editor
  );
  const getLabelConfig = computed(
    () => question.value.data.labeled.editor.config
  );
  const getLabelReady = computed(
    () => question.value.data.labeled.editor.ready
  );
  const getLabel = computed(() => question.value.data.labeled.editor.model);
  const getDescEditor = computed(
    () => question.value.data.described.editor.editor
  );
  const getDescConfig = computed(
    () => question.value.data.described.editor.config
  );
  const getDescReady = computed(
    () => question.value.data.described.editor.ready
  );
  const getDesc = computed(() => question.value.data.described.editor.model);

  const appendChoice = (index: number) => {
    const maxId = getChoices.value.reduce(
      (max: number, choice: any) => Math.max(max, choice.id),
      0
    );

    // get last bigged id

    getChoices.value.splice(index + 1, 0, {
      id: maxId + 1,
      hidden: false,
      value: "",
      checked: false,
    });
  };

  const deleteChoice = (index: number) => {
    if (getChoices.value.length <= 2) return;
    getChoices.value.splice(index, 1);
  };

  return {
    question,

    getPreview,
    getStartButton,
    getIcon,
    getName,
    getComponents,
    getLabeled,
    getRandomize,
    getAnswerFormat,
    getDescribed,
    getChoices,
    getRequired,
    getVideoOrImage,
    getVerticalDisplay,
    getMultipleAnswers,
    getMultipleAnswersText,
    getHideQuestionNumber,

    getLabelEditor,
    getLabelConfig,
    getLabelReady,
    getLabel,
    getDescEditor,
    getDescConfig,
    getDescReady,
    getDesc,
    isLoading,
    isHydrated,

    appendChoice,
    deleteChoice,

    hydrate,
    dehydrate,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQuestionStore, import.meta.hot));
}
