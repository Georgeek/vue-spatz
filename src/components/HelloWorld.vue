<template>
  <div class="bg bg--first">
    <vheader></vheader>
    <h1>{{ msg }}</h1>
    <h2>index page navigation</h2>
    <h2>Ecosystem</h2>
    <vfooter></vfooter>
  </div>
</template>

<script>

import vheader from '@/components/header'
import vfooter from '@/components/footer'
export default {
  name: 'HelloWorld',
  components: {vheader, vfooter},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.bg
  &--first
    background: #0d2c4a
    background-image: url(../assets/img/bgpage1.png)
    background: linear-gradient(0, rgba(13, 44, 74, .99) 35%, rgba(0, 0, 0, .1)), url('../assets/img/bgpage1.png')
    background-repeat: no-repeat
    background-position: center
    background-size: cover
</style>
