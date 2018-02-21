import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    language: Cookies.get('lang')
  }
})
