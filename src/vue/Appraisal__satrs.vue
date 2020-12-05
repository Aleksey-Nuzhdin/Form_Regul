<template lang='pug'>
  li.appraisal__item
    .appraisal-item__title.text-size_14_20_Med.text-color_grey_900
      |{{star.title}}
    ul.appraisal-stars__list
      li.appraisal-stars__item(
        v-for="(num, ind) in 5" :key='ind'
        :class="{'appraisal-stars__item_activ':(num <= star.stars)}"
        @click="newAppraisal({star, num})"
      )
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  props:['star'],
  data:()=>({
   
  }),
  methods:{
    ...mapMutations(['newAppraisal'])
  },
  created(){
  }
}
</script>