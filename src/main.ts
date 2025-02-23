
import { createApp } from 'vue'

//import ContadorComponent from './examples/ContadorComponent.vue'

import ProductList from './examples/ProductList.vue'
const app = createApp(ProductList)

app.component('ProductList', ProductList)

app.mount('#app')
