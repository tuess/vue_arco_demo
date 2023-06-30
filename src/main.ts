import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// arco ui库
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';


const app = createApp(App);

app.use(router).use(ArcoVue)
app.mount('#app')
