<template lang='pug'>
  article.form-regul
    .form-top
      .form-top__title.text-size_16_24_Semi.text-color_grey_900
        |Мой отзыв
      a.form-top__close(
        @click='toggleFormShow()'
      )
    .form-middle
      .cart-info
        img.cart-info__img(src='/img/cart_mid_img.png' alt='photo_1')
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
      .comment
        textarea.comment__textarea.text-size_16_24_Reg.text-color_grey_600(placeholder='Комментарий'
          v-model='textTextarea'
        )
        span.comment__max-symbol.text-size_12_16_Reg.text-color_grey_600
          |{{textTextarea.length}}/{{setValidation.maxLenghtTextArea}}
      .photo
        ul.photo__list
          li.photo__item.photo__item_add(
            @click='addPhoto()'
          )
          li.photo__item(
            v-for='(val, ind) in setPhoto' :key='ind'
          )
            img.photo__img(:src='val')
          
          a.delete-photo(
            v-if="setPhoto.length > 0"
            @click="deletePhoto()"
          )

    .form-bottom
      button.form-bottom__btn-submit.text-color_white.text-size_14_20_Semi
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
    textTextarea: ''
  }),
  created(){
  },
  methods:{
    ...mapMutations(['toggleFormShow','updataPhoto','deletePhoto']),
    addPhoto(){
      let src = prompt('укажите ссылку', '');
      if((src.length > 0) && (typeof(src) === "string")){
        this.updataPhoto(src)
      }
    },
    validTextarea(){
      if(this.textTextarea.length > 0 && this.textTextarea <= this.setValidation.maxLenghtTextArea) return true
      return false
    },
    validAppraisal(){

    },
    validation(){

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
