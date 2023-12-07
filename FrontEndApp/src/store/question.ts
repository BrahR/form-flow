import { acceptHMRUpdate, defineStore } from "pinia";
import type {} from "vite";
import { computed, ref } from "vue";
import type {
  Welcome,
  GeneralText,
  MultipleChoice,
  PictureChoice,
  Question,
  QuestionType,
  hasHideQuestionNumber,
  hasImageOrVideo,
  hasRandomize,
  hasRequired,
  hasHiddenLabel,
  hasDoubleDisplay,
  hasVerticalDisplay,
  hasMultipleAnswers,
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
  const getIsHiddenLabel = computed({
    get() {
      return (selected.value as hasHiddenLabel).hiddenLabel.on;
    },
    set(value) {
      (selected.value as hasHiddenLabel).hiddenLabel.on = value;
    },
  });
  const getIsDoubleDisplaySize = computed({
    get() {
      return (selected.value as hasDoubleDisplay).doubleDisplaySize.on;
    },
    set(value) {
      (selected.value as hasDoubleDisplay).doubleDisplaySize.on = value;
    },
  });
  const getIsVerticalDisplay = computed({
    get() {
      return (selected.value as hasVerticalDisplay).verticalDisplay.on;
    },
    set(value) {
      (selected.value as hasVerticalDisplay).verticalDisplay.on = value;
    },
  });
  const getMultipleAnswers = computed(
    () => (selected.value as hasMultipleAnswers).multipleAnswers
  );

  // question data getters
  const getStartButton = computed(
    () => (selected.value as Welcome).startButton
  );
  const getAnswerFormat = computed(
    () => (selected.value as GeneralText).answerFormat
  );
  const getCustomError = computed({
    get() {
      return (selected.value as GeneralText).answerFormat.selected.errorMessage;
    },
    set(value) {
      (selected.value as GeneralText).answerFormat.selected.errorMessage =
        value;
    },
  });
  const getRulesFormat = computed({
    get() {
      return (
        (selected.value as GeneralText).answerFormat.selected.rules?.format ??
        ""
      );
    },
    set(value) {
      (selected.value as GeneralText).answerFormat.selected.rules!.format =
        value;
    },
  });
  const getIsAnswerError = computed({
    get() {
      return (selected.value as GeneralText).answerFormat.selected.rules?.error;
    },
    set(value) {
      (selected.value as GeneralText).answerFormat.selected.rules!.error =
        value;
    },
  });
  const getRules = computed(
    () => (selected.value as GeneralText).answerFormat.selected.rules
  );
  const getSelectedFormat = computed({
    get() {
      return (selected.value as GeneralText).answerFormat.selected.rules!
        .selectedFormat;
    },
    set(value) {
      (
        selected.value as GeneralText
      ).answerFormat.selected.rules!.selectedFormat = value;
    },
  });
  const getRulesPlaceholder = computed({
    get() {
      return (
        (selected.value as GeneralText).answerFormat.selected.rules
          ?.placeholder ?? ""
      );
    },
    set(value) {
      (selected.value as GeneralText).answerFormat.selected.rules!.placeholder =
        value;
    },
  });
  const getRulesRegex = computed({
    get() {
      return (selected.value as GeneralText).answerFormat.selected.rules?.regex;
    },
    set(value) {
      (selected.value as GeneralText).answerFormat.selected.rules!.regex =
        value;
    },
  });

  const getMultipleAnswersText = computed(() => {
    const multipleAnswers = getMultipleAnswers.value;

    if (!multipleAnswers.on) return "Choose one answer";
    return `${multipleAnswers.min} - ${multipleAnswers.max}`;
  });
  const getMultipleChoices = computed(
    () => (selected.value as MultipleChoice).choices
  );

  const getPictureChoices = computed(
    () => (selected.value as PictureChoice).choices
  );

  const appendChoice = <T>(index: number, array: T[], data: unknown) => {
    const maxId = array.reduce(
      (max: number, choice: any) => Math.max(max, choice.id),
      0
    );

    array.splice(index + 1, 0, {
      id: maxId + 1,
      hidden: false,
      ...(data as T),
    });
  };

  const deleteChoice = <T>(index: number, array: T[]) => {
    if (array.length <= 2) return;
    array.splice(index, 1);
  };

  // const appendMultipleChoice = (index: number) => {
  //   const maxId = getMultipleChoices.value.reduce(
  //     (max: number, choice: any) => Math.max(max, choice.id),
  //     0
  //   );

  //   getMultipleChoices.value.splice(index + 1, 0, {
  //     id: maxId + 1,
  //     hidden: false,
  //     value: "",
  //     checked: false,
  //   });
  // };

  // const appendPictureChoice = (index: number) => {
  //   const maxId = getMultipleChoices.value.reduce(
  //     (max: number, choice: any) => Math.max(max, choice.id),
  //     0
  //   );

  //   getPictureChoices.value.splice(index + 1, 0, {
  //     id: maxId + 1,
  //     hidden: false,
  //     label: "",
  //     image: "https://i.ebayimg.com/images/g/Dv0AAOSwl9BWL6v9/s-l1200.webp",
  //     checked: false,
  //   });
  // };

  // const deletePictureChoice = (index: number) => {
  //   if (getPictureChoices.value.length <= 2) return;
  //   getPictureChoices.value.splice(index, 1);
  //   // getPictureChoices.value;
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
    getIsAnswerError,
    getRules,
    getSelectedFormat,
    getRulesPlaceholder,
    getRulesRegex,
    getIsVerticalDisplay,
    getMultipleAnswers,
    getMultipleAnswersText,
    getMultipleChoices,
    getPictureChoices,
    getVideoOrImage,
    getRequired,
    getHideQuestionNumber,
    getRandomize,
    getIsHiddenLabel,
    getIsDoubleDisplaySize,
    // getComponents,
    // getLabeled,
    // getRandomize,
    // getAnswerFormat,
    // getDescribed,
    // getMultipleChoices,
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

    appendChoice,
    deleteChoice,

    hydrate,
    dehydrate,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQuestionStore, import.meta.hot));
}
