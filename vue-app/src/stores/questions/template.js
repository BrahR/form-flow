// import Icon from "@/views/survey/icons/Icon.vue";
// import Question from "@/views/survey/components/build/question/.vue";
// import LabelEditor from "@/views/survey/components/build/toggles/LabelEditor.vue";
// import ImageOrVideoToggle from "@/views/survey/components/build/toggles/ImageOrVideoToggle.vue";
// import DescriptionEditor from "@/views/survey/components/build/toggles/DescriptionEditor.vue";
//
// import { acceptHMRUpdate, defineStore } from "pinia";
// import { useQuestion } from "@/composables/useQuestion.ts";
// import { reactive, ref } from "vue";
// import type { Component } from "vue";
//
// const is = (question: Question | null): question is Question<> => {
//   return question?.questionable.type === "";
// };
//
// export const use-QuestionStore = defineStore("_question", () => {
//   const question = useQuestion({
//     type: "",
//     name: "",
//     preview: Question,
//     icon: Icon,
//   });
//   const { initialize, _canSubmit, payload, validate, reset } = question.helpers;
//   const components: Component[] = [
//     ImageOrVideoToggle,
//     LabelEditor,
//     DescriptionEditor,
//   ];
//   const hydrating = ref(false);
//   const hydrated = ref(false);
//
//   const hydrate = (: Question | null) => {
//     console.log("Hydrating - question");
//     hydrating.value = true;
//     initialize();
//     if (is()) {
//     }
//     hydrated.value = true;
//     hydrating.value = false;
//   };
//
//   const dehydrate = () => {
//     console.log("Dehydrating - question");
//     hydrating.value = false;
//     hydrated.value = false;
//     reset();
//   };
//
//   const canSubmit = () => {
//     return _canSubmit();
//   };
//
//   // TODO type this later with payloads
//   const getData = () => {
//     if (!validate()) return null;
//
//     return {
//       ...payload(),
//       questionable: {
//       },
//     };
//   };
//
//   return {
//     ...question.exports,
//     -,
//     components,
//     hydrating,
//     hydrated,
//     hydrate,
//     dehydrate,
//     canSubmit,
//     getData,
//   };
// });
//
// if (import.meta.hot) {
//   import.meta.hot.accept(
//     acceptHMRUpdate(use-QuestionStore, import.meta.hot),
//   );
// }
