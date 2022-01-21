import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'DynamicHeader',
      component: () => import('@/components/ENG-346.DynamicHeader.vue')
  },
  ]
})

export default router;