/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import AxiosConfig from './config/AxiosConfig'

const app = createApp(App)

AxiosConfig.init(app)
registerPlugins(app)

app.mount('#app')
