import Vue from 'vue';
import Router from 'vue-router';
import store from './store/index';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      alias: '/',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/avatar',
      name: 'avatar',
      component: () => import('./views/AvatarImages.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('./views/Categories.vue'),
    },
    {
      path: '/categories/:category',
      name: 'category',
      component: () => import('./views/Category.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('./views/Posts.vue'),
    },
    {
      path: '/posts/:post',
      name: 'post',
      component: () => import('./views/Post.vue'),
      meta: {
        guest: true,
      },
    },
    {
      path: '/users/',
      name: 'users',
      component: () => import('./views/Users.vue'),
      meta: {
        guest: true,
      },
    },
    {
      path: '/posts/:post/:user/edit',
      name: 'editPost',
      beforeEnter: (to, from, next) => {
        if (store.getters['auth/authStatus']) {
          const username = store.getters['auth/username'];
          if (to.params.user !== username) {
            return next('/notARoute'); // How about redirect to 'You cannot access other user's profile'??
          }
          return next();
        }
        return next('/login');
      },
      component: () => import('./views/EditPost.vue'),
      meta: {
        guest: true,
      },
    },
    {
      path: '/createpost',
      name: 'baseCreatePost',
      beforeEnter: (to, from, next) => {
        if (store.getters['auth/authStatus']) {
          const username = store.getters['auth/username'];
          return next(`/createPost/${username}`);
        }
        return next('/login');
      },
    },
    {
      path: '/createpost/:user',
      name: 'createPost',
      beforeEnter: (to, from, next) => {
        if (store.getters['auth/authStatus']) {
          const username = store.getters['auth/username'];
          if (to.params.user !== username) {
            return next(`/createPost/${username}`);
          }
          return next();
        }
        return next('/login');
      },
      component: () => import('./views/CreatePost.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue'),
      meta: {
        guest: true,
        redirectToProfileIfAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        guest: true,
        redirectToProfileIfAuth: true,
      },
    },
    {
      path: '/user/',
      name: 'baseUser',
      beforeEnter: (to, from, next) => {
        if (store.getters['auth/authStatus']) {
          const username = store.getters['auth/username'];
          return next(`/user/${username}`);
        }
        return next('/users');
      },
    },
    {
      path: '/user/:user',
      name: 'user',

      // BUG WHEN LOGGED IN SWITCHING FROM OTHER USER PROFILE TO OWN PROFILE
      // - SELF INFO DOES NOT UPDATE!

      // beforeEnter: (to, from, next) => {

      //   if (store.getters.authStatus) {
      //     const username = store.getters['auth/username'];
      //     if (to.params.user !== username) {
      //       return next(`/profile/${username}`);
      //     }
      // return next();
      //   }
      //   return next('/login');
      // },
      component: () => import('./views/User.vue'),
      meta: {
        guest: true,
      },
    },
    {
      path: '*',
      name: 'else',
      component: () => import('./views/NotARoute.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Check if auth required. Redirect to login if not authenticated
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/authStatus']) {
      return next();
    }
    return next('/login');
  }

  // If logged in and auth not required, redirect to profile
  if (to.matched.some(record => record.meta.redirectToProfileIfAuth)) {
    if (store.getters['auth/authStatus']) {
      return next({
        path: `/user/${store.getters['auth/username']}`,
      });
    }
  }
  return next();
});

export default router;
