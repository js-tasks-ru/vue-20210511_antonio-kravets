import Vue from './vendor/vue.esm.browser.js';

new Vue({
  el: '#app',
  data() {
    return {
      val: 0,
    };
  },

  methods: {
    increment() {
      this.val++;
    },
  },
});
