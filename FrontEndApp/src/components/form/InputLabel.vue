<script setup lang="ts">
defineProps<{
    id: string
}>()
</script>

<template>
    <div class="input-label">
        <label :for="id"><slot /></label>
    </div>
</template>

<style scoped>
.input-label {
    height: fit-content;
    font-size: 14px;
    margin-bottom: 0.4rem;
}
</style>
