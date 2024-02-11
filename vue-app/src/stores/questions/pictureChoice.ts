import PictureChoiceIcon from "@/views/survey/icons/questions/PictureChoiceIcon.vue";
import PictureChoiceQuestion from "@/views/survey/components/build/question/PictureChoice.vue";
import LabelEditor from "@/views/survey/components/build/toggles/shared/LabelEditor.vue";
import ImageOrVideoToggle from "@/views/survey/components/build/toggles/shared/ImageOrVideoToggle.vue";
import RequiredToggle from "@/views/survey/components/build/toggles/shared/RequiredToggle.vue";
import RandomizeToggle from "@/views/survey/components/build/toggles/shared/RandomizeToggle.vue";
import PictureChoiceToggle from "@/views/survey/components/build/toggles/pictureChoice/PictureChoiceToggle.vue";
import HideQuestionNumberToggle from "@/views/survey/components/build/toggles/shared/HideQuestionNumberToggle.vue";
import HideLabelToggle from "@/views/survey/components/build/toggles/pictureChoice/HideLabelToggle.vue";
import DoubleDisplaySizeToggle from "@/views/survey/components/build/toggles/pictureChoice/DoubleDisplaySizeToggle.vue";
import MultipleAnswerToggle from "@/views/survey/components/build/toggles/shared/MultipleAnswerToggle.vue";
import DescriptionEditor from "@/views/survey/components/build/toggles/shared/DescriptionEditor.vue";

import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { acceptHMRUpdate, defineStore, storeToRefs } from "pinia";
import { useQuestion } from "@/composables/useQuestion.ts";
import type { Component } from "vue";
import { computed, ref } from "vue";

const isPictureChoice = (
  question: Question | null,
): question is Question<PictureChoice> => {
  return question?.questionable.type === "PictureChoice";
};

export const usePictureChoiceQuestionStore = defineStore(
  "picture_choice_question",
  () => {
    const useQuestionToggles = useQuestionTogglesStore();
    const {
      pictureChoices,
      multipleAnswers,
      randomize,
      hiddenLabel,
      doublePictureSize,
      hideQuestionNumber,
      isPictureChoiceEmpty,
    } = storeToRefs(useQuestionToggles);
    const question = useQuestion({
      type: "PictureChoice",
      name: "Picture Choice",
      preview: PictureChoiceQuestion,
      icon: PictureChoiceIcon,
    });
    const { initialize, _canSubmit, payload, validate, reset } =
      question.helpers;
    const components: Component[] = [
      LabelEditor,
      DescriptionEditor,
      PictureChoiceToggle,
      RequiredToggle,
      ImageOrVideoToggle,
      RandomizeToggle,
      HideLabelToggle,
      DoubleDisplaySizeToggle,
      MultipleAnswerToggle,
      HideQuestionNumberToggle,
    ];
    const hydrating = ref(false);
    const hydrated = ref(false);

    const hydrate = (pictureChoice: Question | null) => {
      console.log("Hydrating picture choice question");
      hydrating.value = true;
      initialize(pictureChoice);
      if (isPictureChoice(pictureChoice)) {
      }
      hydrated.value = true;
      hydrating.value = false;
    };

    const dehydrate = () => {
      console.log("Dehydrating picture choice question");
      hydrating.value = false;
      hydrated.value = false;
      reset();
    };

    const canSubmit = computed(() => {
      return (
        _canSubmit.value &&
        !isPictureChoiceEmpty.value &&
        !multipleAnswers.value.error
      );
    });

    // TODO type this later with payloads
    const getData = () => {
      if (!validate()) return null;

      return {
        ...payload(),
        questionable: {
          choices: pictureChoices.value,
          multiple_answers: multipleAnswers.value.on,
          min_answers: multipleAnswers.value.min,
          max_answers: multipleAnswers.value.max,
          randomize: randomize.value,
          hide_label: hiddenLabel.value,
          double_display_size: doublePictureSize.value,
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
    acceptHMRUpdate(usePictureChoiceQuestionStore, import.meta.hot),
  );
}
