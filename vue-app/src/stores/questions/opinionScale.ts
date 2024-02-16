import OpinionScaleIcon from "@/views/survey/icons/questions/OpinionScaleIcon.vue";
import OpinionScaleQuestion from "@/views/survey/components/build/question/OpinionScale.vue";
import LabelEditor from "@/views/survey/components/build/toggles/shared/LabelEditor.vue";
import ImageOrVideoToggle from "@/views/survey/components/build/toggles/shared/ImageOrVideoToggle.vue";
import DescriptionEditor from "@/views/survey/components/build/toggles/shared/DescriptionEditor.vue";
import RequiredToggle from "@/views/survey/components/build/toggles/shared/RequiredToggle.vue";
import HideQuestionNumberToggle from "@/views/survey/components/build/toggles/shared/HideQuestionNumberToggle.vue";
import StartAtZeroToggle from "@/views/survey/components/build/toggles/rating/StartAtZeroToggle.vue";
import OpinionScaleToggle from "@/views/survey/components/build/toggles/opinionScale/OpinionScaleToggle.vue";

import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { acceptHMRUpdate, defineStore, storeToRefs } from "pinia";
import { useQuestion } from "@/composables/useQuestion.ts";
import type { Component } from "vue";
import { computed, ref } from "vue";

const isOpinionScale = (
  question: Question | null,
): question is Question<OpinionScale> => {
  return question?.questionable.type === "OpinionScale";
};

export const useOpinionScaleQuestionStore = defineStore(
  "opinion_scale_question",
  () => {
    const useQuestionToggles = useQuestionTogglesStore();
    const { scaleParams, scaleLabels, hideQuestionNumber, startAtZero } =
      storeToRefs(useQuestionToggles);
    const question = useQuestion({
      type: "OpinionScale",
      name: "Opinion Scale",
      preview: OpinionScaleQuestion,
      icon: OpinionScaleIcon,
    });
    const { initialize, _canSubmit, payload, validate, reset } =
      question.helpers;
    const components: Component[] = [
      LabelEditor,
      DescriptionEditor,
      OpinionScaleToggle,
      ImageOrVideoToggle,
      RequiredToggle,
      StartAtZeroToggle,
      HideQuestionNumberToggle,
    ];
    const hydrating = ref(false);
    const hydrated = ref(false);

    const hydrate = (opinionScale: Question | null) => {
      console.log("Hydrating opinion scale question");
      hydrating.value = true;
      initialize(opinionScale);
      if (isOpinionScale(opinionScale)) {
        scaleParams.value.value = opinionScale.questionable.steps;
        scaleLabels.value = opinionScale.questionable.labels;
        startAtZero.value = opinionScale.questionable.start_at_zero;
        hideQuestionNumber.value =
          opinionScale.questionable.hide_question_number;
      }
      hydrated.value = true;
      hydrating.value = false;
    };

    const dehydrate = () => {
      console.log("Dehydrating opinion scale question");
      hydrating.value = false;
      hydrated.value = false;
      reset();
    };

    const canSubmit = computed(() => {
      return _canSubmit.value;
    });

    // TODO type this later with payloads
    const getData = () => {
      if (!validate()) return null;

      return {
        ...payload(),
        questionable: {
          steps: scaleParams.value.value,
          labels: scaleLabels.value,
          start_at_zero: startAtZero.value,
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
    acceptHMRUpdate(useOpinionScaleQuestionStore, import.meta.hot),
  );
}
