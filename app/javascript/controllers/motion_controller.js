import { Controller } from "@hotwired/stimulus";
import { animate } from "motion";

// Connects to data-controller="motion"
export default class extends Controller {
  connect() {
    animate(
      "#box",
      { rotate: 90 },
      {
        duration: 0.5,
        easing: "ease-in-out",
        repeat: Infinity,
        direction: "alternate",
      }
    );
  }
}
