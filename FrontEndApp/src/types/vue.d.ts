import Router from 'vue-router'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $route: Router
    }
}
