<template>
  <div class="bg bg--first">
    <ul>
      <li><router-link to="/">/index</router-link></li>
      <li><router-link to="/main">/main</router-link></li>
      <li><router-link to="/about">/about</router-link></li>
    </ul>
    <h1>{{ msg }}</h1>
    <h2>index page navigation</h2>

    <!-- <img class="bg-image1" alt="" srcset=""> -->

    <h2>Ecosystem</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
    background: linear-gradient(0, rgba(13, 44, 74, .99) 35%, rgba(255, 255,255, 0)), url('../assets/img/bgpage1.png')
    background-repeat: no-repeat
    background-position: center
    background-size: cover

</style>
