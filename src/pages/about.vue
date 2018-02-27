<template>
  <progressive-background
              src="http://spatz.web-y.ru/images/img2.jpg"
              placeholder="http://spatz.web-y.ru/images/img2.jpg"
              :blur="30">
    <div class="bg">
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
              <h1 class="title">{{pageText.title}}</h1>
            </div>
          </div>


          <!-- Content -->
          <div class="content">
            <div class="content__wrap">
              <div class="content__row">
                <h4 class="content__title">spatz</h4>
              </div>
              <div class="content__row">
                <div class="content__left textblock">
                  <transition-group name="textslide">
                    <div class="content__textblock  content--transition" v-if="docState === 'case'" key="case">
                      <div class="description description__text" v-html="pageText.text"></div>
                      <p class="description description__text"> 111111111111111Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam accusantium pariatur commodi eaque consectetur earum omnis. Sit, sint autem! Quod, mollitia numquam vero unde dolorum modi sapiente odit incidunt.</p>
                    </div>
                    <div class="content__textblock  content--transition" v-if="docState === 'radar'" key="radar">
                      <div class="description description__text" v-html="pageText.text"></div>
                      <p class="description description__text"> 2222222222222222Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam accusantium pariatur commodi eaque consectetur earum omnis. Sit, sint autem! Quod, mollitia numquam vero unde dolorum modi sapiente odit incidunt.</p>
                    </div>
                    <div class="content__textblock  content--transition" v-if="docState === 'settings'" key="settings">
                      <div class="description description__text" v-html="pageText.text"></div>
                      <p class="description description__text"> 333333333333333Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam accusantium pariatur commodi eaque consectetur earum omnis. Sit, sint autem! Quod, mollitia numquam vero unde dolorum modi sapiente odit incidunt.</p>
                    </div>

                  </transition-group>
                </div>

                <div class="content__right">
                  <contacts></contacts>
                </div>
              </div>
            </div>
          </div>

        </div>

        <vfooter></vfooter>
      </div>
    </div>
  </progressive-background>
</template>

<script>
export default {
  name: 'vabout',
  data() {
    return {
      docState: 'case',
      pageText: {}
    }
  },
  watch: {
    language(){
      // do something
    }
  },
  computed: {
    language() {
      this.requestData(this.$store.state.language)
    }
  },
  methods: {
    showText(key) {
      this.docState = key;
    },
    requestData(lang) {
      return fetch(`http://spatz.web-y.ru/api/v1/page/get?url=about-us&lng=${lang}`, {
        method: 'GET',
        body: null,
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then((res) => res.json())
        .then((resText) => {
          this.pageText = resText;
        })
        .catch((error) => console.log(error));
    }
  }

}
</script>

<style lang="sass">
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

.textblock
  @media (max-width: 800px), (max-height: 640px)
    height: 210px

.textslide-enter-active
  transition: all 1.8s ease
.textslide-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.textslide-enter, .textslide-leave-to
  transform: translateX(50px)
  opacity: 0
</style>
