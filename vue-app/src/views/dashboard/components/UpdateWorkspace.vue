<script setup lang="ts">
import ModalForm from "@/components/form/ModalForm.vue";
import InputError from "@/components/form/InputError.vue";
import TextInput from "@/components/form/TextInput.vue";
import PrimaryButton from "@/components/form/PrimaryButton.vue";

import * as yup from "yup";
import { useWorkspaceStore } from "@/stores/workspace.ts";
import { computed, ref, watch } from "vue";
import { useForm } from "vee-validate";
import SecondaryButton from "@/components/form/SecondaryButton.vue";

type Form = {
  id: number;
  name: string;
};

const useWorkspace = useWorkspaceStore();
const form = ref({
  id: useWorkspace.selected?.id ?? 0,
  name: useWorkspace.selected?.name ?? "",
});

const {
  errors,
  isSubmitting,
  handleSubmit,
  meta,
  resetForm,
  setValues,
  defineField,
} = useForm<Form>({
  validationSchema: yup.object({
    id: yup.number().required(),
    name: yup.string().required().label("Name"),
  }),
  initialValues: form.value,
});

const [name, nameAttr] = defineField("name");
const error = ref("");

const updateWorkspace = handleSubmit((values) => {
  return new Promise((resolve, reject) => {
    useWorkspace
      .update(values)
      .then(() => {
        closeModal();
        resolve(true);
      })
      .catch((err) => {
        console.log(err);
        resetForm({
          values: form.value,
        });
        error.value = "Something happened, please try again later!";
        if (err.status) error.value = err.response.data.message;
        reject();
      });
  });
});

const closeModal = () => {
  useWorkspace.close("update");
  setTimeout(() => {
    resetForm();
    error.value = "";
  }, 300);
};

const submitting = computed(() => isSubmitting.value && meta.value.valid);
const disabled = computed(
  () => !meta.value.valid && (meta.value.dirty || meta.value.touched),
);

watch(
  () => useWorkspace.modals.update,
  () => {
    form.value = {
      id: useWorkspace.selected?.id ?? 0,
      name: useWorkspace.selected?.name ?? "",
    };

    setValues(form.value);
  },
);
</script>

<template>
  <ModalForm
    title="Rename a workspace"
    :show="useWorkspace.modals.update"
    @close="closeModal"
  >
    <form @submit="updateWorkspace" @keydown.enter.prevent="updateWorkspace">
      <div class="messageModal_grid_wrapper__ziDi0">
        <div class="createFolderModal_createFolder_modal__UDqGR">
          <InputError class="mb-3" :error="error" :show="!meta.touched" />

          <TextInput
            v-model="name"
            v-bind="nameAttr"
            placeholder="Please enter a name for this workspace"
          />

          <InputError :error="errors.name" :show="meta.dirty" />
        </div>
      </div>
      <div class="messageModal_footer__EhWT8">
        <SecondaryButton @click.prevent="closeModal">Cancel</SecondaryButton>
        <PrimaryButton :submitting :disabled>Rename</PrimaryButton>
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
