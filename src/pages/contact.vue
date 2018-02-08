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

            <div class="content__row content--reverse">
              <div class="content__form">
                <div class="google-keep google-keep-bg">
                  <div class="google-keep__block">
                    <form action="" method="get" id="feedbackform">
                      <div class="google-keep__input-cont">
                        <input aria-label="name" autocomplete="off" placeholder="name" type="text" class="google-keep__input">
                      </div>
                      <div class="google-keep__input-cont">
                        <input aria-label="email address" autocomplete="off" placeholder="email address" type="text" class="google-keep__input">
                      </div>
                      <div class="google-keep__input-cont">
                        <textarea aria-label="message" autocomplete="off" placeholder="message" type="text" class="google-keep__input" ></textarea>
                      </div>
                      <!-- <input class="form__hidden" type="submit" id="submit-form"> -->
                    </form>
                  </div>

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
            <div class="content__row">
              <input class="form__submit-btn" type="submit" form="feedbackform" value="Send">
              <!-- <label class="form__submit-btn" for="submit-form" tabindex="0">send</label> -->
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

.google-keep
  display: flex
  justify-content: flex-end
  align-items: center
  flex: 1 1 100%
  vertical-align: middle

  &__block
    padding-right: 16px
    width: 100%
    max-width: 100%
    flex: 1 1 auto

    form
      position: relative
      margin-right: 0
      margin-left: 0
      max-width: 720px

  &__input-cont
    margin-right: 50px
    margin-top: 20px
    padding: 0
    overflow: hidden
    background-color: rgba(255, 255, 255, 1)
    border: 1px solid rgba(0, 0, 0, 0)
    border-radius: 4px
    transition: background 100ms ease, width 100ms ease

    input, textarea
      padding: 13px 25px
      box-sizing: border-box
      width: 100%
      color: rgba(0, 0, 0, .8)
      background: transparent
      border: none
      outline: none

    textarea
      height: 105px
      resize: vertical
      overflow-x: hidden

      &::placeholder
        color: rgba(0, 0, 0, .8)
.form
  &__submit-btn
    margin-top: 20px
    padding: 13px 25px
    max-width: 100px
    color: #fff
    background: #0086bc
    border: none
    border-radius: 4px


</style>
