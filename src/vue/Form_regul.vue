<template lang='pug'>
  article.form-regul
    .form-top
      .form-top__title.text-size_16_24_Semi.text-color_grey_900
        |Мой отзыв
      a.form-top__close
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
          li.appraisal__item
            .appraisal-item__title.text-size_14_20_Med.text-color_grey_900
              |Скорость
            .appraisal-item__stars
              .stars__icon
          li.appraisal__item
            .appraisal-item__title
              |Скорость
            .appraisal-item__stars
              .stars__icon
          li.appraisal__item
            .appraisal-item__title
              |Скорость
            .appraisal-item__stars
              .stars__icon
          li.appraisal__item
            .appraisal-item__title
              |Скорость
            .appraisal-item__stars
              .stars__icon
      .comment
        textarea.comment__textarea.text-size_16_24_Reg.text-color_grey_600|Комментарий
        span.comment__max-symbol.text-size_12_16_Reg.text-color_grey_600
          |12/500
      .photo
        ul.photo__list
          li.photo__item.photo__item_add
          li.photo__item
            img.photo__img(src='/img/photo_1.png')
          li.photo__item
            img.photo__img(src='/img/photo_2.png')
          li.photo__item
            img.photo__img(src='/img/photo_3.png')
          li.photo__item
            img.photo__img(src='/img/photo_4.png')
          a.delete-photo

    .form-bottom
      button.form-bottom__btn-submit.text-color_white.text-size_14_20_Semi
        |Отправить

</template>

<script>
export default {
  data:()=>({
    setStars:[ {title: 'Скорость', stars: 3}
              ,{title: 'Скорость', stars: 0}
              ,{title: 'Скорость', stars: 0}
              ,{title: 'Скорость', stars: 0}],
  }),
  created(){
    this.setStars
    console.log(this.$store);
  }
}
</script>
