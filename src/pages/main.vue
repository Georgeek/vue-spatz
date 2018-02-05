<template>
  <section class="bg bg--second">
    <vheader></vheader>
    <div class="container pink">
      test
    </div>
    <vfooter></vfooter>
  </section>
</template>

<script>
import vheader from '@/components/header'
import vfooter from '@/components/footer'
export default {
  name: 'vmain',
  components: {vheader, vfooter}
}
</script>

<style lang="sass">
.bg
  &--second
    background: #0d2c4a
    background-image: url(../assets/img/bgpage2.png)
    background: linear-gradient(0, rgba(13, 44, 74, .99) 30%, rgba(255, 255,255, 0)), url('../assets/img/bgpage2.png')
    background-repeat: no-repeat
    background-position: center
    background-size: cover

</style>
