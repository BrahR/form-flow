declare module "vue-draggable-plus" {
  import type { RefOrElement, RefOrValue } from "vue-draggable-plus/dist/types";
  import {
    UseDraggableOptions,
    UseDraggableReturn,
  } from "vue-draggable-plus/dist/useDraggable";

  export declare function useDraggable<T>(
    el: RefOrElement,
    list?: T[] | undefined,
    options?: RefOrValue<UseDraggableOptions<T>>,
  ): UseDraggableReturn;
  export {};
}
