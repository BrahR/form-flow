<script setup lang="ts">
type Props = {
  name: string
  surveys?: Survey[] | []
  selected: boolean
  icon?: string
}

withDefaults(defineProps<Props>(), {
  name: "",
  surveys: [] as never,
  selected: false,
  icon: 'folder'
})
</script>

<template>
  <div class="workspace-folder" :class="{ 'workspace-folder-selected': selected }">
    <div class="workspace-folder-name">
      <div class="workspace-folder-icon-wrapper">
        <svg v-if="icon == 'folder'" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path d="M0 0h16v16H0z"></path>
            <path
              d="M14 12.833C14 13.57 13.486 14 12.75 14h-9.5C2.514 14 2 13.486 2 12.75V3.333C2 2.597 2.597 2 3.333 2H7l2 2h3.75c.736 0 1.25.514 1.25 1.25v7.583z"
              stroke="#3E434D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
        <svg v-if="icon == 'delete'" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path d="M0 0h16v16H0z"></path>
            <path
              d="M14 12.833C14 13.57 13.486 14 12.75 14h-9.5C2.514 14 2 13.486 2 12.75V3.333C2 2.597 2.597 2 3.333 2H7l2 2h3.75c.736 0 1.25.514 1.25 1.25v7.583z"
              stroke="#3E434D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
      </div>
      {{ name }}
    </div>
    <div class="workspace-folder-form-number">{{ surveys?.length ?? 0 }}</div>
  </div>
</template>

<style scoped>
.workspace-folder {
  margin: 0 1rem 0.5rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.25rem;
  color: #3e434d;
  cursor: pointer;
  overflow-wrap: break-word;
}

.workspace-folder.workspace-folder-selected {
  background-color: rgba(59, 54, 142, .15);
  color: #3b368e;
}

.workspace-folder:not(.workspace-folder-selected):hover {
  background-color: #f0f2f5;
}

.workspace-folder-name {
  display: flex;
  max-width: 12rem;
  align-items: center;
}

.workspace-folder-icon-wrapper {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.workspace-folder-form-number {
  margin-left: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #3e434d;
}
</style>
