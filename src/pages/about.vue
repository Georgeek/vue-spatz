<template>
  <section class="bg bg--third">
    <ul>
      <li><router-link to="/">/index</router-link></li>
      <li><router-link to="/main">/main</router-link></li>
      <li><router-link to="/about">/about</router-link></li>
    </ul>
    <div class="container green">
      test
    </div>
  </section>
</template>

<script>
export default {
  name: 'vabout'
}
</script>

<style lang="sass">
.bg
  &--third
    background-color: #77bfa1
    background: linear-gradient(0, rgba(13, 44, 74, .99) 30%, rgba(255, 255,255, 0)), url('../assets/img/bgpage3.png')
    background-repeat: no-repeat
    background-position: center
    background-size: cover

</style>
