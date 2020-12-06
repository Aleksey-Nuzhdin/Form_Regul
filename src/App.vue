<template lang='pug'>
  #app
    transition(name="toast")
      .toast__mesage.text-color_white.text-size_14_20_Med( 
        v-if="isShowToast"
      )
        |Спасибо, отзыв опубликован!
        .toast__close(
          @click='hideToast()'
        )
    button.form-bottom__btn-submit.text-color_white.text-size_14_20_Semi.button_show(
      v-if="!isFormShow"
      @click='toggleFormShow()'
    )
      |Оставить отзыв
    Form(v-else)
    
</template>

<script>
import Form from './vue/Form_regul.vue'
import FormPhone from './vue/Form_regul_phone.vue'
import { mapMutations } from 'vuex';

export default {
  data:()=>({
    screenWidth: 1200,
  }),
  created(){ 
    window.addEventListener('resize', this.updateScriinWidth);
  },
  methods:{
    ...mapMutations(['toggleFormShow', 'hideToast']),
    updateScriinWidth(){
      this.screenWidth = window.innerWidth
    }
  },
  computed:{
    isFormShow(){
      return this.$store.state.isFormShow
    },
    isShowToast(){
      return this.$store.state.isShowToast
    }
  },
  components:{
    Form,FormPhone
  }
}
</script>

<style lang="scss">
  .toast-enter ,.toast-leave-to{
    transform: translateY(-100%);
    transition: all .3s ease;
    opacity: 0;
  }
  .toast-enter-to, .toast-leave{
    transform: translateY(0);
    transition: all .3s ease;
    opacity: 1;
  }
  .toast__mesage{
    position: absolute;
    right: 100px;
    top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 12px;
    width: 279px;
    height: 36px;
    background: #15A758;
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
  }
  .toast__close{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #72c998;
    background-image: url(/src/assets/img/cancel.svg);
    background-position: -2px -2px;
    cursor: pointer;
  }
  #app{
    padding: 10px;
    min-height: 100%;
    width: 100%;
    background-color: rgb(128, 128, 128);
  }
  .button_show{
    width: initial;
    margin: 25px;
  }
</style>