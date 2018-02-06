<template lang="pug">
  header.header
    .header__wrap
      nav.mobile-nav(:class="{down: isActive}")
        h1 Menu
        ul
          li.mobile-nav__item
            router-link(to="/") {{ $t('message.hello') }}
          li.mobile-nav__item
            router-link(to="/main") our partners
          li.mobile-nav__item
            router-link(to="/about") contact us
      .menu(@click="toggleMenu" :class="{round: isRound}")
        a.trigger(href="#" :class="{round: isRound, close: !isHide}") &equiv;
        a(href="#" :class="{round: !isRound, close: isHide}") &times;
      .logo
        .logo__container
          svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.99 101.54")
            //- defs
            title Logo
            path(class="spatz-logo" d="M68.78,84h-1.1v3.11H67V84h-1.1v-.65h2.93Z")
            path(class="spatz-logo" d="M73.15,85.13l.08-.75h0L73,85l-.8,1.4h-.24L71.09,85l-.24-.59h0l.1.74v2h-.69V83.32h.67l1,1.71.18.43h0l.16-.44,1-1.7h.67v3.76h-.74Z")
            path(class="spatz-logo" d="M76.81,18.35a1.43,1.43,0,0,0-1.17-.63c-.72,0-1.45,0-2.15,0l-1,0V19h1.07c.69,0,1.4,0,2.1,0l.15,0a.15.15,0,0,1,0,.06,3.08,3.08,0,0,1-1,1.08l-.24.18-.66.5c-.46.34-.93.69-1.37,1.07A1.41,1.41,0,0,0,71.79,23,1.43,1.43,0,0,0,72.56,24c.15.11.19.19.19.2a.41.41,0,0,1-.13.19,11.38,11.38,0,0,1-1.47,1.16c-.57.38-1.17.75-1.75,1.1l-1,.6-.05,0c-.45.28-.91.57-1.36.89a1.52,1.52,0,0,0-.57,1.87.27.27,0,0,1-.12.39L66,30.7a21.35,21.35,0,0,1-2.28,1.39,18,18,0,0,1-2.39.88l-.47.15a5,5,0,0,0-3,2.1,2.8,2.8,0,0,1-1.79,1.2l-.29.09a11.14,11.14,0,0,0-1.3.45,3.38,3.38,0,0,0-1.23.85,4.27,4.27,0,0,1-2.46,1.43l-1.49.34c-.55.12-1.1.23-1.65.37a16.63,16.63,0,0,0-2.09.65,4.67,4.67,0,0,0-2,1.94l-.36.56a10,10,0,0,1-1,1.34A8.48,8.48,0,0,0,40.08,51a24.24,24.24,0,0,0,1.46,6.78,11.36,11.36,0,0,1,.89,3.6,5.87,5.87,0,0,1-.26,1.41c-.06.21-.12.42-.17.62a2,2,0,0,1-.12.29l-.09.18c-.12.26-.19.3-.19.3s-.09,0-.38-.1a1,1,0,0,0-1.16.26c-.23.31-.44.62-.64.92l-.24.37c-.36.54-.55.76-.9.76a.31.31,0,0,1-.17,0,1.16,1.16,0,0,0-1.72.24c-.31.34-.6.68-.9,1-.07.08-.23.26-.79,0l-.25-.12a13.86,13.86,0,0,0-1.76-.74c-.5-.16-1-.27-1.51-.38l-.38-.09v1.26s0,5.29,0,8.38l1.36,0H69.27a.85.85,0,0,0,.84-.84V27.69c.57-.34,1.15-.7,1.72-1.08a11.56,11.56,0,0,0,1.63-1.29A1.44,1.44,0,0,0,74,24.15,1.51,1.51,0,0,0,73.25,23a.65.65,0,0,1-.15-.12l.12-.11c.41-.35.84-.67,1.3-1,.23-.17.46-.34.68-.52l.23-.17a4,4,0,0,0,1.42-1.54A1.24,1.24,0,0,0,76.81,18.35Z")
            path(class="spatz-logo" d="M32,22.9a1.61,1.61,0,0,0,.34,0,4,4,0,0,0,2.1-.9,6.41,6.41,0,0,0,2.24-4.36c0-.37.06-.75.09-1.12s.05-.86.11-1.27a3.8,3.8,0,0,1,1.71-2.83A7.71,7.71,0,0,1,44.1,11.2a14,14,0,0,0,1.77.16A5.05,5.05,0,0,0,47.7,11a20.37,20.37,0,0,0-1.87,4.27l-.08.23c-.33,1-.65,1.93-1,2.9L44.6,19c-.06.18-.12.37-.19.55-.19.59-.4,1.2-.54,1.84a3.84,3.84,0,0,0,.07,2.16,2.24,2.24,0,0,0,2.13,1.49,2.49,2.49,0,0,0,1.31-.38,13,13,0,0,0,2.41-2l.32-.31a7.14,7.14,0,0,1,4.68-2.09c1.53-.1,3.11-.13,4.67-.15,2.48-.05,5-.08,7.45-.11h2.36a.85.85,0,0,0,.84-.84V.84a.83.83,0,0,0-.26-.6A.84.84,0,0,0,69.27,0H31.91a.85.85,0,0,0-.84.85v20s0,.59,0,.85a1.24,1.24,0,0,0,.26.93A.85.85,0,0,0,32,22.9Z")
            path(class="spatz-logo" d="M23.56,42.24A20.73,20.73,0,0,1,20.4,36a17.55,17.55,0,0,1-1.07-5.71,20.4,20.4,0,0,1,1.85-8.55A17.36,17.36,0,0,1,24,17.24l.87-1L25,16.2c-.3-.26-.59-.52-.87-.79-1-.92-1.93-1.85-2.89-2.78L18,9.54,14.44,6.13,12.84,4.6h0c-.3.34-.6.68-.89,1l-.57.7c-.54.66-1.09,1.34-1.57,2C9,9.5,8.3,10.71,7.69,11.75c-.34.58-.64,1.22-.93,1.84l-.13.25.55.28,1.38.69,1.77.82,1.73.81c.69.33,1,.71.66,1.56a26.55,26.55,0,0,0-1.83,5.71c-.07.37-.16.74-.25,1.13l-.12.51a.6.6,0,0,1-.68.47l-.55-.08c-.4,0-.8-.1-1.19-.17l-4-.63-.76-.12-.12.64c0,.27-.1.55-.14.82a32.43,32.43,0,0,0,0,8.91c.08.61.23,1.22.37,1.86l.05.19c1.06-.24,2.13-.47,3.19-.69l2.22-.45.85-.18a.63.63,0,0,1,.72.43l.3,1.11c.22.81.43,1.57.71,2.31.43,1.14.95,2.27,1.45,3.37l.41.9a.89.89,0,0,1-.4,1.24l-1.77.95L7.57,48.12l-.07,0-.17.09.11.2a32.94,32.94,0,0,0,4.14,6.16c.44.51.94,1,1.43,1.48l.18.18c.2.2.4.42.6.64a11.52,11.52,0,0,0,.85.86c1-1.16,2-2.29,3-3.44l.09-.1c.38-.43.77-.87,1.2-1.29a1.07,1.07,0,0,1,1.25-.07c.37.27.73.55,1.08.83l.38.3a26.36,26.36,0,0,0,4.77,3,1,1,0,0,1,.54.55,1,1,0,0,1-.08.73c-.41.86-.83,1.71-1.24,2.56l-1.5,3.07-.06.12.09.06a4.92,4.92,0,0,0,.61.3l.65.26c.74.3,1.49.6,2.24.86s1.56.46,2.34.67l.22.06.56.13V48.26A12.29,12.29,0,0,1,28.46,47,20.12,20.12,0,0,1,23.56,42.24Z")
            path(class="spatz-logo" d="M54.41,98.53,61.62,91V88.46H52.43l-2,2.11v.63H59l-.08.06-.22.17a5.07,5.07,0,0,0-.45.36.46.46,0,0,0-.21.37c0,.16.12.26.25.35s.07.06.07.07l0,.06a3.05,3.05,0,0,1-.49.38l-.58.37-.32.2h0l-.45.29a.52.52,0,0,0-.19.63.1.1,0,0,1,0,.13l-.11.07a6.78,6.78,0,0,1-.76.47,6.9,6.9,0,0,1-.8.29l-.15,0a1.67,1.67,0,0,0-1,.7,1,1,0,0,1-.6.4l-.1,0a3.66,3.66,0,0,0-.43.15,1.11,1.11,0,0,0-.41.28,1.43,1.43,0,0,1-.82.48l-.38.08-.94,1v2.66H61.88V98.53Z")
            path(class="spatz-logo" d="M13.55,88.54h6.59a4.54,4.54,0,0,1,3.23,1,3.88,3.88,0,0,1,1.07,2.92,4,4,0,0,1-1.17,3,5,5,0,0,1-3.56,1.1H17.53v4.76h-4Zm4,5.47h1a2.48,2.48,0,0,0,1.61-.4,1.28,1.28,0,0,0,.46-1,1.41,1.41,0,0,0-.4-1,2.09,2.09,0,0,0-1.52-.43H17.53Z")
            path(class="spatz-logo" d="M32.88,99.25h-4.5l-.62,2.12H23.71l4.82-12.83h4.33l4.82,12.83H33.53Zm-.82-2.77-1.42-4.62-1.4,4.62Z")
            polygon(class="spatz-logo" points="48.83 88.54 36.78 88.54 36.78 91.71 40.82 91.71 40.82 101.37 44.79 101.37 44.79 91.71 46.43 91.71 48.83 89.22 48.83 88.54")
            path(class="spatz-logo" d="M9.41,94.4a21.43,21.43,0,0,0-3.8-.8c-.54-.12-1.34-.16-1.61-.74a1.09,1.09,0,0,1-.08-.93,1.74,1.74,0,0,1,.53-.67A2.76,2.76,0,0,1,6.35,91a2.68,2.68,0,0,1,1.54,1l.2.3,3.37-.19a4.33,4.33,0,0,0-1.91-2.88,5.48,5.48,0,0,0-2.49-1,9.75,9.75,0,0,0-1.12-.07,7.22,7.22,0,0,0-1,.07l.11.7a6.07,6.07,0,0,0-1.77.6L3,88.89l-.09,0A6.94,6.94,0,0,0,1.3,90.17l.52.51A6,6,0,0,0,.73,92.21L.12,91.9a1.94,1.94,0,0,0-.12.59A3.48,3.48,0,0,0,.29,93.9a3,3,0,0,0,2.35,1.76c.88.16,1.78.23,2.66.44a6.26,6.26,0,0,1,2.19.74,1.17,1.17,0,0,1,.43.89.93.93,0,0,1-.39.81,2.42,2.42,0,0,1-1.47.36,2.69,2.69,0,0,1-2.7-2l-2.79.17H.47l-.35,0a.52.52,0,0,1,0,.11,4.52,4.52,0,0,0,.53,1.55c.08.13.17.25.26.37l.55-.46a6.07,6.07,0,0,0,1.4,1.23l-.43.68c.11.07.23.12.34.18l.19.1a6.81,6.81,0,0,0,1.43.52l.19-.73a6,6,0,0,0,1.86.18l0,.7a6.53,6.53,0,0,0,2-.46,4.71,4.71,0,0,0,2.13-1.52,3.76,3.76,0,0,0,.71-3.17A3,3,0,0,0,9.41,94.4Z")

      nav.site-nav
        ul
          li
            router-link(to="/") {{ $t('message.hello') }}
          li
            router-link(to="/main") our partners
          li
            router-link(to="/about") contact us
        .switch-button
          button.switch-button__case(:class="{active:selected == 'en'}" @click="changeLanguage('en')") en
          button.switch-button__case(:class="{active:selected == 'ru'}" @click="changeLanguage('ru')") ru
