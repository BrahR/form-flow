import FileUploadIcon from "@/views/survey/icons/questions/FileUploadIcon.vue";
import FileUploadQuestion from "@/views/survey/components/build/question/FileUpload.vue";
import LabelEditor from "@/views/survey/components/build/toggles/shared/LabelEditor.vue";
import ImageOrVideoToggle from "@/views/survey/components/build/toggles/shared/ImageOrVideoToggle.vue";
import DescriptionEditor from "@/views/survey/components/build/toggles/shared/DescriptionEditor.vue";
import RequiredToggle from "@/views/survey/components/build/toggles/shared/RequiredToggle.vue";
import HideQuestionNumberToggle from "@/views/survey/components/build/toggles/shared/HideQuestionNumberToggle.vue";
import FileTypeToggle from "@/views/survey/components/build/toggles/fileUpload/FileTypeToggle.vue";
import MaximumSizeToggle from "@/views/survey/components/build/toggles/fileUpload/MaximumSizeToggle.vue";

import { acceptHMRUpdate, defineStore } from "pinia";
import { useQuestion } from "@/composables/useQuestion.ts";
import type { Component } from "vue";
import { computed, ref } from "vue";

const isFileUpload = (
  question: Question | null,
): question is Question<FileUpload> => {
  return question?.questionable.type === "FileUpload";
};

export const useFileUploadQuestionStore = defineStore(
  "file_upload_question",
  () => {
    const question = useQuestion({
      type: "FileUpload",
      name: "File Upload",
      preview: FileUploadQuestion,
      icon: FileUploadIcon,
    });
    const { initialize, _canSubmit, payload, validate, reset } =
      question.helpers;
    const components: Component[] = [
      LabelEditor,
      DescriptionEditor,
      ImageOrVideoToggle,
      RequiredToggle,
      FileTypeToggle,
      MaximumSizeToggle,
      HideQuestionNumberToggle,
    ];
    const hydrating = ref(false);
    const hydrated = ref(false);

    const hydrate = (fileUpload: Question | null) => {
      console.log("Hydrating fileUpload question");
      hydrating.value = true;
      initialize(fileUpload);
      if (isFileUpload(fileUpload)) {
      }
      hydrated.value = true;
      hydrating.value = false;
    };

    const dehydrate = () => {
      console.log("Dehydrating fileUpload question");
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
  },
);

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useFileUploadQuestionStore, import.meta.hot),
  );
}
