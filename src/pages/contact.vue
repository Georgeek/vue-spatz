<template>
  <progressive-background
              src="/images/img4.jpg"
              placeholder="/images/img4.jpg"
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

              <div class="content__row content--reverse">
                <div class="content__form">
                  <div class="form form-bg">
                    <div class="form__block">
                      <form action="/api/v1/form/contacts" method="post" id="feedbackform">
                        <div v-if="resFormData.status == 'ok'" v-html="resFormData.message" class="message message--success"></div>
                        <div v-if="resFormData.status == 'error'" v-html="resFormData.message" class="message message--error"></div>
                        <div class="form__input-cont">
                          <input name="name"
                                aria-label="name"
                                v-model="formData.name"
                                autocomplete="off"
                                :placeholder="pageForm.name"
                                type="text"
                                class="form__input"
                                required>
                        </div>
                        <div class="form__input-cont">
                          <input name="email"
                                type="email"
                                aria-label="email address"
                                v-model="formData.email"
                                autocomplete="off"
                                :placeholder="pageForm['email address']"
                                class="form__input"
                                required>
                        </div>
                        <div class="form__input-cont">
                          <textarea name="message"
                                    aria-label="message"
                                    v-model="formData.message"
                                    autocomplete="off"
                                    :placeholder="pageForm.message"
                                    type="text"
                                    required
                                    class="form__input"></textarea>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
                <div class="content__right">
                  <contacts></contacts>
                </div>

              </div>
              <div class="content__row">
                <input class="form__submit-btn" type="submit" form="feedbackform" :value="pageForm.send" @click.prevent="postForm">
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
import axios from 'axios'
import vheader from '@/components/header'
import vfooter from '@/components/footer'
import contacts from '@/components/contacts'
export default {
  components: { vheader, vfooter, contacts },
  name: 'vcontact',
  data() {
    return {
      docState: 'case',
      pageText: {},
      pageForm: {},
      formData: {
        name: '',
        email: '',
        message: ''
      },
      resFormData: ''
    }
  },
  watch: {
    language(){
      // do something
    }
  },
  computed: {
    language() {
      this.updatePage(this.$store.state.language)
    }
  },
  methods: {
    requestData(lang) {
      axios.get(`/api/v1/page/get?url=contacts&lng=${lang}`)
        .then((resText) => this.pageText = resText)
        .catch((error) => console.log(error));
    },
    requestForm(lang) {
      axios.get(`/api/v1/variable?lng=${lang}`)
        .then((resText) => this.pageForm = resText)
        .catch((error) => console.log(error));
    },
    updatePage(lang) {
      this.requestData(lang);
      this.requestForm(lang);
    },
    postForm() {
      let data = new FormData();
      data.append('name', this.formData.name)
      data.append('email', this.formData.email)
      data.append('message', this.formData.message)
      axios.post('/api/v1/form/contacts', data)
        .then((res) => {
          this.resFormData = res.data;
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
.message
  padding: 10px
  margin-right: 50px
  margin-bottom: 10px
  border-radius: 4px
  &--success
    background: #6dc36d
  &--error
    background: #e26b6b
  p
    margin-top: 0

.form
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

  &__submit-btn
    margin: 20px 0
    padding: 13px 25px
    color: #fff
    background: #0086bc
    border: none
    border-radius: 4px
    @media (max-width: 800px), (max-height: 640px)
      margin: 20px auto

  &__input-cont
    margin-right: 50px
    margin-top: 20px
    padding: 0
    overflow: hidden
    background-color: rgba(255, 255, 255, 1)
    border: 1px solid rgba(0, 0, 0, 0)
    border-radius: 4px
    transition: background 100ms ease, width 100ms ease
    @media (max-width: 800px), (max-height: 640px)
      margin-right: auto

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
</style>
