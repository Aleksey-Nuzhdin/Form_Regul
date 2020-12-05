import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    appraisalStars: [ {title: 'Скорость', stars: 3}
                      ,{title: 'Скорость отдачи видео', stars: 1}
                      ,{title: 'Качество', stars: 4}
                      ,{title: 'Пунктуальность', stars: 0}],
    isFormShow: false,
  },
  mutations:{
    newAppraisal(s, obj){
      obj.star.stars = obj.num
    },
    toggleFormShow(state){
      state.isFormShow = !state.isFormShow
    }

  },
  actions:{},
  getters:{
  },
})