<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <g fill-rule="evenodd">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M27.16 17.76v-6.72c0-2.784-2.256-5.04-5.04-5.04L15.4 21.12V39.6h18.95c1.676.019 3.11-1.2 3.36-2.856l2.319-15.12c.148-.975-.14-1.965-.787-2.709s-1.587-1.166-2.573-1.155H27.16zM15.4 39.6h-5.04C8.504 39.6 7 38.096 7 36.24V24.48c0-1.856 1.504-3.36 3.36-3.36h5.04"
      ></path>
    </g>
  </svg>
</template>

<style scoped>
svg {
  height: 100%;
}
svg g {
  fill: transparent;
}
svg g path {
  transition: all 0.1s ease-in-out;
  stroke: black;
  stroke-width: 2.5px;
}
svg g:hover {
  cursor: pointer;
}
</style>
