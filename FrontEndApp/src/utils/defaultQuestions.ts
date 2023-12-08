import { getAsyncIcon, getAsyncPreview, initEditor } from "@/utils";
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
import LabelButtonText from "@/components/question/toggles/LabelButtonText.vue";
import FileTypeToggle from "@/components/question/toggles/FileTypeToggle.vue";
import MaximaumSizeToggle from "@/components/question/toggles/MaximaumSizeToggle.vue";
import AfterSubmitToggle from "@/components/question/toggles/AfterSubmitToggle.vue";
import DefaultEndingToggle from "@/components/question/toggles/DefaultEndingToggle.vue";
import ReloadRedirectToggle from "@/components/question/toggles/ReloadRedirectToggle.vue";
import AutoReloadToggle from "@/components/question/toggles/AutoReloadToggle.vue";
import MultipleChoicesToggle from "@/components/question/toggles/MultipleChoicesToggle.vue";
import RankingChoicesToggle from "@/components/question/toggles/RankingChoicesToggle.vue";
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

import type { Question, GeneralTextType } from "@/types/store/question";

const types: GeneralTextType[] = [
  {
    value: "text",
    label: "Short text",
    toggle: TextAnswerType,
    input: TextAnswerInput,
    model: "",
    errorMessage: "",
    rules: {
      min: 0,
      max: 100,
      error: false,
    },
  },
  {
    value: "long-text",
    label: "Long text",
    toggle: LongTextAnswerType,
    input: LongTextAnswerInput,
    model: "",
    errorMessage: "",
    rules: {
      min: 0,
      max: 5000,
      error: false,
    },
  },
  {
    value: "date",
    label: "Date",
    toggle: DateAnswerType,
    input: DateAnswerInput,
    model: "",
    errorMessage: "Please enter a valid date",
    rules: {
      format: "yyyy/M/d",
      error: false,
    },
  },
  {
    value: "phone-number",
    label: "Phone number",
    toggle: PhoneAnswerType,
    input: PhoneAnswerInput,
    defaultCountry: "US",
    model: "",
    errorMessage: "Please enter a valid phone number",
    rules: {
      placeholder: "Enter a phone number",
      error: false,
    },
  },
  {
    value: "numeric",
    label: "Numeric characters",
    toggle: NumericAnswerType,
    input: NumericAnswerInput,
    model: "",
    errorMessage: "Please enter only numerical values",
    rules: {
      placeholder: "Enter a number",
      min: 0,
      max: 100,
      error: false,
      displayError: "",
    },
  },
  {
    value: "english-letters",
    label: "English letter",
    toggle: EnglishLetterAnswerType,
    input: EnglishLetterAnswerInput,
    model: "",
    errorMessage: "Please enter english letters only",
    rules: {
      placeholder: "Enter a letter",
      error: false,
    },
  },
  {
    value: "time",
    label: "Time",
    toggle: TimeAnswerType,
    input: TimeAnswerInput,
    model: "",
    errorMessage: "Please enter a valid time",
    rules: {
      placeholder: "Enter a letter",
      error: false,
    },
  },
  {
    value: "custom",
    label: "Custom pattern",
    toggle: CustomAnswerType,
    input: CustomAnswerInput,
    model: "",
    errorMessage: "",
    rules: {
      placeholder: "",
      format: "",
      error: false,
    },
  },
];

