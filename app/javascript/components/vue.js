import Vue from "vue/dist/vue.js";

if (document.getElementById("vue")) {
  new Vue({
    el: "#vue",
    data: () => ({ message: "Hello World! I am Vue.js!" }),
    methods: {
      reverseMessage: function () {
        this.message = this.message.split("").reverse().join("");
      },
    },
  });
}
