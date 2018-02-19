<template lang="pug">
  .contact
    .contact__wrap
      .contact__info
        h6.contact__title {{pageText['Contact Info']}}
        ul
          li.contact__item {{pageText['Phone']}}: {{pageText['_phone']}}
          li.contact__item {{pageText['email address']}}: {{pageText['_email']}}
      .contact__address
        h6.contact__title {{pageText['Corporate offices']}}
        p.contact__item {{pageText['_addr']}}
</template>

<script>
export default {
  name: 'contacts',
  data() {
    return {
      pageText: {}
    }
  },
  props: {
    selected: {
      default: 'en'
    }
  },
  created() {
    this.requestData(this.selected);
  },
  watch: {
    selected: function() {
      this.requestData(this.selected)
    }
  },
  methods: {
    requestData(lang) {
      this.selected = lang;
      return fetch(`http://spatz.web-y.ru/api/v1/variable?lng=${lang}`, {
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
.contact
  &__wrap
    max-width: 225px
    width: 100%
    @media (max-width: 800px), (max-height: 640px)
      max-width: none
      display: flex
      flex-direction: row
      justify-content: space-between
  &__info
    margin-bottom: 40px
    @media (max-width: 800px), (max-height: 640px)
      margin-bottom: auto
      width: 45%
  &__address
    @media (max-width: 800px), (max-height: 640px)
      width: 45%
  &__item
    margin-bottom: 5px
    font-size: 8pt
  &__title
    margin: 0 0 12px 0
    font-weight: bold
</style>
