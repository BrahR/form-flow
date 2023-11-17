import {createApp} from 'vue'
import {createPinia} from "pinia";
import {defineRule} from 'vee-validate';
import {required, email, min} from '@vee-validate/rules';
import router from './router'

import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue';
import './style.css'

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

const pinia = createPinia();

createApp(App)
  .use(router as any)
  .use(pinia)
  .use(CKEditor)
  .mount('#app')
