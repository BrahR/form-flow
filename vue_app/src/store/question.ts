import WelcomeButton from "@/components/question/toggles/WelcomeButton.vue";
import LabelEditor from "@/components/question/toggles/LabelEditor.vue";
import DescriptionEditor from "@/components/question/toggles/DescriptionEditor.vue";
import VideoOrImageToggle from "@/components/question/toggles/VideoOrImageToggle.vue";
import RequiredToggle from "@/components/question/toggles/RequiredToggle.vue";
import ChoicesPictureToggle from "@/components/question/toggles/ChoicesPictureToggle.vue";
import HideQuestionNumberToggle from "@/components/question/toggles/HideQuestionNumberToggle.vue";
import VerticalDisplayToggle from "@/components/question/toggles/VerticalDisplayToggle.vue";
import MultipleAnswerToggle from "@/components/question/toggles/MultipleAnswerToggle.vue";
import RandomizeToggle from "@/components/question/toggles/RandomizeToggle.vue";
import MinMaxCharToggle from "@/components/question/toggles/MinMaxCharToggle.vue";
import HideLabelToggle from "@/components/question/toggles/HideLabelToggle.vue";
import DoubleDisplaySizeToggle from "@/components/question/toggles/DoubleDisplaySizeToggle.vue";
import RandomizeGroupToggle from "@/components/question/toggles/RandomizeGroupToggle.vue";
import AnswerOptionsToggle from "@/components/question/toggles/AnswerOptionsToggle.vue";
import SortToggle from "@/components/question/toggles/SortToggle.vue";
import AllowDecimalToggle from "@/components/question/toggles/AllowDecimalToggle.vue";
import StartAtZeroToggle from "@/components/question/toggles/StartAtZeroToggle.vue";
import ScaleToggle from "@/components/question/toggles/ScaleToggle.vue";
import RatingToggle from "@/components/question/toggles/RatingToggle.vue";
import LabelButtonText from "@/components/question/toggles/LabelButtonText.vue";
import FileTypeToggle from "@/components/question/toggles/FileTypeToggle.vue";
import MaximaumSizeToggle from "@/components/question/toggles/MaximaumSizeToggle.vue";
import AfterSubmitToggle from "@/components/question/toggles/AfterSubmitToggle.vue";
import DefaultEndingToggle from "@/components/question/toggles/DefaultEndingToggle.vue";
import ReloadRedirectToggle from "@/components/question/toggles/ReloadRedirectToggle.vue";
import AutoReloadToggle from "@/components/question/toggles/AutoReloadToggle.vue";
import MultipleChoicesToggle from "@/components/question/toggles/MultipleChoicesToggle.vue";
import RankingChoicesToggle from "@/components/question/toggles/RankingChoicesToggle.vue";
import FixNumbersToggle from "@/components/question/toggles/FixNumbersToggle.vue";
import ShareSurveyToggle from "@/components/question/toggles/ShareSurveyToggle.vue";
import GeneralTextRulesToggle from "@/components/question/toggles/GeneralTextRulesToggle.vue";
import ButtonToggle from "@/components/question/toggles/ButtonToggle.vue";
import TextAnswerType from "@/components/question/toggles/answer_types/TextAnswerType.vue";
import TextAnswerInput from "@/components/question/preview/answer_input_types/TextAnswerInput.vue";
import DateAnswerType from "@/components/question/toggles/answer_types/DateAnswerType.vue";
import DateAnswerInput from "@/components/question/preview/answer_input_types/DateAnswerInput.vue";
import PhoneAnswerType from "@/components/question/toggles/answer_types/PhoneAnswerType.vue";
import PhoneAnswerInput from "@/components/question/preview/answer_input_types/PhoneAnswerInput.vue";
import NumericAnswerType from "@/components/question/toggles/answer_types/NumericAnswerType.vue";
import NumericAnswerInput from "@/components/question/preview/answer_input_types/NumericAnswerInput.vue";
import EnglishLetterAnswerType from "@/components/question/toggles/answer_types/EnglishLetterAnswerType.vue";
import EnglishLetterAnswerInput from "@/components/question/preview/answer_input_types/EnglishLetterAnswerInput.vue";
import TimeAnswerType from "@/components/question/toggles/answer_types/TimeAnswerType.vue";
import TimeAnswerInput from "@/components/question/preview/answer_input_types/TimeAnswerInput.vue";
import CustomAnswerType from "@/components/question/toggles/answer_types/CustomAnswerType.vue";
import CustomAnswerInput from "@/components/question/preview/answer_input_types/CustomAnswerInput.vue";
import LongTextAnswerType from "@/components/question/toggles/answer_types/LongTextAnswerType.vue";
import LongTextAnswerInput from "@/components/question/preview/answer_input_types/LongTextAnswerInput.vue";
import GeneralTextPreview from "@/components/question/preview/GeneralTextPreview.vue";
import GeneralTextIcon from "@/components/survey/icons/GeneralTextIcon.vue";

