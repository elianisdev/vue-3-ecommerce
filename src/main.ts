


//import ContadorComponent from './examples/ContadorComponent.vue'

import ProductList from './examples/ProductList.vue'
import { createApp } from 'vue'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives
})

createApp(App).use(vuetify).mount('#app')

const app = createApp(ProductList)

app.component('ProductList', ProductList)
app.use(vuetify)
app.mount('#app')
