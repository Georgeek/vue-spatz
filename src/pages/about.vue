<template>
  <progressive-background
            src="https://unsplash.it/5000/4000?image=10"
            placeholder="https://unsplash.it/20/20?image=10"
            :blur="30">
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
              <p class="description description__text">Quis debitis ex autem excepturi, magnam soluta architecto unde libero minima consectetur.</p>
            </div>

            <div class="content__row">
              <div class="content__left content__carousel">
                <!-- Form -->
                <div>
                  <carousel paginationActiveColor="#0086BC">
                    <slide>Text 1 Text 2</slide>
                    <slide>Text 1 Text 2</slide>
                    <slide>Text 1 Text 2</slide>
                    <slide>Text 1 Text 2</slide>
                  </carousel>
                </div>

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
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'vabout',
  components: {vheader, vfooter, Carousel, Slide}
}
</script>

<style lang="sass">
.bg
  &--third
    // background-color: #77bfa1
    // background: linear-gradient(0, rgba(13, 44, 74, .99) 30%, rgba(255, 255,255, 0)), url('../assets/img/bgpage3.png')
    background-repeat: no-repeat
    background-position: center
    background-size: cover

.VueCarousel-dot--active .VueCarousel-dot-inner
  background: #0086BC

</style>
