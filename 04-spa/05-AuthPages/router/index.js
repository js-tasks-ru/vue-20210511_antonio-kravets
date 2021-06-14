import VueRouter from 'vue-router';

export const routes = [
  {
    path: '/',
    component: () => import('../views/IndexPage'),
  },
  {
    path: '/register',
    component: () => import('../views/RegisterPage'),
  },
  {
    path: '/login',
    component: () => import('../views/LoginPage'),
  },
];

export const router = new VueRouter({
  mode: 'history',
  base: '/04-spa/05-AuthPages',
  routes,
});
