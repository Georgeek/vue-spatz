import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/pages/main'
import about from '@/pages/about'

// import VueRouterTransition from 'vue-router-transition'

Vue.use(Router)
// Vue.use(VueRouterTransition)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
