import "vue-router";
import PhoneObject from "./PhoneObject";

type Units = "B" | "KB" | "MB" | "GB" | "TB";

export { PhoneObject, Units };

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth: boolean;
  }
}
