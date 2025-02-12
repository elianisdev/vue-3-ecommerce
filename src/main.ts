
import { createApp } from 'vue'

import ContadorComponent from './examples/ContadorComponent.vue'


const app = createApp(ContadorComponent)

app.component('ContadorComponent', ContadorComponent)

app.mount('#app')
