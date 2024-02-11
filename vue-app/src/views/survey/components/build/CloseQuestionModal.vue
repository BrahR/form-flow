<script setup lang="ts">
type Emits = {
  (event: "close"): void;
};

defineEmits<Emits>();
</script>

<template>
  <router-link
    :to="{ name: 'Survey.Build', params: $route.params }"
    v-slot="{ navigate }"
    custom
  >
    <div
      class="questionHeader_close_icon"
      @click="
        () => {
          $emit('close');
          navigate();
        }
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#3E434D"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M30 18L18 30M18 18L30 30"
            transform="translate(-1152.000000, -306.000000) translate(232.000000, 302.000000) translate(920.000000, 4.000000)"
          ></path>
        </g>
      </svg>
    </div>
  </router-link>
</template>

<style scoped>
.questionHeader_close_icon {
  display: flex;
  cursor: pointer;
}
</style>
