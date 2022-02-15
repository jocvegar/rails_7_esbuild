import { Controller } from "@hotwired/stimulus";
import { createApp } from "vue/dist/vue.esm-bundler.js";

if (process.env.NODE_ENV === "development") {
  globalThis.__VUE_OPTIONS_API__ = true;
  globalThis.__VUE_PROD_DEVTOOLS__ = true;
} else {
  globalThis.__VUE_OPTIONS_API__ = false;
  globalThis.__VUE_PROD_DEVTOOLS__ = false;
}
// Connects to data-controller="vue"
export default class extends Controller {
  connect() {
    createApp({
      data: () => ({ message: "Hello World! I am Vue.js!" }),
      methods: {
        reverseMessage: function () {
          this.message = this.message.split("").reverse().join("");
        },
      },
    }).mount("#vue");
  }
}
