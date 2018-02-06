<template lang="pug">
  footer.footer
    .footer__wrap
      .footer__item
        p &copy; 2018 spatz company all rights reserved
</template>

<script>
export default {
  name: 'vfooter'
}
</script>

<style lang="sass" scoped>
  .footer
    &__wrap
      margin-bottom: 42px
      margin: 0 auto
    &__item
      margin: 0 auto
    p
      font-size: 8pt
      text-align: center
      text-transform: uppercase
</style>
