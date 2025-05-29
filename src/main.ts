import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vFadeIn from './directives/vFadeIn'

const app = createApp(App)

app.directive('fade-in', vFadeIn)
app.use(router)

app.mount('#app')
