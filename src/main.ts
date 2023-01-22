import { createApp } from 'vue'
import { App } from './App'
import { createRouter } from 'vue-router'
import { routes } from './config/router/routes'
import { history } from './config/router/history'



const router = createRouter({
  history,
  routes,
})


const app = createApp(App)
app.use(router)
app.mount('#app')
