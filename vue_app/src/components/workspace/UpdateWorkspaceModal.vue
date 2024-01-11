<script setup lang="ts">
import PrimaryButton from "@/components/form/PrimaryButton.vue";
import InputError from "@/components/form/InputError.vue";
import StandardModalForm from "@/components/StandardModalForm.vue";
import SecondaryButton from "@/components/form/SecondaryButton.vue";
import TextInput from "@/components/form/TextInput.vue";

import * as yup from "yup";
import { useWorkspaceStore } from "@/store/workspace";
import { computed, ref, watch } from "vue";
import { useForm } from "vee-validate";

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (event: "close"): void;
}>();

type WorkspaceForm = {
  id: number;
  name: string;
};

const useWorkspace = useWorkspaceStore();
const initial = ref({
  id: useWorkspace.getSelected?.id ?? 0,
  name: useWorkspace.getSelected?.name ?? "",
});

watch(
  () => props.isOpen,
  () => {
    if (!props.isOpen) return;
    initial.value = {
      id: useWorkspace.getSelected?.id ?? 0,
      name: useWorkspace.getSelected?.name ?? "",
    };
    setValues(initial.value);
  }
);

const {
  errors,
  setValues,
  isSubmitting,
  handleSubmit,
  resetForm,
  defineComponentBinds,
  meta,
} = useForm<WorkspaceForm>({
  validationSchema: yup.object({
    id: yup.number().required(),
    name: yup.string().required().label("Name"),
  }),
  initialValues: initial.value,
});

const name = defineComponentBinds("name");
const error = ref("");

const updateWorkspace = handleSubmit((values) => {
  return new Promise((resolve, reject) => {
    useWorkspace
      .update(values as Workspace)
      .then(() => {
        closeModal();
        resolve(true);
      })
      .catch((err) => {
        console.log(err);
        resetForm({
          values: initial.value,
        });
        error.value = "Something happened, please try again later!";
        if (err.status) error.value = err.response.data.message;
        reject();
      });
  });
});

const closeModal = () => {
  emit("close");
};

const isSubmitting_ = computed(() => isSubmitting.value && meta.value.valid);
const disabled = computed(
  () => !meta.value.valid && (meta.value.dirty || meta.value.touched)
);
</script>

<template>
  <StandardModalForm
    title="Rename a workspace"
    :show="isOpen"
    @close="closeModal"
  >
    <form @submit="updateWorkspace" @keydown.enter.prevent="updateWorkspace">
      <div class="messageModal_grid_wrapper__ziDi0">
        <div class="createFolderModal_createFolder_modal__UDqGR">
          <InputError class="mb-3" :error="error" :show="!meta.touched" />

          <TextInput
            v-bind="name"
            placeholder="Please enter a name for this workspace"
          />

          <InputError :error="errors.name" />
        </div>
      </div>
      <div class="messageModal_footer__EhWT8">
        <SecondaryButton @click.prevent="closeModal"> Cancel </SecondaryButton>

        <PrimaryButton :is-submitting="isSubmitting_" :disabled="disabled">
          Rename
        </PrimaryButton>
      </div>
    </form>
  </StandardModalForm>
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
