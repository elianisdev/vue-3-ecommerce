//import './assets/main.css'

import { createApp } from 'vue'
//import { createPinia } from 'pinia'

//import App from './App.vue'
import ContadorComponent from './examples/ContadorComponent.vue'
//import router from './router'

const app = createApp(ContadorComponent)

app.component('ContadorComponent', ContadorComponent)

//app.use(createPinia())
//app.use(router)

app.mount('#app')
