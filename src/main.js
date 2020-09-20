import { createApp } from 'vue';
import App from './app.vue';
import store from './store';
import router from './router';

const app = createApp(App).use(router);
app.use(store);

app.mount('#app');
