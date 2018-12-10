import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tips: {
      show: false,
      title: ''
    }
  },
  mutations: {
    changeTips (state, tips) {
      state.tips = tips
      setTimeout(() => {
        state.tips.show = false
      }, 1500)
    }
  },
  actions: {

  }
})
