export default ({ app }, inject) => {
  inject('t', (string) => {
      return string.it
  })
}

// import Vue from 'vue'
//
// Vue.prototype.$t = (string) => console.log("This is an example", string)
