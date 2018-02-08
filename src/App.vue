<template>
  <div id="app">
    <transition name="page">
      <router-view style="position:absolute" />
    </transition>
  </div>
</template>

<script>

import vmain from '@/pages/main'
import vabout from '@/pages/about'
import vcontact from '@/pages/contact'
export default {
  name: 'App',
  components: { vmain, vabout, vcontact }
}
</script>

<style>
* {
  transition: all .3s ease;
}

body, html {
  margin: 0;
  height: 100%;
  position: relative;
}

#app {
  position: relative;
  overflow: hidden;
  height: 100%;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

ul {
  margin: 0;
  padding: 0;
  display: inline-block;
  list-style: none;
}

h1, h2 {
  font-weight: normal;
}

.page-enter, .page-enter-active, .page-enter-to {
  position: absolute;
  z-index: -100;
}

.page-enter {
  transform: translate3d(100%, 0, 0);
}

.page-enter-active {
  transition: transform 1s;
}

.page-enter-to {
  transform: translateX(0)
}

.page-leave-active {
  transition: transform 1s;
}

.page-leave {
  transform: translate3d(0, 0, 0);
}
.page-leave-to {
  opacity: 1;
  transform: translate3d(-100%, 0 , 0);
}

.bg {
  width: 100%;
  height: 100%;
}

@media (max-height: 640px), (max-device-width: 667px) {
  #app {
    overflow: auto;
  }
  .bg {
    width: auto;
    height: auto;
  }
}

</style>
