export default ({ app, store }, inject) => {
  inject('t', (string) => {
      let locale = (store.getters.getLocale);
      return string[locale]
  })
}

// import Vue from 'vue'
//
// Vue.prototype.$t = (string) => console.log("This is an example", string)
