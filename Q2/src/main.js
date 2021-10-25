import Vue from "vue";
import App from "./App.vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = false;
import 'bootstrap'
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
