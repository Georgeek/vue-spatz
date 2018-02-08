<template>
  <section class="bg bg--fourth">
    <div class="container">
      <vheader></vheader>

      <div class="page-content">

        <!-- Title -->
        <div class="page-title">
          <div class="page-title__wrap">
            <h1 class="title">Get in touch with us</h1>
          </div>
        </div>

        <!-- Content -->
        <div class="content">
          <div class="content__wrap">
            <div class="content__row">
              <p class="description description__text">For any further information about Spatz, please fill out the form below. One of our representatives will contact you shortly.</p>
            </div>

            <div class="content__row">
              <div class="content__left">
                <!-- Form -->
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
  </section>
</template>

<script>
import vheader from '@/components/header'
import vfooter from '@/components/footer'
export default {
  name: 'vcontact',
  components: {vheader, vfooter}
}
</script>

<style lang="sass">
.bg
  &--fourth
    background-color: #77bfa1
    background: linear-gradient(0, rgba(13, 44, 74, .99) 30%, rgba(255, 255,255, 0)), url('../assets/img/bgpage4.png')
    background-repeat: no-repeat
    background-position: center
    background-size: cover

</style>
