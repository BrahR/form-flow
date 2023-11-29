import { acceptHMRUpdate, defineStore } from "pinia";
import type {} from "vite";
import { computed, ref } from "vue";
import type {
  MultipleChoice,
  Question,
  QuestionType,
  ShortText,
  Welcome,
  hasHideQuestionNumber,
  hasImageOrVideo,
  hasRandomize,
  hasRequired,
} from "@/types/store/question";
import { defaultQuestionTypes } from "@/utils";

export const useQuestionStore = defineStore("question", () => {
  const questions = ref<Question>(defaultQuestionTypes);
  const selected = ref<Question[QuestionType]>(null as any);
  const loading = ref(false);
  const hydrated = ref(false);

  // const question = ref({
  //   data: {} as Question[QuestionType],
  //   selected: null,
  //   loading: false,
  //   hydrated: false,
  // });

  const hydrate = async (type: QuestionType | null) => {
    if (type == null) return;
    loading.value = true;
    selected.value = questions.value[type];
    loading.value = false;
    hydrated.value = true;
  };

  const dehydrate = () => {};

  const isLoading = computed(() => loading.value);
  const isHydrated = computed(() => hydrated.value);
  const getPreview = computed(() => selected.value.preview);
  const getIcon = computed(() => selected.value.icon);
  const getName = computed(() => selected.value.name);
  const getComponents = computed(() => selected.value.components);
  const getLabeled = computed(() => selected.value.labeled);
  const getLabelModel = computed({
    get() {
      return selected.value.labeled.editor.model;
    },
    set(value) {
      selected.value.labeled.editor.model = value;
    },
  });
  const getDescribed = computed(() => selected.value.described);
  const getDescModel = computed({
    get() {
      return selected.value.described.editor.model;
    },
    set(value) {
      selected.value.described.editor.model = value;
    },
  });
  const getStartButton = computed(
    () => (selected.value as Welcome).startButton
  );
  const getAnswerFormat = computed(
    () => (selected.value as ShortText).answerFormat
  );
  const getCustomError = computed({
    get() {
      return (selected.value as ShortText).answerFormat.selected.errorMessage;
    },
    set(value) {
      (selected.value as ShortText).answerFormat.selected.errorMessage = value;
    },
  });
  const getRulesFormat = computed({
    get() {
      return (
        (selected.value as ShortText).answerFormat.selected.rules?.format ?? ""
      );
    },
    set(value) {
      (selected.value as ShortText).answerFormat.selected.rules!.format = value;
    },
  });
  const getRulesError = computed({
    get() {
      return (selected.value as ShortText).answerFormat.selected.rules?.error;
    },
    set(value) {
      (selected.value as ShortText).answerFormat.selected.rules!.error = value;
    },
  });
  const getVerticalDisplay = computed(
    () => (selected.value as MultipleChoice).verticalDisplay
  );
  const getMultipleAnswers = computed(
    () => (selected.value as MultipleChoice).multipleAnswers
  );
  const getVideoOrImage = computed(
    () => (selected.value as hasImageOrVideo).imageOrVideo
  );
  const getRequired = computed(() => (selected.value as hasRequired).required);
  const getHideQuestionNumber = computed(
    () => (selected.value as hasHideQuestionNumber).hideQuestionNumber
  );
  const getRandomize = computed(
    () => (selected.value as hasRandomize).randomize
  );

  // const getChoices = computed(() => question.value.data.choices);
  // const getVideoOrImage = computed(() => question.value.data.imageOrVideo);
  // const getVerticalDisplay = computed(
  //   () => question.value.data.verticalDisplay
  // );
  // const getMultipleAnswers = computed(
  //   () => question.value.data.multipleAnswers
  // );
  // const getMultipleAnswersText = computed(() => {
  //   const multipleAnswers = getMultipleAnswers.value;

  //   if (!multipleAnswers.on) return "Choose one answer";
  //   return `${multipleAnswers.min} - ${multipleAnswers.max}`;
  // });

  // // MULTIPLE CHOICE

  // const getDesc = computed(() => question.value.data.described.editor.model);

  // const appendChoice = (index: number) => {
  //   const maxId = getChoices.value.reduce(
  //     (max: number, choice: any) => Math.max(max, choice.id),
  //     0
  //   );

  //   // get last bigged id

  //   getChoices.value.splice(index + 1, 0, {
  //     id: maxId + 1,
  //     hidden: false,
  //     value: "",
  //     checked: false,
  //   });
  // };

  // const deleteChoice = (index: number) => {
  //   if (getChoices.value.length <= 2) return;
  //   getChoices.value.splice(index, 1);
  // };

  return {
    questions,
    selected,

    getPreview,
    getIcon,
    getName,
    getComponents,
    getLabeled,
    getLabelModel,
    getDescribed,
    getDescModel,
    getStartButton,
    getAnswerFormat,
    getCustomError,
    getRulesFormat,
    getRulesError,
    getVerticalDisplay,
    getMultipleAnswers,
    getVideoOrImage,
    getRequired,
    getHideQuestionNumber,
    getRandomize,
    // getComponents,
    // getLabeled,
    // getRandomize,
    // getAnswerFormat,
    // getDescribed,
    // getChoices,
    // getRequired,
    // getVideoOrImage,
    // getVerticalDisplay,
    // getMultipleAnswers,
    // getMultipleAnswersText,
    // getHideQuestionNumber,

    // getLabelEditor,
    // getLabelConfig,
    // getLabelReady,
    // getLabel,
    // getDescEditor,
    // getDescConfig,
    // getDescReady,
    // getDesc,
    isLoading,
    isHydrated,

    // appendChoice,
    // deleteChoice,

    hydrate,
    dehydrate,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQuestionStore, import.meta.hot));
}
