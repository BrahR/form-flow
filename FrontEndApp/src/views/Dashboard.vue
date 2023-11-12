<script setup lang="ts">
import DashboardLayout from "@/components/layout/DashboardLayout.vue";
import WorkspaceFolder from "@/components/workspace/WorkspaceFolder.vue";
import WorkspaceUI from "@/components/workspace/WorkspaceUI.vue";
import SurveyCard from "@/components/survey/SurveyCard.vue";

import {Ref, ref} from "vue";
import CreateSurveyCard from "@/components/survey/CreateSurveyCard.vue";
import {useWorkspaceStore} from "@/store/workspace.ts";
import {useUserStore} from "@/store/user.ts";

const userStore = useUserStore()
const workspaceStore = useWorkspaceStore()
const { hydrate, getSelected, setSelected, isLoading, workspaces } = workspaceStore

hydrate()

console.log(getSelected())
// workspace

// const workspaces: Ref<Workspace[]> = ref<Workspace[] | null>(null) as Ref<Workspace[]>;
// const currentWorkspace: Ref<Workspace> = ref<Workspace | null>(null) as Ref<Workspace>;

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
            :selected="getSelected() === workspace"
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

    <WorkspaceUI v-if="!isLoading()">
      <CreateSurveyCard :workspace-id="getSelected().id" />

      <SurveyCard v-for="survey in getSelected().surveys" :survey="survey"/>
    </WorkspaceUI>
    <div v-else class="flex justify-center items-center h-full -mt-8">
      <span class="loading loading-spinner loading-lg mr-1.5 absolute"></span>
    </div>
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
