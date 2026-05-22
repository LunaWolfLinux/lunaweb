import './assets/css/main.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import ui from '@nuxt/ui/vue-plugin'

import App from './App.vue'
import router from './router/router.ts'

const app = createApp(App)

const head = createHead()

app.use(head)
app.use(router)
app.use(ui)

app.mount('#app')


