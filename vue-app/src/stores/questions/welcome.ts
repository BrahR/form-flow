import WelcomeIcon from "@/views/survey/icons/questions/WelcomeIcon.vue";
import WelcomeQuestion from "@/views/survey/components/build/question/Welcome.vue";
import LabelEditor from "@/views/survey/components/build/toggles/shared/LabelEditor.vue";
import ImageOrVideoToggle from "@/views/survey/components/build/toggles/shared/ImageOrVideoToggle.vue";
import DescriptionEditor from "@/views/survey/components/build/toggles/shared/DescriptionEditor.vue";
import WelcomeButton from "@/views/survey/components/build/toggles/welcome/WelcomeButton.vue";
import { acceptHMRUpdate, defineStore, storeToRefs } from "pinia";
import { useQuestion } from "@/composables/useQuestion.ts";
import type { Component } from "vue";
import { computed, ref } from "vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";

const isWelcome = (
  question: Question | null,
): question is Question<Welcome> => {
  return question?.questionable.type === "Welcome";
};

export const useWelcomeQuestionStore = defineStore("welcome_question", () => {
  const useQuestionToggles = useQuestionTogglesStore();
  const { welcomeButton } = storeToRefs(useQuestionToggles);
  const question = useQuestion({
    type: "Welcome",
    name: "Welcome",
    preview: WelcomeQuestion,
    icon: WelcomeIcon,
  });
  const { initialize, _canSubmit, payload, validate, reset } = question.helpers;

  welcomeButton.value.value = "Start";
  const components: Component[] = [
    ImageOrVideoToggle,
    LabelEditor,
    DescriptionEditor,
    WelcomeButton,
  ];
  const hydrating = ref(false);
  const hydrated = ref(false);

  const hydrate = (welcome: Question | null) => {
    console.log("Hydrating welcome question");
    hydrating.value = true;
    initialize(welcome);
    if (isWelcome(welcome)) {
      welcomeButton.value.value = welcome.questionable.button_text;
    }
    hydrated.value = true;
    hydrating.value = false;
  };

  const dehydrate = () => {
    console.log("Dehydrating welcome question");
    hydrating.value = false;
    hydrated.value = false;
    welcomeButton.value.value = "";
    welcomeButton.value.error = false;
    reset();
  };

  const canSubmit = computed(() => {
    return _canSubmit.value && !welcomeButton.value.error;
  });

  // TODO type this later with payloads
  const getData = () => {
    if (!validate()) return null;

    return {
      ...payload(),
      questionable: {
        button_text: welcomeButton.value.value,
      },
    };
  };

  return {
    ...question.exports,
    welcomeButton,
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
    acceptHMRUpdate(useWelcomeQuestionStore, import.meta.hot),
  );
}
