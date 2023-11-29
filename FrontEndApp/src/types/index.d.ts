import "vue-router";
import PhoneObject from "./PhoneObject";

export { PhoneObject };

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth: boolean;
  }
}
