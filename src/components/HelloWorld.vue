<template>
  <progressive-background
            src="http://hdwarena.com/wp-content/uploads/2017/04/Bridge-Wallpaper-1867x1080.jpg"
            placeholder="https://unsplash.it/1920/1080?image=10"
            :blur="30">
    <div class="container">
      <vheader></vheader>

      <div class="page-content">

        <!-- Title -->
        <div class="page-title">
          <div class="page-title__wrap">
            <h1 class="title title--index">This your slogan here</h1>
          </div>
        </div>

        <!-- Content -->
        <div class="content">
          <div class="content__wrap">
            <div class="content__row">
              <div class="content__left">
                <p class="description description__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam accusantium pariatur commodi eaque consectetur earum omnis. Sit, sint autem! Quod, mollitia numquam vero unde dolorum modi sapiente odit incidunt.</p>
                <p class="description description__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam accusantium pariatur commodi eaque consectetur earum omnis. Sit, sint autem! Quod, mollitia numquam vero unde dolorum modi sapiente odit incidunt.</p>
              </div>
              <div class="content__right">
                <div class="contact">
                  <div class="contact__wrap">
                    <div class="contact__info">
                      <h6 class="contact__title">Contact info</h6>
                      <ul>
                        <li class="contact__item">Phone: +7-926-977-22-57</li>
                        <li class="contact__item">+7-495-643-10-16 доб 15690</li>
                        <li class="contact__item">Email: spatz.msk@gmail.com</li>
                      </ul>
                    </div>
                    <div class="contact__address">
                      <h6 class="contact__title">Corporate office</h6>
                      <p class="contact__item">119180, г.Москва, ул. Малая Полянка, д.2</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      <vfooter></vfooter>
    </div>

  </progressive-background>
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
  @media (max-width: 640px), (max-height: 640px)
    width
  &--first
    // background: #0d2c4a
    // background-image: url(../assets/img/bgpage1.png)
    // background: linear-gradient(0, rgba(13, 44, 74, .99) 35%, rgba(0, 0, 0, .1)), url('../assets/img/bgpage1.png')
    background-repeat: no-repeat
    background-position: center
    background-size: cover

.container
  position: relative
  margin: 0 auto
  padding: 0 183px 0 287px
  max-width: 1366px
  // height: 100% WAS
  height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-between
  box-sizing: border-box

  @media (max-width: 1266px)
    padding: 0 91px 0 143px
  @media (max-width: 980px)
    padding: 0 10px

.page-content
  margin-top: -70px
  display: flex
  flex-direction: column
  justify-content: space-between
  @media (max-width: 640px), (max-height: 640px)
    margin-top: 0
.page-title
  &__wrap
    margin-bottom: 25px
    margin-left: 30px

.title
  margin: 0
  font-size: 38px
  font-weight: bold
  &--index
    margin-left: 50px
.content
  &__row
    margin-left: 30px
    display: flex
    flex-direction: row
    justify-content: space-between

    @media (max-width: 700px)
      flex-direction: column
  &__left
    position: relative
    width: 100%
    max-width: 462px
    @media (max-width: 780px)
      max-width: 400px
    @media (max-width: 700px)
      height: 250px
      max-width: none
    @media (max-width: 640px), (max-height: 640px)
      max-width: none
  &--transition
    position: absolute
  .slide-leave-active,
  .slide-enter-active
    transition: 1s
  .slide-enter
    transform: translate(100%, 0)
  .slide-leave-to
    transform: translate(-100%, 0)
  &__right
    max-width: 273px
    align-self: flex-end
    @media (max-width: 700px), (max-height: 640px)
      margin: 20px 20px 0 0
      max-width: none
      align-self: auto
  &__form
    flex: 1
  &__title
    margin: 0
    font-size: 22px
    text-transform: uppercase
    color: #0086bc
  &--reverse
    @media (max-width: 700px)
      flex-direction: column-reverse
  &__carousel
    margin-top: 20px
    height: 300px
.contact
  &__wrap
    max-width: 225px
    width: 100%
    @media (max-width: 700px), (max-height: 640px)
      max-width: none
      display: flex
      flex-direction: row
      justify-content: space-between
  &__info
    margin-bottom: 40px
    @media (max-width: 700px), (max-height: 640px)
      margin-bottom: auto
      width: 45%
  &__address
    @media (max-width: 700px), (max-height: 640px)
      width: 45%
  &__item
    margin-bottom: 5px
    font-size: 8pt
  &__title
    margin: 0 0 12px 0
    font-weight: bold

.description
  &__text
    font-size: 14px
    margin: 18px 0

    &:last-child
      margin: 18px 0 0 0

</style>
