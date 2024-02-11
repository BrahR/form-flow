<script setup lang="ts">
import DropQuestionHere from "@/views/survey/components/build/DropQuestionHere.vue";
import EmptyQuestionSlot from "@/views/survey/components/build/EmptyQuestionSlot.vue";
import TodoSelectQuestions from "@/views/survey/components/TodoSelectQuestions.vue";
</script>

<template>
  <div class="questionsList_wrapper">
    <div class="questionsList_welcome_wrapper false">
      <div class="questionsList_droppable false drag_and_drop">
        <slot name="welcome">
          <EmptyQuestionSlot>Welcome</EmptyQuestionSlot>
        </slot>
      </div>
    </div>
    <div class="questionsList_questions_list_wrapper">
      <TodoSelectQuestions />
      <div class="questionsList_questions_list false">
        <div class="drag_and_drop">
          <slot>
            <EmptyQuestionSlot />
          </slot>

          <div class="false"></div>
        </div>
        <DropQuestionHere v-if="false" />
      </div>
    </div>
    <div class="questionsList_appreciation_pages_list">
      <slot name="ending">
        <EmptyQuestionSlot>Ending</EmptyQuestionSlot>
      </slot>
    </div>
  </div>
</template>

<style scoped></style>
