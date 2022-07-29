import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import request from '@/utils/request' 

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$request = request
app.config.globalProperties.$axios.defaults.baseURL = '/api'
app.use(router).mount('#app')
