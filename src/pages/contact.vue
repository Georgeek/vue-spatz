<template>
  <progressive-background
              src="http://spatz.web-y.ru/images/img4.jpg"
              placeholder="http://spatz.web-y.ru/images/img4.jpg"
              :blur="30">
    <div class="bg">
      <div class="container">
        <vheader @changeLang='updatePage'></vheader>

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
                      <form action="" method="get" id="feedbackform">
                        <div class="form__input-cont">
                          <input aria-label="name" autocomplete="off" :placeholder="pageForm.name" type="text" class="form__input">
                        </div>
                        <div class="form__input-cont">
                          <input aria-label="email address" autocomplete="off" :placeholder="pageForm['email address']" type="text" class="form__input">
                        </div>
                        <div class="form__input-cont">
                          <textarea aria-label="message" autocomplete="off" :placeholder="pageForm.message" type="text" class="form__input" ></textarea>
                        </div>
                        <!-- <input class="form__hidden" type="submit" id="submit-form"> -->
                      </form>
                    </div>

                  </div>
                </div>
                <div class="content__right">
                  <contacts :selected="selected"></contacts>
                </div>

              </div>
              <div class="content__row">
                <input class="form__submit-btn" type="submit" form="feedbackform" :value="pageForm.send">
                <!-- <label class="form__submit-btn" for="submit-form" tabindex="0">send</label> -->
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
  name: 'vcontact',
  components: {vheader, vfooter, contacts},
  data() {
    return {
      selected: '',
      docState: 'case',
      pageText: {},
      pageForm: {}
    }
  },
  created() {
    this.requestForm();
  },
  methods: {
    requestData(lang) {
      this.selected = lang;
      return fetch(`http://spatz.web-y.ru/api/v1/page/get?url=contacts&lng=${lang}`, {
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
    requestForm(lang) {
      return fetch(`http://spatz.web-y.ru/api/v1/variable?lng=${lang}`, {
        method: 'GET',
        body: null,
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then((res) => res.json())
        .then((resText) => {
          this.pageForm = resText;
        })
        .catch((error) => console.log(error));
    },
    updatePage(lang) {
      this.requestData(lang);
      this.requestForm(lang);
    }
  }
}
</script>

<style lang="sass">
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
