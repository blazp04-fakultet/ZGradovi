import './assets/css/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { setupErrorHandler } from './domain/store/ErrorHandler'

import router from './router'

//TODO: Vamo dodati da ovo odredim iz env varijable

const app = createApp(App)
const pinia = createPinia()

setupErrorHandler(pinia)

app.use(router)
app.use(pinia)

app.mount('#app')
