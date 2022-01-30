import { animate } from "motion";

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
