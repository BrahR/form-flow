import "vue-router";
import PhoneObject from "./PhoneObject";

type Units = "B" | "KB" | "MB" | "GB" | "TB";

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth: boolean;
  }
}
