// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueProgressiveImage from 'vue-progressive-image'
import VueCarousel from 'vue-carousel'
import { store } from './store/store'
import Cookies from 'js-cookie'

// components
import vheader from '@/components/header'
import vfooter from '@/components/footer'
import contacts from '@/components/contacts'
Vue.component('vheader', vheader);
Vue.component('vfooter', vfooter);
Vue.component('contacts', contacts);

Vue.use(VueProgressiveImage)
Vue.use(VueCarousel)
Vue.use(Cookies)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
