<template>
  <progressive-background
            src="http://spatz.web-y.ru/images/img1.jpg"
            placeholder="http://spatz.web-y.ru/images/img1.jpg"
            :blur="30">
    <div class="bg">
      <div class="container">
        <vheader @changeLang='requestData'></vheader>

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
                  <contacts :selected="selected"></contacts>
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
export default {
  name: 'vmain',
  components: {vheader, vfooter, contacts},
  data() {
    return {
      pageText: {},
      selected: ''
    }
  },
  created() {
    this.requestData(this.selected);
  },
  methods: {
    requestData(lang) {
      this.selected = lang;
      return fetch(`http://spatz.web-y.ru/api/v1/page/get?url=/&lng=${lang}`, {
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
</style>
