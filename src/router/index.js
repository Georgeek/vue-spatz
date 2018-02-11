import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import partners from '@/pages/partners'
import about from '@/pages/about'
import contact from '@/pages/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/partners',
      name: 'partners',
      component: partners
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
