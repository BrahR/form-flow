import GeneralTextIcon from "@/views/survey/icons/questions/GeneralTextIcon.vue";
import GeneralTextQuestion from "@/views/survey/components/build/question/GeneralText.vue";
import LabelEditor from "@/views/survey/components/build/toggles/shared/LabelEditor.vue";
import ImageOrVideoToggle from "@/views/survey/components/build/toggles/shared/ImageOrVideoToggle.vue";
import DescriptionEditor from "@/views/survey/components/build/toggles/shared/DescriptionEditor.vue";
import GeneralTextRulesToggle from "@/views/survey/components/build/toggles/generalText/GeneralTextRulesToggle.vue";
import CustomTypeToggle from "@/views/survey/components/build/toggles/generalText/CustomTypeToggle.vue";
import DateTypeToggle from "@/views/survey/components/build/toggles/generalText/DateTypeToggle.vue";
import EnglishLetterTypeToggle from "@/views/survey/components/build/toggles/generalText/EnglishLetterTypeToggle.vue";
import LongTextTypeToggle from "@/views/survey/components/build/toggles/generalText/LongTextTypeToggle.vue";
import NumericTextToggle from "@/views/survey/components/build/toggles/generalText/NumericTextToggle.vue";
import PhoneTextToggle from "@/views/survey/components/build/toggles/generalText/PhoneTextToggle.vue";
import TextTypeToggle from "@/views/survey/components/build/toggles/generalText/TextTypeToggle.vue";
import TimeTypeToggle from "@/views/survey/components/build/toggles/generalText/TimeTypeToggle.vue";
import TextTypeInput from "@/views/survey/components/build/question/generalText/TextTypeInput.vue";
import LongTextTypeInput from "@/views/survey/components/build/question/generalText/LongTextTypeInput.vue";
import DateTypeInput from "@/views/survey/components/build/question/generalText/DateTypeInput.vue";
import PhoneTypeInput from "@/views/survey/components/build/question/generalText/PhoneTypeInput.vue";
import NumericTypeInput from "@/views/survey/components/build/question/generalText/NumericTypeInput.vue";
import EnglishLetterTypeInput from "@/views/survey/components/build/question/generalText/EnglishLetterTypeInput.vue";
import TimeTypeInput from "@/views/survey/components/build/question/generalText/TimeTypeInput.vue";
import CustomTypeInput from "@/views/survey/components/build/question/generalText/CustomTypeInput.vue";
import RequiredToggle from "@/views/survey/components/build/toggles/shared/RequiredToggle.vue";
import HideQuestionNumberToggle from "@/views/survey/components/build/toggles/shared/HideQuestionNumberToggle.vue";

import { acceptHMRUpdate, defineStore, storeToRefs } from "pinia";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { useQuestion } from "@/composables/useQuestion.ts";
import type { Component } from "vue";
import { computed, ref } from "vue";
import type { TextAnswerType } from "@/types/stores/TextAnswerType.ts";

const isGeneralText = (
  question: Question | null,
): question is Question<GeneralText> => {
  return question?.questionable.type === "GeneralText";
};

const answerTypes: TextAnswerType[] = [
  {
    type: "text",
    label: "Short Text",
    toggle: TextTypeToggle,
    input: TextTypeInput,
    model: "",
    errorMessage: "",
    rules: {
      min: 0,
      max: 200,
      error: false,
    },
  },
  {
    type: "longText",
    label: "Long Text",
    toggle: LongTextTypeToggle,
    input: LongTextTypeInput,
    model: "",
    errorMessage: "",
    rules: {
      min: 0,
      max: 5000,
      error: false,
    },
  },
  {
    type: "date",
    label: "Date",
    toggle: DateTypeToggle,
    input: DateTypeInput,
    model: "",
    errorMessage: "Please enter a valid date",
    rules: {
      format: "yyyy/M/d",
      error: false,
    },
  },
  {
    type: "phoneNumber",
    label: "Phone Number",
    toggle: PhoneTextToggle,
    input: PhoneTypeInput,
    defaultCountry: "US",
    model: "",
    errorMessage: "Please enter a valid phone number",
    rules: {
      placeholder: "Enter your phone number",
      error: false,
    },
  },
  {
    // TODO Implement parsing for the value entered, for example 2^10
    type: "numeric",
    label: "Numeric Characters",
    toggle: NumericTextToggle,
    input: NumericTypeInput,
    model: "",
    errorMessage: "Please only enter numerical values",
    rules: {
      placeholder: "Enter a number",
      min: 0,
      max: 100,
      error: false,
      validationError: "",
    },
  },
  {
    type: "englishLetters",
    label: "English letters",
    toggle: EnglishLetterTypeToggle,
    input: EnglishLetterTypeInput,
    model: "",
    errorMessage: "Please only enter English letters",
    rules: {
      placeholder: "Enter English letters",
      error: false,
    },
  },
  {
    type: "time",
    label: "Time",
    toggle: TimeTypeToggle,
    input: TimeTypeInput,
    model: "",
    errorMessage: "Please enter a valid time",
    rules: {
      format: "HH:mm",
      error: false,
    },
  },
  {
    type: "custom",
    label: "Custom pattern",
    toggle: CustomTypeToggle,
    input: CustomTypeInput,
    model: "",
    errorMessage: "",
    rules: {
      placeholder: "Enter a custom pattern",
      format: "",
      error: false,
    },
  },
];

