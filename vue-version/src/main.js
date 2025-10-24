import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(vuetify)

app.mount('#app')
