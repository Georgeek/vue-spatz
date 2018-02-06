<template>
  <div class="bg bg--first">
    <div class="container">
      <vheader></vheader>

      <div class="page-content">

        <!-- Title -->
        <div class="page-title">
          <div class="page-title__wrap">
            <h1 class="title">This your slogan here</h1>
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

  </div>
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
  &--first
    background: #0d2c4a
    background-image: url(../assets/img/bgpage1.png)
    background: linear-gradient(0, rgba(13, 44, 74, .99) 35%, rgba(0, 0, 0, .1)), url('../assets/img/bgpage1.png')
    background-repeat: no-repeat
    background-position: center
    background-size: cover

.container
  margin: 0 auto
  padding: 0 183px 0 287px
  max-width: 1366px
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-between
  box-sizing: border-box

  @media (max-width: 1266px)
    padding: 0 91px 0 143px
  @media (max-width: 980px)
    padding: 0 10px

.page-content
  max-height: 320px
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-between

.page-title
  &__wrap
    margin-bottom: 25px
    margin-left: 30px

.title
  margin: 0
  font-size: 38px
  font-weight: bold
.content
  &__row
    margin-left: 30px
    display: flex
    flex-direction: row
    justify-content: space-between

    @media (max-width: 980px)
      flex-direction: column
  &__left
    max-width: 462px
  &__right
    max-width: 273px
  &__title
    margin: 0
    font-size: 22px
    text-transform: uppercase
    color: #0086bc
.contact
  &__wrap
    max-width: 225px
    width: 100%
  &__info
    margin-bottom: 40px
  &__item
    margin-bottom: 5px
    font-size: 8pt
  &__title
    margin: 0 0 12px 0
    font-weight: bold

.description
  &__text
    font-size: 12pt
    margin: 18px 0

</style>
