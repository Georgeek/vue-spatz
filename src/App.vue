<template>
  <div id="app">
    <transition name="page">
      <router-view style="position: absolute;" />
    </transition>
  </div>
</template>

<script>
import vmain from '@/components/main'
import vabout from '@/pages/about'
import vpartners from '@/pages/partners'
import vcontact from '@/pages/contact'

// import messages from './lang/lang'
export default {
  name: 'App',
  components: { vmain, vabout, vcontact, vpartners }
}
</script>

<style lang="sass">
@import './assets/sass/_main.sass'

.page-enter, .page-enter-active, .page-enter-to
  position: absolute
  z-index: -100

.page-enter
  transform: translate3d(100%, 0, 0)

.page-enter-active
  transition: transform 1s

.page-enter-to
  transform: translateX(0)

.page-leave-active
  transition: transform 1s

.page-leave
  transform: translate3d(0, 0, 0)

.page-leave-to
  opacity: 1
  transform: translate3d(-100%, 0 , 0)
</style>