export const useGeneralTextQuestionStore = defineStore(
  "general_text_question",
  () => {
    const useQuestionToggles = useQuestionTogglesStore();
    const {
      textAnswerFormat,
      hideQuestionNumber,
      placeholderRule,
      formatRule,
    } = storeToRefs(useQuestionToggles);
    const question = useQuestion({
      type: "GeneralText",
      name: "General Text",
      preview: GeneralTextQuestion,
      icon: GeneralTextIcon,
    });
    const { initialize, _canSubmit, payload, validate, reset } =
      question.helpers;

    textAnswerFormat.value.types = answerTypes;
    textAnswerFormat.value.selected = textAnswerFormat.value.types[0];
    textAnswerFormat.value.selected.defaultCountry = "US";
    const components: Component[] = [
      ImageOrVideoToggle,
      LabelEditor,
      DescriptionEditor,
      GeneralTextRulesToggle,
      RequiredToggle,
      HideQuestionNumberToggle,
    ];
    const hydrating = ref(false);
    const hydrated = ref(false);

    const hydrate = (generalText: Question | null) => {
      console.log("Hydrating general text question");
      hydrating.value = true;
      initialize(generalText);
      if (isGeneralText(generalText)) {
        textAnswerFormat.value.selected.type =
          generalText.questionable.text_type;
        textAnswerFormat.value.selected.rules.min =
          generalText.questionable.min;
        textAnswerFormat.value.selected.rules.max =
          generalText.questionable.max;
        textAnswerFormat.value.selected.errorMessage =
          generalText.questionable.error_message ?? "";
        textAnswerFormat.value.selected.defaultCountry = "US";
        formatRule.value = generalText.questionable.format ?? "";
        placeholderRule.value = generalText.questionable.placeholder ?? "";
        hideQuestionNumber.value =
          generalText.questionable.hide_question_number;
      }
      hydrated.value = true;
      hydrating.value = false;
    };

    const dehydrate = () => {
      console.log("Dehydrating general text question");
      hydrating.value = false;
      hydrated.value = false;
      textAnswerFormat.value.types = answerTypes;
      textAnswerFormat.value.selected = textAnswerFormat.value.types[0];
      textAnswerFormat.value.selected.defaultCountry = "US";
      hideQuestionNumber.value = false;
      reset();
    };

    const canSubmit = computed(() => {
      return _canSubmit.value && !textAnswerFormat.value.selected.rules.error;
    });

    // TODO type this later with payloads
    const getData = () => {
      if (!validate()) return null;

      return {
        ...payload(),
        questionable: {
          text_type: textAnswerFormat.value.selected.type,
          min: textAnswerFormat.value.selected.rules.min,
          max: textAnswerFormat.value.selected.rules.max,
          default_country: textAnswerFormat.value.selected.defaultCountry,
          format: formatRule.value,
          error_message: textAnswerFormat.value.selected.errorMessage,
          placeholder: placeholderRule.value,
          hide_question_number: hideQuestionNumber.value,
        },
      };
    };

    return {
      ...question.exports,
      components,
      hydrating,
      hydrated,
      hydrate,
      dehydrate,
      canSubmit,
      getData,
    };
  },
);

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useGeneralTextQuestionStore, import.meta.hot),
  );
}
