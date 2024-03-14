// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductList from '../components/ProductList.vue';
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      // Set page to 1 if it is not already specified in the query parameters
      // if (!to.query.page || isNaN(parseInt(to.query.page))) {
      //   to.query.page = 1;
      // }
      
      // Set search to an empty string if it is not already specified in the query parameters
      if (!to.query.search || typeof to.query.search !== 'string') {
        to.query.search = '';
      }

      next();
    },
  },
  {
    path: '/products',
    name: 'products',
    component: ProductList,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
