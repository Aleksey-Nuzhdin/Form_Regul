import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    stars: { star1: 1, star2: 2,}
  },
  mutations:{},
  actions:{},
  getters:{
    getStars(state){
      return state.stars
    }
  },
})