// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueProgressiveImage from 'vue-progressive-image'
import VueCarousel from 'vue-carousel'
import { store } from './store/store'

Vue.use(VueProgressiveImage)
Vue.use(VueCarousel)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
