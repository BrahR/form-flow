import type { InjectionKey } from "vue";
import type { QuestionFactoryStore } from "@/stores/questions/factory.ts";

export const USE_QUESTION_FACTORY = Symbol(
  "useQuestion",
) as InjectionKey<QuestionFactoryStore>;
