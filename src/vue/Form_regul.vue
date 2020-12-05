<template lang='pug'>
  article.form_regul
    |hello
    .form_top
      .form_top__title
      .form_top__close
    .form_middle
      .stars

    .form_bottom

</template>

<script>
export default {
  data:()=>({
    setStars:{},
  }),
  created(){
    this.setStars
    console.log(this.$store);
  }
}
</script>
