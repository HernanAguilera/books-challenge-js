import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    loading: (state) => {
      state.loading = true
    },
    loaded: (state) => {
      state.loading = false
    }
  },
  getters: {}
})
