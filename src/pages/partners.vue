<template>
  <progressive-background
              src="/images/img3.jpg"
              placeholder="/images/img3.jpg"
              :blur="30">
    <div class="bg">
      <div class="container">
        <vheader></vheader>

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
                <p class="description description__text">{{pageText.text}}</p>
              </div>

              <div class="content__row">
                <div class="content__left content__carousel">

                  <slick ref='slick' :options="slickOptions" v-if="partners">
                    <div v-for="(slide, key) in partners" :key="key">
                        <div class="carousel__item card">
                          <div class="card__image">
                            <img :src="slide.path" alt="" srcset="">
                          </div>
                          <div class="card__title">
                            <hr>
                            {{ slide.name }}
                          </div>
                        </div>
                    </div>
                  </slick>

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
import { Carousel, Slide } from 'vue-carousel'
import vheader from '@/components/header'
import vfooter from '@/components/footer'
import contacts from '@/components/contacts'
import slick from 'vue-slick'


export default {
  name: 'vpartners',
  components: { vheader, vfooter, contacts, Carousel, Slide, slick},
  data() {
    return {
      pageText: {},
      partners: null,
      paginationEnabled: false,
      props: {
        paginationEnabled: Boolean
      },
      slickOptions: {
        slidesToShow: 4,
        rows: 2,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    }
  },
  // created() {
  //   this.requestPartners();
  // },
  watch: {
    language(){
      // do something
    }
  },
  computed: {
    language() {
      this.requestData(this.$store.state.language)
      this.requestPartners();
    }
  },
  methods: {
    requestData(lang) {
      return fetch(`/api/v1/page/get?url=partners&lng=${lang}`, {
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
    },
    requestPartners() {
      return fetch(`/api/v1/partners`, {
        method: 'GET',
        body: null,
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then((res) => res.json())
        .then((resText) => {
          this.partners = resText;
        })
        .catch((error) => console.log(error));
    }
  },
  metaInfo() {
    return {
      title: this.pageText.seoTitle,
      meta: [
        { keywords: this.pageText.seoKeywords },
        { description: this.pageText.seoDescription },
        { property: 'og:site_name', content: 'SPATZ' },
        { property: 'og:url', content: 'localhost' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.pageText.seoTitle },
        { property: 'og:description', content: this.pageText.seoDescription },
        { property: 'og:image', content: this.pageText.seoImage },
        { property: 'og:image:type', content: 'image/jpeg' }
      ]
    }
  }

}
</script>

<style lang="sass">
@import '../../node_modules/slick-carousel/slick/slick-theme.css'
@import '../../node_modules/slick-carousel/slick/slick.css'
.slick-dots li button:before
  color: white

.slick-dots li.slick-active button:before
  color: #0086BC

.VueCarousel
  @media (max-width: 639px)
    margin: 0 20px 0 -5px

.VueCarousel-pegination
  display: none

.VueCarousel-inner
  flex-direction: column !important
  flex-wrap: wrap
  height: 230px

  @media (max-width: 639px)
    flex-direction: row !important
    flex-wrap: nowrap
    height: auto

.VueCarousel-slide
  height: 100%
  max-height: 110px

.VueCarousel-navigation-button
  color: rgb(239, 239, 239) !important

.carousel
  max-width: 500px
  // &__row
  //   display: flex
  //   flex-wrap: wrap
  //   max-width: 355px
  &__item
    margin-right: 32px
    margin-bottom: 10px
.card
  padding: 25px 0 10px
  &__image
    width: 96px
    height: 41px
  &__title
    margin-top: 17px
    font-size: 12px
    text-align: center
  hr
    display: block
    width: 33%
    border: 1px solid #0086BC
    margin-bottom: 7px
</style>
