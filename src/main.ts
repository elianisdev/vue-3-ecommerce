
import { createApp } from 'vue'

//import ContadorComponent from './examples/ContadorComponent.vue'

import ContadorComposition from './examples/ContadorComposition.vue'
const app = createApp(ContadorComposition)

app.component('ContadorComponent', ContadorComposition)

app.mount('#app')
