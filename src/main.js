// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import VueProgressiveImage from 'vue-progressive-image'
import VueCarousel from 'vue-carousel'

import Header from '@/components/header'
// import dataspatz from './lang/lang'

Vue.use(VueI18n)
Vue.use(VueProgressiveImage)
Vue.use(VueCarousel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, Header },
  template: '<App/>'
})

Vue.prototype.$locale = {
  change(lang) {
    i18n.locale = lang
  },
  current() {
    return i18n.locale
  }
}
