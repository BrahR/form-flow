<script setup lang="ts"></script>

<template>
  <div class="bulkActionsHeader_bulk_actions_header bulkActionsHeader_hide">
    <div class="bulkActionsHeader_icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <g fill="none" fill-rule="evenodd">
          <g>
            <g>
              <g>
                <path
                  stroke="#3E434D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M30 18L18 30M18 18L30 30"
                  transform="translate(-1152.000000, -306.000000) translate(232.000000, 302.000000) translate(920.000000, 4.000000)"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div
      class="bulkActionsHeader_icon"
      data-tooltip-id="move-to"
      data-tooltip-content="Move to question group"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path d="M0 0h24v24H0z"></path>
          <path
            d="M2 7h6a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 4h6a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zM13 4h1a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
            fill="#3E434D"
          ></path>
          <g stroke="#3E434D" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19.5 14.5 17 12l2.5-2.5"></path>
            <path d="M18 12h5V8"></path>
          </g>
        </g>
      </svg>
    </div>
    <div
      class="bulkActionsHeader_icon"
      data-tooltip-id="move-out"
      data-tooltip-content="Remove from question group"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path d="M0 0h24v24H0z"></path>
          <path
            d="M2 7h6a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 4h6a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zM13 4h1a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
            fill="#3E434D"
          ></path>
          <g stroke="#3E434D" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.5 14.5 23 12l-2.5-2.5M22 12h-5"></path>
          </g>
        </g>
      </svg>
    </div>
    <div
      class="bulkActionsHeader_icon bulkActionsHeader_delete"
      data-tooltip-id="delete"
      data-tooltip-content="Delete"
    >
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path d="M0 0h16v16H0z"></path>
          <path
            d="M9 .833a1.5 1.5 0 0 1 1.493 1.356l.007.144V3H13a.5.5 0 0 1 .09.992L13 4h-.5v8.75c0 .907-.65 1.666-1.5 1.744l-.143.006H5.143c-.87 0-1.566-.712-1.637-1.6l-.006-.15V4H3a.5.5 0 0 1-.09-.992L3 3h2.5v-.667A1.5 1.5 0 0 1 6.856.84L7 .833h2zM11.5 4h-7v8.75c0 .388.25.695.558.743l.085.007h5.714c.316 0 .593-.274.637-.646l.006-.104V4zM9 1.833H7a.5.5 0 0 0-.492.41l-.008.09V3h3v-.667a.5.5 0 0 0-.41-.492L9 1.833z"
            fill="#3E434D"
            fill-rule="nonzero"
          ></path>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
