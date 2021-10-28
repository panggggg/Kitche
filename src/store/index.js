import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    likes_count: 0,
    unlike_count: 0
  },
  mutations: {
    incrementLike(state){
      state.likes_count += 1
    },
    incrementUnLike(state){
      state.unlike_count += 1
    },

  },
  actions: {
    
  },
  modules: {
  },
  getters: {
    getLike : state => state.likes_count,
    getUnLike: state => state.unlike_count
  },
  plugins: [createPersistedState()]
})
