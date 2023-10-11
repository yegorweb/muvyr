// Styles
import '@/assets/main.scss'
import '@/assets/fonts.scss'

import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)

import { registerPlugins } from '@/plugins'
registerPlugins(app)

app.mount('#app')
