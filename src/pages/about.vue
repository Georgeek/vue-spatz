<template>
    <section>
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

<style lang="sass" scoped>
.container
  margin: 0 auto
  width: 100%
  height: 200px

.green
  background-color: #77bfa1
</style>
