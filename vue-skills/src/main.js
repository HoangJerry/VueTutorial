import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full';
import { ValidationObserver } from 'vee-validate/dist/vee-validate.full';

Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
