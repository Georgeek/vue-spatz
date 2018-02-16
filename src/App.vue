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
*
  transition: all .3s ease

body, html
  position: relative
  margin: 0
  height: 100%

#app
  position: relative
  overflow: hidden
  height: 100%
  font-family: Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #fff

  @media (max-height: 640px), (max-device-width: 667px)
    overflow: auto

ul
  margin: 0
  padding: 0
  display: inline-block
  list-style: none

h1, h2
  font-weight: normal

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

.bg
  width: 100%
  height: 100%
  background: linear-gradient(0, rgba(13, 44, 74, .99) 35%, rgba(0, 0, 0, .1))
  @media (max-height: 640px), (max-device-width: 667px)
    width: auto
    height: auto

.container
  position: relative
  margin: 0 auto
  padding: 0 183px 0 287px
  max-width: 1366px
  height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-between
  box-sizing: border-box

  @media (max-width: 1266px)
    padding: 0 91px 0 143px
  @media (max-width: 980px)
    padding: 0 10px
</style>
