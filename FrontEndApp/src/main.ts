import { createApp } from 'vue'
import { createPinia } from "pinia";
import { defineRule } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import router from './router'
import './style.css'
import App from './App.vue'

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

const pinia = createPinia();

createApp(App)
    .use(router as any)
    .use(pinia)
    .mount('#app')
