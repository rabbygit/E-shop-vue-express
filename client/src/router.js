import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/Demo.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '*',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
    },
    {
      path: '/products/:productType',
      props: true,
      name: 'products',
      component: () => import('./views/Products.vue'),
    },
    {
      path: '/SearchResult/:ResultArray',
      props: true,
      name: 'SearchResult',
      component: () => import('./views/SearchResult.vue'),
    },
    {
      path: '/productdetails/:product',
      props: true,
      name: 'productdetails',
      component: () => import('./views/ProductDetails.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        guest: true,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
      meta: {
        guest: true,
      },
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('./views/Checkout.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('./views/Admin/Dashboard.vue'),
      meta: {
        breadCrumb: 'Dashboard',
      },
      children: [
        {
          path: 'account',
          name: 'Account',
          meta: {
            breadCrumb: 'Account',
          },
          component: () => import('./components/Admin/Account.vue'),
        },
        {
          path: 'products',
          name: 'Products',
          meta: {
            breadCrumb: 'Products',
          },
          component: () => import('./components/Admin/Products.vue'),
        },
        {
          path: 'addproduct',
          name: 'addproduct',
          meta: {
            breadCrumb: 'Add Product',
          },
          component: () => import('./components/Admin/AddProduct.vue'),
        },
      ],
    },
    {
      path: '/userprofile',
      name: 'userprofile',
      component: () => import('./views/UserProfile.vue'),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (store.getters.isLoggedIn) {
      next({
        path: '/userprofile',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
