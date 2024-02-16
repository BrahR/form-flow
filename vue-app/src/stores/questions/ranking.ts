import RankingIcon from "@/views/survey/icons/questions/RankingIcon.vue";
import RankingQuestion from "@/views/survey/components/build/question/Ranking.vue";
import LabelEditor from "@/views/survey/components/build/toggles/shared/LabelEditor.vue";
import ImageOrVideoToggle from "@/views/survey/components/build/toggles/shared/ImageOrVideoToggle.vue";
import RankingChoicesToggle from "@/views/survey/components/build/toggles/ranking/RankingChoicesToggle.vue";
import FixNumbersToggle from "@/views/survey/components/build/toggles/ranking/FixNumbersToggle.vue";
import RequiredToggle from "@/views/survey/components/build/toggles/shared/RequiredToggle.vue";
import RandomizeToggle from "@/views/survey/components/build/toggles/shared/RandomizeToggle.vue";
import HideQuestionNumberToggle from "@/views/survey/components/build/toggles/shared/HideQuestionNumberToggle.vue";
import DescriptionEditor from "@/views/survey/components/build/toggles/shared/DescriptionEditor.vue";

import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { acceptHMRUpdate, defineStore, storeToRefs } from "pinia";
import { useQuestion } from "@/composables/useQuestion.ts";
import type { Component } from "vue";
import { computed, ref } from "vue";

const isRanking = (
  question: Question | null,
): question is Question<Ranking> => {
  return question?.questionable.type === "Ranking";
};

export const useRankingQuestionStore = defineStore("ranking_question", () => {
  const useQuestionToggles = useQuestionTogglesStore();
  const {
    rankingChoices,
    isRankingDuplicate,
    fixRankingNumbers,
    randomize,
    hideQuestionNumber,
  } = storeToRefs(useQuestionToggles);
  const question = useQuestion({
    type: "Ranking",
    name: "Ranking",
    preview: RankingQuestion,
    icon: RankingIcon,
  });
  const { initialize, _canSubmit, payload, validate, reset } = question.helpers;
  const components: Component[] = [
    LabelEditor,
    DescriptionEditor,
    RankingChoicesToggle,
    FixNumbersToggle,
    ImageOrVideoToggle,
    RequiredToggle,
    RandomizeToggle,
    HideQuestionNumberToggle,
  ];
  const hydrating = ref(false);
  const hydrated = ref(false);

  const hydrate = (ranking: Question | null) => {
    console.log("Hydrating ranking question");
    hydrating.value = true;
    initialize(ranking);
    if (isRanking(ranking)) {
      rankingChoices.value = ranking.questionable.choices;
      fixRankingNumbers.value = ranking.questionable.fix_numbers;
      randomize.value = ranking.questionable.randomize;
      hideQuestionNumber.value = ranking.questionable.hide_question_number;
    }
    hydrated.value = true;
    hydrating.value = false;
  };

  const dehydrate = () => {
    console.log("Dehydrating ranking question");
    hydrating.value = false;
    hydrated.value = false;
    reset();
  };

  const canSubmit = computed(() => {
    return (
      _canSubmit.value &&
      !rankingChoices.value.length &&
      isRankingDuplicate.value
    );
  });

  // TODO type this later with payloads
  const getData = () => {
    if (!validate()) return null;

    return {
      ...payload(),
      questionable: {
        choices: rankingChoices.value,
        randomize: randomize.value,
        fix_numbers: fixRankingNumbers.value,
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
    acceptHMRUpdate(useRankingQuestionStore, import.meta.hot),
  );
}
