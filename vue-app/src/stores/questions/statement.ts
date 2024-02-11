import StatementIcon from "@/views/survey/icons/questions/StatementIcon.vue";
import StatementQuestion from "@/views/survey/components/build/question/Statement.vue";
import LabelEditor from "@/views/survey/components/build/toggles/shared/LabelEditor.vue";
import ImageOrVideoToggle from "@/views/survey/components/build/toggles/shared/ImageOrVideoToggle.vue";
import DescriptionEditor from "@/views/survey/components/build/toggles/shared/DescriptionEditor.vue";
import StatementButton from "@/views/survey/components/build/toggles/statement/StatementButton.vue";

import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { acceptHMRUpdate, defineStore, storeToRefs } from "pinia";
import { useQuestion } from "@/composables/useQuestion.ts";
import type { Component } from "vue";
import { computed, ref } from "vue";

const isStatement = (
  question: Question | null,
): question is Question<Statement> => {
  return question?.questionable.type === "Statement";
};

export const useStatementQuestionStore = defineStore(
  "statement_question",
  () => {
    const useQuestionToggles = useQuestionTogglesStore();
    const { statementButton, hideQuestionNumber } =
      storeToRefs(useQuestionToggles);
    const question = useQuestion({
      type: "Statement",
      name: "Statement",
      preview: StatementQuestion,
      icon: StatementIcon,
    });
    const { initialize, _canSubmit, payload, validate, reset } =
      question.helpers;
    const components: Component[] = [
      LabelEditor,
      DescriptionEditor,
      ImageOrVideoToggle,
      StatementButton,
    ];
    const hydrating = ref(false);
    const hydrated = ref(false);

    const hydrate = (statement: Question | null) => {
      console.log("Hydrating statement question");
      hydrating.value = true;
      initialize(statement);
      if (isStatement(statement)) {
      }
      hydrated.value = true;
      hydrating.value = false;
    };

    const dehydrate = () => {
      console.log("Dehydrating statement question");
      hydrating.value = false;
      hydrated.value = false;
      reset();
    };

    const canSubmit = computed(() => {
      return _canSubmit.value && !statementButton.value.error;
    });

    // TODO type this later with payloads
    const getData = () => {
      if (!validate()) return null;

      return {
        ...payload(),
        questionable: {
          button_text: statementButton.value.value,
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
    acceptHMRUpdate(useStatementQuestionStore, import.meta.hot),
  );
}
