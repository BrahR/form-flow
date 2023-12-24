<script setup lang="ts">
type Props = {
  error: string | null;
  show?: boolean;
};

withDefaults(defineProps<Props>(), {
  error: undefined,
  show: true,
});
</script>

<template>
  <div class="form-error" v-if="error && show">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <g>
              <path
                d="M0 0H24V24H0z"
                transform="translate(-361.000000, -324.000000) translate(73.000000, 320.000000) translate(288.000000, 4.000000)"
              ></path>
              <path
                fill="#BC0007"
                fill-rule="nonzero"
                d="M3.867 22c-.48 0-.962-.1-1.442-.398-1.346-.796-1.827-2.687-1.058-4.08L9.54 3.393c.192-.398.576-.796.961-.995.673-.398 1.442-.498 2.211-.298.77.199 1.346.696 1.827 1.393l8.076 14.03c.289.497.385.994.385 1.492 0 .796-.288 1.592-.865 2.09-.481.596-1.154.895-1.923.895H3.867z"
                transform="translate(-361.000000, -324.000000) translate(73.000000, 320.000000) translate(288.000000, 4.000000)"
              ></path>
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M12 16c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-8c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1z"
                transform="translate(-361.000000, -324.000000) translate(73.000000, 320.000000) translate(288.000000, 4.000000)"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <span>{{ error }}</span>
  </div>
</template>

<style scoped>
.form-error {
  background-color: #ffd0d6;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #bc0007;
  flex-direction: row;
  border-radius: 0.25rem;
  padding: 0.4rem;
  flex-wrap: nowrap;
  margin-top: 5px;
  line-height: 1;
  font-size: 15px;
}
</style>
