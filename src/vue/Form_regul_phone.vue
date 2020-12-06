<template lang='pug'>
  article.form-regul(
    :class='{form_step_1: step == 1, form_step_2: step == 2}'
  )
    .step_1( v-show='step == 1')
      .form-top
        .form-top__title.text-size_16_24_Semi.text-color_grey_900
          |Новый отзыв
        a.form-top__close(
          @click='toggleFormShow()'
        )
      .form-middle
        .cart-info
          img.cart-info__img(src='/portfolio/form_regul/img/cart_mid_img.png' alt='photo_1')
          .cart-info__text
            .cart-info__title.text-size_16_24_Semi.text-color_grey_900
              |Фоточки в свадебном платьице
            .cart-info__person.text-size_12_16_Reg.text-color_grey_700
              |Алена Смирнова
        .appraisal
          ul.appraisal__list
            Stars(
              v-for="(val,ind) of setStars" :key='ind'
              :star='val'
            )
      .form-bottom
        button.form-bottom__btn-next.text-color_white.text-size_14_20_Semi(
          @click='nextStep()'
        )
          |Продолжить
    .step_2( v-show='step == 2')
      .form-top.form-top_step_2
        .form-top_step_2_wrap-title
          a.step-back(
            @click="stepBack()"
          )
          .form-top__title.text-size_16_24_Semi.text-color_grey_900
            |Новый отзыв
        a.form-top__close(
          @click='toggleFormShow()'
        )
      .form-middle
        .comment
          textarea.comment__textarea.text-size_16_24_Reg.text-color_grey_600(placeholder='Комментарий'
            v-model='textTextarea'
          )
          span.comment__max-symbol.text-size_12_16_Reg.text-color_grey_600
            |{{textTextarea.length == 0 ? 12: textTextarea.length}}/{{setValidation.maxLenghtTextArea}}
        .photo
          ul.photo__list
            li.photo__item.photo__item_add(
              @click='addPhoto()'
            )
            li.photo__item(
              v-for='(val, ind) in setPhoto' :key='ind'
            )
              img.photo__img(:src='val')
      .form-bottom.from-bottom_step_2
        button.form-bottom__btn-submit.text-color_white.text-size_14_20_Semi(
          @click='subForm()'
        )
          |Отправить

</template>

<script>
import Stars from './Appraisal__satrs.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  data:()=>({
    setValidation:{
      maxLenghtTextArea: 500,
      minCountPhoto: 1,
      minAppraisal: 1,
    },
    textTextarea: '',
    step: 1,
  }),
  created(){
  },
  methods:{
    ...mapMutations(['toggleFormShow','updataPhoto','deletePhoto','showToast','hideToast','resetState']),
    addPhoto(){
      let src = prompt('укажите ссылку', '/portfolio/form_regul/img/photo_1.png');
      if((src.length > 0) && (typeof(src) === "string")){
        this.updataPhoto(src)
      }
    },
    validTextarea(){
      return !!((this.textTextarea.length > 0) && (this.textTextarea.length <= this.setValidation.maxLenghtTextArea))
    },
    validAppraisal(){
      return this.setStars.every(
        el => { return el.stars >= this.setValidation.minAppraisal}
      )
    },
    validCounPhotot(){
      return !!(this.setPhoto.length >= this.setValidation.minCountPhoto)
    },
    validation(){
      if(!this.validTextarea()){
        alert('Напишите свой комментарий')
        return false
      }
      if(!this.validAppraisal()){
        alert('Поставьте все оценки')
        return false
      }
      if(!this.validCounPhotot()){
        alert('Добавьте хотя бы 1 фотографию')
        return false
      }
      return true

    },
    nextStep(){
      if(!this.validAppraisal()){
        alert('Поставьте все оценки')
        return 
      }
      this.step++
    },
    stepBack(){
      this.step--
    },
    subForm(){
      if(this.validation()){
        this.ajaxSetform()
        this.toggleFormShow()
        this.showMessege()
        this.resetState()
      }
    },
    ajaxSetform(){

    },
    showMessege(){
      this.showToast()
      setTimeout(this.hideToast, 1500)
    }
  },
  computed:{
    setStars(){ return this.$store.state.appraisalStars},
    setPhoto(){ return this.$store.state.setPhototSrc}
  },
  components:{
    Stars,
  }
}
</script>