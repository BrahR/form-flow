<script setup lang="ts">
import { onMounted, ref } from 'vue';

type PropsType = {
    modelValue: string | number | boolean | null | undefined | string[],
    disabled?: boolean,
};

const props = withDefaults(defineProps<PropsType>(), {
    modelValue: '',
    disabled: false,
});

defineEmits<{
    (event: 'update:modelValue', value: string): void,
    (event: 'blur'): void,
}>();

const input = ref<HTMLInputElement | null>(null);

onMounted(() => {
    if (input.value?.hasAttribute('autofocus')) {
        input.value?.focus();
    }
});

defineExpose({ focus: () => input.value?.focus() });
</script>

<template>
    <input
        :value="modelValue"
        ref="input"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @blur="$emit('blur')"
        :disabled="props.disabled ? props.disabled : false"
    />
</template>

<style scoped>
input {
    font: unset;
    min-width: inherit;
    outline: none;
    height: 2rem;
    padding: 0.188rem 0.5rem 0.25rem;
    border-radius: 0.25rem;
    border: 0.063rem solid #bbbdc0;
    background-color: #fff;
    color: #3e434d;
    display: flex;
}
</style>
