<script setup lang="ts">
import ModalForm from "@/components/form/ModalForm.vue";
import InputError from "@/components/form/InputError.vue";
import TextInput from "@/components/form/TextInput.vue";
import SecondaryButton from "@/components/form/SecondaryButton.vue";
import PrimaryButton from "@/components/form/PrimaryButton.vue";
import * as yup from "yup";
import { useSurveyStore } from "@/stores/survey.ts";
import { useForm } from "vee-validate";
import { computed, ref } from "vue";

type Form = {
  name: string;
};

const useSurvey = useSurveyStore();
const { errors, isSubmitting, handleSubmit, meta, resetForm, defineField } =
  useForm<Form>({
    validationSchema: yup.object({
      name: yup.string().required().label("Name"),
    }),
  });

const [name, nameAttr] = defineField("name");
const error = ref("");

const createSurvey = handleSubmit((values) => {
  return new Promise((resolve, reject) => {
    useSurvey
      .create(values.name)
      .then(() => {
        closeModal();
        // TODO do something later which i dont know
        resolve(true);
      })
      .catch((err) => {
        console.log(err);
        resetForm();
        error.value = "Something happened, please try again later!";
        if (err.status) error.value = err.response.data.message;
        reject();
      });
  });
});

const closeModal = () => {
  useSurvey.close("create");
  setTimeout(() => {
    resetForm();
    error.value = "";
  }, 300);
};

const submitting = computed(() => isSubmitting.value && meta.value.valid);
const disabled = computed(
  () => !meta.value.valid && (meta.value.dirty || meta.value.touched),
);
</script>

<template>
  <ModalForm
    title="Create new survey"
    :show="useSurvey.modals.create"
    @close="closeModal"
  >
    <form @submit="createSurvey" @keydown.enter.prevent="createSurvey">
      <div class="messageModal_grid_wrapper__ziDi0">
        <div class="createFolderModal_createFolder_modal__UDqGR">
          <InputError class="mb-3" :error="error" :show="!meta.touched" />

          <TextInput
            v-model="name"
            v-bind="nameAttr"
            placeholder="Please enter a name for this survey"
          />

          <InputError :error="errors.name" :show="meta.dirty" />
        </div>
      </div>
      <div class="messageModal_footer__EhWT8">
        <SecondaryButton @click.prevent="closeModal">Cancel</SecondaryButton>

        <PrimaryButton :submitting :disabled>Create</PrimaryButton>
      </div>
    </form>
  </ModalForm>
</template>

<style scoped>
.messageModal_grid_wrapper__ziDi0 {
  padding: 2rem;
  font-size: 14px;
  box-sizing: border-box;
  overflow-y: auto;
  height: calc(100% - 112px);
}

.createFolderModal_createFolder_modal__UDqGR {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.createFolderModal_createFolder_modal__UDqGR > * {
  width: 100%;
}

.messageModal_footer__EhWT8 {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.75rem 1rem;
  box-shadow: inset 0 0.125rem 0 0 #f0f2f5;
}

.messageModal_footer__EhWT8 button:first-child {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>
