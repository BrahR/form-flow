import MultipleChoiceIcon from "@/views/survey/icons/questions/MultipleChoiceIcon.vue";
import MultipleChoiceQuestion from "@/views/survey/components/build/question/MultipleChoice.vue";
import LabelEditor from "@/views/survey/components/build/toggles/shared/LabelEditor.vue";
import ImageOrVideoToggle from "@/views/survey/components/build/toggles/shared/ImageOrVideoToggle.vue";
import DescriptionEditor from "@/views/survey/components/build/toggles/shared/DescriptionEditor.vue";
import RequiredToggle from "@/views/survey/components/build/toggles/shared/RequiredToggle.vue";
import HideQuestionNumberToggle from "@/views/survey/components/build/toggles/shared/HideQuestionNumberToggle.vue";
import MultipleChoiceToggle from "@/views/survey/components/build/toggles/multipleChoice/MultipleChoiceToggle.vue";
import RandomizeToggle from "@/views/survey/components/build/toggles/shared/RandomizeToggle.vue";
import VerticalDisplayToggle from "@/views/survey/components/build/toggles/multipleChoice/VerticalDisplayToggle.vue";
import MultipleAnswerToggle from "@/views/survey/components/build/toggles/shared/MultipleAnswerToggle.vue";

import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { acceptHMRUpdate, defineStore, storeToRefs } from "pinia";
import { useQuestion } from "@/composables/useQuestion.ts";
import type { Component } from "vue";
import { computed, ref } from "vue";

const isMultipleQuestion = (
  question: Question | null,
): question is Question<MultipleChoice> => {
  return question?.questionable.type === "MultipleChoice";
};

export const useMultipleChoiceQuestionStore = defineStore(
  "multiple_choice_question",
  () => {
    const useQuestionToggles = useQuestionTogglesStore();
    const {
      multipleChoices,
      hideQuestionNumber,
      multipleAnswers,
      randomize,
      verticalDisplay,
      isMultiCDuplicate,
      isMultiCEmpty,
    } = storeToRefs(useQuestionToggles);
    const question = useQuestion({
      type: "MultipleChoice",
      name: "Multiple Choice",
      preview: MultipleChoiceQuestion,
      icon: MultipleChoiceIcon,
    });
    const { initialize, _canSubmit, payload, validate, reset } =
      question.helpers;
    const components: Component[] = [
      LabelEditor,
      DescriptionEditor,
      MultipleChoiceToggle,
      RequiredToggle,
      ImageOrVideoToggle,
      RandomizeToggle,
      VerticalDisplayToggle,
      MultipleAnswerToggle,
      HideQuestionNumberToggle,
    ];
    const hydrating = ref(false);
    const hydrated = ref(false);

    const hydrate = (multipleChoice: Question | null) => {
      console.info("Hydrating multiple choice question");
      hydrating.value = true;
      initialize(multipleChoice);
      if (isMultipleQuestion(multipleChoice)) {
        multipleChoices.value = multipleChoice.questionable.choices;
        randomize.value = multipleChoice.questionable.randomize;
        verticalDisplay.value = multipleChoice.questionable.vertical_display;
        multipleAnswers.value.on = multipleChoice.questionable.multiple_answers;
        multipleAnswers.value.min = multipleChoice.questionable.min_answers;
        multipleAnswers.value.max = multipleChoice.questionable.max_answers;
        hideQuestionNumber.value =
          multipleChoice.questionable.hide_question_number;
      }
      hydrated.value = true;
      hydrating.value = false;
    };

    const dehydrate = () => {
      console.log("Dehydrating multiple choice question");
      hydrating.value = false;
      hydrated.value = false;
      reset();
    };

    const canSubmit = computed(() => {
      return (
        _canSubmit.value &&
        !isMultiCDuplicate.value &&
        !isMultiCEmpty.value &&
        !multipleAnswers.value.error
      );
    });

    // TODO type this later with payloads
    const getData = () => {
      if (!validate()) return null;

      return {
        ...payload(),
        questionable: {
          choices: multipleChoices.value,
          randomize: randomize.value,
          vertical_display: verticalDisplay.value,
          multiple_answers: multipleAnswers.value.on,
          min_answers: multipleAnswers.value.min,
          max_answers: multipleAnswers.value.max,
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
    acceptHMRUpdate(useMultipleChoiceQuestionStore, import.meta.hot),
  );
}
