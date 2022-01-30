import Vue from "vue/dist/vue.js";

new Vue({
  el: "#vue",

  data: () => ({ message: "Hello Vue.js!" }),

  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});
