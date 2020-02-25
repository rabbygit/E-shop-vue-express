import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';
import ProductZoomer from 'vue-product-zoomer';

import '../src/fa.config';
import axios from 'axios';

Vue.config.productionTip = false;

//import bootstrap-vue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(ProductZoomer);

// using Vue.use(axios) it produces an uncaught error. to work fine we need a wraper vue-axios
// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)

// Setting up default vue's http modules for api calls
Vue.prototype.$http = axios;

// Load the token from the localStorage
const token = localStorage.getItem('token');
// Is there is any token then we will simply append default axios authorization headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app');
