<script setup lang="ts">
// import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {ref} from "vue";
// import {useWorkspaceStore} from "@/store/workspace.ts";
// import router from "@/router";
// import {useUserStore} from "@/store/user.ts";
// import UpdateWorkspaceForm from "@/components/workspace/UpdateWorkspaceModal.vue";
import CreateWorkspaceModal from "@/components/workspace/CreateWorkspaceModal.vue";
// import {useWorkspaceStore} from "@/store/workspace.ts";
import UserDropdown from "@/components/UserDropdown.vue";






const isCreateWorkspaceModalOpen = ref(false)
const openCreateWorkspace = () => {
  isCreateWorkspaceModalOpen.value = true;
}

const closeCreateWorkspace = () => {
  isCreateWorkspaceModalOpen.value = false;
}


</script>

<template>
  <div class="home-header d-flex">
    <UserDropdown />
  </div>
  <div class="home-content">
    <div class="home-sidebar">
      <div class="home-sidebar-title">
        <div class="home-sidebar-title-text">
          Workspaces
        </div>
        <div class="home-sidebar-title-icons">
          <div class="home-sidebar-title-icon-plus" @click="openCreateWorkspace">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <path d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 1-1z"
                      fill="#3E434D"></path>
              </g>
            </svg>
          </div>

          <div class="home-sidebar-title-icon-search">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <path
                    d="M10.6111111,16.1111111 C13.6486772,16.1111111 16.1111111,13.6486772 16.1111111,10.6111111 C16.1111111,7.57354499 13.6486772,5.11111111 10.6111111,5.11111111 C7.57354499,5.11111111 5.11111111,7.57354499 5.11111111,10.6111111 C5.11111111,13.6486772 7.57354499,16.1111111 10.6111111,16.1111111 Z M18,18 L14.5,14.5"
                    id="Combined-Shape" stroke="#3E434D" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <slot name="folders"></slot>
    </div>
    <div class="home-main">
      <slot/>
    </div>
  </div>

  <CreateWorkspaceModal
      :is-open="isCreateWorkspaceModalOpen"
      @open="openCreateWorkspace"
      @close="closeCreateWorkspace"
  />
</template>

<style scoped>
.home-header {
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #3e434d;
  background-color: #fff;
  padding: 0 0.375rem;
  box-shadow: inset 0 -0.0625rem 0 0 #f0f2f5;
  position: relative;
}

.home-content {
  display: flex;
  height: 100%;
  background-color: #f0f2f5;
  width: 100%;
}

.home-sidebar {
  position: relative;
  width: 17.5rem;
  background-color: #fff;
  color: #3e434d;
  border-left: 0.0625rem solid #f0f2f5;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.home-sidebar-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 100%;
  box-sizing: border-box;

}

.home-sidebar-title-text {
  position: relative;
  width: 17.5rem;
  background-color: #fff;
  color: #3e434d;
  border-left: 0.0625rem solid #f0f2f5;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  align-items: flex-start;
}

.home-sidebar-title-icons {
  display: flex;
  align-items: center;
}

.home-sidebar-title-icon-plus {
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.home-sidebar-title-icon-search {
  margin-right: 0;
  margin-left: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.home-main {
  width: calc(100% - 17.5rem);
}

</style>
