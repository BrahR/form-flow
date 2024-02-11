import QuestionGroupIcon from "@/views/survey/icons/questions/QuestionGroupIcon.vue";
import QuestionGroup from "@/views/survey/components/build/question/QuestionGroup.vue";
import LabelEditor from "@/views/survey/components/build/toggles/shared/LabelEditor.vue";
import DescriptionEditor from "@/views/survey/components/build/toggles/shared/DescriptionEditor.vue";
import RequiredToggle from "@/views/survey/components/build/toggles/shared/RequiredToggle.vue";
import GroupQuestionButton from "@/views/survey/components/build/toggles/group/GroupQuestionButton.vue";
import HideQuestionNumberToggle from "@/views/survey/components/build/toggles/shared/HideQuestionNumberToggle.vue";
import RandomizeGroupToggle from "@/views/survey/components/build/toggles/group/RandomizeGroupToggle.vue";

// import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { acceptHMRUpdate, defineStore } from "pinia";
import { useQuestion } from "@/composables/useQuestion.ts";
import type { Component } from "vue";
import { computed, ref } from "vue";

const isGroup = (
  question: Question | null,
): question is Question<QuestionGroup> => {
  return question?.questionable.type === "QuestionGroup";
};

export const useGroupQuestionStore = defineStore("group_question", () => {
  // const useQuestionToggles = useQuestionTogglesStore();
  // const {} = storeToRefs(useQuestionToggles)
  const question = useQuestion({
    type: "QuestionGroup",
    name: "Question Group",
    preview: QuestionGroup,
    icon: QuestionGroupIcon,
  });
  const { initialize, _canSubmit, payload, validate, reset } = question.helpers;
  const components: Component[] = [
    LabelEditor,
    DescriptionEditor,
    GroupQuestionButton,
    RequiredToggle,
    HideQuestionNumberToggle,
    RandomizeGroupToggle,
  ];
  const hydrating = ref(false);
  const hydrated = ref(false);

  const hydrate = (group: Question | null) => {
    console.log("Hydrating group question question");
    hydrating.value = true;
    initialize(group);
    if (isGroup(group)) {
    }
    hydrated.value = true;
    hydrating.value = false;
  };

  const dehydrate = () => {
    console.log("Dehydrating group question question");
    hydrating.value = false;
    hydrated.value = false;
    reset();
  };

  const canSubmit = computed(() => {
    return _canSubmit.value && false;
  });

  // TODO type this later with payloads
  const getData = () => {
    if (!validate()) return null;

    return {
      ...payload(),
      questionable: {},
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
    acceptHMRUpdate(useGroupQuestionStore, import.meta.hot),
  );
}
