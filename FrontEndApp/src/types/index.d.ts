import "vue-router"

export {}

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth: boolean;
  }
//   type the $route property
//   interface RouteMeta {
//     requiresAuth: boolean;
//   }

}
