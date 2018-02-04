<template>
  <section class="bg bg--second">
    <ul>
      <li><router-link to="/">/index</router-link></li>
      <li><router-link to="/main">/main</router-link></li>
      <li><router-link to="/about">/about</router-link></li>
    </ul>
    <div class="container pink">
      test
    </div>
  </section>
</template>

<script>
export default {
  name: 'vmain'
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
