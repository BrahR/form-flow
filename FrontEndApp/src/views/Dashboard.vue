<script setup lang="ts">
import DashboardLayout from "@/components/layout/DashboardLayout.vue";
import WorkspaceFolder from "@/components/workspace/WorkspaceFolder.vue";
import WorkspaceUI from "@/components/workspace/WorkspaceUI.vue";
import SurveyCard from "@/components/survey/SurveyCard.vue";
import StandardModalForm from "@/components/StandardModalForm.vue";
import TextInput from "@/components/form/TextInput.vue";
import InputError from "@/components/form/InputError.vue";
import SecondaryButton from "@/components/form/SecondaryButton.vue";
import PrimaryButton from "@/components/form/PrimaryButton.vue";

import * as yup from "yup";
import {computed, Ref, ref} from "vue";
import {useForm} from "vee-validate";
import {useDataStore} from "@/store";
import {useRouter} from "vue-router";
import {AxiosError} from "axios";

const store = useDataStore();
const router = useRouter();

// create survey form
const isCreateSurveyModalOpen = ref(false);

const {errors, isSubmitting, handleSubmit, resetForm, defineComponentBinds, meta} = useForm<WorkspaceForm>({
  validationSchema: yup.object({
    name: yup.string().required().label("Name"),
  }),
})

const name = defineComponentBinds("name");
const error = ref("");

const createWorkspace = handleSubmit(values => {
  store.createWorkspace(values)
      .then(() => {
        closeSurveyModal()
        //   do something later
      })
      .catch((err: AxiosError) => {
        console.log(err)
        // setTimeout(() => {
        resetForm({
          values: {
            name: "",
          },
        })
        error.value = "Something happened, please try again later!"
        if (err.status) error.value = err.response.data.message
      });
})

const openSurveyModal = () => {
  isCreateSurveyModalOpen.value = true;
}

const closeSurveyModal = () => {
  isCreateSurveyModalOpen.value = false;
  resetForm();
}

const isSubmitting_ = computed(() => {
  console.log(isSubmitting.value && meta.value.valid)
  return isSubmitting.value && meta.value.valid
})

const disabled = computed(() => !meta.value.valid && (meta.value.dirty || meta.value.touched))

// workspace

const workspaces: Ref<Workspace[]> = ref<Workspace[] | null>(null) as Ref<Workspace[]>;
console.log(workspaces.value)
store.fetchWorkspaces()
    .then((res) => {
      console.log(res)
      workspaces.value = res
    })

// function onFolderClick(id: number) {
//   store.setSelectedFolder(id)
// }
</script>

<template>
  <DashboardLayout>
    <template #folders>
      <div class="home-sidebar-menu">
        <div v-if="workspaces !== null">
          <WorkspaceFolder
              v-for="workspace in workspaces"
              :key="workspace.id"
              :name="workspace.name"
              :selected="store.getSelectedFolder() == workspace.id"
              @click="store.setSelectedFolder(workspace.id)"
          />
        </div>
        <div v-else class="flex justify-center items-center py-2">
          <span class="loading loading-spinner loading-md mr-1.5 absolute"></span>
        </div>

        <div class="workspace-divider"></div>
        <WorkspaceFolder name="Deleted items" icon="delete" :selected="false"/>
      </div>
    </template>

    <div class="gap"></div>

    <WorkspaceUI>
      <div class="mySurveys_new_item__2LSh_" @click="openSurveyModal">
        <div class="mySurveys_new_survey__EmeBN">
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <rect fill="#3B368E" width="32" height="32" rx="5.333"></rect>
              <path d="M4 4h24v24H4z"></path>
              <path
                  d="M16 10a1.2 1.2 0 0 1 1.2 1.2v3.6h3.6a1.2 1.2 0 1 1 0 2.4l-3.6-.001V20.8a1.2 1.2 0 1 1-2.4 0v-3.6h-3.6a1.2 1.2 0 1 1 0-2.4h3.6v-3.6A1.2 1.2 0 0 1 16 10z"
                  fill="#FFF"></path>
            </g>
          </svg>
          <div class="mySurveys_text__1WyfZ">Create new survey</div>
        </div>
      </div>
      <StandardModalForm title="Create new survey" :show="isCreateSurveyModalOpen" @close="closeSurveyModal">
        <form @submit="createWorkspace">
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
                @click.prevent="closeSurveyModal">
              Cancel
            </SecondaryButton>

            <PrimaryButton
                :is-submitting="isSubmitting_"
                :disabled="disabled"
            >
              Add workspace
            </PrimaryButton>
          </div>
        </form>
      </StandardModalForm>

      <SurveyCard/>
      <SurveyCard/>
      <SurveyCard/>
    </WorkspaceUI>
  </DashboardLayout>
</template>

<style scoped>
.gap {
  height: 2rem;
}

.home-sidebar-menu {
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 1.5rem;
  height: calc(100 * 1vh - 9rem);
  box-sizing: border-box !important;
  scrollbar-gutter: stable both-edges;
}

.workspace-divider {
  margin: 0.75rem 0;
  width: 100%;
  height: 1px;
  background-color: #f0f2f5;
}

.mySurveys_new_item__2LSh_ {
  width: 18.25rem;
  height: 13.25rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}


.mySurveys_new_survey__EmeBN {
  height: 13.25rem;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  color: #3b368e;
  cursor: pointer;
}

.mySurveys_text__1WyfZ {
  margin-right: 1rem;
  font-weight: 700;
  font-size: 14px;
  margin-left: 14px;
  color: #3b368e;
  cursor: pointer;
}

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
