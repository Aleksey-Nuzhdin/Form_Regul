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
          
          a.delete-photo(
            v-if="setPhoto.length > 0"
            @click="deletePhoto()"
          )

    .form-bottom
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
    textTextarea: ''
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


    //Валидация
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


    subForm(){
      if(this.validation()){
        //Если проходит валидацию, делаем запрос на сервер, скрываем форму, показываем сообщение, и сбрасываем данные.
        this.ajaxSetform()
        this.toggleFormShow()
        this.showMessege()
        this.resetState()
      }
    },
    ajaxSetform(){

    },
    //Показываем сообщение и скрываем его через 1.5 сек
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
