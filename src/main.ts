import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AntVue from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(AntVue);

Vue.config.productionTip = false;
if (process.env.NODE_ENV === 'development') { require('../mock') };
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
