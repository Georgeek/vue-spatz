<template>
  <progressive-background
            src="/images/img1.jpg"
            placeholder="/images/img1.jpg"
            :blur="30">
    <div class="bg">
      <div class="container">
        <vheader></vheader>

        <div class="page-content">

          <!-- Title -->
          <div class="page-title">
            <div class="page-title__wrap">
              <h1 class="title title--index">{{ pageText.title}}</h1>
            </div>
          </div>

          <!-- Content -->
          <div class="content">
            <div class="content__wrap">
              <div class="content__row">
                <div class="content__left">
                  <p class="description description__text"> {{ pageText.text}} </p>
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
import vheader from '@/components/header'
import vfooter from '@/components/footer'
import contacts from '@/components/contacts'
import axios from 'axios'

export default {
  components: { vheader, vfooter, contacts },
  name: 'vmain',
  data() {
    return {
      pageText: {},
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
    requestData(lang) {
      axios.get(`/api/v1/page/get?url=/&lng=${lang}`)
        .then((resText) => this.pageText = resText)
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