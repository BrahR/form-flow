import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { useEditor } from "@/composables/useEditor.ts";
import type { TextAnswerType } from "@/types/stores/TextAnswerType.ts";

type RandomizeGroupType = {
  id: number;
  name: string;
  value: number;
};

type HasId = {
  id: number;
};

export const useQuestionTogglesStore = defineStore("question_toggles", () => {
  // welcome
  const welcomeButton = reactive({
    value: "",
    error: false,
  });

  // generalText
  const textAnswerFormat = reactive({
    types: [] as TextAnswerType[],
    selected: {} as TextAnswerType,
    error: {
      text: false,
      longText: false,
      date: false,
      phoneNumber: false,
      numeric: false,
      englishLetters: false,
      time: false,
      custom: false,
    },
  });

  const customErrorMessage = computed({
    get: () => textAnswerFormat.selected.errorMessage,
    set: (value: string) => {
      textAnswerFormat.selected.errorMessage = value;
    },
  });

  const formatRule = computed({
    get: () => textAnswerFormat.selected.rules.format ?? "",
    set: (value: string) => {
      textAnswerFormat.selected.rules.format = value;
    },
  });

  const placeholderRule = computed({
    get: () => textAnswerFormat.selected.rules.placeholder ?? "",
    set: (value: string) => {
      textAnswerFormat.selected.rules.placeholder = value;
    },
  });

  const validationErrorRule = computed({
    get: () => textAnswerFormat.selected.rules.validationError ?? "",
    set: (value: string) => {
      textAnswerFormat.selected.rules.validationError = value;
    },
  });

  // multipleChoice
  const multipleChoices = ref([
    {
      id: 1,
      value: "",
      hidden: false,
      checked: false,
    },
    {
      id: 2,
      value: "",
      hidden: false,
      checked: false,
    },
  ]);
  const verticalDisplay = ref(false);

  const isMultiCDuplicate = computed(() => {
    return multipleChoices.value.some((choice, i) => {
      return (
        multipleChoices.value.map((c) => c.value).indexOf(choice.value) !== i &&
        !choice.hidden &&
        !!choice.value
      );
    });
  });

  const isMultiCEmpty = computed(() => {
    return (
      multipleChoices.value.filter((c) => !!c.value && !c.hidden).length < 2
    );
  });

  // pictureChoice
  const pictureChoices = ref([
    {
      id: 1,
      hidden: false,
      value: "boe",
      image: "https://i.ebayimg.com/images/g/Dv0AAOSwl9BWL6v9/s-l1200.webp",
      checked: false,
    },
    {
      id: 2,
      hidden: false,
      value: "jiden",
      image: "https://i.ebayimg.com/images/g/Dv0AAOSwl9BWL6v9/s-l1200.webp",
      checked: false,
    },
  ]);
  const doublePictureSize = ref(false);

  const isPictureChoiceEmpty = computed(() => {
    return (
      pictureChoices.value.filter((c) => !c.hidden && c.image !== "").length < 2
    );
  });

  // questionGroup
  const questionGroupButton = reactive({
    value: "",
    error: false,
  });
  const randomizeGroup = reactive({
    on: false,
    selected: {} as RandomizeGroupType,
  });

  // opinionScale
  const scaleType = reactive({
    number: true,
    stars: false,
    slider: false,
  });
  const scaleParams = reactive({
    value: 3,
    min: 2,
    max: 10,
  });
  const scaleLabels = reactive({
    left: "",
    right: "",
    center: "",
  });
  const startAtZero = ref(false);

  // rating
  const rating = reactive({
    type: 0 as 0 | 1 | 2,
    model: 0,
  });

  const ratingParams = reactive({
    value: 1,
    min: 1,
    max: 10,
  });

  // ranking
  const rankingChoices = ref([
    {
      id: 1,
      value: "",
      // error: false,
    },
    {
      id: 2,
      value: "",
      // error: false,
    },
  ]);
  const fixRankingNumbers = ref(false);

  const isRankingDuplicate = computed(() => {
    return rankingChoices.value.some((choice, i) => {
      return (
        rankingChoices.value.map((c) => c.value).indexOf(choice.value) !== i &&
        !!choice.value
      );
    });
  });

  const isRankingEmpty = computed(() => {
    return (
      rankingChoices.value.filter((c) => !!c.value).length !==
      rankingChoices.value.length
    );
  });

  // statement
  const statementButton = reactive({
    value: "",
    error: false,
  });

  // fileUpload
  const customFileExtensions = reactive({
    on: false,
    extensions: [] as { name: string; value: string }[],
    error: false,
  });
  const customFileMaxSize = reactive<{
    on: boolean;
    unit: "B" | "KB" | "MB" | "GB";
    size: number;
  }>({
    on: false,
    unit: "KB",
    size: 0,
  });
  const allowedSizeUnits = ["B", "KB", "MB"] as const;

  // Ending is not done yet
  const endingAfterSubmit = ref<"custom" | "redirect">("custom");
  const endingShareButton = ref(false);
  const defaultEnding = ref(false);
  const endingReloadRedirect = reactive({
    on: false,
    label: "",
    type: false,
  });
  const endingLabel = reactive({
    on: false,
    value: "",
  });
  const endingAutoReload = reactive({
    on: false,
    seconds: 0,
  });

  // shared
  const label = useEditor();
  const description = useEditor();
  const imageOrVideo = reactive({
    on: false,
    url: "",
    error: false,
  });
  const required = ref(false);
  const hideQuestionNumber = ref(false);
  const randomize = ref(false);
  const hiddenLabel = ref(false);
  const multipleAnswers = reactive({
    on: false,
    min: 1,
    max: 10,
    error: false,
  });
  const multipleAnswersText = computed(() => {
    if (!multipleAnswers.on) return "Choose one answer";
    return `${multipleAnswers.min} - ${multipleAnswers.max}`;
  });

  // Helpers
  const appendChoice = <T extends HasId>(
    index: number,
    array: T[],
    data: unknown,
  ) => {
    const maxId = array.reduce((max, choice) => Math.max(max, choice.id), 0);

    array.splice(index + 1, 0, {
      ...(data as T),
      id: maxId + 1,
      hidden: false,
    });
  };

  const deleteChoice = <T>(index: number, array: T[]) => {
    if (array.length <= 2) return;
    array.splice(index, 1);
  };

  return {
    // welcome
    welcomeButton,
    textAnswerFormat,
    // getters
    customErrorMessage,
    formatRule,
    placeholderRule,
    validationErrorRule,
    // multipleChoice
    multipleChoices,
    verticalDisplay,
    // getters
    isMultiCDuplicate,
    isMultiCEmpty,
    // pictureChoice
    pictureChoices,
    doublePictureSize,
    // getters
    isPictureChoiceEmpty,
    // questionGroup
    questionGroupButton,
    randomizeGroup,
    // opinionScale
    scaleType,
    scaleParams,
    scaleLabels,
    startAtZero,
    // rating
    rating,
    ratingParams,
    // ranking
    rankingChoices,
    fixRankingNumbers,
    // getters
    isRankingDuplicate,
    isRankingEmpty,
    // statement
    statementButton,
    // fileUpload
    customFileExtensions,
    customFileMaxSize,
    allowedSizeUnits,
    // ending
    endingAfterSubmit,
    endingShareButton,
    defaultEnding,
    endingReloadRedirect,
    endingLabel,
    endingAutoReload,
    // shared
    label,
    description,
    imageOrVideo,
    required,
    hideQuestionNumber,
    randomize,
    hiddenLabel,
    multipleAnswers,
    multipleAnswersText,
    // helpers
    appendChoice,
    deleteChoice,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useQuestionTogglesStore, import.meta.hot),
  );
}
