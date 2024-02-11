<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <g fill-rule="evenodd">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M24 6L29.562 17.19 42 18.996 33 27.701 35.124 40 24 34.19 12.876 40 15 27.701 6 18.996 18.438 17.19z"
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
