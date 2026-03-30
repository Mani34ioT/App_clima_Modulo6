import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa la configuración de rutas

const app = createApp(App)
app.use(router) // Dile a Vue que use el Router
app.mount('#app')