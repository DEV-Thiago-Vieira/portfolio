import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

const app = createApp(App)

app.use(router)
app.use(VueRecaptchaPlugin, {
  v3SiteKey: import.meta.env.VITE_RECAPCHA_PUBLIC_KEY,
})

app.mount('#app')
