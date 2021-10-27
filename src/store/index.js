import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favourite: []
  },
  mutations: {
    ADD_TO_FAV(state, menus){
      state.favourite.push({
        menus
      })
    }
  },
  actions: {
    addMenuToFav({commit}, menus){
      commit('ADD_TO_FAV', menus)
    }
  },
  modules: {
  }
})
