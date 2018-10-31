export default ({ app, store }, inject) => {
  inject('t', (string) => {
      let locale = (store.getters.getLocale);

      if (string[locale] === undefined){
        return string[store.getters.getDafaultLocale]
      }

      return string[locale]
  })
}

// import Vue from 'vue'
//
// Vue.prototype.$t = (string) => console.log("This is an example", string)
