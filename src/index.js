import Vue from 'vue';
import App from './App.vue';
import '../node_modules/bulma/css/bulma.min.css';
import './main.scss';

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount('#app');
