
import Vue from './vendor/vue.esm.browser.js';

new Vue({
  el: '#app',
  data() {
    return {
      id: null,
      meetup: {},
      checked: null,
    };
  },

  watch: {
    id(newValue) {
      this.getMeetup(newValue);
    },
  },

  methods: {
    getMeetup(id) {
      fetch(`https://course-vue.javascript.ru/api/meetups/${id}`)
        .then((response) => response.json())
        .then((result) => {
          this.meetup = result;
        });
    },
  },
});
