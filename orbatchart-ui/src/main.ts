import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import OrbatChart from 'orbatchart/src/index';

const tt = new OrbatChart(null, { connectorOffset: 12 });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
