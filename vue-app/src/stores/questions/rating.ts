import RatingIcon from "@/views/survey/icons/questions/RatingIcon.vue";
import RatingQuestion from "@/views/survey/components/build/question/Rating.vue";
import LabelEditor from "@/views/survey/components/build/toggles/shared/LabelEditor.vue";
import ImageOrVideoToggle from "@/views/survey/components/build/toggles/shared/ImageOrVideoToggle.vue";
import DescriptionEditor from "@/views/survey/components/build/toggles/shared/DescriptionEditor.vue";
import RequiredToggle from "@/views/survey/components/build/toggles/shared/RequiredToggle.vue";
import HideQuestionNumberToggle from "@/views/survey/components/build/toggles/shared/HideQuestionNumberToggle.vue";
import RatingToggle from "@/views/survey/components/build/toggles/rating/RatingToggle.vue";

import { acceptHMRUpdate, defineStore, storeToRefs } from "pinia";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { useQuestion } from "@/composables/useQuestion.ts";
import type { Component } from "vue";
import { computed, ref } from "vue";

const isRating = (question: Question | null): question is Question<Rating> => {
  return question?.questionable.type === "Rating";
};

export const useRatingQuestionStore = defineStore("rating_question", () => {
  const useQuestionToggles = useQuestionTogglesStore();
  const { rating, hideQuestionNumber } = storeToRefs(useQuestionToggles);
  const question = useQuestion({
    type: "Rating",
    name: "Rating",
    preview: RatingQuestion,
    icon: RatingIcon,
  });
  const { initialize, _canSubmit, payload, validate, reset } = question.helpers;
  const components: Component[] = [
    LabelEditor,
    DescriptionEditor,
    RatingToggle,
    ImageOrVideoToggle,
    RequiredToggle,
    HideQuestionNumberToggle,
  ];
  const hydrating = ref(false);
  const hydrated = ref(false);

  const hydrate = (rating: Question | null) => {
    console.log("Hydrating rating question");
    hydrating.value = true;
    initialize(rating);
    if (isRating(rating)) {
    }
    hydrated.value = true;
    hydrating.value = false;
  };

  const dehydrate = () => {
    console.log("Dehydrating rating question");
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
        rating_type: rating.value.type,
        rating_value: rating.value.model,
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
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useRatingQuestionStore, import.meta.hot),
  );
}
