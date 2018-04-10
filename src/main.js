import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes
});

new Vue({
    el: '#app',
    router
});
