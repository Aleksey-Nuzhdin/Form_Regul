<template lang='pug'>
  #app
    button.form-bottom__btn-submit.text-color_white.text-size_14_20_Semi.button_show(
      v-if="!isFormShow"
      @click='toggleFormShow()'
    )
      |Оставить отзыв
    Form(v-else)
    
</template>

<script>
import Form from './vue/Form_regul.vue'
import { mapMutations } from 'vuex';

export default {
  data:()=>({
    
  }),
  created(){
    
  },
  methods:{
    ...mapMutations(['toggleFormShow'])
  },
  computed:{
    isFormShow(){
      return this.$store.state.isFormShow
    }
  },
  components:{
    Form,
  }
}
</script>

<style lang="scss">
  #app{
    padding: 10px;
    height: 100%;
    width: 100%;
    background-color: rgb(128, 128, 128);
  }
  .button_show{
    width: initial;
    margin: 25px;
  }
</style>