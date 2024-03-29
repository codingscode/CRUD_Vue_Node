/* eslint-disable */ 
import { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';
/* import 'sweetalert2/dist/sweetalert2.min.css'; */

import '../node_modules/nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';


/* new Vue({
    router,
    render: (h) => h(App),
 }).use(VueSweetalert2).$mount('#app')
  */



createApp(App).use(router, VueSweetalert2).mount('#app');