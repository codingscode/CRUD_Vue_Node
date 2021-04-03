import { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';
/* import 'sweetalert2/dist/sweetalert2.min.css'; */
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(router, VueSweetalert2).mount('#app');
