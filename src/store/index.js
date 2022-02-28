import Vue from 'vue'
import Vuex from 'vuex'

import home from './home/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home
  }
})

export default store
