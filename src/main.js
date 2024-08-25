import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Certifique-se de que o caminho está correto

const app = createApp(App);

app.use(router); // Certifique-se de que o router está incluído aqui

app.mount('#app');
