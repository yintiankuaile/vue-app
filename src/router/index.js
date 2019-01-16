import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: r => require.ensure([], () => r(require('../pages/Main')), 'Main')
    },
    {
      path: '/main',
      component: r => require.ensure([], () => r(require('../pages/Main')), 'Main')
    },
    {
      path: '/tool',
      component: r => require.ensure([], () => r(require('../pages/Tool')), 'Tool')
    },
    {
      path: '/item',
      component: r => require.ensure([], () => r(require('../pages/Item')), 'Item')
    },
    {
      path: '/mine',
      component: r => require.ensure([], () => r(require('../pages/Mine')), 'Mine')
    }
  ]
})
