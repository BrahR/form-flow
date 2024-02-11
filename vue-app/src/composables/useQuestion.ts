import type { Component } from "vue";
import { computed } from "vue";
import { useQuestionTogglesStore } from "@/stores/questions/toggle.ts";
import { storeToRefs } from "pinia";

type Params = {
  type: string;
  name: string;
  preview: Component;
  icon: Component;
};

export const useQuestion = (
  params: Params,
  question: Question | null = null,
) => {
  const useToggle = useQuestionTogglesStore();
  const { label, description } = useToggle;
  const { imageOrVideo, required } = storeToRefs(useToggle);

  label.model = question?.html_label ?? "";
  label.on = true;
  description.model = question?.description_label ?? "";
  description.on = false;
  imageOrVideo.value.on = !!question?.attachment;
  imageOrVideo.value.url = question?.attachment || "";
  imageOrVideo.value.error = false;
  required.value = question?.required ?? false;

  const labelError = computed(() =>
    (label.model.length ?? 0) < 1 && label.isDirty
      ? "Please enter a label"
      : null,
  );

  const initialize = (question: Question | null) => {
    if (!question) return;

    label.model = question.html_label;
    description.model = question.description_label;
    imageOrVideo.value.on = !!question.attachment;
    imageOrVideo.value.url = question.attachment || "";
    required.value = question.required;
  };

  const payload = () => {
    return {
      type: params.type,
      question: {
        html_label: label.model,
        description_label: description.model,
        required: required.value,
        attachment: imageOrVideo.value.on ? imageOrVideo.value.url : null,
      },
    };
  };

  const _canSubmit = computed(() => {
    const length = label.model.length ?? 0;
    return !(length < 1 && label.isDirty);
  });

  const validate = () => {
    return label.validate();
  };

  const reset = () => {
    label.reset();
    description.reset();
    imageOrVideo.value.on = !!question?.attachment;
    imageOrVideo.value.url = question?.attachment || "";
    required.value = question?.required ?? false;
  };

  return {
    exports: {
      ...params,
      label,
      description,
      imageOrVideo,
      required,
      labelError,
    },

    helpers: {
      initialize,
      payload,
      _canSubmit,
      validate,
      reset,
    },
  };
};
