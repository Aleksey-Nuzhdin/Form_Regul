<template lang='pug'>
  li.appraisal__item
    .appraisal-item__title.text-size_14_20_Med.text-color_grey_900
      |{{star.title}}
    ul.appraisal-stars__list(
      @mouseleave='hoverDownAppraisal()'
    )
      li.appraisal-stars__item(
        v-for="(num, ind) in 5" :key='ind'
        :class="{'appraisal-stars__item_activ':(num <= countStars)}"
        @click="clickAppraisal({star, num})"
        @mouseenter="hoverUpAppraisal(num)"
      )
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  props:['star'],
  data:()=>({
    countStars: 0,
  }),
  methods:{
    ...mapMutations(['newAppraisal']),
    //Меням классы при наведении
    hoverUpAppraisal(num){
      this.countStars = num
    },
    //Возвращаем обратно
    hoverDownAppraisal(){
      this.countStars = this.star.stars
    },
    //Фиксируем при клике
    clickAppraisal(obj){
      this.newAppraisal(obj)
      this.countStars = this.star.stars
    }
  },
  created(){
    this.countStars = this.star.stars
  }
}
</script>