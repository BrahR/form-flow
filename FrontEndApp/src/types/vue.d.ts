import Router from 'vue-router'
import {ComponentPublicInstance} from "@vue/runtime-core";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $route: Router
    }
}
