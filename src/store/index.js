import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    appraisalStars: [ {title: 'Скорость', stars: 3}
                      ,{title: 'Скорость отдачи видео', stars: 0}
                      ,{title: 'Качество', stars: 0}
                      ,{title: 'Пунктуальность', stars: 0} ],
    setPhototSrc:[ '/img/photo_1.png'
                  ,'/img/photo_2.png'
                  ,'/img/photo_3.png'
                  ,'/img/photo_4.png' ],
    isFormShow: false,
    isShowToast: false,
  },
  mutations:{
    newAppraisal(s, obj){
      obj.star.stars = obj.num
    },
    toggleFormShow(state){
      state.isFormShow = !state.isFormShow
    },
    updataPhoto(state, src){
      console.log(src);
      state.setPhototSrc.push(src)
    },
    deletePhoto(state){
      state.setPhototSrc.pop()
    },
    showToast(state){
      state.isShowToast = true
    },
    hideToast(state){
      state.isShowToast = false
    },
    resetState(state){
      state.setPhototSrc =[]
      state.appraisalStars = state.appraisalStars.map(el => {
        el.stars = 0
        return el
      })
    }

  },
  actions:{},
  getters:{
  },
})