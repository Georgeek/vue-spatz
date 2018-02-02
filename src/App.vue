<template>
  <div id="app">
    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>

import vmain from '@/pages/main'
import vabout from '@/pages/about'
export default {
  name: 'App',
  components: { vmain, vabout }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style: none;
  display: inline-block;
}

li {
  display: inline-block;
}

.page-enter-active, .page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-leave-to {
  opacity: 1;
  transform: translateX(-100%);
}

.page-enter {
  transform: translateX(100%);
}

</style>
