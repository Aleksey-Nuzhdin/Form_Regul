import scss from './assets/scss/main.scss';
import store from './store'
import App from './App.vue';
import Vue from 'vue/dist/vue.js';


const app = new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app');