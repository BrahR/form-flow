<script setup lang="ts">
import Dialog from "@/components/Dialog.vue";

defineProps<{
  show: boolean
  title: string
}>()

defineEmits<{
  (event: 'close'): void
}>()
</script>

<template>
  <Dialog :show="show" @close="$emit('close')">
    <div class="ReactModal__Content ReactModal__Content--after-open messageModal_wrapper__U87KW
                    messageModal_overlay__RwrNz
                    messageModal_ltr__iojtB
                    messageModal_wrapper_with_button_and_title__62Gfx" tabindex="-1" role="dialog" aria-modal="true">
      <div style="font-family: Roboto;">
        <div class="messageModal_header__B9SQ1 messageModal_ltr__iojtB">
          <div class="messageModal_icon__iPxOW" @click="$emit('close')">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <g fill="none" fill-rule="evenodd">

                <path stroke="#3E434D" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M30 18L18 30M18 18L30 30"
                      transform="translate(-1152.000000, -306.000000) translate(232.000000, 302.000000) translate(920.000000, 4.000000)"></path>

              </g>
            </svg>
          </div>
          <div class="messageModal_title__cF2WF">{{ title }}</div>
        </div>
        <slot />
      </div>
    </div>
  </Dialog>
</template>

<style scoped>

.messageModal_header__B9SQ1 {
  height: 3.5rem;
  box-sizing: border-box;
  padding: 0.25rem;
  box-shadow: inset 0 -0.125rem 0 0 #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.messageModal_icon__iPxOW {
  align-self: flex-start;
  position: absolute;
  top: 0.25rem;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  left: 0.5rem;
  right: auto;
}

.messageModal_title__cF2WF {
  font-weight: 700;
  font-size: 14px;
  color: #3e434d;
}

.messageModal_overlay__RwrNz {
  outline: none;
  background-color: #fff;
  border-radius: 0.5rem;
  position: relative;
  padding-bottom: 3.5rem;
  max-width: 32rem;
}

</style>
