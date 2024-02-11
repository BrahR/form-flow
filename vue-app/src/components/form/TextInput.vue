<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";

type Props = {
  disabled?: boolean;
};

const model = defineModel<string>({ default: "", required: true });
const { disabled = false } = defineProps<Props>();
defineEmits<{
  (event: "blur"): void;
}>();

const input: Ref<HTMLInputElement | null> = ref(null);
onMounted(() => {
  if (input.value?.hasAttribute("autofocus")) {
    input.value?.focus();
  }
});

defineExpose({ focus: () => input.value?.focus() });
</script>

<template>
  <input
    type="text"
    ref="input"
    v-model="model"
    :disabled
    @blur="$emit('blur')"
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
