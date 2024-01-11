import BaseQuestion from "@/class/question/BaseQuestion";
import LabelEditor from "@/components/question/toggles/LabelEditor.vue";
import DescriptionEditor from "@/components/question/toggles/DescriptionEditor.vue";
import VideoOrImageToggle from "@/components/question/toggles/VideoOrImageToggle.vue";
import RequiredToggle from "@/components/question/toggles/RequiredToggle.vue";
import GeneralTextRulesToggle from "@/components/question/toggles/GeneralTextRulesToggle.vue";
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
import HideQuestionNumberToggle from "@/components/question/toggles/HideQuestionNumberToggle.vue";

export default class GeneralText extends BaseQuestion<GeneralTextPayload> {
  public static types: GeneralTextType[] = [
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

  public type = "GeneralText";
  public name = "General Text";
  public preview = GeneralTextPreview;
  public icon = GeneralTextIcon;
  public required: _Required;
  public answerFormat: AnswerFormat;
  public hideQuestionNumber: HideQuestionNumber;
  public components = [
    VideoOrImageToggle,
    LabelEditor,
    DescriptionEditor,
    GeneralTextRulesToggle,
    RequiredToggle,
    HideQuestionNumberToggle,
  ];
  constructor(parameters: QuestionPayload<GeneralTextPayload> | undefined) {
    super(parameters);
    let generalTextType = GeneralText.types.find(
      (type) => type.value === parameters?.questionable.text_type
    );

    if (generalTextType) {
      generalTextType.rules = {
        ...generalTextType.rules,
        ...parameters?.questionable,
      };
    }

    this.answerFormat = {
      types: GeneralText.types,
      selected: generalTextType ?? GeneralText.types[0],
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
    };
    this.required = {
      on: parameters?.question.required ?? false,
    };
    this.hideQuestionNumber = {
      on: parameters?.questionable.hide_question_number ?? false,
    };
  }

  public canSubmit() {
    return !this.getLabeledError() && !this.answerFormat.selected.value;
  }

  public getData(): QuestionPayload<GeneralTextPayload> | null {
    if (this.labeled.editor.validate()) return null;

    return {
      ...this.payload,
      questionable: {
        text_type: this.answerFormat.selected.value,
        min: this.answerFormat.selected.rules?.min,
        max: this.answerFormat.selected.rules?.max,
        format: this.answerFormat.selected.rules?.format,
        error_message: this.answerFormat.selected.errorMessage,
        placeholder: this.answerFormat.selected.rules?.placeholder,
        hide_question_number: this.hideQuestionNumber.on,
      },
    };
  }
}
