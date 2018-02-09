<template>
  <section class="bg bg--second">
    <div class="container">
      <vheader></vheader>

      <div class="aside">
        <div class="aside__wrap">
          <div class="aside__navbar">
            <div class="aside__btn icobtn" @click="showText('case')"><img src="../assets/img/icobtn1.png" alt="icon button 1" srcset=""></div>
            <div class="aside__btn icobtn" @click="showText('radar')"><img src="../assets/img/icobtn2.png" alt="icon button 1" srcset=""></div>
            <div class="aside__btn icobtn" @click="showText('settings')"><img src="../assets/img/icobtn3.png" alt="icon button 1" srcset=""></div>
          </div>
        </div>
      </div>

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
              <h4 class="content__title">spatz</h4>
            </div>
            <div class="content__row">
               <div class="content__left">
                <transition-group name="textslide">
                  <div class="content__textblock  content--transition" v-if="docState === 'case'" key="case">
                    <p class="description description__text">111111111111111 Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam accusantium pariatur commodi eaque consectetur earum omnis. Sit, sint autem! Quod, mollitia numquam vero unde dolorum modi sapiente odit incidunt.</p>
                    <p class="description description__text"> 111111111111111Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam accusantium pariatur commodi eaque consectetur earum omnis. Sit, sint autem! Quod, mollitia numquam vero unde dolorum modi sapiente odit incidunt.</p>
                  </div>
                  <div class="content__textblock  content--transition" v-if="docState === 'radar'" key="radar">
                    <p class="description description__text">2222222222222222 Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam accusantium pariatur commodi eaque consectetur earum omnis. Sit, sint autem! Quod, mollitia numquam vero unde dolorum modi sapiente odit incidunt.</p>
                    <p class="description description__text"> 2222222222222222Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam accusantium pariatur commodi eaque consectetur earum omnis. Sit, sint autem! Quod, mollitia numquam vero unde dolorum modi sapiente odit incidunt.</p>
                  </div>
                  <div class="content__textblock  content--transition" v-if="docState === 'settings'" key="settings">
                    <p class="description description__text">333333333333333 Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam accusantium pariatur commodi eaque consectetur earum omnis. Sit, sint autem! Quod, mollitia numquam vero unde dolorum modi sapiente odit incidunt.</p>
                    <p class="description description__text"> 333333333333333Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam accusantium pariatur commodi eaque consectetur earum omnis. Sit, sint autem! Quod, mollitia numquam vero unde dolorum modi sapiente odit incidunt.</p>
                  </div>

                </transition-group>
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
  name: 'vmain',
  components: {vheader, vfooter},
  data() {
    return {
      docState: 'case'
    }
  },
  methods: {
    showText(key) {
      this.docState = key;
    }
  }
}
</script>

<style lang="sass">
.bg
  &--second
    background: #0d2c4a
    background-image: url(../assets/img/bgpage2.png)
    background: linear-gradient(0, rgba(13, 44, 74, .99) 30%, rgba(255, 255,255, 0)), url('../assets/img/bgpage2-20.png')
    background-repeat: no-repeat
    background-position: center
    background-size: cover

.aside
  position: absolute
  top: 33%
  left: 50px
  @media (max-width: 980px)
    position: relative
    top: unset
    left: unset
  &__wrap
    @media (max-width: 640px), (max-height: 640px)
      margin-bottom: 20px
  &__navbar
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 265px
    @media (max-width: 980px)
      flex-direction: row
      justify-content: space-around
      height: auto
  &__btn
    width: 50px
    height: 50px
    text-decoration: none
    color: #fff

    img
      width: 50px
      height: 50px

.textslide-enter-active
  transition: all 1.8s ease
.textslide-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.textslide-enter, .textslide-leave-to
  transform: translateX(50px)
  opacity: 0
</style>
