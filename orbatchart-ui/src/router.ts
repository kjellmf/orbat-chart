import Vue from 'vue';
import Router from 'vue-router';
import MainView from './views/MainView.vue';
import MainViewToolbar from "@/views/MainViewToolbar.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainView',
      components: {
        default:MainView,
        toolbar: MainViewToolbar
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
