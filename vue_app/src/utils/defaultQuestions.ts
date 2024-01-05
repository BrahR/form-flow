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

export const defaultQuestions: Question = {
  welcome: {
    type: "Welcome",
    name: "Welcome Page",
    preview: getAsyncPreview("WelcomePreview"),
    icon: getAsyncIcon("WelcomeIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
      get error() {
        return (this.editor.model.length ?? 0) < 1 && this.editor.isDirty
          ? "Please enter a label"
          : null;
      },
    },
    described: {
      on: false,
      editor: initEditor(),
    },
    imageOrVideo: {
      on: false,
    },
    button: {
      value: "Start",
      error: false,
    },
    get canSubmit() {
      return !this.labeled.error && !this.button.error;
    },

    get getData() {
      if (this.labeled.editor.model.length < 1) {
        this.labeled.editor.isDirty = true;
        return null;
      }

      return {
        type: this.type,
        question: {
          html_label: this.labeled.editor.model,
          html_description: this.described.editor.model,
          attachment: "", // this.imageOrVideo,
        },
        questionable: {
          button_text: this.button.value,
        },
      };
    },
    components: [
      VideoOrImageToggle,
      LabelEditor,
      DescriptionEditor,
      WelcomeButton,
    ],
  },
  generalText: {
    type: "GeneralText",
    name: "General Text",
    preview: GeneralTextPreview,
    icon: GeneralTextIcon,
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
      get error() {
        return (this.editor.model.length ?? 0) < 1 && this.editor.isDirty
          ? "Please enter a label"
          : null;
      },
    },
    described: {
      on: false,
      editor: initEditor(),
    },
    answerFormat: {
      on: false,
      types,
      selected: types[0],
      error: {
        text: false,
        "long-text": false,
        date: false,
        "phone-number": false,
        numeric: false,
        "english-letters": false,
        time: false,
        custom: false,
      },
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
    get canSubmit() {
      console.log(this.answerFormat.error[this.answerFormat.selected.value]);
      return (
        !this.labeled.error &&
        !this.answerFormat.error[this.answerFormat.selected.value]
      );
    },
    get getData() {
      if (this.labeled.editor.model.length < 1) {
        this.labeled.editor.isDirty = true;
        return null;
      }

      return {
        type: this.type,
        question: {
          html_label: this.labeled.editor.model,
          html_description: this.described.editor.model,
          attachment: "", // this.imageOrVideo,
        },
        questionable: {
          text_type: this.answerFormat.selected.value,
          min: this.answerFormat.selected.rules?.min,
          max: this.answerFormat.selected.rules?.max,
          format: this.answerFormat.selected.rules?.format,
          error_message: this.answerFormat.selected.errorMessage,
          placeholder: this.answerFormat.selected.rules?.placeholder,
        },
      };
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
    type: "MultipleChoice",
    name: "Multiple Choice",
    preview: getAsyncPreview("MultipleChoicePreview"),
    icon: getAsyncIcon("MultipleChoiceIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
      get error() {
        return (this.editor.model.length ?? 0) < 1 && this.editor.isDirty
          ? "Please enter a label"
          : null;
      },
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
      error: false,
    },
    hideQuestionNumber: {
      on: false,
    },
    get canSubmit() {
      // TODO: might need some fixes? later
      let isChoiceDuplicate = this.choices.some(
        (choice, i) =>
          this.choices.map((val) => val.value).indexOf(choice.value) !== i &&
          !choice.hidden &&
          !!choice.value
      );

      let isChoiceEmpty =
        this.choices.filter((choice) => choice.value !== "" && !choice.hidden)
          .length < 2;

      return (
        !this.labeled.error &&
        !isChoiceDuplicate &&
        !isChoiceEmpty &&
        !this.multipleAnswers.error
      );
    },
    get getData() {
      if (this.labeled.editor.model.length < 1) {
        this.labeled.editor.isDirty = true;
        return null;
      }

      return {
        type: this.type,
        question: {
          html_label: this.labeled.editor.model,
          html_description: this.described.editor.model,
          attachment: "", // this.imageOrVideo,
          required: this.required.on,
        },
        questionable: {
          choices: this.choices,
          randomize: this.randomize.on,
          vertical_display: this.verticalDisplay.on,
          multiple_answers: this.multipleAnswers.on,
          min_answers: this.multipleAnswers.min,
          max_answers: this.multipleAnswers.max,
          hide_question_number: this.hideQuestionNumber.on,
        },
      };
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
  pictureChoice: {
    type: "PictureChoice",
    name: "Picture Choice",
    preview: getAsyncPreview("PictureChoicePreview"),
    icon: getAsyncIcon("PictureChoiceIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
      get error() {
        return (this.editor.model.length ?? 0) < 1 && this.editor.isDirty
          ? "Please enter a label"
          : null;
      },
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
      error: false,
    },
    hideQuestionNumber: {
      on: false,
    },
    get canSubmit() {
      let isChoiceEmpty =
        this.choices.filter((choice) => choice.image !== "" && !choice.hidden)
          .length < 2;

      return (
        !this.labeled.error && !isChoiceEmpty && !this.multipleAnswers.error
      );
    },
    get getData() {
      if (this.labeled.editor.model.length < 1) {
        this.labeled.editor.isDirty = true;
        return null;
      }

      return {
        type: this.type,
        question: {
          html_label: this.labeled.editor.model,
          html_description: this.described.editor.model,
          attachment: "", // this.imageOrVideo,
          required: this.required.on,
        },
        questionable: {
          choices: this.choices,
          multiple_answers: this.multipleAnswers.on,
          min_answers: this.multipleAnswers.min,
          max_answers: this.multipleAnswers.max,
          randomize: this.randomize.on,
          hide_label: this.hiddenLabel.on,
          double_display_size: this.doubleDisplaySize.on,
          hide_question_number: this.hideQuestionNumber.on,
        },
      };
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
    type: "QuestionGroup",
    name: "Question Group",
    preview: getAsyncPreview("QuestionGroupPreview"),
    icon: getAsyncIcon("QuestionGroupIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
      get error() {
        return (this.editor.model.length ?? 0) < 1 && this.editor.isDirty
          ? "Please enter a label"
          : null;
      },
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
      error: false,
    },
    get canSubmit() {
      return false;
    },
    get getData() {
      if (this.labeled.editor.model.length < 1) {
        this.labeled.editor.isDirty = true;
        return null;
      }

      return {
        type: this.type,
        question: {
          html_label: this.labeled.editor.model,
          html_description: this.described.editor.model,
          attachment: "", // this.imageOrVideo,
          required: this.required.on,
        },
        questionable: {},
      };
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
  opinionScale: {
    type: "OpinionScale",
    name: "Opinion Scale",
    preview: getAsyncPreview("OpinionScalePreview"),
    icon: getAsyncIcon("OpinionScaleIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
      get error() {
        return (this.editor.model.length ?? 0) < 1 && this.editor.isDirty
          ? "Please enter a label"
          : null;
      },
    },
    described: {
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
    parameters: {
      value: 3,
      min: 3, // unused for now
      max: 10, // unused for now
    },
    labels: {
      right: "right",
      center: "center",
      left: "left",
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
    get canSubmit() {
      return !this.labeled.error;
    },
    get getData() {
      if (this.labeled.editor.model.length < 1) {
        this.labeled.editor.isDirty = true;
        return null;
      }

      return {
        type: this.type,
        question: {
          html_label: this.labeled.editor.model,
          html_description: this.described.editor.model,
          attachment: "", // this.imageOrVideo,
          required: this.required.on,
        },
        questionable: {
          steps: this.parameters.value,
          labels: this.labels,
          start_at_zero: this.startAtZero.on,
          hide_question_number: this.hideQuestionNumber.on,
        },
      };
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
  rating: {
    type: "Rating",
    name: "Rating",
    preview: getAsyncPreview("RatingPreview"),
    icon: getAsyncIcon("RatingIcon"),
    action: true,
    labeled: {
      on: true,
      editor: initEditor(),
      get error() {
        return (this.editor.model.length ?? 0) < 1 && this.editor.isDirty
          ? "Please enter a label"
          : null;
      },
    },
    described: {
      on: false,
      editor: initEditor(),
    },
    rating: {
      type: 0,
      value: 0,
    }, // 0 = thumbs-up 1 = stars, 2 = heart,
    parameters: {
      value: 1,
      min: 1,
      max: 10,
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
    get canSubmit() {
      return !this.labeled.error;
    },
    get getData() {
      if (this.labeled.editor.model.length < 1) {
        this.labeled.editor.isDirty = true;
        return null;
      }

      return {
        type: this.type,
        question: {
          html_label: this.labeled.editor.model,
          html_description: this.described.editor.model,
          attachment: "", // this.imageOrVideo,
          required: this.required.on,
        },
        questionable: {
          rating_type: this.rating.type,
          rating_value: this.parameters.value,
          hide_question_number: this.hideQuestionNumber.on,
        },
      };
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      RatingToggle,
      VideoOrImageToggle,
      RequiredToggle,
      HideQuestionNumberToggle,
    ],
  },
  ranking: {
    type: "Ranking",
    name: "Ranking",
    preview: getAsyncPreview("RankingPreview"),
    icon: getAsyncIcon("RankingIcon"),
    action: false,
    labeled: {
      on: true,
      editor: initEditor(),
      get error() {
        return (this.editor.model.length ?? 0) < 1 && this.editor.isDirty
          ? "Please enter a label"
          : null;
      },
    },
    described: {
      on: false,
      editor: initEditor(),
    },
    choices: [
      {
        id: 1,
        value: "",
      },
      {
        id: 2,
        value: "",
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
    fixNumbers: {
      on: false,
    },
    hideQuestionNumber: {
      on: false,
    },
    get canSubmit() {
      let isChoiceDuplicate = this.choices.some(
        (choice, i) =>
          this.choices.map((val) => val.value).indexOf(choice.value) !== i &&
          !!choice.value
      );

      let isChoiceEmpty =
        this.choices.filter((choice) => choice.value !== "").length < 2;

      return !this.labeled.error && !isChoiceDuplicate && !isChoiceEmpty;
    },
    get getData() {
      if (this.labeled.editor.model.length < 1) {
        this.labeled.editor.isDirty = true;
        return null;
      }

      return {
        type: this.type,
        question: {
          html_label: this.labeled.editor.model,
          html_description: this.described.editor.model,
          attachment: "", // this.imageOrVideo,
          required: this.required.on,
        },
        questionable: {
          choices: this.choices.filter((choice) => choice.value !== ""),
          randomize: this.randomize.on,
          fix_numbers: this.fixNumbers.on,
          hide_question_number: this.hideQuestionNumber.on,
        },
      };
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      RankingChoicesToggle,
      FixNumbersToggle,
      VideoOrImageToggle,
      RequiredToggle,
      RandomizeToggle,
      HideQuestionNumberToggle,
    ],
  },
  statement: {
    type: "Statement",
    name: "Statement",
    preview: getAsyncPreview("StatementPreview"),
    icon: getAsyncIcon("StatementIcon"),
    action: false,
    labeled: {
      on: true,
      editor: initEditor(),
      get error() {
        return (this.editor.model.length ?? 0) < 1 && this.editor.isDirty
          ? "Please enter a label"
          : null;
      },
    },
    described: {
      on: false,
      editor: initEditor(),
    },
    hideQuestionNumber: {
      on: true,
    },
    imageOrVideo: {
      on: false,
    },
    button: {
      value: "Next",
      error: false,
    },
    get canSubmit() {
      return this.labeled.error == null && this.button.error == false;
    },
    get getData() {
      if (this.labeled.editor.model.length < 1) {
        this.labeled.editor.isDirty = true;
        return null;
      }

      return {
        type: this.type,
        question: {
          html_label: this.labeled.editor.model,
          html_description: this.described.editor.model,
          attachment: "",
        },
        questionable: {
          button_text: this.button.value,
          hide_question_number: this.hideQuestionNumber.on,
        },
      };
    },
    components: [
      LabelEditor,
      DescriptionEditor,
      VideoOrImageToggle,
      LabelButtonText,
    ],
  },
  fileUpload: {
    type: "FileUpload",
    name: "File Upload",
    preview: getAsyncPreview("FileUploadPreview"),
    icon: getAsyncIcon("FileUploadIcon"),
    action: false,
    labeled: {
      on: true,
      editor: initEditor(),
      get error() {
        return (this.editor.model.length ?? 0) < 1 && this.editor.isDirty
          ? "Please enter a label"
          : null;
      },
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
    get canSubmit() {
      return !this.labeled.error;
    },
    get getData() {
      if (!this.labeled.on) {
        this.labeled.editor.isDirty = true;
        return null;
      }

      return {
        type: this.name,
        question: {
          html_label: this.labeled.editor.model,
          html_description: this.described.editor.model,
          attachment: "",
        },
        questionable: {},
      };
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
    type: "Endings",
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
      get error() {
        return (this.editor.model.length ?? 0) < 1 && this.editor.isDirty
          ? "Please enter a label"
          : null;
      },
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
    get canSubmit() {
      return (
        !this.labeled.error &&
        (!this.described.on || !this.described.error) &&
        (!this.label.on || this.label.value.length > 0)
      );
    },
    get getData() {
      return {
        type: this.type,
        question: {
          html_label: this.labeled.on ? this.labeled.editor.model : "",
          html_description: this.described.on
            ? this.described.editor.model
            : "",
          attachment: "",
        },
        questionable: {
          after_submit: this.afterSubmit.type,
          label: this.label.on ? this.label.value : "",
          reload_redirect_button: this.reloadRedirectButton.on
            ? this.reloadRedirectButton.label
            : "",
          reload_redirect_button_type: this.reloadRedirectButton.on
            ? this.reloadRedirectButton.type
            : "",
          auto_reload: this.autoReload.on ? this.autoReload.timer : "",
        },
      };
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

// if (import.meta.hot) {
//   import.meta.hot.accept(() => location.reload());
// }
