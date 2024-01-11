// this can be done in a better way but i got lazy
import axiosInstance from "@/axios";
import type {} from "vite";
import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, ref, Ref } from "vue";
import { defaultQuestions } from "@/utils/defaultQuestions";
import { useQuestionStore } from "@/store/question";

export const useQuestionBuilderStore = defineStore("questionBuilder", () => {
  const useQuestion = useQuestionStore();
  const questions: Ref<QuestionObject> = ref(defaultQuestions);
  const selected: Ref<QuestionObject[QuestionType]> = ref(null as never);
  // const selected = ref<Endings>(null as any);
  const loading = ref(false);
  const hydrated = ref(false);

  const hydrate = async (type: QuestionType | null) => {
    if (type == null) return;
    loading.value = true;
    selected.value = questions.value[type];
    loading.value = false;
    hydrated.value = true;
  };

  const dehydrate = () => {};

  const postQuestion = async (surveyId: number | null) => {
    const data = selected.value.getData;
    if (!data || !surveyId) return;

    const response = await axiosInstance.post(
      `/survey/${surveyId}/question`,
      data
    );

    console.log(response);
    if (response.status === 201) {
      useQuestion.data.push(response.data.data);
      console.log(useQuestion.data);
    }
  };

  const isLoading = computed(() => loading.value);
  const isHydrated = computed(() => hydrated.value);
  const getPreview = computed(() => selected.value.preview);
  const getIcon = computed(() => selected.value.icon);
  const getName = computed(() => selected.value.name);
  const getComponents = computed(() => selected.value.components);
  const getLabeled = computed(() => selected.value.labeled);
  const getLabelModel = computed({
    get: () => {
      return selected.value.labeled.editor.model;
    },
    set: (value) => {
      selected.value.labeled.editor.model = value;
    },
  });
  const getDescribed = computed(() => selected.value.described);
  const getDescModel = computed({
    get: () => {
      return selected.value.described.editor.model;
    },
    set: (value) => {
      selected.value.described.editor.model = value;
    },
  });
  const getVideoOrImage = computed(
    () => (selected.value as Has<"imageOrVideo">).imageOrVideo
  );
  const getRequired = computed(
    () => (selected.value as Has<"required">).required
  );
  const getHideQuestionNumber = computed(
    () => (selected.value as Has<"hideQuestionNumber">).hideQuestionNumber
  );
  const getIsRandomize = computed({
    get: () => {
      return (selected.value as Has<"randomize">).randomize.on;
    },
    set: (value) => {
      (selected.value as Has<"randomize">).randomize.on = value;
    },
  });
  const getIsHiddenLabel = computed({
    get: () => {
      return (selected.value as Has<"hiddenLabel">).hiddenLabel.on;
    },
    set: (value) => {
      (selected.value as Has<"hiddenLabel">).hiddenLabel.on = value;
    },
  });
  const getIsDoubleDisplaySize = computed({
    get: () => {
      return (selected.value as Has<"doubleDisplaySize">).doubleDisplaySize.on;
    },
    set: (value) => {
      (selected.value as Has<"doubleDisplaySize">).doubleDisplaySize.on = value;
    },
  });
  const getIsVerticalDisplay = computed({
    get: () => {
      return (selected.value as Has<"verticalDisplay">).verticalDisplay.on;
    },
    set: (value) => {
      (selected.value as Has<"verticalDisplay">).verticalDisplay.on = value;
    },
  });
  const getButton = computed(() => (selected.value as Has<"button">).button);
  const getMultipleAnswers = computed(
    () => (selected.value as Has<"multipleAnswers">).multipleAnswers
  );
  const getScaleParameters = computed({
    get: () => {
      return (selected.value as Has<"parameters">).parameters;
    },
    set: (value) => {
      (selected.value as Has<"parameters">).parameters = value;
    },
  });

  // question data getters
  const getAnswerFormat = computed(
    () => (selected.value as GeneralText).answerFormat
  );
  const getCustomError = computed({
    get: () => {
      return (selected.value as GeneralText).answerFormat.selected.errorMessage;
    },
    set: (value) => {
      (selected.value as GeneralText).answerFormat.selected.errorMessage =
        value;
    },
  });
  const getRulesFormat = computed({
    get: () => {
      return (
        (selected.value as GeneralText).answerFormat.selected.rules?.format ??
        ""
      );
    },
    set: (value) => {
      (selected.value as GeneralText).answerFormat.selected.rules!.format =
        value;
    },
  });
  const getIsAnswerError = computed({
    get: () => {
      return (selected.value as GeneralText).answerFormat.selected.rules?.error;
    },
    set: (value) => {
      (selected.value as GeneralText).answerFormat.selected.rules!.error =
        value;
    },
  });
  const getRules = computed(
    () => (selected.value as GeneralText).answerFormat.selected.rules
  );
  const getSelectedFormat = computed({
    get: () => {
      return (selected.value as GeneralText).answerFormat.selected.rules!
        .selectedFormat;
    },
    set: (value) => {
      (
        selected.value as GeneralText
      ).answerFormat.selected.rules!.selectedFormat = value;
    },
  });
  const getRulesPlaceholder = computed({
    get: () => {
      return (
        (selected.value as GeneralText).answerFormat.selected.rules
          ?.placeholder ?? ""
      );
    },
    set: (value) => {
      (selected.value as GeneralText).answerFormat.selected.rules!.placeholder =
        value;
    },
  });
  const getRulesRegex = computed({
    get: () => {
      return (selected.value as GeneralText).answerFormat.selected.rules?.regex;
    },
    set: (value) => {
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
  const getRankingChoices = computed(() => (selected.value as Ranking).choices);
  const getSelectedRandmoize = computed({
    get: () => {
      return (selected.value as QuestionGroup).randomize.selected;
    },
    set: (value) => {
      (selected.value as QuestionGroup).randomize.selected = value;
    },
  });
  const getIsStartZero = computed({
    get: () => {
      return (selected.value as OpinionScale).startAtZero.on;
    },
    set: (value) => {
      (selected.value as OpinionScale).startAtZero.on = value;
    },
  });
  const getScaleLabels = computed(() => {
    return (selected.value as OpinionScale).labels;
  });
  const getRating = computed(() => (selected.value as Rating).rating);
  const getIsFixNumbers = computed({
    get: () => {
      return (selected.value as Ranking).fixNumbers.on;
    },
    set: (value) => {
      (selected.value as Ranking).fixNumbers.on = value;
    },
  });
  const getUnits = computed(() => {
    return (selected.value as FileUpload).possible.sizeUnit;
  });
  const getFileUnit = computed({
    get: () => {
      return (selected.value as FileUpload).maxFileSize.type;
    },
    set: (value) => {
      (selected.value as FileUpload).maxFileSize.type = value;
    },
  });
  const getMaxFileSize = computed({
    get: () => {
      return (selected.value as FileUpload).maxFileSize.value;
    },
    set: (value) => {
      (selected.value as FileUpload).maxFileSize.value = value;
    },
  });
  const getIsCustomExtension = computed({
    get: () => {
      return (selected.value as FileUpload).customExtension.on;
    },
    set: (value) => {
      (selected.value as FileUpload).customExtension.on = value;
    },
  });
  const getCustomExtensions = computed({
    get: () => {
      return (selected.value as FileUpload).customExtension.value;
    },
    set: (value) => {
      (selected.value as FileUpload).customExtension.value = value;
    },
  });

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

  return {
    questions,
    selected,

    postQuestion,

    getPreview,
    getIcon,
    getName,
    getComponents,
    getLabeled,
    getLabelModel,
    getDescribed,
    getDescModel,
    getButton,
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
    getRankingChoices,
    getVideoOrImage,
    getRequired,
    getHideQuestionNumber,
    getIsRandomize,
    // getIsButton,
    // getButtonLabel,
    getIsHiddenLabel,
    getIsDoubleDisplaySize,
    getSelectedRandmoize,
    getScaleParameters,
    getIsStartZero,
    getScaleLabels,
    getRating,
    getIsFixNumbers,
    getUnits,
    getFileUnit,
    getMaxFileSize,
    getIsCustomExtension,
    getCustomExtensions,

    isLoading,
    isHydrated,

    appendChoice,
    deleteChoice,

    hydrate,
    dehydrate,
  };
});

export type QuestionBuilderStore = ReturnType<typeof useQuestionBuilderStore>;

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useQuestionBuilderStore, import.meta.hot)
  );
}
