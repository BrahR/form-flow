<script setup lang="ts">
import DashboardLayout from "@/components/layout/DashboardLayout.vue";
import WorkspaceFolder from "@/components/workspace/WorkspaceFolder.vue";
import WorkspaceUI from "@/components/workspace/WorkspaceUI.vue";
import SurveyCard from "@/components/survey/SurveyCard.vue";
import CreateSurveyModal from "@/components/survey/CreateSurveyModal.vue";

import {useWorkspaceStore} from "@/store/workspace.ts";
import {ref} from "vue"

const useWorkspace = useWorkspaceStore()
const { setSelected, isLoading, workspaces } = useWorkspace
const isCreateSurveyModalOpen = ref(false);

const openSurveyModal = () => {
  isCreateSurveyModalOpen.value = true;
}
const closeSurveyModal = () => {
  isCreateSurveyModalOpen.value = false;
}

</script>

<template>
  <DashboardLayout>
    <template #folders>
      <div class="home-sidebar-menu">
        <div v-if="!isLoading()">
          <WorkspaceFolder
            v-for="workspace in workspaces.data"
            :key="workspace.id"
            :name="workspace.name"
            :surveys="workspace.surveys"
            :selected="useWorkspace.getSelected === workspace"
            @click="setSelected(workspace)"
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

    <WorkspaceUI v-if="!isLoading() && useWorkspace.getSelected">
      <div class="mySurveys_new_item__2LSh_" @click="openSurveyModal">
        <div class="mySurveys_new_survey__EmeBN">
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <rect fill="#3B368E" width="32" height="32" rx="5.333"></rect>
              <path d="M4 4h24v24H4z"></path>
              <path d="M16 10a1.2 1.2 0 0 1 1.2 1.2v3.6h3.6a1.2 1.2 0 1 1 0 2.4l-3.6-.001V20.8a1.2 1.2 0 1 1-2.4 0v-3.6h-3.6a1.2 1.2 0 1 1 0-2.4h3.6v-3.6A1.2 1.2 0 0 1 16 10z" fill="#FFF"></path>
            </g>
          </svg>
          <div class="mySurveys_text__1WyfZ">Create new survey</div>
        </div>
      </div>

      <SurveyCard
          v-for="survey in useWorkspace.getSelected.surveys"
          :survey="survey"
      />
    </WorkspaceUI>
    <div v-else class="flex justify-center items-center h-full -mt-8">
      <span class="loading loading-spinner loading-lg mr-1.5 absolute"></span>
    </div>
  </DashboardLayout>

  <CreateSurveyModal
      :is-open="isCreateSurveyModalOpen"
      @close="closeSurveyModal"
  />
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

.createFolderModal_createFolder_modal__UDqGR > * {
  width: 100%;
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

.createFolderModal_createFolder_modal__UDqGR > * {
  width: 100%;
}

.messageModal_footer__EhWT8 button:first-child {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

</style>