import type { GeneralTextType, Statement } from "@/types/store/question";

import type {
  Welcome,
  GeneralText,
  MultipleChoice,
  PictureChoice,
  QuestionGroup,
  OpinionScale,
  Rating,
  Question,
  QuestionType,
  Ranking,
  FileUpload,
  hasHideQuestionNumber,
  hasImageOrVideo,
  hasRandomize,
  hasRequired,
  hasHiddenLabel,
  hasDoubleDisplay,
  hasVerticalDisplay,
  hasMultipleAnswers,
  hasButton,
  hasScale,
} from "@/types/store/question";
import { acceptHMRUpdate, defineStore } from "pinia";
import type {} from "vite";
import { computed, ref } from "vue";
import axiosInstance from "@/axios";
import { defaultQuestions } from "@/utils/defaultQuestions";
import { getAsyncIcon, getAsyncPreview, initEditor } from "@/utils";

export const useQuestionStore = defineStore("question", () => {
  const questions = ref<Question>(defaultQuestions);
  // const selected = ref<Question[QuestionType]>(null as any);
  const selected = ref<FileUpload>(null as any);
  const loading = ref(false);
  const hydrated = ref(false);

  const hydrate = async (type: QuestionType | null) => {
    if (type == null) return;
    loading.value = true;
    // selected.value = questions.value[type];
    selected.value = {
      type: "FileUpload",
      name: "File Upload",
      preview: getAsyncPreview("FileUploadPreview"),
      icon: getAsyncIcon("FileUploadIcon"),
      action: false,
      labeled: {
        on: true,
        editor: initEditor(),
      },
      described: {
        on: false,
        editor: initEditor(),
      },
      imageOrVideo: {
        on: false,
      },
      required: {
        on: false,
      },
      customExtension: {
        on: false,
        value: [],
        error: "",
      },
      maxFileSize: {
        on: false, // should be disabled later
        type: "MB",
        value: 5000,
      },
      possible: {
        sizeUnit: ["KB", "MB"],
      },
      hideQuestionNumber: {
        on: false,
      },
      components: [
        LabelEditor,
        DescriptionEditor,
        VideoOrImageToggle,
        RequiredToggle,
        FileTypeToggle,
        MaximaumSizeToggle,
        HideQuestionNumberToggle,
      ],
    };
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
    () => (selected.value as hasImageOrVideo).imageOrVideo
  );
  const getRequired = computed(() => (selected.value as hasRequired).required);
  const getHideQuestionNumber = computed(
    () => (selected.value as hasHideQuestionNumber).hideQuestionNumber
  );
  const getIsRandomize = computed({
    get: () => {
      return (selected.value as hasRandomize).randomize.on;
    },
    set: (value) => {
      (selected.value as hasRandomize).randomize.on = value;
    },
  });
  const getIsHiddenLabel = computed({
    get: () => {
      return (selected.value as hasHiddenLabel).hiddenLabel.on;
    },
    set: (value) => {
      (selected.value as hasHiddenLabel).hiddenLabel.on = value;
    },
  });
  const getIsDoubleDisplaySize = computed({
    get: () => {
      return (selected.value as hasDoubleDisplay).doubleDisplaySize.on;
    },
    set: (value) => {
      (selected.value as hasDoubleDisplay).doubleDisplaySize.on = value;
    },
  });
  const getIsVerticalDisplay = computed({
    get: () => {
      return (selected.value as hasVerticalDisplay).verticalDisplay.on;
    },
    set: (value) => {
      (selected.value as hasVerticalDisplay).verticalDisplay.on = value;
    },
  });
  const getButton = computed(() => (selected.value as hasButton).button);
  const getMultipleAnswers = computed(
    () => (selected.value as hasMultipleAnswers).multipleAnswers
  );
  const getScaleParameters = computed({
    get: () => {
      return (selected.value as hasScale).parameters;
    },
    set: (value) => {
      (selected.value as hasScale).parameters = value;
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

export type QuestionStore = ReturnType<typeof useQuestionStore>;

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQuestionStore, import.meta.hot));
}
