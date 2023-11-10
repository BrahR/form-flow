<script setup lang="ts">
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'

import StandardModalForm from "@/components/StandardModalForm.vue";
import TextInput from "@/components/form/TextInput.vue";
import InputError from "@/components/form/InputError.vue";
import PrimaryButton from "@/components/form/PrimaryButton.vue";
import SecondaryButton from "@/components/form/SecondaryButton.vue";

import {ref, computed} from "vue";
import {useForm} from "vee-validate";
import * as yup from "yup";
import {AxiosError} from "axios";
import {useDataStore} from "@/store";
import router from "@/router";

type WorkspaceForm = {
  name: string,
};

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' }
]

const store = useDataStore();
// create workspace form
const isCreateWorkspaceModalOpen = ref(false)

const {errors, isSubmitting, handleSubmit, resetForm, defineComponentBinds, meta} = useForm<WorkspaceForm>({
  validationSchema: yup.object({
    name: yup.string().required().label("Name"),
  }),
})

const openWorkspaceModal = () => {
  isCreateWorkspaceModalOpen.value = true;
}

const closeWorkspaceModal = () => {
  isCreateWorkspaceModalOpen.value = false;
  resetForm({
    values: {
      name: "",
    },
  })
}

const name = defineComponentBinds("name");
const error = ref("");

const createWorkspace = handleSubmit(values => {
  return new Promise(resolve => {
    store.createWorkspace(values)
        .then(() => {
          closeWorkspaceModal()
          //   do something later
          resolve(true)
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
          resolve(false)
        });
  })
})

function logout() {
  if (store.isLoggingOut()) return;
  store.logoutUser()
      .then(() => {
        router.push({ name: "Login" });
      })
}

const isSubmitting_ = computed(() => isSubmitting.value && meta.value.valid)
const disabled = computed(() => !meta.value.valid && (meta.value.dirty || meta.value.touched))


</script>

<template>
  <div class="home-header d-flex">
    <Menu as="div" class="relative ml-auto mr-3">
      <div>
        <MenuButton
            class="relative flex items-center text-sm">
          <div class="accountButton_button__EyVHF accountButton_account___f_Yz accountButton_expiration_warning__4_q3n">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <path d="M18.5 20v-1.667c0-1.84-1.455-3.333-3.25-3.333h-6.5c-1.795 0-3.25 1.492-3.25 3.333V20"
                      stroke="#3E434D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <ellipse stroke="#3E434D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" cx="12"
                         cy="8.333" rx="3.25" ry="3.333"></ellipse>
              </g>
            </svg>
          </div>
        </MenuButton>
      </div>
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems
            class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
            <router-link :to="item.href"
                         :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}
            </router-link>
          </MenuItem>

          <MenuItem key="Sign-out" v-slot="{ active }">
            <a href="" @click.prevent="logout"
               :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
  <div class="home-content">
    <div class="home-sidebar">
      <div class="home-sidebar-title">
        <div class="home-sidebar-title-text">
          Workspaces
        </div>
        <div class="home-sidebar-title-icons">
          <div class="home-sidebar-title-icon-plus" @click="openWorkspaceModal">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <path d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 1-1z"
                      fill="#3E434D"></path>
              </g>
            </svg>
          </div>
          <StandardModalForm title="Create new workspace" :show="isCreateWorkspaceModalOpen" @close="closeWorkspaceModal">
            <form @submit="createWorkspace">
              <div class="messageModal_grid_wrapper__ziDi0">
                <div class="createFolderModal_createFolder_modal__UDqGR">
                  <InputError class="mb-3" :error="error" :show="!meta.touched"/>

                  <TextInput
                      v-bind="name"
                      placeholder="Please enter a name for this workspace"
                  />

                  <InputError :error="errors.name"/>
                </div>
              </div>
              <div class="messageModal_footer__EhWT8">
                <SecondaryButton
                    @click.prevent="closeWorkspaceModal">
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

          <div class="home-sidebar-title-icon-search">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
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
      <Suspense>
        <template #default>
          <slot/>
        </template>
        <template #fallback>
          loading
        </template>
      </Suspense>
    </div>
  </div>
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
  display: flex;
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
//grid-gap: 1rem; min-height: fit-content !important;
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

.buttons_button__PUTxb.buttons_secondary__4Zotp {
  background-color: rgba(59, 54, 142, .15);
  color: #3b368e;
  -webkit-text-fill-color: #3b368e;
  -webkit-opacity: 1;
}

.buttons_button__PUTxb {
  all: unset;
  min-width: 4rem;
  min-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.875rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
}

.buttons_button__PUTxb.buttons_primary__RmNyQ {
  background-color: #3b368e;
  color: #fff;
  -webkit-text-fill-color: #fff;
  -webkit-opacity: 1;
}

</style>