</template>

<script>
import Vue from 'vue'
export default {
  name: 'vheader',
  data: function() {
    return {
      selected: 'en',
      isActive: false,
      isRound: false,
      isHide: true
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$locale.change(lang)
      this.selected = lang
    },
    toggleMenu() {
      this.isActive = !this.isActive
      this.isRound = !this.isRound
      this.isHide = !this.isHide
      console.log('click ' + this.isActive)
    }
  }
}
</script>

<style lang="sass" scoped>
  a
    color: white
    text-transform: uppercase
    text-decoration: none
    font-weight: bold

  .header
    &__wrap
      margin: 27px auto 120px
      display: flex
      justify-content: space-between
      align-items: center

      @media(max-width: 1370px)
        margin: 27px 20px 120px

  .site-nav
    li
      display: inline-block;
      margin-right: 64px
    @media(max-width: 760px)
      ul
        display: none

  .menu
    // position: fixed
    display: none
    z-index: 100
    top: 25px
    left: 25px
    width: 75px
    height: 75px
    box-sizing: content-box
    color: #fff
    text-align: center
    border: 3px solid #fff
    transition: all .5s ease

    @media (max-width: 760px)
      display: block

    a
     display: block
     text-decoration: none
     font-family: 'Open Sans', sans-serif;
     font-size: 48pt
     font-weight: bold
     color: #fff
     margin: 0 auto

    .close
      display: none

  .trigger
    animation: menu-spin-back .4s ease-in-out
    animation-fill-mode: forwards

  .round
    animation: menu-spin .4s ease-in-out
    animation-fill-mode: forwards

  @-webkit-keyframes menu-spin
    50%
      border-radius: 100%
    100%
      border-radius: 100%
      transform: rotate(180deg)

  @-webkit-keyframes menu-spin-back
    50%
      border-radius: 0
    100%
      border-radius: 0
      transform: rotate(-180deg)

  .logo
    &__container
      height: 60px
      width: 60px

    .spatz-logo
      fill: white;
  nav
    display: flex
    justify-content: space-between
    align-items: center
  .mobile-nav
    position: absolute
    top: -100%
    left: 0
    padding-bottom: 20px
    display: none
    width: 100%
    height: auto
    text-align: center
    text-shadow: 1px 1px 1px rgba(0, 0, 0, .4)
    background: pink
    box-shadow: 0 0 10px 2px #000
    transition: top .4s ease-in-out
    &__item
      margin-bottom: 10px
    @media (max-width: 760px)
      display: block

    h1
      margin: 55px 0 30px

  .down
    top: 0
    transition: top .4s ease-in-out


  .switch-button
    &__case
      font-size: 17px
      color: white
      text-transform: uppercase
      cursor: pointer
      background-color: transparent
      border: none
      outline: none
      &.active
        font-weight: bold
        border: none

</style>
