import App from "@/App.vue";
import router from "@/router";
import CKEditor from "@ckeditor/ckeditor5-vue";
import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/style.css";

const pinia = createPinia();
createApp(App).use(router).use(pinia).use(CKEditor).mount("#app");
