<script setup lang="ts">
import PrimaryButton from "@/components/form/PrimaryButton.vue";
import InputError from "@/components/form/InputError.vue";
import StandardModalForm from "@/components/StandardModalForm.vue";
import SecondaryButton from "@/components/form/SecondaryButton.vue";
import TextInput from "@/components/form/TextInput.vue";
import {computed, ref, watch} from "vue";
import {useForm} from "vee-validate";
import * as yup from "yup";
import {useSurveyStore} from "@/store/survey.ts";

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (event: "close"): void
}>()

type SurveyForm = {
  name: string
}

// const useWorkspace = useWorkspaceStore()
const useSurvey = useSurveyStore()
const initial = ref({
  id: useSurvey.getSelected?.id ?? 0,
  name: useSurvey.getSelected?.name ?? ""
})

watch(() => props.isOpen, () => {
  if (!props.isOpen) return
  initial.value = {
    id: useSurvey.getSelected?.id ?? 0,
    name: useSurvey.getSelected?.name ?? ""
  }
  setValues(initial.value)
})

const {errors, setValues, isSubmitting, handleSubmit, resetForm, defineComponentBinds, meta} = useForm<SurveyForm>({
  validationSchema: yup.object({
    id: yup.string().required(),
    name: yup.string().required().label("Name"),
  }),
  initialValues: initial.value
})

const name = defineComponentBinds("name");
const error = ref("");

const updateSurvey = handleSubmit(values => {
  return new Promise((resolve, reject) => {
    useSurvey.update(values as Survey)
        .then(() => {
          closeModal()
          resolve(true)
        })
        .catch((err) => {
          console.log(err)
          resetForm({
            values: initial.value,
          })
          error.value = "Something happened, please try again later!"
          if (err.status) error.value = err.response.data.message
          reject()
        });
  })
})

// const openSurveyModal = () => {
//   emit("open")
// }

const closeModal = () => {
  emit("close")
  resetForm();
}

const isSubmitting_ = computed(() => {
  console.log(isSubmitting.value && meta.value.valid)
  return isSubmitting.value && meta.value.valid
})

const disabled = computed(() => !meta.value.valid && (meta.value.dirty || meta.value.touched))
</script>

<template>
  <StandardModalForm title="Rename a survey" :show="isOpen" @close="closeModal">
    <form
        @submit="updateSurvey"
        @keydown.enter.prevent="updateSurvey"
    >
      <div class="messageModal_grid_wrapper__ziDi0">
        <div class="createFolderModal_createFolder_modal__UDqGR">
          <InputError class="mb-3" :error="error" :show="!meta.touched"/>

          <TextInput
              v-bind="name"
              placeholder="Please enter a name for this survey"
          />

          <InputError :error="errors.name"/>
        </div>
      </div>
      <div class="messageModal_footer__EhWT8">
        <SecondaryButton
            @click.prevent="closeModal">
          Cancel
        </SecondaryButton>

        <PrimaryButton
            :is-submitting="isSubmitting_"
            :disabled="disabled"
        >
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