const defaultQuestionTypes: Question = {
  welcome: {
    name: "Welcome Page",
    preview: getAsyncPreview("WelcomePreview"),
    icon: getAsyncIcon("WelcomeIcon"),
    action: true,
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
    startButton: {
      value: "Start",
    },
    components: [
      VideoOrImageToggle,
      LabelEditor,
      DescriptionEditor,
      WelcomeButton,
    ],
  },
  generalText: {
    name: "General Text",
    preview: GeneralTextPreview,
    icon: GeneralTextIcon,
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      on: false,
      editor: initEditor(),
    },
    answerFormat: {
      on: false,
      types,
      selected: types[0],
    },
    imageOrVideo: {
      on: false,
    },
    required: {
      on: false,
    },
    hideQuestionNumber: {
      on: false,
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      GeneralTextRulesToggle,
      VideoOrImageToggle,
      RequiredToggle,
      HideQuestionNumberToggle,
    ],
  },
  multipleChoice: {
    name: "Multiple Choice",
    preview: getAsyncPreview("MultipleChoicePreview"),
    icon: getAsyncIcon("MultipleChoiceIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      on: false,
      editor: initEditor(),
    },
    choices: [
      {
        id: 1,
        hidden: false,
        value: "",
        checked: false,
      },
      {
        id: 2,
        hidden: false,
        value: "",
        checked: false,
      },
    ],
    required: {
      on: false,
    },
    imageOrVideo: {
      on: false,
    },
    randomize: {
      on: false,
    },
    verticalDisplay: {
      on: false,
    },
    multipleAnswers: {
      on: false,
      min: 1,
      max: 2,
    },
    hideQuestionNumber: {
      on: false,
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      MultipleChoicesToggle,
      RequiredToggle,
      VideoOrImageToggle,
      RandomizeToggle,
      VerticalDisplayToggle,
      MultipleAnswerToggle,
      HideQuestionNumberToggle,
    ],
  },
  longText: {
    name: "Long Text",
    preview: getAsyncPreview("LongTextPreview"),
    icon: getAsyncIcon("LongTextIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      on: false,
      editor: initEditor(),
    },
    answerFormat: {
      on: false,
      format: "textarea",
    },
    minMaxChar: {
      min: 0,
      max: 100,
    },
    required: {
      on: false,
    },
    imageOrVideo: {
      on: false,
    },
    hideQuestionNumber: {
      on: false,
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      MinMaxCharToggle,
      VideoOrImageToggle,
      RequiredToggle,
      HideQuestionNumberToggle,
    ],
  },
  pictureChoice: {
    name: "Picture Choice",
    preview: getAsyncPreview("PictureChoicePreview"),
    icon: getAsyncIcon("PictureChoiceIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      on: false,
      editor: initEditor(),
    },
    choices: [
      {
        id: 1,
        hidden: false,
        label: "boe",
        image: "https://i.ebayimg.com/images/g/Dv0AAOSwl9BWL6v9/s-l1200.webp",
        checked: false,
      },
      {
        id: 2,
        hidden: false,
        label: "jiden",
        image: "https://i.ebayimg.com/images/g/Dv0AAOSwl9BWL6v9/s-l1200.webp",
        checked: false,
      },
    ],
    required: {
      on: false,
    },
    imageOrVideo: {
      on: false,
    },
    randomize: {
      on: false,
    },
    hiddenLabel: {
      on: false,
    },
    doubleDisplaySize: {
      on: false,
    },
    multipleAnswers: {
      on: false,
      min: 1,
      max: 2,
    },
    hideQuestionNumber: {
      on: false,
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      ChoicesPictureToggle,
      RequiredToggle,
      VideoOrImageToggle,
      RandomizeToggle,
      HideLabelToggle,
      DoubleDisplaySizeToggle,
      MultipleAnswerToggle,
      HideQuestionNumberToggle,
    ],
  },
  questionGroup: {
    name: "Question Group",
    preview: getAsyncPreview("QuestionGroupPreview"),
    icon: getAsyncIcon("QuestionGroupIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      on: false,
      editor: initEditor(),
    },
    required: {
      on: false,
    },
    hideQuestionNumber: {
      on: false,
    },
    randomize: {
      on: false,
      selected: null as never,
    },
    button: {
      on: false,
      value: "Continue",
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      ButtonToggle,
      RequiredToggle,
      HideQuestionNumberToggle,
      RandomizeGroupToggle,
    ],
  },
  dropdown: {
    name: "Dropdown",
    preview: getAsyncPreview("DropdownPreview"),
    icon: getAsyncIcon("DropdownIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      on: false,
      editor: initEditor(),
    },
    answerOptions: [],
    imageOrVideo: {
      on: false,
    },
    required: {
      on: false,
    },
    randomize: {
      on: false,
    },
    sort: {
      on: false,
    },
    hideQuestionNumber: {
      on: false,
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      AnswerOptionsToggle,
      VideoOrImageToggle,
      RequiredToggle,
      RandomizeToggle,
      SortToggle,
      HideQuestionNumberToggle,
    ],
  },
  numerical: {
    name: "Numerical Answer",
    preview: getAsyncPreview("NumericalPreview"),
    icon: getAsyncIcon("NumericalAnswerIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    minMax: {
      min: 0,
      max: 100,
    },
    imageOrVideo: {
      on: false,
    },
    required: {
      on: false,
    },
    hideQuestionNumber: {
      on: false,
    },
    allowDecimal: {
      on: false,
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      MinMaxCharToggle,
      VideoOrImageToggle,
      RequiredToggle,
      HideQuestionNumberToggle,
      AllowDecimalToggle,
    ],
  },
  opinionScale: {
    name: "Opinion Scale",
    preview: getAsyncPreview("OpinionScalePreview"),
    icon: getAsyncIcon("OpinionScaleIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    scaleType: {
      number: {
        on: false,
      },
      stars: {
        on: false,
      },
      slider: {
        on: false,
      },
    },
    minMax: {
      min: 0,
      max: 100,
    },
    labels: {
      on: false,
      left: "",
      right: "",
      center: "",
    },
    imageOrVideo: {
      on: false,
    },
    required: {
      on: false,
    },
    startAtZero: {
      on: false,
    },
    hideQuestionNumber: {
      on: false,
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      ScaleToggle,
      VideoOrImageToggle,
      RequiredToggle,
      StartAtZeroToggle,
      HideQuestionNumberToggle,
    ],
  },
  email: {
    name: "Email",
    preview: getAsyncPreview("EmailPreview"),
    icon: getAsyncIcon("EmailIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    imageOrVideo: {
      on: false,
    },
    required: {
      on: false,
    },
    hideQuestionNumber: {
      on: false,
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      VideoOrImageToggle,
      RequiredToggle,
      HideQuestionNumberToggle,
    ],
  },
  rating: {
    name: "Rating",
    preview: getAsyncPreview("RatingPreview"),
    icon: getAsyncIcon("RatingIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    scaleType: {
      number: true,
      stars: false,
      slider: false,
    },
    minMax: {
      min: 0,
      max: 100,
    },
    imageOrVideo: {
      on: false,
    },
    required: {
      on: false,
    },
    hideQuestionNumber: {
      on: false,
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      ScaleToggle,
      VideoOrImageToggle,
      RequiredToggle,
      HideQuestionNumberToggle,
    ],
  },
  linkWeb: {
    name: "Link/Website",
    preview: getAsyncPreview("LinkWebPreview"),
    icon: getAsyncIcon("LinkWebsiteIcon"),
    action: false,
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    link: {
      on: false,
      value: "",
    },
    imageOrVideo: {
      on: false,
    },
    required: {
      on: false,
    },
    hideQuestionNumber: {
      on: false,
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      VideoOrImageToggle,
      RequiredToggle,
      HideQuestionNumberToggle,
    ],
  },
  ranking: {
    name: "Ranking",
    preview: getAsyncPreview("RankingPreview"),
    icon: getAsyncIcon("RankingIcon"),
    action: false,
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    choices: [
      {
        hidden: false,
        value: "",
        checked: false,
      },
      {
        hidden: false,
        value: "",
        checked: false,
      },
    ],
    imageOrVideo: {
      on: false,
    },
    required: {
      on: false,
    },
    randomize: {
      on: false,
    },
    hideQuestionNumber: {
      on: false,
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      RankingChoicesToggle,
      VideoOrImageToggle,
      RequiredToggle,
      RandomizeToggle,
      HideQuestionNumberToggle,
    ],
  },
  statement: {
    name: "Statement",
    preview: getAsyncPreview("StatementPreview"),
    icon: getAsyncIcon("StatementIcon"),
    action: false,
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    imageOrVideo: {
      on: false,
    },
    label: {
      on: false,
      value: "",
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      VideoOrImageToggle,
      LabelButtonText,
    ],
  },
  fileUpload: {
    name: "File Upload",
    preview: getAsyncPreview("FileUploadPreview"),
    icon: getAsyncIcon("FileUploadIcon"),
    action: false,
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      shown: false,
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
      on: false,
      type: "MB",
      value: 0,
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
  },
  endings: {
    name: "Ending Page",
    preview: getAsyncPreview("EndingsPreview"),
    icon: getAsyncIcon("EndingsIcon"),
    action: false,
    afterSubmit: {
      type: "custom", // custom, redirect
    },
    labeled: {
      on: true,
      editor: initEditor(),
    },
    described: {
      shown: false,
      on: false,
      editor: initEditor(),
    },
    imageOrVideo: {
      on: false,
    },
    required: {
      shown: false,
      on: false,
    },
    shareButtons: {
      on: false,
    },
    defaultEndings: {
      on: false,
    },
    reloadRedirectButton: {
      on: false,
      label: "",
      type: 0, // button, link
    },
    label: {
      on: false,
      value: "",
    },
    autoReload: {
      on: false,
      timer: 10,
    },
    components: [
      AfterSubmitToggle,
      VideoOrImageToggle,
      LabelEditor,
      DescriptionEditor,
      ShareSurveyToggle,
      DefaultEndingToggle,
      ReloadRedirectToggle,
      AutoReloadToggle,
    ],
  },
};

export default defaultQuestionTypes;
