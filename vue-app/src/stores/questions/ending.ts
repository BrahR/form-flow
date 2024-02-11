import EndingIcon from "@/views/survey/icons/questions/EndingIcon.vue";
import EndingQuestion from "@/views/survey/components/build/question/Ending.vue";
import LabelEditor from "@/views/survey/components/build/toggles/shared/LabelEditor.vue";
import ImageOrVideoToggle from "@/views/survey/components/build/toggles/shared/ImageOrVideoToggle.vue";
import DescriptionEditor from "@/views/survey/components/build/toggles/shared/DescriptionEditor.vue";
import AfterSubmitToggle from "@/views/survey/components/build/toggles/enging/AfterSubmitToggle.vue";
import ShareSurveyToggle from "@/views/survey/components/build/toggles/enging/ShareSurveyToggle.vue";
import DefaultEndingToggle from "@/views/survey/components/build/toggles/enging/DefaultEndingToggle.vue";
import ReloadRedirectToggle from "@/views/survey/components/build/toggles/enging/ReloadRedirectToggle.vue";
import AutoReloadToggle from "@/views/survey/components/build/toggles/enging/AutoReloadToggle.vue";

import { acceptHMRUpdate, defineStore } from "pinia";
import { useQuestion } from "@/composables/useQuestion.ts";
import type { Component } from "vue";
import { computed, ref } from "vue";

const isEnding = (question: Question | null): question is Question<Ending> => {
  return question?.questionable.type === "Ending";
};

export const useEndingQuestionStore = defineStore("ending_question", () => {
  const question = useQuestion({
    type: "Ending",
    name: "Ending Page",
    preview: EndingQuestion,
    icon: EndingIcon,
  });
  const { initialize, _canSubmit, payload, validate, reset } = question.helpers;
  const components: Component[] = [
    AfterSubmitToggle,
    ImageOrVideoToggle,
    LabelEditor,
    DescriptionEditor,
    ShareSurveyToggle,
    DefaultEndingToggle,
    ReloadRedirectToggle,
    AutoReloadToggle,
  ];
  const hydrating = ref(false);
  const hydrated = ref(false);

  const hydrate = (ending: Question | null) => {
    console.log("Hydrating ending question");
    hydrating.value = true;
    initialize(ending);
    if (isEnding(ending)) {
    }
    hydrated.value = true;
    hydrating.value = false;
  };

  const dehydrate = () => {
    console.log("Dehydrating ending question");
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
    acceptHMRUpdate(useEndingQuestionStore, import.meta.hot),
  );
}
