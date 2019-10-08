import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'

Vue.config.productionTip = false;
Vue.use(Element, { size: 'small', zIndex: 3000 });

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');


